import { FC, useEffect } from "react";
import { CalculatedElement } from "../PageElement.type";
import { useFormStore } from "@/store/formStore";
import { length } from "@/operators/string/length";

export const CalculatedComponent: FC<CalculatedElement> = ({
  variableName,
  operator,
  resultVariableName,
  hidden,
}) => {
  const variableValue = useFormStore((store) => store.form[variableName]);
  const update = useFormStore((store) => store.update);
  let calculatedValue: string | number = "";

  // TODO: move all of these to one big helper function with typing on operator
  // TODO: consider memoizing on variableValue and operator
  if (operator === "length") {
    calculatedValue = length(variableValue);
  }

  useEffect(() => {
    if (resultVariableName) {
      update({ [resultVariableName]: calculatedValue });
    }
  }, [calculatedValue, resultVariableName, update]);

  if (hidden) {
    return null;
  }

  return <>{calculatedValue.toLocaleString()}</>;
};
