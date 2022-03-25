import LogoSVG from "public/assets/images/logo.svg";

interface Props extends React.SVGAttributes<SVGElement> {}

const Logo = ({ ...rest }: Props) => {
  return <LogoSVG {...rest} />;
};

export default Logo;
