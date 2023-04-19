import styled, { css } from "styled-components";

export const ContainerLarge = styled.div(
  ({ theme }) => `
  width: ${theme.sizes.large};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px){
    margin: 0 30px 0 30px;
  };
`
);
