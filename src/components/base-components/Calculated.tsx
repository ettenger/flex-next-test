import { FC, useEffect } from "react";
import { CalculatedElement, CalculationOperation } from "../PageElement.type";
import { useFormStore } from "@/store/formStore";
import { length } from "@/operators/string/length";

const determineCalculatedValue = (
  operation: CalculationOperation,
  form: Record<string, any>
): string | number => {
  let value;
  const { argument, operator } = operation;
  if (argument.type === "constant") {
    value = argument.value;
  } else if (argument.type === "variable") {
    value = form[argument.variableName];
  } else if (argument.type === "calculation") {
    value = determineCalculatedValue(argument, form);
  }

  if (operator === "length") {
    return length(value);
  }

  return "";
};

export const CalculatedComponent: FC<CalculatedElement> = ({
  operation,
  resultVariableName,
  hidden,
}) => {
  const form = useFormStore((store) => store.form);
  const update = useFormStore((store) => store.update);

  // TODO: move all of these to one big helper function with typing on operator
  // TODO: consider memoizing on variableValue and operator
  const calculatedValue = determineCalculatedValue(operation, form);

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
