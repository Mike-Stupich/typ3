import * as abi from 'ethereumjs-abi';
import {
  parsePostDecodedValue,
  parsePreEncodedValue,
  parseSuppliedArgs
} from './parsers';
import { objReduce } from './utils';

export const makeArgHandlers = (inputs: IAbiFunction['inputs']): IFuncArgs => {
  const reducer = (accumulator, currInput) => {
    const { name, type } = currInput;
    const processInput = inputToParse => ({
      value: parsePreEncodedValue(type, inputToParse)
    });
    const paramaterHandler = { processInput, name, type };
    return {
      ...accumulator,
      [name]: paramaterHandler
    };
  };

  return objReduce(inputs, reducer);
};

export const encodeArguments = (
  suppliedInputs: IArgs = {},
  func: IAugmentedAbiFunction
) => {
  const { derived: { inputTypes }, methodSelector } = func;

  const args = parseSuppliedArgs(suppliedInputs, func);

  const encodedArgs = abi.rawEncode(inputTypes, args).toString('hex');
  return `0x${methodSelector}${encodedArgs}`;
};

export const decodeArguments = (
  argString: string,
  func: IAugmentedAbiFunction
): IDecode => {
  const { methodSelector, derived: { inputNames, inputTypes } } = func;
  // Remove method selector from data, if present
  argString = argString.replace(`0x${methodSelector}`, '');
  // Convert argdata to a hex buffer for ethereumjs-abi
  const argBuffer = new Buffer(argString, 'hex');
  // Decode!
  const argArr = abi.rawDecode(inputTypes, argBuffer);
  //TODO: parse checksummed addresses
  const reducer = (argObj, currArg, index) => {
    const currName = inputNames[index];
    const currType = inputTypes[index];
    return {
      ...argObj,
      [currName]: parsePostDecodedValue(currType, currArg)
    };
  };

  return objReduce(argArr, reducer);
};

export const decodeReturnValue = (
  str: string,
  func: IAugmentedAbiFunction
): IDecode => {
  const { methodSelector, derived: { outputNames, outputTypes } } = func;

  const cleanStr = str.replace(`0x${methodSelector}`, '').replace('0x', '');

  const retBuffer = new Buffer(cleanStr, 'hex');

  const retArr = abi.rawDecode(outputTypes, retBuffer);

  const reducer = (argObj, currRet, index) => {
    const name = outputNames[index];
    const type = outputTypes[index];

    return {
      ...argObj,
      [name]: parsePostDecodedValue(type, currRet)
    };
  };
  //TODO: parse checksummed addresses
  return objReduce(retArr, reducer);
};
