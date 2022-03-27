import MenuItem, { Props as ItemType } from "components/atoms/MenuItem";
import * as S from "./styles";

interface Props {
  items: ItemType[];
}

const Menu = ({ items }: Props) => {
  return (
    <S.Wrapper>
      {items.map((item) => (
        <MenuItem key={item.text} {...item} />
      ))}
    </S.Wrapper>
  );
};

export default Menu;
