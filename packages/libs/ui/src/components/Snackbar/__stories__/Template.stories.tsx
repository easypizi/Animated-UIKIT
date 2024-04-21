import { useCallback, useState } from 'react';
import type { StoryFn } from '@storybook/react';
import { Snackbar, SnackbarItem } from '..';
import { Alert, type AlertProps } from '../../Alert';
import { Button } from '../../Button';

export const Template: StoryFn<typeof Snackbar> = (props) => {
  const [items, setItems] = useState<Array<AlertProps & { id: number }>>([]);

  const addItem = useCallback(() => {
    setItems((state) => {
      const id = Math.random();
      return [
        ...state,
        {
          id,
          children: `Random alert message ${id}`,
        },
      ];
    });
  }, []);

  const closeItem = useCallback((id: number) => {
    setItems((state) => state.filter((x) => x.id !== id));
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        transform: 'translate3d(0, 0, 0)',
        border: '1px dashed #ccc',
      }}
    >
      <Button size="xs" onClick={addItem}>
        Add snack
      </Button>
      <Snackbar {...props}>
        {items.map(({ id, ...item }) => (
          <SnackbarItem
            key={id}
            autoHideDuration={5000}
            onClose={() => closeItem(id)}
          >
            <Alert {...item} />
          </SnackbarItem>
        ))}
      </Snackbar>
    </div>
  );
};
