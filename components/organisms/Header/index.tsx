import Button from "components/atoms/Button";
import Logo from "components/atoms/Logo";
import ButtonGroup from "components/molecules/ButtonGroup";
import Menu from "components/molecules/Menu";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Logo navigateTo="/" />
        <Menu
          items={[
            {
              text: "Alugar",
              navigateTo: "/alugar",
            },
            {
              text: "Comprar",
              navigateTo: "/comprar",
            },
            {
              text: "Vender",
              navigateTo: "/vender",
            },
            {
              text: "Gerenciar Propriedade",
              navigateTo: "/gerenciar",
              dropdown: true,
            },
            {
              text: "Recursos",
              navigateTo: "/recursos",
              dropdown: true,
            },
          ]}
        />
        <ButtonGroup
          buttons={[
            {
              text: "Entrar",
              fill: "outlined",
            },
            {
              text: "Cadastrar",
            },
          ]}
        />
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
