interface IHandleCallParams {
  userArgs;
  txObj: ICallTxObj;
  func: IFunctionFactory;
  node: IProxiedNode;
}

interface IHandleSendParams {
  userArgs;
  txObj: ITransactionObj;
  func: IFunctionFactory;
  node: IProxiedNode;
}
