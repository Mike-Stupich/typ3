import { generateTxObj, JSONPostParser, JSONErrorHandler } from './JSONUtils';

const sendRawTransaction = (tx: String) => ({
  method: JsonRpcMethods.eth_sendRawTransaction,
  params: [tx, 'pending']
});

const ethCall = (call: ICallTxObj) => ({
  method: JsonRpcMethods.eth_call,
  params: [call, 'pending']
});

const sendTransaction = (tx: ITransactionObj) => ({
  method: JsonRpcMethods.eth_sendTransaction,
  params: [tx, 'pending']
});

export const rpcMethods = {
  ethCall,
  sendRawTransaction,
  sendTransaction
};

export const rerouteRPCMethodsHandler = obj => {
  const rerouteRPC = {
    get(node, propKey) {
      const rpcMethod = rpcMethods[propKey];
      const nodeMethod = node[propKey];
      if (!rpcMethod && !nodeMethod) {
        throw Error(`${propKey} is not an RPC or Node method`);
      }
      if (nodeMethod) {
        const result = (...args) => nodeMethod.apply(node, args);
        return result;
      } else {
        return (...args) => {
          const call = rpcMethod(...args);
          const rpcObj: IRPCRequestObj = {
            txObj: generateTxObj(call),
            postprocessor: JSONPostParser(call.parser),
            errorHandler: JSONErrorHandler(call.errorHandler)
          };
          return node.sendRPCRequest.call(node, rpcObj);
        };
      }
    }
  };
  return new Proxy(obj, rerouteRPC);
};
