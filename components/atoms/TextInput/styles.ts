import styled from "styled-components";

export const Wrapper = styled.label`
  width: 100%;
`;

export const LabelText = styled.div`
  color: ${({ theme }) => theme.colors.labelColor};
  margin-bottom: 0.4rem;
  cursor: pointer;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.sizes.extraNormal};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.family};
`;
