import React from "react";
import * as S from "./styles";

const HeroTitle: React.FC = ({ children, ...props }) => {
  return <S.Title {...props}>{children}</S.Title>;
};

export default HeroTitle;
