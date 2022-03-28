import Container from "components/atoms/Container";
import LinkIcon, { Props as LinkIconProps } from "components/atoms/LinkIcon";
import * as S from "./styles";

const defaultSocialMediaProps = {
  opacity: 0.3,
  newTab: true,
};

const socialMedias: LinkIconProps[] = [
  {
    icon: "facebook",
    navigateTo: "https://www.facebook.com/",
    ...defaultSocialMediaProps,
  },
  {
    icon: "instagram",
    navigateTo: "https://www.instagram.com/",
    ...defaultSocialMediaProps,
  },
  {
    icon: "twitter",
    navigateTo: "https://www.twitter.com/",
    ...defaultSocialMediaProps,
  },
  {
    icon: "linkedin",
    navigateTo: "https://www.linkedin.com/",
    ...defaultSocialMediaProps,
  },
];

const Footer = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Copyright>©2022 WinRent. Todos os direitos reservados.</S.Copyright>
        <S.SocialMediaWrapper>
          {socialMedias.map((item) => (
            <LinkIcon key={item.icon} {...item} />
          ))}
        </S.SocialMediaWrapper>
      </Container>
    </S.Wrapper>
  );
};

export default Footer;
