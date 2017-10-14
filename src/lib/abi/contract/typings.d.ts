declare enum AbiMethodTypes {
  function = 'function',
  event = 'event',
  constructor = 'constructor'
}

interface IOutputMappings {
  [abiFuncName: string]: string[];
}
