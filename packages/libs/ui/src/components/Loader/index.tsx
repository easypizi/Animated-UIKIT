import type { FC } from 'react';
import { Dot, Root, type RootProps } from './styled';

export interface LoaderProps extends RootProps {}

export const Loader: FC<LoaderProps> = ({
  color = 'neutral5',
  size = 20,
  ...rest
}) => {
  return (
    <Root color={color} size={size} {...rest}>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </Root>
  );
};
