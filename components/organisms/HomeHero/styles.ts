import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.lightGray};
  width: 100%;
  padding: 7.2rem 0 9.4rem 0;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding: 3.2rem 0 5.4rem 0;
  }
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  max-height: 100%;
  z-index: 1;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    opacity: 0.5;
    filter: blur(4px);
    transform: translateX(20%);
  }
`;

export const TextCardWrapper = styled.div`
  display: flex;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: 544px;
  margin-right: 4rem;

  h1 {
    margin-bottom: 3.2rem;
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    line-height: 3.2rem;
    max-width: 488px;
    font-weight: normal;
    line-height: 160%;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.xs}) {
    width: 100%;
    margin: 0;
  }
`;

export const NumbersWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;

  & > div:first-child {
    margin-right: 8rem;
  }
`;

export const CardWrapper = styled.div`
  width: 324px;
  padding-top: 1.8rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    display: none;
  }
`;

export const SmallCardWrapper = styled.div`
  position: absolute;
  width: 198px;
  right: -6rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    bottom: -7rem;
    transform: scale(0.8);
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    bottom: -3.8rem;
    transform: scale(1);
    display: block;
  }
`;

export const FilterWrapper = styled.div`
  width: 715px;
  margin-top: 5.6rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 100%;
  }
`;
