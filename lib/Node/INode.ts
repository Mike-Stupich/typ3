import { BigNumber } from 'bignumber.js';

export interface INode {
    sendRawTx(tx: string): Promise<string>;
    ethCall(tx: string): Promise<string>;
}



