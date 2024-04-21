import styled, { css } from 'styled-components';

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${(p) => p.theme.spacing.get(3)};
  margin-bottom: ${(p) => p.theme.spacing.get(3)};
`;

export const LabelIcon = styled.div`
  font-size: ${(p) => p.theme.spacing.get(8)};
  line-height: 0;
  color: ${(p) => p.theme.palette.neutral20};
`;

export const LabelContent = styled.div`
  ${(p) => p.theme.typography.textSM};
  color: ${(p) => p.theme.palette.neutral5};

  ${LabelIcon} + & {
    ${(p) => p.theme.typography.textSMBold};
  }
`;

export const LabelDescription = styled.div`
  ${(p) => p.theme.typography.textXS};
  color: ${(p) => p.theme.palette.neutral10};
`;

export const InputWrapper = styled.div(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: ${theme.spacing.get(2)};
    padding: ${theme.spacing.get(4)};
    border: 1px dashed ${theme.palette.neutral60};
    border-radius: ${theme.spacing.get(3)};
    background-color: ${theme.palette.neutral80};
  `,
);

export const StyledInput = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
`;

export const InputPlaceholder = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing.get(1)};
    min-height: ${theme.spacing.get(10)};
    color: ${theme.palette.neutral10};
    ${theme.typography.textSM};
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  `,
);

export const PlaceholderDivider = styled.div`
  width: 1px;
  height: ${(p) => p.theme.spacing.get(8)};
  background-color: ${(p) => p.theme.palette.neutral60};
`;

export const PlaceholderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ItemPreview = styled.div<{ src?: string | null }>(
  ({ theme, src }) => css`
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${theme.spacing.get(10)};
    height: ${theme.spacing.get(10)};
    border-radius: ${theme.spacing.get(3)};
    font-size: ${theme.spacing.get(7)};
    color: ${theme.palette.neutral10};

    ${src &&
    css`
      background-image: url(${src});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    `}
  `,
);

export const ItemContent = styled.div(
  ({ theme }) => css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${theme.spacing.get(1)};
    overflow: hidden;
  `,
);

export const ItemContentName = styled.div(
  ({ theme }) => css`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    direction: rtl;
    text-align: left;
    ${theme.typography.textSM};
    color: ${theme.palette.neutral5};
  `,
);

export const ItemContentInfo = styled.div(
  ({ theme }) => css`
    ${theme.typography.textXS};
    color: ${theme.palette.neutral10};
  `,
);

export const ItemActions = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: ${theme.spacing.get(2)};
    margin-left: auto;
    flex-shrink: 0;
  `,
);

export const Item = styled.div<{ error?: boolean }>(
  ({ theme, error }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: ${theme.spacing.get(3)};

    ${error &&
    css`
      ${ItemContentName} {
        color: ${theme.palette.danger100};
      }
      ${ItemContentInfo} {
        color: ${theme.palette.danger100};
      }
    `}
  `,
);

export const Root = styled.div<{ fullHeight?: boolean }>`
  ${(p) =>
    p.fullHeight &&
    css`
      min-height: 100%;
      display: flex;
      flex-direction: column;

      ${InputWrapper} {
        flex-grow: 1;
        justify-content: center;
      }
    `}
`;
