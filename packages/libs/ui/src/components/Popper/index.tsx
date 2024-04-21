import {
  type ReactNode,
  useRef,
  type FC,
  cloneElement,
  type ReactElement,
} from 'react';
import {
  offset,
  shift,
  flip,
  useFloating,
  autoUpdate,
  useInteractions,
  useHover,
  useDismiss,
  arrow,
  useTransitionStyles,
  type Placement,
  useClick,
  FloatingPortal,
  safePolygon,
  type ShiftOptions,
  type FlipOptions,
} from '@floating-ui/react';
import { useTheme } from 'styled-components';
import { Arrow, Container } from './styled';

export interface PopperShiftOptions extends ShiftOptions {}
export interface PopperFlipOptions extends FlipOptions {}

export interface PopperProps {
  content?: ReactNode;
  children: ReactElement;
  placement?: Placement;
  arrow?: boolean;
  isOpen?: boolean;
  isOpenChange?: (isOpen: boolean) => void;
  className?: string;
  trigger?: 'hover' | 'click' | null;
  portal?: boolean;
  disabled?: boolean;
  interactive?: boolean;
  shiftOptions?: PopperShiftOptions;
  flipOptions?: PopperFlipOptions;
}

export const Popper: FC<PopperProps> = ({
  children,
  content: popperContent,
  placement,
  arrow: withArrow = false,
  className,
  trigger = 'hover',
  portal = true,
  isOpen = true,
  disabled = false,
  interactive = false,
  shiftOptions = {},
  flipOptions = {},
  isOpenChange,
}) => {
  const theme = useTheme();
  const arrowRef = useRef(null);

  const {
    refs: { setReference, setFloating },
    floatingStyles,
    context,
  } = useFloating({
    open: isOpen,
    onOpenChange: isOpenChange,
    placement,
    middleware: [
      offset(12),
      flip({
        altBoundary: true,
        ...flipOptions,
      }),
      shift({
        altBoundary: true,
        crossAxis: true,
        ...shiftOptions,
      }),
      arrow({
        padding: 8,
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, {
    move: false,
    enabled: !disabled && trigger === 'hover',
    handleClose: interactive ? safePolygon() : undefined,
  });
  const click = useClick(context, {
    enabled: !disabled && trigger === 'click',
  });
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    click,
    dismiss,
  ]);

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    initial: {
      transform: 'scale(0.8)',
      opacity: 0,
    },
  });

  const content = isMounted ? (
    <div
      ref={setFloating}
      style={{
        ...floatingStyles,
        zIndex: theme.zIndex.popper,
        pointerEvents: interactive ? 'all' : 'none',
      }}
      {...getFloatingProps()}
    >
      <div style={transitionStyles}>
        <Container className={className}>
          {popperContent}
          {withArrow && (
            <Arrow tipRadius={2} height={8} ref={arrowRef} context={context} />
          )}
        </Container>
      </div>
    </div>
  ) : null;

  return (
    <>
      {cloneElement(children, {
        ref: setReference,
        ...getReferenceProps(),
      })}
      {content && portal ? <FloatingPortal>{content}</FloatingPortal> : content}
    </>
  );
};
