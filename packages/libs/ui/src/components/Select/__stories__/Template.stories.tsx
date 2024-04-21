import type { StoryFn } from '@storybook/react';
import { EuroIcon, RubleIcon } from '@easypizi/icons';
import { Select } from '..';
import { Typography } from '../../Typography';

const getIconByCurrency = (value: string) => {
  if (value === 'RUB') {
    return <RubleIcon fontSize={20} />;
  }
  if (value === 'EUR') {
    return <EuroIcon fontSize={20} />;
  }
  return null;
};

const getOption = (value: string) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '2px 5px',
        width: '100%',
        minWidth: '200px',
        gap: '10px',
      }}
    >
      {getIconByCurrency(value)}
      <Typography>{value}</Typography>
    </div>
  );
};

const options = [
  {
    value: 'RUB',
    label: 'RUB',
  },
  {
    value: 'EUR',
    label: 'EUR',
  },
  {
    value: 'USD',
    label: 'USD',
  },
  {
    value: 'BTC',
    label: 'BTC',
  },
];

export const Template: StoryFn<typeof Select> = (args) => (
  <div
    style={{
      width: '300px',
      height: '300px',
      display: 'flex',
      padding: '10px',
      alignItems: 'flex-end',
    }}
  >
    <Select {...args} />
  </div>
);

Template.args = {
  options,
  fullWidth: true,
  defaultValue: 'EUR',
  title: 'Currency',
  titleVariant: 'textMD',
  optionsVariant: 'textLG',
  renderOption: (label) => getOption(label as string),
};
