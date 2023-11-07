import { FC } from "react";
import { CalculatedElement } from "../PageElement.type";
import { useFormStore } from "@/store/formStore";
import { length } from "@/operators/string/length";

export const CalculatedComponent: FC<CalculatedElement> = ({
  variableName,
  operator,
}) => {
  const variableValue = useFormStore((store) => store.form[variableName]);
  let calculatedValue: string | number = "";

  if (operator === "length") {
    calculatedValue = length(variableValue);
  }

  return <>{calculatedValue.toLocaleString()}</>;
};
