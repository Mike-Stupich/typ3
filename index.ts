import { ConnectedContract, CreateContract, ProxiedNode } from './src/lib';
import * as BN from 'bn.js';
async function init() {
  const erc20Abi = require('./test.json');
  const erc20 = CreateContract(erc20Abi);
  const mew = 'https://api.myetherapi.com/eth';
  const infura = 'https://mainnet.infura.io/kC4pdeo022QLvBPpwskg';
  const local = 'http://localhost:8545';
  const node = ProxiedNode(local);
  const connectedErc20 = ConnectedContract(erc20, node);
}
init();
