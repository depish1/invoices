import { Path, UseFormRegister } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { CustomCheckbox, FieldWrapper, HiddenCheckbox, StyledLabel } from 'components/Utils/Checkbox/Checkbox.style';
import { ThemeType } from 'styles/theme';
import CheckMarkIcon from 'assets/icons/CheckMarkIcon';

interface IInputProps<T> {
  label: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
}

const Checkbox = <T extends Record<string, unknown>>({ label, register, required }: IInputProps<T>) => {
  const theme = useTheme() as ThemeType;
  return (
    <FieldWrapper>
      <StyledLabel htmlFor={label}>
        <HiddenCheckbox id={label} name={label} type="checkbox" {...register(label, { required })} />
        <CustomCheckbox>
          <CheckMarkIcon color={theme.colors.dark1} size={15} />
        </CustomCheckbox>
        <span>{label}</span>
      </StyledLabel>
    </FieldWrapper>
  );
};

export default Checkbox;
