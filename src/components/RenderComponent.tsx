"use client";

import { FC } from "react";
import { PageElement } from "./PageElement.type";
import { TextComponent } from "./base-components/Text";
import { DivComponent } from "./base-components/Div";
import { InputComponent } from "./base-components/Input";
import { VariableComponent } from "./base-components/Variable";
import { CalculatedComponent } from "./base-components/Calculated";

export const RenderComponent: FC<PageElement> = (props) => {
  const { element } = props;
  if (element === "text") {
    return <TextComponent {...props} />;
  }

  if (element === "variable") {
    return <VariableComponent {...props} />;
  }

  if (element === "calculated") {
    return <CalculatedComponent {...props} />;
  }

  if (element === "div") {
    return <DivComponent {...props} />;
  }

  if (element === "input") {
    return <InputComponent {...props} />;
  }
};
