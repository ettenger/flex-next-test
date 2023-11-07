import { FC } from "react";
import { InputElement } from "../PageElement.type";
import { useFormStore } from "@/store/formStore";

export const InputComponent: FC<InputElement> = ({
  className,
  type,
  placeholder,
  name,
}) => {
  const update = useFormStore((store) => store.update);
  const value = useFormStore((store) => store.form[name] || "");

  return (
    <input
      className={`text-gray-900 ${className || ""}`}
      type={type}
      placeholder={placeholder}
      onChange={(e) => update({ [name]: e.target.value })}
      value={value}
    />
  );
};
