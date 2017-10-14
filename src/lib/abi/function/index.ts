import abi from 'ethereumjs-abi';
import { makeArgHandlers } from './coders';

export { decodeArguments, decodeReturnValue, encodeArguments } from './coders';

export const Factory = (
  abiFunc: IAbiFunction,
  outputMappings: IOutputMappings
): IAugmentedAbiFunction => {
  const { inputs, outputs } = abiFunc;
  const argHandlers = makeArgHandlers(inputs);
  const inputTypes = inputs.map(({ type }) => type);
  const outputTypes = outputs.map(({ type }) => type);
  const inputNames = inputs.map(({ name }) => name);
  const outputNames: string[] = outputs.map(
    ({ name }, i) => outputMappings[i] || name || `${i}`
  );
  const methodSelector = abi.methodID(name, inputTypes).toString('hex');

  return {
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
};
