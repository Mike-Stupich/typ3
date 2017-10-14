type IO = { name: string; type: string };

interface IAbiFunction {
  name: string;
  inputs: IO[];
  outputs: IO[];
  constant: boolean;
  type: string;
  payable: boolean;
}

interface IAugmentedAbiFunction {
  abi: IAbiFunction;
  derived: {
    inputTypes: string[];
    outputTypes: string[];
    inputNames: string[];
    outputNames: string[];
  };
  methodSelector: string;
  argHandlers: IFuncArgs;
}

type IOutputMappings = string[];

type IProcessInput = (inputToParse) => any;

interface IFuncArgs {
  [name: string]: {
    processInput: IProcessInput;
    name: IAbiFunction['name'];
    type: IAbiFunction['type'];
  };
}

interface IArgs {
  [name: string]: any;
}

interface IDecode {
  [key: string]: any;
}

interface IUserSuppliedArgs {
  [argumentName: string]: any;
}
