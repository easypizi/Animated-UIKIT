import type { StoryFn } from '@storybook/react';
import * as iconComponents from '../components';

const items = Object.entries(iconComponents);

export const Showcase: StoryFn = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: '10px',
    }}
  >
    {items.map(([name, Icon]) => (
      <div
        key={name}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '15px 0',
          gap: '15px',
          width: '100%',
          border: '1px solid #aaaaaa55',
        }}
      >
        <pre style={{ margin: 0, opacity: 0.7 }}>{name}</pre>
        <Icon width={35} height={35} />
      </div>
    ))}
  </div>
);

Showcase.parameters = {};
