import styled from 'styled-components';

interface IStyledInputProps {
  isError: boolean;
}

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.dark1};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 400;
`;

export const StyledError = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 400;
`;

export const StyledInput = styled.input<IStyledInputProps>`
  background-color: ${({ theme }) => theme.colors.white1};
  border: none;
  border-bottom: 2px solid ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.white2)};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes.s};
  outline: none;
  padding: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary1};
    box-shadow: ${({ theme }) => theme.boxShadows.formElement};
  }

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.dark3};
  }
`;
