import * as S from "./styles";

interface Props {
  header: React.ReactNode;
  hero: React.ReactNode;
}

const DefaultTemplate = ({ header, hero }: Props) => {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>{header}</S.HeaderWrapper>
      <S.HeroWrapper>{hero}</S.HeroWrapper>
    </S.Wrapper>
  );
};

export default DefaultTemplate;
