import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 var(--padding-horizontal);
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakPoints.xs}) {
    max-width: calc(676px + var(--padding-horizontal) * 2);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    max-width: calc(720px + var(--padding-horizontal) * 2);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    max-width: calc(960px + var(--padding-horizontal) * 2);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    max-width: calc(967px + var(--padding-horizontal) * 2);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    max-width: calc(1120px + var(--padding-horizontal) * 2);
  }
`;
