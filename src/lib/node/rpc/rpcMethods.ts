import { generateTxObj, JSONPostParser, JSONErrorHandler } from './jsonUtils';

const eth_sendRawTransaction = (tx: String) => ({
  method: JsonRpcMethods.eth_sendRawTransaction,
  params: [tx, 'pending']
});

const eth_call = (call: ICallTxObj) => ({
  method: JsonRpcMethods.eth_call,
  params: [call, 'pending']
});

const eth_sendTransaction = (tx: ITransactionObj) => ({
  method: JsonRpcMethods.eth_sendTransaction,
  params: [tx, 'pending']
});

const eth_accounts = () => ({
  method: JsonRpcMethods.eth_accounts,
  params: []
});

const eth_blockNumber = () => ({
  method: JsonRpcMethods.eth_blockNumber,
  params: []
});

const eth_coinbase = () => ({
  method: JsonRpcMethods.eth_coinbase,
  params: []
});

const eth_estimateGas = (tx: IEstimateGasObj) => ({
  method: JsonRpcMethods.eth_estimateGas,
  params: [tx, 'pending']
});

const eth_gasPrice = () => ({ method: eth_gasPrice });

const eth_getBalance = (address: string) => ({
  method: eth_getBalance,
  params: [address, 'pending']
});

const eth_getBlockByHash = (hash: string, fullTxObj: boolean) => ({
  method: eth_getBlockByHash,
  params: [hash, fullTxObj]
});

const eth_getBlockByNumber = (
  blocknumber: IBlockNumber,
  fullTxObj: boolean
) => ({ method: eth_getBlockByNumber, params: [blocknumber, fullTxObj] });

const eth_getBlockTransactionCountByHash = (hash: string) => ({
  method: eth_getBlockTransactionCountByHash,
  params: [hash]
});

const eth_getBlockTransactionCountByNumber = (blocknumber: IBlockNumber) => ({
  method: eth_getBlockTransactionCountByNumber,
  params: [blocknumber]
});

const eth_getCode = (address: string) => ({
  method: eth_getCode,
  params: ['pending']
});

const eth_getFilterChanges = (filterId: string) => ({
  method: eth_getFilterChanges,
  params: [filterId]
});

const eth_getFilterLogs = (filterId: string) => ({
  method: eth_getFilterLogs,
  params: [filterId]
});

const eth_getLogs = (filterObj: IFilterOptions) => ({
  method: eth_getLogs,
  params: [filterObj]
});

const eth_getStorageAt = (
  address: string,
  positionInStorage: string,
  blockNumber: IBlockNumber
) => ({
  method: eth_getStorageAt,
  params: [address, positionInStorage, blockNumber]
});

const eth_getTransactionByBlockHashAndIndex = (
  hash: string,
  transactionIdx: string
) => ({
  method: eth_getTransactionByBlockHashAndIndex,
  params: [hash, transactionIdx]
});

const eth_getTransactionByBlockNumberAndIndex = (
  blockNum: IBlockNumber,
  transactionIdx: string
) => ({
  method: eth_getTransactionByBlockNumberAndIndex,
  params: [blockNum, transactionIdx]
});

const eth_getTransactionByHash = (hash: string) => ({
  method: eth_getTransactionByHash,
  params: [hash]
});

const eth_getTransactionCount = (address: string, blockNum?: IBlockNumber) => ({
  method: eth_getTransactionCount,
  params: [address, blockNum]
});

const eth_getTransactionReceipt = (hash: string) => ({
  method: eth_getTransactionReceipt,
  params: [hash]
});

const eth_getUncleByBlockHashAndIndex = (hash: string, transactionIdx: string) => ({
  method: eth_getUncleByBlockHashAndIndex,
  params: [hash, eth_getTransactionCount]
});

const eth_getUncleByBlockNumberAndIndex = (blockNum?: IBlockNumber, transactionIdx: string) => ({
  method: eth_getUncleByBlockNumberAndIndex,
  params: [blockNum, transactionIdx]
});

const eth_getCompilers = () => ({
  method: eth_getCompilers,
  params: []
});

const eth_compileSolidity = (source: string) => ({
  method: eth_compileSolidity,
  params: [source]
});

const eth_compileLLL = (source: string) => ({
  method: eth_compileLLL,
  params: [source]
});

const eth_compileSerpent = (source: string) => ({
  method: eth_compileSerpent,
  params: [source]
});

const eth_newFilter = (filterObj: IFilterOptions) => ({
  method: eth_newFilter,
  params: [filterObj]
});

const eth_newBlockFilter = () => ({
  method: eth_newBlockFilter,
  params: []
});

const eth_newPendingTransactionFilter = () => ({
  method: eth_newPendingTransactionFilter,
  params: []
});

const eth_uninstallFilter = (filterId: string) => ({
  method: eth_uninstallFilter,
  params: [filterId]
});

const eth_getWork = () => ({
  method: eth_getWork,
  params: []
});

const eth_submitWork = (hashNonceFound: string, hashHeadersPow: string, hashMixDigest: string) => ({
  method: eth_submitWork,
  params: [hashNonceFound,hashHeadersPow,hashMixDigest]
});

const eth_submitHashrate = (hashRate: string, id: string) => ({
  method: eth_submitHashrate,
  params: [hashRate, id]
});

const db_putString = (dbName: string, keyName: string, store: string) => ({
  method: db_putString,
  params: [dbName, keyName, store]
});

const db_getString = (dbName: string, keyName: string) => ({
  method: db_getString,
  params: [dbName, keyName]
});

const db_putHex = (dbName: string, keyName: string, storeData: string) => ({
  method: db_putHex,
  params: [dbName, keyName, storeData]
});

const db_getHex = (dbName: string, keyName: string) => ({
  method: db_getHex,
  params: [dbName, keyName]
});

const shh_version = () => ({
  method: shh_version,
  params: []
});

//Not sure: need new Object
// const shh_post = (whipserObj: string) => ({
//   method: shh_post,
//   params: [whipserObj]
// });

const shh_newIdentity = () => ({
  method: shh_newIdentity,
  params: []
});

const shh_hasIdentity = (address: string) => ({
  method: shh_hasIdentity,
  params: [address]
});

const shh_newGroup = () => ({
  method: shh_newGroup,
  params: []
});

const shh_addToGroup = (address: string) => ({
  method: shh_addToGroup,
  params: [address]
});

//Not sure need to define new filter options
//const shh_newFilter = (filterObj: IFilterOptions) => ({
//  method: shh_newFilter,
//  params: [filterObj]
//});

const shh_uninstallFilter = (filterId: string) => ({
  method: shh_uninstallFilter,
  params: [filterId]
});

const shh_getFilterChanges = (filterId: string) => ({
  method: shh_getFilterChanges,
  params: [filterId]
});

const shh_getMessages = (filterId: string) => ({
  method: shh_getMessages,
  params: [filterId]
});

const rpcMethods = {
  eth_call,
  eth_sendRawTransaction,
  eth_sendTransaction,
  eth_accounts,
  eth_blockNumber,
  eth_coinbase,
  eth_estimateGas,
  eth_gasPrice,
  eth_getBalance,
  eth_getBlockByHash,
  eth_getBlockByNumber,
  eth_getBlockTransactionCountByHash,
  eth_getBlockTransactionCountByNumber,
  eth_getCode,
  eth_getFilterChanges,
  eth_getFilterLogs,
  eth_getLogs,
  eth_getStorageAt,
  eth_getTransactionByBlockHashAndIndex,
  eth_getTransactionByBlockNumberAndIndex,
  eth_getTransactionByHash,
  eth_getTransactionCount,
  eth_getTransactionReceipt,
  eth_getUncleByBlockHashAndIndex,
  eth_getUncleByBlockNumberAndIndex,
  eth_getCompilers,
  eth_compileSolidity,
  eth_compileLLL,
  eth_compileSerpent,
  eth_newFilter,
  eth_newBlockFilter,
  eth_newPendingTransactionFilter,
  eth_uninstallFilter,
  eth_getWork,
  eth_submitWork,
  eth_submitHashrate,
  db_putString,
  db_getString,
  db_putHex,
  db_getHex,
  shh_version,
  shh_newIdentity,
  shh_hasIdentity,
  shh_newGroup,
  shh_addToGroup,
  shh_uninstallFilter,
  shh_getFilterChanges,
  shh_getMessages
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

enum JsonRpcMethods {
  web3_clientVersion = 'web3_clientVersion',
  web3_sha3 = 'web3_sha3',
  net_peerCount = 'net_peerCount',
  net_version = 'net_version',
  net_listening = 'net_listening',
  eth_protocolVersion = 'eth_protocolVersion',
  eth_syncing = 'eth_syncing',
  eth_coinbase = 'eth_coinbase',
  eth_mining = 'eth_mining',
  eth_hashrate = 'eth_hashrate',
  eth_gasPrice = 'eth_gasPrice',
  eth_accounts = 'eth_accounts',
  eth_blockNumber = 'eth_blockNumber',
  eth_getBalance = 'eth_getBalance',
  eth_getStorageAt = 'eth_getStorageAt',
  eth_getTransactionCount = 'eth_getTransactionCount',
  eth_getBlockTransactionCountByHash = 'eth_getBlockTransactionCountByHash',
  eth_getBlockTransactionCountByNumber = 'eth_getBlockTransactionCountByNumber',
  eth_getUncleCountByBlockHash = 'eth_getUncleCountByBlockHash',
  eth_getUncleCountByBlockNumber = 'eth_getUncleCountByBlockNumber',
  eth_getCode = 'eth_getCode',
  eth_sign = 'eth_sign',
  eth_sendTransaction = 'eth_sendTransaction',
  eth_sendRawTransaction = 'eth_sendRawTransaction',
  eth_call = 'eth_call',
  eth_estimateGas = 'eth_estimateGas',
  eth_getBlockByHash = 'eth_getBlockByHash',
  eth_getBlockByNumber = 'eth_getBlockByNumber',
  eth_getTransactionByHash = 'eth_getTransactionByHash',
  eth_getTransactionByBlockHashAndIndex = 'eth_getTransactionByBlockHashAndIndex',

  eth_getTransactionByBlockNumberAndIndex = 'eth_getTransactionByBlockNumberAndIndex',
  eth_getTransactionReceipt = 'eth_getTransactionReceipt',
  eth_getUncleByBlockHashAndIndex = 'eth_getUncleByBlockHashAndIndex',
  eth_getUncleByBlockNumberAndIndex = 'eth_getUncleByBlockNumberAndIndex',
  eth_getCompilers = 'eth_getCompilers',
  eth_compileLLL = 'eth_compileLLL',
  eth_compileSolidity = 'eth_compileSolidity',
  eth_compileSerpent = 'eth_compileSerpent',
  eth_newFilter = 'eth_newFilter',
  eth_newBlockFilter = 'eth_newBlockFilter',
  eth_newPendingTransactionFilter = 'eth_newPendingTransactionFilter',
  eth_uninstallFilter = 'eth_uninstallFilter',
  eth_getFilterChanges = 'eth_getFilterChanges',
  eth_getFilterLogs = 'eth_getFilterLogs',
  eth_getLogs = 'eth_getLogs',
  eth_getWork = 'eth_getWork',
  eth_submitWork = 'eth_submitWork',
  eth_submitHashrate = 'eth_submitHashrate',
  db_putString = 'db_putString',
  db_getString = 'db_getString',
  db_putHex = 'db_putHex',
  db_getHex = 'db_getHex',
  shh_post = 'shh_post',
  shh_version = 'shh_version',
  shh_newIdentity = 'shh_newIdentity',
  shh_hasIdentity = 'shh_hasIdentity',
  shh_newGroup = 'shh_newGroup',
  shh_addToGroup = 'shh_addToGroup',
  shh_newFilter = 'shh_newFilter',
  shh_uninstallFilter = 'shh_uninstallFilter',
  shh_getFilterChanges = 'shh_getFilterChanges',
  shh_getMessages = 'shh_getMessages'
}
