export interface TextElement {
  element: "text";
  content: string;
}

export interface VariableElement {
  element: "variable";
  variableName: string;
}

export interface CalculatedElement {
  element: "calculated";
  variableName: string;
  operator: string;
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
