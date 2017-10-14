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
declare enum JsonRpcMethods {
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
