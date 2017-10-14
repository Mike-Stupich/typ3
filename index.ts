import { CreateContract } from './src/lib/abi';
const x = require('./test.json');
console.log(CreateContract(x).startAuction.encodeArguments());
