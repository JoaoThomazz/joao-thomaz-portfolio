import styled from "styled-components";

const handleColorType = (color) => {
  switch (color) {
    case "white":
      return (props) => props.theme.colors.white;
    case "black":
      return (props) => props.theme.colors.black;
    case "lightBlack":
      return (props) => props.theme.colors.lightBlack;
    case "lighterBlack":
      return (props) => props.theme.colors.lighterBlack;
  }
};

export const TypographyMain = styled.p`
  color: ${({ color }) => handleColorType(color)};
  font-size: ${(props) => props.theme.fontSizes.small};
`;
