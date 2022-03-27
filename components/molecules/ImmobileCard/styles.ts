import styled from "styled-components";
import theme from "styles/theme";
import { styleModifier } from "./styles.modifier";
import { ImmobileCardProps } from "./types";

interface DefaultProps {
  size: ImmobileCardProps["size"];
}

export const Wrapper = styled.a<DefaultProps>`
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: ${({ size }) => styleModifier[size].wrapper.padding};
  border: ${({ size }) => styleModifier[size].wrapper.border};
  border-radius: ${({ size }) => styleModifier[size].wrapper.borderRadius};
  background-color: ${({ size }) =>
    styleModifier[size].wrapper.backgroundColor};

  &:hover {
    transform: scale(1.03);
    color: inherit !important;
  }
`;

export const Image = styled.img<DefaultProps>`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: ${({ size }) => styleModifier[size].image.height};
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
`;

export const Content = styled.div<DefaultProps>`
  padding: ${({ size }) => styleModifier[size].content.padding};
  border: ${({ size }) => styleModifier[size].content.border};
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const PriceWrapper = styled.div<DefaultProps>`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;

  span {
    font-size: ${({ theme }) => theme.fonts.sizes.small};
    line-height: 140%;
    margin: ${({ size }) => styleModifier[size].price.span.margin};
    opacity: 0.5;
  }
`;

export const Price = styled.h4<DefaultProps>`
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ size }) => styleModifier[size].price.fontSize};
  line-height: 150%;
  letter-spacing: -1px;
`;

export const Title = styled.h3<DefaultProps>`
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: ${({ size }) => styleModifier[size].title.fontSize};
  line-height: 150%;
  letter-spacing: -0.01em;
  margin-bottom: 0.8rem;
`;

export const Address = styled.h5<DefaultProps>`
  line-height: 150%;
  opacity: 0.5;
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: ${({ size }) => styleModifier[size].address.fontSize};
`;

export const Divisor = styled.div<DefaultProps>`
  width: 100%;
  height: 1.5px;
  background-color: ${({ theme }) => theme.colors.borderColor};
  margin: ${({ size }) => styleModifier[size].divisor.margin};
`;

export const PropertiesWrapper = styled.div<DefaultProps>`
  display: flex;
  align-items: center;

  & > div:not(:last-child) {
    margin-right: ${({ size }) =>
      styleModifier[size].propertiesWrapper.children.marginRight};
  }
`;
