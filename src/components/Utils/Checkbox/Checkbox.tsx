import { Path, UseFormRegister } from 'react-hook-form';

import { CustomCheckbox, FieldWrapper, HiddenCheckbox, StyledLabel } from 'components/Utils/Checkbox/Checkbox.style';

interface IInputProps<T> {
  label: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
}

const Checkbox = <T extends Record<string, unknown>>({ label, register, required }: IInputProps<T>) => (
  <FieldWrapper>
    <StyledLabel htmlFor={label}>
      <HiddenCheckbox id={label} name={label} type="checkbox" {...register(label, { required })} />
      <CustomCheckbox />
      <span>{label}</span>
    </StyledLabel>
  </FieldWrapper>
);

export default Checkbox;
