import { Node } from './node';
import { rerouteRPCMethodsHandler } from './rpcMethods';

export const nodeHandler = rerouteRPCMethodsHandler(node);
