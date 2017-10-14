interface IInputMappings {
  endpoint: String;
  method: String;
  params: any | any[];
  address: String;
}

interface ICallTxObj {
  from?: string;
  to: string;
  gas?: string;
  gasPrice?: string;
  value?: string;
  data?: string;
}
interface ITransactionObj {
  from: string;
  to: string;
  gas?: string;
  gasPrice?: string;
  value?: string;
  data: string;
  nonce?: string;
}

interface IJsonSchema<T> {
  data: T;
  errorHandler?: any;
  preProcessor?: any;
  postProcessor?: any;
}
interface IProxiedRpcMethods {
  sendRawTransaction: (tx: string) => Promise<any>;
  ethCall: (tx: ICallTxObj) => Promise<any>;
  sendTransaction: (tx: ITransactionObj) => Promise<any>;
}

interface INodeOutput {
  result: any[] | any;
}

interface IMethodAndParams {
  method: String;
  params: String[] | String;
}

interface INode {
  sendRawTx(tx: string): Promise<string>;
  ethCall(tx: string): Promise<string>;
}

interface IRequest {
  method: String;
  params: any | any[];
  id: String;
  jsonrpc: String;
}

interface IRPCRequestObj {
  txObj: IRequest;
  postprocessor: any;
  errorHandler: any;
}
