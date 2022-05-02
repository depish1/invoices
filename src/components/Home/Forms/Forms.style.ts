import styled from 'styled-components';

interface ISectionWrapperProps {
  fullWidth?: boolean;
}
interface ITabProps {
  isActive: boolean;
}
export const Tabs = styled.div`
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
    border-right: ${({ isActive, theme }) => (isActive ? 'none' : `1px solid ${theme.colors.white1}`)};
  }
  &:last-child {
    border-left: ${({ isActive, theme }) => (isActive ? 'none' : `1px solid ${theme.colors.white1}`)};
  }
`;

export const FormsWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white3};
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: 400px;
  overflow: hidden;
  width: 100%;
`;

export const SectionWrapper = styled.div<ISectionWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 4rem;
  ${({ fullWidth }) => fullWidth && 'grid-column: 1/-1;'}

  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.white1};
  }
  &:last-child {
    border-top: 1px solid ${({ theme }) => theme.colors.white1};
  }
`;
