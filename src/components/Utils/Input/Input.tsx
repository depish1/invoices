import { Path, UseFormRegister } from 'react-hook-form';

import { FieldWrapper, StyledError, StyledInput, StyledLabel } from 'components/Utils/Input/Input.style';

interface IInputProps<T> {
  disabled?: boolean;
  type: EInputType;
  label: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
  error?: string;
}

export enum EInputType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  CHECKBOX = 'checkbox',
}

const Input = <T extends Record<string, unknown>>({ disabled, error, type, label, register, required }: IInputProps<T>) => (
  <FieldWrapper>
    <StyledLabel>{label}</StyledLabel>
    <StyledInput disabled={disabled} isError={!!error} {...register(label, { required })} type={type} />
    {error && <StyledError>{error}</StyledError>}
  </FieldWrapper>
);

export default Input;
