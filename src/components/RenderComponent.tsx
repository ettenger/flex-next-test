import { FC } from "react";
import { PageElement } from "./PageElement.type";
import { TextComponent } from "./base-components/Text";
import { DivComponent } from "./base-components/Div";
import { InputComponent } from "./base-components/Input";

export const RenderComponent: FC<PageElement> = (props) => {
  const { element } = props;
  if (element === "text") {
    return <TextComponent {...props} />;
  }

  if (element === "div") {
    return <DivComponent {...props} />;
  }

  if (element === "input") {
    return <InputComponent {...props} />;
  }
};
