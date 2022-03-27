import * as S from "./styles";
import DropdownIconSVG from "public/assets/icons/chevron-down-outline.svg";
import Link from "next/link";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  dropdown?: boolean;
  navigateTo?: string;
}

const MenuItem = ({ text, dropdown = false, navigateTo }: Props) => {
  if (navigateTo) {
    return (
      <Link href={navigateTo} passHref>
        <S.Wrapper>
          <S.Text>{text}</S.Text>
          {dropdown && <DropdownIconSVG />}
        </S.Wrapper>
      </Link>
    );
  }

  return (
    <S.Wrapper>
      <S.Text>{text}</S.Text>
      {dropdown && <DropdownIconSVG />}
    </S.Wrapper>
  );
};

export default MenuItem;
