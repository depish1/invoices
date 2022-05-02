import styled from 'styled-components';

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const CustomCheckbox = styled.div`
  background: ${({ theme }) => theme.colors.white1};
  border: 1px solid ${({ theme }) => theme.colors.white3};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: block;
  height: 3rem;
  transition: all 0.2s ease-in-out;
  width: 3rem;
`;

export const HiddenCheckbox = styled.input`
  border: 0;
  height: 1px;
  margin: -1px;
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
