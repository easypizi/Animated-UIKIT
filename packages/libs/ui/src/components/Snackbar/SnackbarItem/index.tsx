import {
  type FC,
  type ReactElement,
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { Root } from './styled';
import type { SnackbarAnimation } from '../types';

export interface SnackbarItemProps {
  autoHideDuration?: number;
  paused?: boolean;
  provideOnClose?: boolean;
  animation?: SnackbarAnimation;
  children?: ReactElement<{ onClose?: () => void }>;
  onClose?: () => void;
}

export const SnackbarItem: FC<SnackbarItemProps> = (props) => {
  const {
    autoHideDuration,
    paused,
    provideOnClose = true,
    animation,
    children,
    onClose,
  } = props;
  const rootRef = useRef<HTMLDivElement | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClose = () => {
    if (rootRef.current) {
      rootRef.current.addEventListener('animationend', () => {
        if (rootRef.current) {
          rootRef.current.addEventListener('transitionend', () => {
            if (onClose) {
              onClose();
            }
          });
          rootRef.current.style.height = `${rootRef.current.clientHeight}px`;
          setTimeout(() => {
            if (rootRef.current) {
              rootRef.current.style.height = '0px';
            }
          }, 1);
        }
      });
      rootRef.current.classList.add('_leave');
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (autoHideDuration && autoHideDuration > 0 && !paused) {
      timer = setTimeout(() => {
        handleClose();
      }, autoHideDuration);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [paused, autoHideDuration, handleClose]);

  const content = useMemo(() => {
    if (provideOnClose && isValidElement(children)) {
      return cloneElement(children, {
        onClose: handleClose,
      });
    }
    return children;
  }, [children, provideOnClose, handleClose]);

  return (
    <Root ref={rootRef} animation={animation}>
      {content}
    </Root>
  );
};
