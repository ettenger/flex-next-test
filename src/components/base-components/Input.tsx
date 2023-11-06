import { FC } from "react";
import { DivElement, InputElement } from "../PageElement.type";
import { RenderComponent } from "../RenderComponent";

export const InputComponent: FC<InputElement> = ({
  className,
  type,
  placeholder,
}) => <input className={className} type={type} placeholder={placeholder} />;
