import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 8rem 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Col = styled.div`
  min-width: 20rem;
  &:nth-child(3) {
    width: 23.8rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    &:last-child {
      margin-top: 4rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 100% !important;
    margin-bottom: 4.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:last-child {
      margin: 0 !important;
    }
  }
`;

export const WrapperItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 4.8rem;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
