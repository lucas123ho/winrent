import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  line-height: 150%;
  margin-bottom: 1.6rem;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.sizes.normal};
`;

export const Item = styled.a`
  line-height: 3.8rem;
  opacity: 0.7;
  display: block;
`;