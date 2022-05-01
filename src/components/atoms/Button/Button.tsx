import { ButtonHTMLAttributes } from 'react';

import { StyledButton } from 'components/atoms/Button/Button.style';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFullWidth?: boolean;
  text: string;
}

const Button = ({ isFullWidth = false, text, ...props }: IButtonProps) => (
  <StyledButton isFullWidth={isFullWidth} {...props}>
    {text}
  </StyledButton>
);

export default Button;
