import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import type { ThemeTypographyKey } from '../../../../themes';

interface StyledLinkProps {
  variant?: ThemeTypographyKey;
}

export const StyledTabLink = styled(NavLink)<StyledLinkProps>`
  ${({ theme, variant = 'base' }) => theme.typography[variant]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  color: ${({ theme }) => theme.palette.neutral10};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.get(3, 4, 3.5)};
  box-sizing: border-box;
  &:visited {
    color: ${({ theme }) => theme.palette.neutral10};
  }
  &.active {
    color: ${({ theme }) => theme.palette.primary100};
  }
`;
