import { toChecksumAddress } from 'ethereumjs-util';
import { isBigNumber } from './utils';

export const parseSuppliedArgs = (
  userSuppliedArgs: IUserSuppliedArgs,
  func: IAugmentedAbiFunction
) => {
  const { derived: { inputNames }, argHandlers } = func;
  const errArr: string[] = [];
  const parsedResult = inputNames.map(name => {
    const { type } = argHandlers[name];
    //TODO: parse args based on type
    if (!userSuppliedArgs[name]) {
      errArr.push(`Expected argument "${name}" of type "${type}" missing`);
    }

    const argValue = userSuppliedArgs[name];

    return argHandlers[name].processInput(argValue).value;
  });
  if (errArr.length > 0) {
    const errStr = errArr.join('\n');
    throw Error(`

${errStr}
Supplied Arguments: ${JSON.stringify(userSuppliedArgs, null, 2)} 
`);
  } else {
    return parsedResult;
  }
};

export const parsePostDecodedValue = (type: string, value: any): string => {
  const valueMapping = {
    address: val => toChecksumAddress(val.toString(16))
  };

  return valueMapping[type]
    ? valueMapping[type](value)
    : isBigNumber(value) ? value.toString() : value;
};

export const parsePreEncodedValue = (type: string, value: any) =>
  isBigNumber(value) ? value.toString() : value;
