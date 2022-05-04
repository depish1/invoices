import styled from 'styled-components';

export const AlertWrapper = styled.div`
  background: ${({ theme }) => theme.colors.error1};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.dark1};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 400;
  padding: 1rem;
  text-align: center;
`;
