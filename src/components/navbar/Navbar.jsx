import React from "react";
import {
  NavbarAction,
  NavbarContainer,
  // NavbarContent,
  // NavbarList,
  // NavbarItem,
  NavbarLogo,
  NavbarMain,
  Logo,
  // NavbarPath,
} from "./Navbar.styles";
import Container from "../container/Container";
import Button from "../button/Button";
import ThomazLogo from "../../assets/Joao-Thomaz.svg";

export default function Navbar() {
  // const navItem = [
  //   {
  //     id: 1,
  //     name: "Home",
  //     path: "/",
  //     new: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Sobre",
  //     path: "/",
  //     new: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Projetos",
  //     path: "/",
  //     new: true,
  //   },
  //   {
  //     id: 4,
  //     name: "Contato",
  //     path: "/",
  //     new: false,
  //   },
  // ];
  return (
    <NavbarContainer>
      <Container>
        <NavbarMain>
          <NavbarLogo>
            <Logo src={ThomazLogo} />
          </NavbarLogo>
          {/* <NavbarContent>
             <NavbarList>
              {navItem.map((nav) => (
                <NavbarItem key="id">
                  {nav.name} {nav.new ? <NavbarPath>Novo</NavbarPath> : null}
                </NavbarItem>
              ))}
            </NavbarList>
          </NavbarContent> */}
          <NavbarAction>
            <Button>Trabalhe comigo</Button>
          </NavbarAction>
        </NavbarMain>
      </Container>
    </NavbarContainer>
  );
}
