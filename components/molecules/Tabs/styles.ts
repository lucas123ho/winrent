import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const TitlesWrapper = styled.div`
  display: flex;
`;

export const Title = styled.button<{ active: boolean }>`
  padding: 1.5rem 1.2rem ${({ active }) => (active ? "1.3rem" : "1.5rem")}
    1.2rem;
  font-size: ${({ theme }) => theme.fonts.sizes.extraNormal};
  line-height: 145%;
  letter-spacing: -0.005em;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-bottom: ${({ active, theme }) =>
    active
      ? `3px solid ${theme.colors.primary}`
      : `1px solid ${theme.colors.borderColor}`};
  cursor: pointer;
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.text.primary};
  font-weight: ${({ active, theme }) =>
    active ? theme.fonts.weights.bold : theme.fonts.weights.regular};
  transition: all 0.3s ease-in-out;
  font-family: ${({ theme }) => theme.fonts.family};
  box-sizing: content-box;

  &:first-child,
  &:last-child {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  &:first-child {
    border-top-left-radius: 0.8rem;
  }

  &:last-child {
    border-top-right-radius: 0.8rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Content = styled.div`
  padding: 2.5rem 3.2rem;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
`;
