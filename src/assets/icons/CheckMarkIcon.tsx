import { memo } from 'react';

import { ThemeColorsType } from 'styles/theme';

interface ICheckMarkIconProps {
  size: number;
  color?: ThemeColorsType;
}

const CheckMarkIcon = ({ size, color }: ICheckMarkIconProps) => (
  <svg fill="none" height={size} viewBox="0 0 14 14" width={size}>
    <path d="M1.25 8L5.75 12.5L12.75 1.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

export default memo(CheckMarkIcon);
