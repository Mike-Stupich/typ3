import { Node } from './node';
import { rerouteRPCMethodsHandler } from './rpc/rpcMethods';
export type IProxiedNode = Node & IProxiedRpcMethods;

export const ProxiedNode = (endpoint: string): IProxiedNode => {
  const node = new Node(endpoint);
  return rerouteRPCMethodsHandler(node);
};
