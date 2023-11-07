import { FC } from "react";
import { VariableElement } from "../PageElement.type";
import { useFormStore } from "@/store/formStore";

export const VariableComponent: FC<VariableElement> = ({ variableName }) => {
  const { form } = useFormStore();

  return <>{form[variableName] || ""}</>;
};
