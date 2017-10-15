import { ConnectedContract, CreateContract, ProxiedNode } from './src/lib';
export {
  ConnectedContract,
  CreateContract,
  ProxiedNode as Node
} from './src/lib';
import { IErc20, IErc20Connected } from './abiTypes';
import * as BN from 'bn.js';
async function init() {
  const erc20Abi = require('./erc20.json');
  const erc20 = <IErc20>CreateContract(erc20Abi);
  const coded = erc20.balanceOf.encodeArguments({
    address: '0x886759a2104c091446d91597f22ebb264f31995f'
  });
  const u = erc20.balanceOf.decodeArguments(coded);
  console.log(u);
  const mew = 'https://api.myetherapi.com/eth';
  const infura = 'https://mainnet.infura.io/kC4pdeo022QLvBPpwskg';
  const local = 'http://localhost:8545';
  const node = ProxiedNode(local);
  node.setEndpoint(local);
  const erc20Connected = <IErc20Connected>ConnectedContract(erc20, node);
  let x = await erc20Connected.balanceOf(
    {
      address: '0x886759a2104c091446d91597f22ebb264f31995f'
    },
    {
      to: '0xE94327D07Fc17907b4DB788E5aDf2ed424adDff6'
    }
  );
  console.log(x);
}
init();

/**
 *  const accounts = await node.eth_accounts();
  const x = await node.eth_getBalance(accounts[0]);
 *await node.eth_sendTransaction({
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
  let a = await node.eth_getTransactionByHash(txHash);
  console.log(k);
  console.log('\n\n\n');
  console.log(m);
 *
 */
