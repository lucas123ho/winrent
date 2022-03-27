import { useCallback, useState } from "react";
import * as S from "./styles";

interface TabItem {
  title: string;
  content: React.ReactNode;
  key: string;
}

interface Props {
  items: TabItem[];
}

const Tabs = ({ items }: Props) => {
  const [activedTabKey, setActivedTabKey] = useState(items[0].key);
  const [activedTabContent, setActivedTabContent] = useState(items[0].content);

  const isActive = useCallback(
    (key) => {
      return key === activedTabKey;
    },
    [activedTabKey]
  );

  const handleChangeTab = useCallback(
    (key) => {
      setActivedTabKey(key);
      setActivedTabContent(items.find((item) => item.key === key)?.content);
    },
    [items]
  );

  return (
    <S.Wrapper>
      <S.TitlesWrapper>
        {items.map((item) => (
          <S.Title
            onClick={() => handleChangeTab(item.key)}
            active={isActive(item.key)}
            key={`title-${item.key}`}
          >
            {item.title}
          </S.Title>
        ))}
      </S.TitlesWrapper>
      <S.Content>{activedTabContent}</S.Content>
    </S.Wrapper>
  );
};

export default Tabs;
