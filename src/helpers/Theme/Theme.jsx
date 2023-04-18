import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { Theming } from "./Theme.styles";
import GlobalStyles from "../Global/Global.styles";

export default function Theme(props) {
  return (
    <Fragment>
      <ThemeProvider theme={Theming}>
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </Fragment>
  );
}
