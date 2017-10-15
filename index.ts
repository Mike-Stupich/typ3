import { ConnectedContract, CreateContract, ProxiedNode } from './src/lib';
import * as BN from 'bn.js';
async function init() {
  const erc20Abi = require('./test.json');
  const erc20 = CreateContract(erc20Abi);
  const mew = 'https://api.myetherapi.com/eth';
  const infura = 'https://mainnet.infura.io/kC4pdeo022QLvBPpwskg';
  const local = 'http://localhost:8545';
  const node = ProxiedNode(local);
  node.setEndpoint(local);
  const accounts = await node.eth_accounts();
  const x = await node.eth_getBalance(accounts[0]);
  await node.eth_sendTransaction({
    to: accounts[0],
    from: accounts[1],
    value: '10000000'
  });
  await node.eth_sendTransaction({
    to: accounts[0],
    from: accounts[1],
    value: '10000000'
  });
  const txHash = await node.eth_sendTransaction({
    to: accounts[0],
    from: accounts[1],
    value: '10000000'
  });
  console.log('\n\n\n');
  console.log(txHash);
  let k = await node.eth_getTransactionReceipt(txHash);
  let m = await node.eth_getBlockByHash(k.blockHash, true);
  console.log(k);
  console.log('\n\n\n');
  console.log(m);
}
init();
