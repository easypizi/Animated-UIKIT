import styled, { css } from 'styled-components';

export const TabsOuterWrapper = styled.div`
  width: 100%;
`;

export const TabsInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spacing.get(3)};
  position: relative;
  background: ${({ theme }) => theme.palette.background.main};
  &:before {
    content: '';
    height: 2px;
    width: 100%;
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    border-radius: 12px;
    background: ${({ theme }) => theme.palette.neutral60};
  }
`;

export const Tab = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
  z-index: 2;

  &.active {
    &:before {
      content: '';
      ${({ theme }) => css`
        height: ${theme.spacing.get(0.5)};
        border-radius: ${theme.spacing.get(3)};
        background: ${theme.palette.primary100};
      `}
      height: 2px;
      width: 100%;
      position: absolute;
      z-index: 0;
      bottom: 0;
      left: 0;
    }
  }
`;
