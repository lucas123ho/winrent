import * as S from "./styles";
import { ButtonProps } from "./types";

const Button = ({ fill = "contained", children, ...rest }: ButtonProps) => {
  return (
    <S.Wrapper fill={fill} {...rest}>
      {children}
    </S.Wrapper>
  );
};

export default Button;
