import Link from 'next/link';
import * as S from './styles';

interface Item {
  text: string;
  navigateTo: string;
}

interface Props {
  title: string;
  items: Item[];
}

const SiteMapItem = ({ title, items }: Props) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {items.map((item) => (
        <Link key={item.text} href={item.navigateTo} passHref>
          <S.Item>{item.text}</S.Item>
        </Link>
      ))}
    </S.Wrapper>
  )
};

export default SiteMapItem;
