import styled from "styled-components";
import { styleModifier } from "./styles.modifier";
import { ButtonProps } from "./types";

export const Wrapper = styled.button<ButtonProps>`
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  font-weight: bold;
  font-size: 1.6rem;
  transition: all 0.3s ease-in-out;

  background-color: ${({ fill }) =>
    styleModifier[fill || "contained"].backgroundColor};
  border: 2px solid
    ${({ fill }) => styleModifier[fill || "contained"].borderColor};
  color: ${({ fill }) => styleModifier[fill || "contained"].textColor};

  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
