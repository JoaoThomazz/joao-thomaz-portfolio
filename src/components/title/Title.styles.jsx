import styled from "styled-components";

export const TitleMain = styled.h1(
  ({ theme }) => `
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.black};
  `
);
