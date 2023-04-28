import styled from "styled-components";

const handleColorType = (color) => {
  switch (color) {
    case "white":
      return (props) => props.theme.color.white;
    case "black":
      return (props) => props.theme.colors.black;
  }
};

export const TitleMain = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${({ color }) => handleColorType(color)};
`;
