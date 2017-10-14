import { CreateContract } from './abi';
import { ProxiedNode, IProxiedNode } from './node';

export { ProxiedNode, CreateContract, ConnectedContract };

const handleCall = async (args: IHandleCallParams) => {
  const { userArgs, func, node, txObj } = args;
  const data = func.encodeArguments(userArgs);
  const response = await node.ethCall({ data, ...txObj });
  const parsedResponse = func.decodeReturnValue(response);
  return parsedResponse;
};

const handleSend = async (args: IHandleSendParams) => {
  const { userArgs, func, node, txObj } = args;
  const data = func.encodeArguments(userArgs);
  const response = await node.sendTransaction({ data, ...txObj });
  const parsedResponse = func.decodeReturnValue(response);
  return parsedResponse;
};

const ConnectedContract = (contract, node: IProxiedNode) => {
  const routeCalls = {
    get(contract, propKey) {
      const contractMethod = contract[propKey];
      const isConstant = contractMethod.constant;
      if (!contractMethod) {
        throw Error(`${propKey} is not a valid contract method`);
      }
      const returnFunc = (userArgs, txObj) => {
        const methodArgs = { func: contractMethod, node, txObj, userArgs };
        return isConstant ? handleCall(methodArgs) : handleSend(methodArgs);
      };

      return returnFunc;
    }
  };
  return new Proxy(contract, routeCalls);
};
