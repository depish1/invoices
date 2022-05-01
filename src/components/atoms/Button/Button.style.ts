import styled from 'styled-components';

interface IStyledButtonProps {
  isFullWidth: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  background: ${({ theme }) => theme.colors.primary1};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: ${({ theme }) => theme.colors.dark2};
  cursor: pointer;
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 600;
  padding: 1rem 2rem;
  transition: all 0.4s ease-in-out;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'fit-content')};

  &:hover {
    background: ${({ theme }) => theme.colors.primary2};
  }
`;
