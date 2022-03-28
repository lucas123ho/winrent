import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 12rem;
  left: -2.4rem;
  bottom: -3.2rem;
  background: ${({ theme }) => theme.colors.text.primary};
  opacity: 0.05;
  filter: blur(40px);
  z-index: 1;
`;

export const TabWrapper = styled.div`
  position: relative;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 100%;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }

  button {
    padding: 1.6rem 3.2rem;
  }
`;

export const Field = styled.div`
  padding-right: 4rem;
  margin-right: 4rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: auto !important;
    padding: 0;
    margin: 0;
    &:not(:last-child) {
      margin-bottom: 1.6rem;
    }
  }

  &:after {
    content: " ";
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 4rem;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.borderColor};

    @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
      display: none;
    }
  }
`;
