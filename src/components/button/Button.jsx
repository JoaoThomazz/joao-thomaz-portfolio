import React from "react";
import { ButtonIcon, ButtonMain, ButtonText } from "./Button.styles";
import ArrowIco from "../../assets/icons/Arrow.svg";

export default function Button(props) {
  return (
    <ButtonMain {...props}>
      <ButtonText {...props}>{props.children}</ButtonText>
      <ButtonIcon src={ArrowIco} />
    </ButtonMain>
  );
}
