import { FunctionFactory } from '../function';
import { objReduce } from '../function/components/utils';

enum AbiMethodTypes {
  function = 'function',
  event = 'event',
  constructor = 'constructor'
}

export const CreateContract = <T>(
  abi: IAbiFunction[],
  outputMappings: IOutputMappings = {}
) => {
  const reducer = (c, currMethod) => {
    const { name, type } = currMethod;
    const handler = selector[type];
    return handler
      ? {
          ...c,
          [name]: handler(currMethod, outputMappings[name])
        }
      : c;
  };
  const contract = objReduce(abi, reducer);
  return contract as T;
};

const selector = {
  [AbiMethodTypes.function]: (
    abiFunc: IAbiFunction,
    outputMappings: IFuncOutputMappings
  ) => FunctionFactory(abiFunc, outputMappings)
};
