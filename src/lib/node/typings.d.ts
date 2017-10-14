interface IInputMappings {
    endpoint: String,
    methodAndParams: IMethodsAndParams,
    address: String
}

interface INodeOutput {
    result: any[] | any
}

interface IMethodsAndParams {
    methods: String,
    params: String[] | String
}

interface INode {
    sendRawTx(tx: string): Promise<string>;
    ethCall(tx: string): Promise<string>;
}