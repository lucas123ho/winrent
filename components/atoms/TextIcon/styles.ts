import styled from "styled-components";
import { styleModifier } from "./styles.modifier";
import { TextIconDefaultProps } from "./types";

export const Wrapper = styled.div<TextIconDefaultProps>`
  display: flex;
  align-items: center;

  span {
    font-size: ${({ size }) => styleModifier[size || "normal"].span.fontSize};
    color: ${({ theme }) => theme.colors.gray};
    margin-left: 0.8rem;
    line-height: ${({ size }) =>
      styleModifier[size || "normal"].span.lineHeight};
  }
`;

export const Icon = styled.img<TextIconDefaultProps>`
  width: ${({ size }) => styleModifier[size || "normal"].icon.width};
  height: ${({ size }) => styleModifier[size || "normal"].icon.height};
`;
