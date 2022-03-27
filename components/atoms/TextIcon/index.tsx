import * as S from "./styles";
import { TextIconDefaultProps } from "./types";

const icons = {
  "bedroom-outline": "/assets/icons/bedroom-outline.svg",
  "bathroom-outline": "/assets/icons/bathroom-outline.svg",
  "area-outline": "/assets/icons/area-outline.svg",
};

interface Props
  extends TextIconDefaultProps,
    React.HTMLAttributes<HTMLDivElement> {
  icon: keyof typeof icons;
}

const TextIcon = ({ icon, size = "normal", children, ...props }: Props) => {
  return (
    <S.Wrapper size={size} {...props}>
      <S.Icon src={icons[icon]} size={size} />
      <span>{children}</span>
    </S.Wrapper>
  );
};

export default TextIcon;
