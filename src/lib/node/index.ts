export { rpcMethods } from './rpcMethods' 
import { Node } from './node'
import { rerouteRPCMethodsHandler } from './rpcMethods'

const networkConfigs = require('../config/networkConfig.json')
const nodeConfigs = require('../config/nodeConfig.json')
const node = new Node({ nodeConfigs, networkConfigs })

export const nodeHandler =  rerouteRPCMethodsHandler(node)