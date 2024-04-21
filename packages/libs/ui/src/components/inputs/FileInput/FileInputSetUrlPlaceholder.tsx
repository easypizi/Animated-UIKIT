import { useState, type FC, useCallback } from 'react';
import { LinkChainIcon } from '@easypizi/icons';
import { Popover, PopoverActions } from '../../Popover';
import { TextInput } from '../TextInput';
import { Button } from '../../Button';
import type { FileObject } from './types';
import { InputPlaceholder } from './styled';

export interface FileInputSetUrlPlaceholderProps {
  onSet?: (result: FileObject) => void;
}

export const FileInputSetUrlPlaceholder: FC<FileInputSetUrlPlaceholderProps> = (
  props,
) => {
  const { onSet } = props;

  const [urlInputIsOpen, setUrlInputIsOpen] = useState(false);
  const [urlInputValue, setUrlInputValue] = useState('');

  const close = useCallback(() => {
    setUrlInputValue('');
    setUrlInputIsOpen(false);
  }, []);

  const save = useCallback(() => {
    if (onSet) {
      onSet({
        id: Math.random(),
        url: urlInputValue,
      });
    }
    setUrlInputValue('');
    setUrlInputIsOpen(false);
  }, [urlInputValue, onSet]);

  return (
    <Popover
      title="Set image url"
      isOpen={urlInputIsOpen}
      placement="top"
      isOpenChange={setUrlInputIsOpen}
      arrow
      width="320px"
      content={
        <div>
          <TextInput
            value={urlInputValue}
            fullWidth
            onChangeText={setUrlInputValue}
            placeholder="Image URL"
          />
          <PopoverActions>
            <Button size="xs" color="base" onClick={close}>
              Cancel
            </Button>
            <Button size="xs" color="primary" onClick={save}>
              Accept
            </Button>
          </PopoverActions>
        </div>
      }
    >
      <InputPlaceholder>
        <LinkChainIcon />
        Set url
      </InputPlaceholder>
    </Popover>
  );
};
