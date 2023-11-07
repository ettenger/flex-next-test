export interface TextElement {
  element: "text";
  content: string;
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
  name: string;
}

export type PageElement = TextElement | DivElement | InputElement;
