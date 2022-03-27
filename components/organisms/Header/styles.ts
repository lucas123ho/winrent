import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(80px);
  padding: 2.4rem 4.8rem;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.borderColor};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1344px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
