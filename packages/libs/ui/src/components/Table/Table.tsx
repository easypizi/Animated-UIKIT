import type { FC, ReactNode } from 'react';
import { StyledTable } from './styled';
import type { TableVariant } from './types';

export interface TableProps {
  variant?: TableVariant;
  fullWidth?: boolean;
  children?: ReactNode;
}

export const Table: FC<TableProps> = ({
  variant = 'table',
  fullWidth = false,
  children,
}) => {
  return (
    <StyledTable variant={variant} fullWidth={fullWidth}>
      {children}
    </StyledTable>
  );
};
