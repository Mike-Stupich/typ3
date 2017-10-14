

export class Node {
    private currentNodeConfig
    private currentNetworkConfig
    private nodeConfigs
    private networkConfigs

    constructor(configs) {
        Object.assign(this, ...configs)
    }

    setNodeConfig = (key) => {
        if (this.nodeConfigs[key]) {
            this.currentNodeConfig = this.nodeConfigs[key]
        } else {
            throw Error(`${key} is not a valid node config`)
        }
    }

    setNetworkConfig = (key) => {
        if (this.networkConfigs[key]) {
            this.currentNetworkConfig[key] = this.networkConfigs[key]
        } else {
            throw Error(`${key} is not a valid network config`)
        }
    }

    getNodeConfig = () => this.currentNodeConfig
    getNetworkConfig = () => this.currentNetworkConfig

    sendRPCRequest = async (request: IRPCRequestObj) => {
        const { txObj, parser, errorHandler } = requestObj;
        const response = await fetch(this.currentNodeConfig.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(txObj)
        }).then(r => r.json());
        
        const result = response.error
          ? errorHandler(response.error)
          : parser(response);
        return result;
    }
}

