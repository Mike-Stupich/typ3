# typ3 -- A typescript, promise-only alternative to web3

ABI Type Generator Package -- https://github.com/Mike-Stupich/typ3-cli

##  Node(endpoint) 

Returns an instance that provides a connection to a node with rpc methods as described in https://github.com/ethereum/wiki/wiki/JSON-RPC. 
Also has a .setEndpoint function for connecting to a different node

## <ABI_TYPE>CreateContract(json_abi [, outputMappings])
 - json_abi The json abi of the smart contract to interact with
 - [optional] outputMappings An object of arrays that hold mappings for un-named output parameters, it should match the same outputMappings file used for generating ABI_TYPE from `typ3-cli`

Returns a contract instance of ABI_TYPE that has methods with the same mapping as the smart contract. ABI_TYPE is generated from the `typ3-cli` package to provide typing support for the contract instance. Each method provides encoding and decoding functions for input and output of the smart contract. 

## <ABI_TYPE_CONNECTED>ConnectedContract(contract_instance, node_instance [, txObj])
 - contract_instance The contract instance to connect to the specified node 
 - node_instance The node to send calls to 
 - [optional] txObj Allows for default parameters such as `to, from, value, gas`. 
Returns a contract instance that is connected to an existing node. Each method is directly invokable. 

### Contract Instance
- myContract.myMethod 
    - encodeArguments(paramsObj)
    - decodeArguments(encodedData)
    - decodeReturnValue(encodedData)

### Connected Contract Instance
- myContract.myMethod(paramsObj, txObj)

### How the paramsObj is specified

```js 
  {
    "constant": true,
    "inputs": [
      { "name": "_a", "type": "uint256" },
      { "name": "_c", "type": "uint256" }
    ],
    "name": "ppb",
    "outputs": [{ "name": "b", "type": "uint256" }],
    "type": "function"
  },
```
Given the above abi function, paramsObj would be: 

```js
{   
    _a: string | BigNumber | BN,  
    _c: string | BigNumber | BN
}
```
And the returned value as the following shape 

```js
{
    b: string
}
```

If outputs was the following instead: `"outputs": [{ "name": "", "type": "uint256" }],`

We would have this: 
```js
{
    0: string
}
```

Unless a user supplied outputMapping was provided, then it would be:

```js
const outputMappings = {
    ppb: ["myName"]
}

{
    "myName": string
}
```

Contributors
- Henry Nguyen
- Mike Stupich
- Nicholas Lewanowicz
- Jaimin Darji
