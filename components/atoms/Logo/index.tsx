import Link from "next/link";
import * as S from "./styles";
import LogoSVG from "public/assets/images/logo.svg";

interface Props extends React.SVGAttributes<SVGElement> {
  navigateTo?: string;
}

const Logo = ({ navigateTo, ...rest }: Props) => {
  if (navigateTo) {
    return (
      <Link href={navigateTo} passHref>
        <S.Link>
          <LogoSVG {...rest} />
        </S.Link>
      </Link>
    );
  }

  return <LogoSVG {...rest} />;
};

export default Logo;
