import Button from "components/atoms/Button";
import { ButtonProps } from "components/atoms/Button/types";
import * as S from "./styles";

interface ButtonItem extends ButtonProps {
  text: string;
}

interface Props {
  buttons: ButtonItem[];
}

const ButtonGroup = ({ buttons }: Props) => {
  return (
    <S.Wrapper>
      {buttons.map((button) => (
        <Button key={button.text} {...button}>
          {button.text}
        </Button>
      ))}
    </S.Wrapper>
  );
};

export default ButtonGroup;
