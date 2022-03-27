import * as S from "./styles";

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
};

export default Container;
