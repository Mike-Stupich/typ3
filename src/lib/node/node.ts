

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
        
    }
}

