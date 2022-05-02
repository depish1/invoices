import styled from 'styled-components';

interface ITabProps {
  isActive: boolean;
}
export const TabsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Tab = styled.button<ITabProps>`
  background: ${({ isActive, theme }) => (isActive ? 'transparent' : theme.colors.white4)};
  border: none;
  border-bottom: ${({ isActive, theme }) => (isActive ? 'none' : `1px solid ${theme.colors.white1}`)};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.dark1 : theme.colors.dark4)};
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
  padding: 2rem;

  &:first-child {
    border-bottom-right-radius: ${({ isActive, theme }) => (isActive ? 'default' : `${theme.borderRadius}`)};
    border-right: ${({ isActive, theme }) => (isActive ? 'none' : `1px solid ${theme.colors.white1}`)};
  }
  &:last-child {
    border-bottom-left-radius: ${({ isActive, theme }) => (isActive ? 'default' : `${theme.borderRadius}`)};
    border-left: ${({ isActive, theme }) => (isActive ? 'none' : `1px solid ${theme.colors.white1}`)};
  }
`;
