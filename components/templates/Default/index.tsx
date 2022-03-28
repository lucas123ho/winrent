import * as S from "./styles";

interface Props {
  header: React.ReactNode;
  hero: React.ReactNode;
  siteMap: React.ReactNode;
  footer: React.ReactNode;
}

const DefaultTemplate = ({ header, hero, siteMap, footer }: Props) => {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>{header}</S.HeaderWrapper>
      <S.HeroWrapper>{hero}</S.HeroWrapper>
      <S.SiteMapWrapper>{siteMap}</S.SiteMapWrapper>
      {footer}
    </S.Wrapper>
  );
};

export default DefaultTemplate;
