import { useCallback, useState, type FC } from 'react';
import { modalsService, type BaseModalProps } from '..';
import { Drawer, Modal, Stack, TextInput } from '../../../components';

interface DemoModalProps extends BaseModalProps {
  value?: string;
  onSave?: (value: string) => void;
}

export const DemoModal3: FC<DemoModalProps> = (props) => {
  const { value: initialValue = '', onSave, onClose } = props;
  const [value, setValue] = useState(initialValue);

  const save = useCallback(() => {
    if (onSave) {
      onSave(value);
    }
    if (onClose) {
      onClose();
    }
  }, [value, onSave, onClose]);

  const backToDrawer = useCallback(() => {
    // eslint-disable-next-line no-use-before-define
    modalsService.open(DemoModal2, {
      value,
      onSave,
    });
    if (onClose) {
      onClose();
    }
  }, [value, onSave, onClose]);

  return (
    <Modal {...props}>
      <h2>Modal demo</h2>
      <Stack direction="column" gap={10}>
        <TextInput fullWidth value={value} onChangeText={setValue} />
        <Stack direction="row" gap={6} justifyContent="center">
          <button onClick={onClose}>Cancel</button>
          <button onClick={backToDrawer}>Back to drawer level 2</button>
          <button onClick={save}>Save</button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export const DemoModal2: FC<DemoModalProps> = (props) => {
  const { value: initialValue = '', onSave, onClose, ...rest } = props;
  const [value, setValue] = useState(initialValue);

  const save = useCallback(() => {
    if (onSave) {
      onSave(value);
    }
    if (onClose) {
      onClose();
    }
  }, [value, onSave, onClose]);

  const showModal = useCallback(() => {
    modalsService.open(DemoModal3, {
      value,
      onSave,
    });
    if (onClose) {
      onClose();
    }
  }, [value, onSave, onClose]);

  return (
    <Drawer {...rest} onClose={onClose}>
      <h2>Drawer Level 2</h2>
      <Stack direction="column" gap={10}>
        <TextInput fullWidth value={value} onChangeText={setValue} />
        <Stack direction="row" gap={6} justifyContent="center">
          <button onClick={onClose}>Cancel</button>
          <button onClick={showModal}>Edit in modal</button>
          <button onClick={save}>Save</button>
        </Stack>
      </Stack>
    </Drawer>
  );
};

export const DemoModal1: FC<DemoModalProps> = (props) => {
  const { value: initialValue = '', onSave, onClose, ...rest } = props;
  const [value, setValue] = useState(initialValue);

  const openEditor = useCallback(() => {
    modalsService.open(DemoModal2, {
      value,
      onSave: setValue,
    });
  }, [value]);

  const save = useCallback(() => {
    if (onSave) {
      onSave(value);
    }
    if (onClose) {
      onClose();
    }
  }, [value, onSave, onClose]);

  return (
    <Drawer {...rest} onClose={onClose}>
      <h2>Drawer Level 1</h2>
      <Stack direction="column" gap={10}>
        <Stack direction="row" gap={6} justifyContent="center">
          <div>Value: {value}</div>
          <button onClick={openEditor}>Edit</button>
        </Stack>
        <Stack direction="row" gap={6} justifyContent="center">
          <button onClick={onClose}>Cancel</button>
          <button onClick={save}>Save</button>
        </Stack>
      </Stack>
    </Drawer>
  );
};
