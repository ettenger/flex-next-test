import { FC } from "react";
import { VariableElement } from "../PageElement.type";
import { useFormStore } from "@/store/formStore";

export const VariableComponent: FC<VariableElement> = ({ variableName }) => {
  const value = useFormStore((store) => store.form[variableName]);

  return <>{value}</>;
};
