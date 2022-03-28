import Container from "components/atoms/Container";
import Logo from "components/atoms/Logo";
import SiteMapItem from "components/molecules/SiteMapItem";
import { siteMapItems } from "./items";
import * as S from "./styles";

const SiteMap = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.Col>
            <Logo navigateTo="/" />
          </S.Col>
          {siteMapItems.map((col) => (
            <S.Col key={col.key}>
              {col.items.map(({ title, items }) => (
                <S.WrapperItem key={title}>
                  <SiteMapItem title={title} items={items} />
                </S.WrapperItem>
              ))}
            </S.Col>
          ))}
        </S.Content>
      </Container>
    </S.Wrapper>
  );
};

export default SiteMap;
