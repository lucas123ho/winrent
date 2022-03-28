import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  padding: 3.2rem 0 4rem 0;
  border-top: 1.5px solid ${({ theme }) => theme.colors.borderColor};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoints.xs}) {
      flex-direction: column-reverse;
      justify-content: center;
    }
  }
`;

export const Copyright = styled.div`
  opacity: 0.5;
  line-height: 160%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakPoints.xs}) {
    margin-bottom: 3rem;
  }

  > a:not(:last-child) {
    margin-right: 4rem;
  }

  > a:hover {
    transition: all 0.3s ease-in-out;
    opacity: 1 !important;
  }
`;
