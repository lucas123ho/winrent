import * as S from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
}

const NumberHero = ({ title, subtitle }: Props) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Wrapper>
  );
};

export default NumberHero;
