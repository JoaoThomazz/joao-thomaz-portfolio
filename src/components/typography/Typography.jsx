import React from "react";
import { TypographyMain } from "./Typography.styles";

export default function Typography(props) {
  return <TypographyMain {...props}>{props.children}</TypographyMain>;
}
