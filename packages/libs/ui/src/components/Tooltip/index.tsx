import { useState, type FC } from 'react';
import type { PopperProps } from '../Popper';
import { PopperTooltip } from './styled';

interface TooltipProps extends PopperProps {}

export const Tooltip: FC<TooltipProps> = ({
  placement = 'top',
  trigger = 'hover',
  arrow = true,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <PopperTooltip
      trigger={trigger}
      placement={placement}
      arrow={arrow}
      isOpen={isOpen}
      isOpenChange={setIsOpen}
      {...rest}
    />
  );
};
