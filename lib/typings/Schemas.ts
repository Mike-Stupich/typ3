export interface IInputMappings {
    endpoint: String,
    methodAndParams: IMethodsAndParams,
    address: String
}

export interface IOutputMappings {
    result: any[] | any
}

export interface IMethodsAndParams {
    methods: String,
    params: String[] | String
}