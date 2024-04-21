import { useState, type FC, useMemo, type ReactNode } from 'react';
import type { PopperProps } from '../Popper';
import { StyledPopper, Title } from './styled';

export interface PopoverProps extends PopperProps {
  title?: ReactNode;
  width?: string;
}

export const Popover: FC<PopoverProps> = ({
  placement = 'top',
  trigger = 'click',
  title,
  content: body,
  width,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const content = useMemo(() => {
    return (
      <>
        {title && <Title>{title}</Title>}
        {body}
      </>
    );
  }, [title, body]);

  return (
    <StyledPopper
      trigger={trigger}
      placement={placement}
      isOpen={isOpen}
      isOpenChange={setIsOpen}
      content={content}
      width={width}
      interactive
      {...rest}
    />
  );
};
