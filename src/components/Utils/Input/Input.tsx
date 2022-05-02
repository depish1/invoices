import { Path, UseFormRegister } from 'react-hook-form';

import { FieldWrapper, StyledCheckbox, StyledError, StyledInput, StyledLabel } from 'components/Utils/Input/Input.style';

interface IInputProps<T> {
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

const Input = <T extends Record<string, unknown>>({ error, type, label, register, required }: IInputProps<T>) => (
  <FieldWrapper>
    <StyledLabel>{label}</StyledLabel>
    <StyledInput isError={!!error} {...register(label, { required })} type={type} />
    {error && <StyledError>{error}</StyledError>}
  </FieldWrapper>
);

export default Input;
