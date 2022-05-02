import { ButtonHTMLAttributes } from 'react';

import { StyledButton } from 'components/Utils/Button/Button.style';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  text: string;
}

const Button = ({ fullWidth = false, text, ...props }: IButtonProps) => (
  <StyledButton fullWidth={fullWidth} {...props}>
    {text}
  </StyledButton>
);

export default Button;
