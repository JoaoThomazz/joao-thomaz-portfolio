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

const handleSizeType = (size) => {
  switch (size) {
    case "smaller":
      return (props) => props.theme.fontSizes.smaller;
    case "small":
      return (props) => props.theme.fontSizes.small;
    case "medium":
      return (props) => props.theme.fontSizes.medium;
    case "large":
      return (props) => props.theme.fontSizes.large;
  }
};

export const TypographyMain = styled.p`
  color: ${({ color }) => handleColorType(color)};
  font-size: ${({ size }) => handleSizeType(size)};
`;
