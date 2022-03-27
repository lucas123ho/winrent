import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 2.4rem;
  border-left: 3px solid ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: -0.01em;
  line-height: 125%;
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  font-weight: 700;
  margin-bottom: 0.4rem;
`;

export const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.grey};
`;
