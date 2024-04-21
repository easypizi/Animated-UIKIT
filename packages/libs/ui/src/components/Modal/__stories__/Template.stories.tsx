import { useCallback, useState } from 'react';
import type { StoryFn } from '@storybook/react';
import { Modal } from '..';
import { Typography } from '../../Typography';
import { Button } from '../../Button';

export const Template: StoryFn<typeof Modal> = (args) => {
  const [isModalOpened, setIsOpened] = useState(false);

  const openModalWindow = useCallback(() => {
    setIsOpened(true);
  }, []);

  const closeModalHandler = useCallback(() => {
    setIsOpened(false);
  }, []);

  return (
    <div
      style={{
        width: '500px',
        height: '500px',
      }}
    >
      <Button size="md" onClick={openModalWindow}>
        Open modal
      </Button>
      <Modal {...args} isOpen={isModalOpened} onClose={closeModalHandler}>
        <div style={{ marginBottom: '20px' }}>
          <Typography variant="headerMD">Dialog title</Typography>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Typography variant="textMD">Dialog description</Typography>
        </div>
        <div style={{ marginBottom: '30px' }}>
          <Typography>
            This beautiful modal window has overlay, you can close it by click
            outside of the modal window, on close button, or by Close button
            below.
          </Typography>
        </div>
        <div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
          <Button
            fullWidth
            variant="text"
            color="light"
            onClick={closeModalHandler}
          >
            Close
          </Button>
          <Button fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
};

Template.args = {
  topOffset: 80,
};
