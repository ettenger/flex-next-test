import { FC } from "react";
import { DivElement } from "../PageElement.type";
import { RenderComponent } from "../RenderComponent";

export const DivComponent: FC<DivElement> = ({
  className,
  children,
  content,
}) => (
  <div className={className}>
    {content}
    {children?.map((child, i) => (
      <RenderComponent key={i} {...child} />
    ))}
  </div>
);
