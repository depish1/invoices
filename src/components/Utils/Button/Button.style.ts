import styled from 'styled-components';

interface IStyledButtonProps {
  fullWidth: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  background: ${({ theme }) => theme.colors.primary1};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.dark2};
  cursor: pointer;
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 600;
  padding: 1.5rem 2rem;
  transition: all 0.4s ease-in-out;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};

  &:hover {
    background: ${({ theme }) => theme.colors.primary2};
    box-shadow: ${({ theme }) => theme.boxShadows.formElement};
  }
`;
