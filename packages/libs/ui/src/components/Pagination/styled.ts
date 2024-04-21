import styled, { css } from 'styled-components';

interface ItemProps {
  selected?: boolean;
  disabled?: boolean;
}

export const Item = styled.div<ItemProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 22px;
  height: 28px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;

  ${(p) => p.theme.typography.textSM};

  ${(p) =>
    p.selected &&
    css`
      background-color: ${p.theme.palette.neutral60};
    `}

  ${(p) =>
    p.disabled &&
    css`
      color: ${p.theme.palette.neutral40};
      pointer-events: none;
    `}

  svg {
    font-size: 20px;
  }
`;
