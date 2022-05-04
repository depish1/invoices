import styled from 'styled-components';

interface ICheckboxProps {
  isError: boolean;
}

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const StyledError = styled.span`
  color: ${({ theme }) => theme.colors.error2};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 400;
`;

export const CustomCheckbox = styled.div<ICheckboxProps>`
  align-items: center;
  background: ${({ theme }) => theme.colors.white1};
  border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.error2 : theme.colors.white3)};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  height: 3rem;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  width: 3rem;

  svg {
    display: none;
  }
`;

export const HiddenCheckbox = styled.input`
  border: 0;
  height: 1px;
  margin: -1px;
  outline: none;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:hover + ${CustomCheckbox} {
    border: 1px solid ${({ theme }) => theme.colors.primary1};
    box-shadow: ${({ theme }) => theme.boxShadows.formElement};
  }

  &:checked + ${CustomCheckbox} {
    background-color: ${({ theme }) => theme.colors.primary1};
    border: 1px solid ${({ theme }) => theme.colors.primary1};

    svg {
      display: block;
    }
  }

  &:focus + ${CustomCheckbox} {
    border: 1px solid ${({ theme }) => theme.colors.dark3};
  }
`;

export const StyledLabel = styled.label`
  align-items: center;
  color: ${({ theme }) => theme.colors.dark1};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 400;
  gap: 0.8rem;
  width: fit-content;
`;
