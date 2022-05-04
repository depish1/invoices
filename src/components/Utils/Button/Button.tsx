import { ButtonHTMLAttributes } from 'react';

import { MiniLoader, StyledButton } from 'components/Utils/Button/Button.style';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  isSecondary?: boolean;
  text: string;
}

const Button = ({ disabled, fullWidth = false, isSecondary = false, text, ...props }: IButtonProps) => (
  <StyledButton disabled={disabled} fullWidth={fullWidth} isSecondary={isSecondary} {...props}>
    {disabled ? <MiniLoader /> : text}
  </StyledButton>
);

export default Button;
