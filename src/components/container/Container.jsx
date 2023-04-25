import React from "react";
import { ContainerLarge } from "./Container.styles";

export default function Container(props) {
  return <ContainerLarge>{props.children}</ContainerLarge>;
}
