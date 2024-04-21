import type { StoryFn } from '@storybook/react';
import { Accordion } from '..';

const getInnerAccordionContent = () => {
  return ['style1', 'style2', 'style3', 'style4', 'style5'].map((item) => (
    <div
      style={{
        width: '300px',
        height: '50px',
        marginBottom: '10px',
        borderBottom: '1px solid lightgray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {`${item}`}
    </div>
  ));
};

export const Template: StoryFn<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

Template.args = {
  title: 'Open me',
  padding: {
    top: 0,
    bottom: 4,
    side: 4,
  },
  children: getInnerAccordionContent(),
};
