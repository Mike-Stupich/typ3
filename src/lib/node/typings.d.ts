interface INode {
  endpoint: string;
}

interface IAugmentedNode {
  node: INode;
  sendRpcRequest: (request: IRPCRequestObj) => Promise<any>;
  setEndpoint: (endpoint: string) => void;
}

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
  data?: string;
  nonce?: string;
}

interface IFullTransactionObj {
  from: string;
  to: string;
  gas: string;
  gasPrice: string;
  value: string;
  data: string;
  nonce: string;
}

interface IBlockObj {
  number: string;
  hash: string;
  parentHash: string;
  nonce: string | null;
  sha3Uncles: string;
  logsBloom: string | null;
  transactionsRoot: string;
  stateRoot: string;
  receiptsRoot: string;
  miner: address;
  difficulty: string;
  totalDifficulty: string;
  extraData: string;
  size: string;
  gasLimit: string;
  gasUsed: string;
  timestamp: string;
  transactions: IFullTransactionObj[] | string[];
  uncles: string[];
}
type IEstimateGasObj = Partial<ICallTxObj>;
type address = string;
interface IGetTransactionByHash {
  nonce: string;
  hash: string;
  blockHash: string;
  blockNumber: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gasPrice: string;
  gas: string;
  input: string;
}
type INewBlockFilterLog = string[];
type INewPendingTransactionFilterLog = string[];
interface IEthNewFilterLog {
  removed: boolean;
  logIndex: string;
  transactionIndex: string;
  transactionHash: string;
  blockHash: string;
  blockNumber: string;
  address: string;
  data: string | string[];
  topics: string[];
}
interface IEthNewFilterLogPending {
  removed: boolean;
  logIndex: string;
  transactionIndex: string | null;
  transactionHash: string | null;
  blockHash: string | null;
  blockNumber: string | null;
  address: string;
  data: string | string[];
  topics: string[];
}
interface ITransactionReceipt {
  transactionHash: string;
  transactionIndex: string;
  blockHash: string;
  blockNumber: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  contractAddress: string | null;
  logs: IEthNewFilterLog[];
}

interface IProxiedRpcMethods {
  eth_accounts: () => Promise<address[]>;
  eth_blockNumber: () => Promise<number>;
  eth_call: (tx: ICallTxObj) => Promise<any>;
  eth_coinbase: () => Promise<address>;
  eth_estimateGas: (tx: IEstimateGasObj) => Promise<string>;
  eth_gasPrice: () => Promise<string>;
  eth_getBalance: (address: string) => Promise<string>;
  eth_getBlockByHash: (
    hash: string,
    fullTxObj: boolean
  ) => Promise<IBlockObj | null>;
  eth_getBlockTransactionCountByNumber: (
    blocknumber: IBlockNumber
  ) => Promise<string>;
  eth_getTransactionByHash: (hash: string) => Promise<IGetTransactionByHash>;

  eth_sendRawTransaction: (tx: string) => Promise<string>;
  eth_sendTransaction: (tx: ITransactionObj) => Promise<string>;
  eth_getBlockByNumber: (
    blocknumber: IBlockNumber,
    fullTxObj: boolean
  ) => Promise<IBlockObj | null>;
  eth_getBlockTransactionCountByHash: (hash: string) => Promise<string>;
  eth_getTransactionByBlockHashAndIndex: (
    hash: string,
    transactionIdx: string
  ) => Promise<IGetTransactionByHash>;
  eth_getTransactionByBlockNumberAndIndex: (
    blockNum: IBlockNumber,
    transactionIdx: string
  ) => Promise<IGetTransactionByHash>;
  eth_getCode: (address: string) => Promise<string>;
  eth_getFilterChanges: (
    filterId: string
  ) => Promise<
    | INewBlockFilterLog
    | INewPendingTransactionFilterLog
    | IEthNewFilterLogPending[]
    | IEthNewFilterLog[]
  >;
  eth_getFilterLogs: (
    filterId: string
  ) => Promise<
    | INewBlockFilterLog
    | INewPendingTransactionFilterLog
    | IEthNewFilterLogPending[]
    | IEthNewFilterLog[]
  >;
  eth_getLogs: (
    filterObj: IFilterOptions
  ) => Promise<
    | INewBlockFilterLog
    | INewPendingTransactionFilterLog
    | IEthNewFilterLogPending[]
    | IEthNewFilterLog[]
  >;
  eth_getStorageAt: (
    address: string,
    positionInStorage: string,
    blockNumber: IBlockNumber
  ) => Promise<string>;

  eth_getTransactionCount: (
    address: string,
    blockNum?: IBlockNumber
  ) => Promise<string>;
  eth_getTransactionReceipt: (hash: string) => Promise<ITransactionReceipt>;
  eth_getUncleByBlockHashAndIndex: (
    hash: string,
    transactionIdx: string
  ) => Promise<IBlockObj | null>;
  eth_getUncleByBlockNumberAndIndex: (
    blockNum: IBlockNumber,
    transactionIdx: string
  ) => Promise<IBlockObj | null>;
  eth_getCompilers: () => Promise<string[]>;
  eth_compileSolidity: (source: string) => Promise<any>;
  eth_compileLLL: (source: string) => Promise<string>;
  eth_compileSerpent: (source: string) => Promise<string>;
  eth_newFilter: (filterObj: IFilterOptions) => Promise<string>;
  eth_newBlockFilter: () => Promise<string>;
  eth_newPendingTransactionFilter: () => Promise<string>;
  eth_uninstallFilter: (filterId: string) => Promise<boolean>;
  eth_getWork: () => Promise<string[3]>;
  eth_submitWork: (
    hashNonceFound: string,
    hashHeadersPow: string,
    hashMixDigest: string
  ) => Promise<boolean>;
  eth_submitHashrate: (hashRate: string, id: string) => Promise<boolean>;
  db_putString: (
    dbName: string,
    keyName: string,
    store: string
  ) => Promise<boolean>;
  db_getString: (dbName: string, keyName: string) => Promise<string>;
  db_putHex: (
    dbName: string,
    keyName: string,
    storeData: string
  ) => Promise<boolean>;
  db_getHex: (dbName: string, keyName: string) => Promise<string>;
  shh_version: () => Promise<string>;
  shh_hasIdentity: (address: string) => Promise<boolean>;
  shh_newGroup: () => Promise<string>;
  shh_addToGroup: (address: string) => Promise<boolean>;
  shh_uninstallFilter: (filterId: string) => Promise<boolean>;
  shh_getFilterChanges: (filterId: string) => Promise<any>;
  shh_getMessages: (filterId: string) => Promise<any>;
}
type ITopic = string | null | (string | null)[];

interface IFilterOptions {
  fromBlock?: IBlockNumber;
  toBlock?: IBlockNumber;
  address?: string;
  topics?: ITopic[];
}
interface INodeOutput {
  result: any[] | any;
}

interface IMethodAndParams {
  method: String;
  params: String[] | String;
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
