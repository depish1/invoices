import { Path, UseFormRegister } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { CustomCheckbox, FieldWrapper, HiddenCheckbox, StyledError, StyledLabel } from 'components/Utils/Checkbox/Checkbox.style';
import { ThemeType } from 'styles/theme';
import CheckMarkIcon from 'assets/icons/CheckMarkIcon';

interface IInputProps<T> {
  disabled?: boolean;
  error?: string;
  label: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
}

const Checkbox = <T extends Record<string, unknown>>({ disabled, error, label, register, required }: IInputProps<T>) => {
  const theme = useTheme() as ThemeType;
  return (
    <FieldWrapper>
      <StyledLabel htmlFor={label}>
        <HiddenCheckbox disabled={disabled} id={label} name={label} type="checkbox" {...register(label, { required })} />
        <CustomCheckbox isError={!!error}>
          <CheckMarkIcon color={theme.colors.dark1} size={15} />
        </CustomCheckbox>
        <span>{label}</span>
      </StyledLabel>
      {error && <StyledError>{error}</StyledError>}
    </FieldWrapper>
  );
};

export default Checkbox;
