import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ noInput?: boolean }>(
  ({ theme, noInput }) => css`
    .rselect__control {
      min-height: ${theme.spacing.get(11)};
      border-radius: ${theme.spacing.get(3)};
      box-shadow: 0 0 0 1px ${theme.palette.neutral60};

      ${theme.typography.base};
      font-size: 14px;
      line-height: 20px;
      color: ${theme.palette.neutral5};
      background: ${theme.palette.background.main};

      border: none;
    }

    .rselect__value-container {
      padding-left: ${theme.spacing.get(3)};
    }

    .rselect__indicator-separator {
      background-color: ${theme.palette.neutral60};
    }

    ${noInput &&
    css`
      .rselect__menu {
        min-width: 100%;
        width: max-content;
      }
      .rselect__control {
        min-height: 0;
        border: none;
        box-shadow: none;
        padding: 0;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        color: inherit;

        .rselect__input-container,
        .rselect__value-container,
        .rselect__placeholder,
        .rselect__placeholder {
          padding: 0;
          margin: 0;
        }

        .rselect__single-value {
          color: inherit;
        }

        .rselect__dropdown-indicator {
          padding: 0;

          svg {
            width: 1.5em;
            height: 1.5em;
          }
        }
      }
    `}
  `,
);
