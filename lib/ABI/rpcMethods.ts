import { IInputMappings, IOutputMappings } from '../typings'
import { generateTxObj, JSONPostParser, JSONErrorHandler } from './JSONCalls'

const sendRawTransaction = (tx: IInputMappings): IOutputMappings => {
    
}

const ethCall = (call: IInputMappings): IOutputMappings => {
    
}

export const rpcMethods = {
    ethCall,
    sendRawTransaction
}

const rerouteRPCMethodsHandler = (obj) => {
    const rerouteRPC = {
        get(node, propKey) {
            const rpcMethod = rpcMethods[propKey]
            const nodeMethod = node[propKey]
            if (!rpcMethod && !nodeMethod) {
                throw Error(`${propKey} is not an RPC or Node method`)
            }
            if (nodeMethod) {
                const result = (...args) => nodeMethod.apply(node, args)
                return result
            } else {
                return (...args) => {
                    const call = rpcMethod(...args)
                    const rpcObj = {
                        txObj: generateTxObj(call),
                        parser: JSONPostParser(call.parser),
                        errorHandler: JSONErrorHandler(call.errorHandler)
                    }
                    return node.sendRPCRequest.call(node, rpcObj)
                }
            }
        }
    }
    return new Proxy(obj, rerouteRPC)
}