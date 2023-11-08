export interface TextElement {
  element: "text";
  content: string;
}

export interface VariableElement {
  element: "variable";
  variableName: string;
}

// TODO: Move these into separate file and add ArrayArgument type
export interface VariableArgument {
  type: "variable";
  variableName: string;
}

export interface ConstantArgument {
  type: "constant";
  value: string | number;
}

export type OperationArgument =
  | VariableArgument
  | ConstantArgument
  | CalculationOperation;

export interface CalculationOperation {
  type: "calculation";
  operator: string;
  argument: OperationArgument;
}

export interface CalculatedElement {
  element: "calculated";
  operation: CalculationOperation;
  resultVariableName?: string;
  hidden?: boolean;
}

export interface DivElement {
  element: "div";
  className?: string;
  content?: string;
  children?: PageElement[];
}

export interface InputElement {
  element: "input";
  className?: string;
  type?: string;
  placeholder?: string;
  variableName: string;
}

export type PageElement =
  | TextElement
  | VariableElement
  | CalculatedElement
  | DivElement
  | InputElement;
