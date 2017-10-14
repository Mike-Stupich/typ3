import { IMethodsAndParams } from '../typings'
import { randomBytes } from 'crypto'

const generateId = ():String => randomBytes(16).toString('hex') 

export const generateTxObj = (tx: IMethodsAndParams) => ({
    id: generateId(),
    jsonrpc: 2.0,
    ...tx
})

export const JSONPostParser = (parser = null) => ({ result }) => {
    parser && typeof parser === 'function' ? parser(result) : result
} 

export const JSONErrorHandler = (handler = null) => e => {
    if (handler && typeof handler === 'function') {
        return handler(e)
    } else {
        throw Error(e.message)
    }
}