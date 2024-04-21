import type { FC } from 'react';
import { type StackProps } from '../Stack';
import { Footer } from './styled';

export interface PopoverActionsProps extends StackProps {}

export const PopoverActions: FC<PopoverActionsProps> = ({
  direction = 'row',
  gap = 3,
  alignItems = 'center',
  justifyContent = 'center',
  ...rest
}) => {
  return (
    <Footer
      direction={direction}
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...rest}
    />
  );
};
