interface IInputMappings {
    endpoint: String,
    methodAndParams: IMethodsAndParams,
    address: String
}

interface IOutputMappings {
    result: any[] | any
}

interface IMethodsAndParams {
    methods: String,
    params: String[] | String
}