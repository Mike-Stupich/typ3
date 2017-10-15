import { NodeFactory } from './node';
import { rerouteRPCMethodsHandler } from './rpc/rpcMethods';
export type IProxiedNode = IAugmentedNode & IProxiedRpcMethods;

export const ProxiedNode = (endpoint: string): IProxiedNode => {
  const node = NodeFactory(endpoint);
  return rerouteRPCMethodsHandler(node);
};
