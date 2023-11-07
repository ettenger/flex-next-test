import { FC, useState } from "react";
import { InputElement } from "../PageElement.type";

export const InputComponent: FC<InputElement> = ({
  className,
  type,
  placeholder,
}) => {
  const [value, setValue] = useState("");
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};
