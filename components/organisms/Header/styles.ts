import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(80px);
  padding: 2.4rem 0;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.borderColor};

  @media (max-width: 1344px) {
    padding: 2.4rem 4.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding: 2.4rem 1.6rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1344px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: none;
  }
`;

export const ButtonsWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakPoints.xs}) {
    button:not(:last-child) {
      margin-right: 0.6rem !important;
    }
  }
`;
