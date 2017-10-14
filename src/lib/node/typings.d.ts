interface IInputMappings {
  endpoint: String;
  method: String;
  params: any | any[];
  address: String;
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
