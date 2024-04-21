/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType, ReactElement } from 'react';

type AsType = keyof JSX.IntrinsicElements | ComponentType<any>;

type AsProps<As extends AsType = AsType> = {
  as?: As;
} & (As extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[As]
  : As extends ComponentType<infer Props>
    ? Props
    : any);

// #TODO: Return full type FunctionComponent
export type FCWithAs<DefaultAs extends AsType, Props = object> = <
  As extends AsType = DefaultAs,
>(
  props: Props & AsProps<As>,
) =>
  | ReactElement<any, any>
  | (null & {
      defaultProps?: Partial<Props & AsProps<DefaultAs>>;
      displayName?: string;
    });
