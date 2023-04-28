import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NavbarMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarContent = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavbarLogo = styled.div`
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 20px 0 0;
`;

export const Logo = styled.img`
  cursor: pointer;
  stroke-width: 0;
`;

export const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.large}) {
    display: none;
  }
`;

export const NavbarItem = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 20px;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.smaller};
  transition: color 0.5s linear;
`;

export const NavbarAction = styled.div``;

export const NavbarPath = styled.span`
  background-color: ${(props) => props.theme.colors.black};
  padding: 3px 10px;
  color: ${(props) => props.theme.colors.white};
  font-size: 0.6rem;
  font-weight: bold;
  border-radius: 10px;
  margin: 0 0 0 5px;
`;
