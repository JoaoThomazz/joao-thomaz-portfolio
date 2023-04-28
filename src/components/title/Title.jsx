import React from "react";
import { TitleMain } from "./Title.styles";

export default function Title(props) {
  return <TitleMain {...props}>{props.children}</TitleMain>;
}
