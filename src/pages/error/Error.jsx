import React from "react";
import { ContainerError, ContainerTypography, MainError } from "./Error.styles";
import Theme from "../../helpers/Theme/Theme";
import Container from "../../components/container/Container";
import Title from "../../components/title/Title";
import Typography from "../../components/typography/Typography";
import Button from "../../components/button/Button";

export default function Error(props) {
  return (
    <Theme>
      <MainError>
        <Container>
          <ContainerError>
            <Title>Ooops!</Title>
            <ContainerTypography>
              <Typography color="lightBlack">
                Parece que não achamos essa página por aqui, ou tivemos algum
                erro do tipo. Você pode clicar no botão abaixo e voltar para a
                página anterior!
              </Typography>
            </ContainerTypography>
            <Button>Voltar a página inicial</Button>
          </ContainerError>
        </Container>
      </MainError>
    </Theme>
  );
}
