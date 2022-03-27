import React from "react";
import * as S from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  defaultValue?: string;
}

const TextInput = ({ label, defaultValue, ...props }: Props) => {
  return (
    <S.Wrapper>
      <S.LabelText>{label}</S.LabelText>
      <S.Input defaultValue={defaultValue} {...props} />
    </S.Wrapper>
  );
};

export default TextInput;
