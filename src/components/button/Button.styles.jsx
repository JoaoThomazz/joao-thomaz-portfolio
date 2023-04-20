import styled, { keyframes } from "styled-components";

export const ButtonText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.smaller};
  color: ${(props) =>
    props.secondary ? props.theme.colors.black : props.theme.colors.white};
`;

export const ButtonIcon = styled.img`
  color: ${(props) =>
    props.secondary ? props.theme.colors.black : props.theme.colors.white};
  margin-left: 10px;
  width: 10px;
`;

export const ButtonMain = styled.a`
  cursor: pointer;
  background-color: ${(props) =>
    props.secondary ? props.theme.colors.white : props.theme.colors.black};
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
