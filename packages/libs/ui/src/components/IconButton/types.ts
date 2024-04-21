export type IconButtonSize = 'xs' | 'sm' | 'md';

export type IconButtonColor =
  | 'primary'
  | 'danger'
  | 'base'
  | 'light'
  | 'transparent';

export interface IconButtonBaseProps {
  size?: IconButtonSize;
  color?: IconButtonColor;
  disabled?: boolean;
  loading?: boolean;
  labelPosition?: 'right' | 'left' | 'bottom';
}
