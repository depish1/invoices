import styled, { keyframes } from 'styled-components';

interface IStyledButtonProps {
  fullWidth: boolean;
  isSecondary: boolean;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  background: ${({ isSecondary, theme }) => (isSecondary ? theme.colors.white1 : theme.colors.primary1)};
  border: 2px solid ${({ isSecondary, theme }) => (isSecondary ? theme.colors.primary1 : theme.colors.primary1)};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.dark2};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 600;
  justify-content: center;
  line-height: 1.6rem;
  padding: 1.5rem 2rem;
  transition: all 0.4s ease-in-out;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};

  &:hover {
    background: ${({ isSecondary, theme }) => (isSecondary ? theme.colors.white2 : theme.colors.primary2)};
    border: 2px solid ${({ isSecondary, theme }) => (isSecondary ? theme.colors.primary1 : theme.colors.primary2)};
    box-shadow: ${({ theme }) => theme.boxShadows.formElement};
  }
`;

export const MiniLoader = styled.div`
  animation: ${rotate} 1.5s linear infinite;
  border-radius: 100%;
  border-right: 2px solid ${({ theme }) => theme.colors.dark1};
  border-top: 2px solid ${({ theme }) => theme.colors.dark1};
  display: block;
  height: 1.6rem;
  width: 1.6rem;
`;
