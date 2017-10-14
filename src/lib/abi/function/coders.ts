import abi from 'ethereumjs-abi';
import BN from 'bn.js';
import {
  parsePostDecodedValue,
  parsePreEncodedValue,
  parseSuppliedArgs
} from './parsers';

export const makeArgHandlers = (inputs: IAbiFunction['inputs']): IFuncArgs =>
  inputs.reduce((accumulator, currInput) => {
    const { name, type } = currInput;
    const processInput = inputToParse => ({
      value: parsePreEncodedValue(type, inputToParse)
    });
    const paramaterHandler = { processInput, name, type };
    return {
      ...accumulator,
      [name]: paramaterHandler
    };
  }, {});

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
  return argArr.reduce((argObj, currArg, index) => {
    const currName = inputNames[index];
    const currType = inputTypes[index];
    return {
      ...argObj,
      [currName]: parsePostDecodedValue(currType, currArg)
    };
  }, {});
};

export const decodeReturnValue = (
  argString: string,
  func: IAugmentedAbiFunction
): IDecode => {
  const {
    methodSelector,
    derived: { outputNames, outputTypes },
    abi: { outputs }
  } = func;

  const cleanedArgString = argString
    .replace(`0x${methodSelector}`, '')
    .replace('0x', '');

  const argBuffer = new Buffer(cleanedArgString, 'hex');

  const argArr = abi.rawDecode(outputTypes, argBuffer);

  //TODO: parse checksummed addresses
  return argArr.reduce((argObj, currArg, index) => {
    const { name, type } = outputs[index];
    return {
      ...argObj,
      [name]: parsePostDecodedValue(type, currArg)
    };
  }, {});
};
