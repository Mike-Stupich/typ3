import { toChecksumAddress } from 'ethereumjs-util';
import { isBigNumber } from './utils';

export const parseSuppliedArgs = (
  userSuppliedArgs: IUserSuppliedArgs,
  func: IAugmentedAbiFunction
) => {
  const { derived: { inputNames }, argHandlers } = func;
  return inputNames.map(name => {
    const { type } = argHandlers[name];
    //TODO: parse args based on type
    if (!userSuppliedArgs[name]) {
      throw Error(
        `Expected argument "${name}" of type "${type}" missing, suppliedArgs: ${JSON.stringify(
          userSuppliedArgs,
          null,
          2
        )}`
      );
    }
    const argValue = userSuppliedArgs[name];

    return argHandlers[name].processInput(argValue);
  });
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
