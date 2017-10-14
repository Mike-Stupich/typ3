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

type IEstimateGasObj = Partial<ICallTxObj>;

interface IProxiedRpcMethods {
  eth_accounts: () => Promise<any>;
  eth_blockNumber: () => Promise<any>;
  eth_sendRawTransaction: (tx: string) => Promise<any>;
  eth_call: (tx: ICallTxObj) => Promise<any>;
  eth_sendTransaction: (tx: ITransactionObj) => Promise<any>;
  eth_coinbase: () => Promise<any>;
  eth_estimateGas: (tx: IEstimateGasObj) => Promise<any>;
  eth_gasPrice: () => Promise<any>;
  eth_getBalance: (address: string) => Promise<any>;
  eth_getBlockByHash: (hash: string, fullTxObj: boolean) => Promise<any>;
  eth_getBlockByNumber: (
    blocknumber: IBlockNumber,
    fullTxObj: boolean
  ) => Promise<any>;
  eth_getBlockTransactionCountByHash: (hash: string) => Promise<any>;
  eth_getBlockTransactionCountByNumber: (
    blocknumber: IBlockNumber
  ) => Promise<any>;
  eth_getCode: (address: string) => Promise<any>;
  eth_getFilterChanges: (filterId: string) => Promise<any>;
  eth_getFilterLogs: (filterId: string) => Promise<any>;
  eth_getLogs: (filterObj: IFilterOptions) => Promise<any>;
  eth_getStorageAt: (
    address: string,
    positionInStorage: string,
    blockNumber: IBlockNumber
  ) => Promise<any>;
  eth_getTransactionByBlockHashAndIndex: (
    hash: string,
    transactionIdx: string
  ) => Promise<any>;
  eth_getTransactionByBlockNumberAndIndex: (
    blockNum: IBlockNumber,
    transactionIdx: string
  ) => Promise<any>;
  eth_getTransactionByHash: (hash: string) => Promise<any>;
  eth_getTransactionCount: (
    address: string,
    blockNum?: IBlockNumber
  ) => Promise<any>;
  eth_getTransactionReceipt: (hash: string) => Promise<any>;
}
type ITopic = string | null | (string | null)[];

interface IFilterOptions {
  fromBlock?: IBlockNumber;
  toBlock?: IBlockNumber;
  address?: string;
  topics?: ITopic[];
  limit?: string;
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
type IBlockNumber = string | 'earliest' | 'latest' | 'pending';
interface IRPCRequestObj {
  txObj: IRequest;
  postprocessor: any;
  errorHandler: any;
}
