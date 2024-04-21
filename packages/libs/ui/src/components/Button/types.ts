export type ButtonVariant = 'text' | 'contained';

export type ButtonSize = 'xs' | 'sm' | 'md';

export type ButtonColor = 'primary' | 'danger' | 'base' | 'light' | 'dark';

export interface ButtonBaseProps {
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}
