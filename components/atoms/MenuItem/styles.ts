import styled from "styled-components";

export const Wrapper = styled.a`
  display: flex;
  align-items: center;

  svg {
    margin-left: 0.8rem;

    path {
      transition: all 0.3s ease-in-out;
    }
  }

  &:hover {
    svg path {
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Text = styled.div``;
