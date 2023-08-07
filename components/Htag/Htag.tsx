import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";
import style from "./Htag.module.css";

interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={style.h1}>{children}</h1>;
    case "h2":
      return <h2 className={style.h2}>{children}</h2>;
    case "h3":
      return <h3 className={style.h3}>{children}</h3>;
    default:
      return <></>;
  }
};
