import { useTheme } from 'styled-components';
import { useMemo } from 'react';
import type { Breakpoint } from '../themes';
import { useMediaQuery } from './useMediaQuery';

type BreakpointFunc = 'up' | 'down' | 'between' | 'only' | 'not';

export function useBreakpoint(
  type: 'between',
  from: Breakpoint | number,
  to: Breakpoint | number,
): boolean;

export function useBreakpoint(
  type: Exclude<BreakpointFunc, 'between'>,
  breakpoint: Breakpoint | number,
): boolean;

export function useBreakpoint(
  type: BreakpointFunc,
  ...values: Array<Breakpoint | number>
): boolean {
  const { breakpoints } = useTheme();

  const query = useMemo(() => {
    let mediaQuery = '';
    if (type === 'between') {
      mediaQuery = breakpoints.between(values[0], values[1]);
    } else if (typeof breakpoints[type] === 'function') {
      mediaQuery = breakpoints[type](values[0]);
    }
    return mediaQuery.replace(/^@media( ?)/m, '');
  }, [type, breakpoints, values]);

  return useMediaQuery(query);
}
