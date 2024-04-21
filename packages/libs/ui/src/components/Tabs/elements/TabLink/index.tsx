import type { FC, ReactNode } from 'react';
import type { ThemeTypographyKey } from '../../../../themes';
import { StyledTabLink } from './styled';

type LinkProps = {
  path: string;
  variant?: ThemeTypographyKey;
  children?: ReactNode;
};

export const TabLink: FC<LinkProps> = ({ children, path, variant }) => {
  return (
    <StyledTabLink variant={variant} to={path}>
      {children}
    </StyledTabLink>
  );
};
