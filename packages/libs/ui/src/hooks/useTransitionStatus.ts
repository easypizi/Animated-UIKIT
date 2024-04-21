import { useEffect, useState } from 'react';

export enum TransitionStatus {
  Initial = 'initial',
  Enter = 'enter',
  Leave = 'leave',
  Unmounted = 'unmounted',
}

export interface UseTransitionStatusOptions {
  onUnmount?: () => void;
  duration?: number;
  classNames?: Partial<
    Omit<Record<TransitionStatus, string | undefined>, 'unmounted' | 'initial'>
  >;
}

// very primitive realization
// #TODO: refactor
export const useTransitionStatus = (
  isAvtive: boolean,
  options: UseTransitionStatusOptions = {},
): {
  mounted: boolean;
  className: string | undefined;
} => {
  const { duration = 500, classNames = {}, onUnmount } = options;
  const { enter: enterCN = 'enter', leave: leaveCN = 'leave' } = classNames;

  const [status, setStatus] = useState<TransitionStatus>(
    TransitionStatus.Initial,
  );
  const [className, setClassName] = useState<string | undefined>();

  useEffect(() => {
    if (isAvtive) {
      setStatus(TransitionStatus.Enter);
      return;
    }
    setStatus((state) => {
      if (state === TransitionStatus.Initial) {
        return state;
      }
      return TransitionStatus.Leave;
    });
  }, [isAvtive]);

  useEffect(() => {
    if (status === TransitionStatus.Leave) {
      setTimeout(() => {
        setStatus(TransitionStatus.Unmounted);
        if (onUnmount) {
          onUnmount();
        }
      }, duration);
    }
    // Timeout used for make css transition based on class
    setTimeout(() => {
      if (status === TransitionStatus.Enter) {
        setClassName(enterCN);
      } else if (status === TransitionStatus.Leave) {
        setClassName(leaveCN);
      } else {
        setClassName(undefined);
      }
    }, 10);
  }, [duration, enterCN, leaveCN, onUnmount, status]);

  return {
    mounted:
      status === TransitionStatus.Enter || status === TransitionStatus.Leave,
    className,
  };
};
