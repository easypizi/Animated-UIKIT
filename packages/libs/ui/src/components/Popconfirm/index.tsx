import { useState, type FC, useMemo, type ReactNode, useCallback } from 'react';
import { Popover, PopoverActions, type PopoverProps } from '../Popover';
import { Button, type ButtonProps } from '../Button';

interface PopconfirmProps extends PopoverProps {
  title?: ReactNode;
  description?: ReactNode;
  okText?: ReactNode;
  okButtonProps?: Partial<ButtonProps>;
  showCancel?: boolean;
  cancelText?: ReactNode;
  cancelButtonProps?: Partial<ButtonProps>;
  skip?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export const Popconfirm: FC<PopconfirmProps> = ({
  placement = 'top',
  trigger = 'click',
  description,
  okText = 'Ok',
  okButtonProps = {},
  showCancel = true,
  cancelText = 'Cancel',
  cancelButtonProps = {},
  skip = false,
  onCancel,
  onConfirm,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeOpen = useCallback(
    (value: boolean) => {
      if (skip && value) {
        if (onConfirm) {
          onConfirm();
          return;
        }
      }
      setIsOpen(value);
    },
    [skip, onConfirm],
  );

  const cancel = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      if (onCancel) {
        onCancel();
      }
      setIsOpen(false);
    },
    [onCancel],
  );

  const confirm = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      if (onConfirm) {
        onConfirm();
      }
      setIsOpen(false);
    },
    [onConfirm],
  );

  const content = useMemo(() => {
    return (
      <div>
        {description}
        <PopoverActions justifyContent="flex-end">
          {showCancel && (
            <Button
              type="button"
              size="xs"
              color="base"
              onClick={cancel}
              {...cancelButtonProps}
            >
              {cancelText}
            </Button>
          )}
          <Button
            type="button"
            size="xs"
            color="primary"
            onClick={confirm}
            {...okButtonProps}
          >
            {okText}
          </Button>
        </PopoverActions>
      </div>
    );
  }, [
    description,
    okText,
    okButtonProps,
    showCancel,
    cancelText,
    cancelButtonProps,
    confirm,
    cancel,
  ]);

  return (
    <Popover
      trigger={trigger}
      placement={placement}
      isOpen={isOpen}
      isOpenChange={handleChangeOpen}
      content={content}
      {...rest}
    />
  );
};
