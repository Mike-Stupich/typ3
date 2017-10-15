import * as abi from 'ethereumjs-abi';
import {
  makeArgHandlers,
  decodeArguments,
  decodeReturnValue,
  encodeArguments
} from './components/coders';

export const FunctionFactory = (
  abiFunc: IAbiFunction,
  outputMappings: IFuncOutputMappings = []
): IFunctionFactory => {
  const { inputs, outputs, name } = abiFunc;
  const argHandlers = makeArgHandlers(inputs);
  const inputTypes = inputs.map(({ type }) => type);
  const outputTypes = outputs.map(({ type }) => type);
  const inputNames = inputs.map(({ name }) => name);
  const outputNames: string[] = outputs.map(
    ({ name }, i) => name || outputMappings[i] || `${i}`
  );
  const methodSelector = abi.methodID(name, inputTypes).toString('hex');

  const augmentedFunc: IAugmentedAbiFunction = {
    abi: abiFunc,
    argHandlers,
    derived: {
      inputNames,
      inputTypes,
      outputNames,
      outputTypes
    },
    methodSelector
  };

  return {
    constant: augmentedFunc.abi.constant,
    paramless: augmentedFunc.abi.inputs.length === 0,
    decodeArguments: args => decodeArguments(args, augmentedFunc),
    decodeReturnValue: ret => decodeReturnValue(ret, augmentedFunc),
    encodeArguments: args => encodeArguments(args, augmentedFunc)
  };
};
