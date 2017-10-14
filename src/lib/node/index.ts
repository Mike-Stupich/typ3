import { Node } from './node';
import { rerouteRPCMethodsHandler } from './rpcMethods';

export const ProxiedNode = (endpoint: string): IProxiedNode => {
  const node = new Node(endpoint);
  return rerouteRPCMethodsHandler(node);
};
