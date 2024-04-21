import { type FC, useCallback, useMemo } from 'react';
import { BinIcon, FileIcon, RefreshIcon } from '@easypizi/icons';
import { parseFileUrl } from '@easypizi/common';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemContentInfo,
  ItemContentName,
  ItemPreview,
} from './styled';
import { IconButton } from '../../IconButton';
import { formatBytesToString } from '../../../format';
import { type FileObject, FileUploadStatus } from './types';
import { Loader } from '../../Loader';

// #TODO: refactor

export interface FileInputItemProps {
  item: File | FileObject;
  disabled?: boolean;
  status?: FileUploadStatus;
  errorMessage?: string;
  onReplace?: (item: File | FileObject) => void;
  onRemove?: (item: File | FileObject) => void;
}

export const FileInputItem: FC<FileInputItemProps> = (props) => {
  let { item, disabled, status, errorMessage, onReplace, onRemove } = props;

  const replaceHandler = useCallback(() => {
    if (onReplace) {
      onReplace(item);
    }
  }, [item, onReplace]);

  const removeHandler = useCallback(() => {
    if (onRemove) {
      onRemove(item);
    }
  }, [item, onRemove]);

  const previewUrl = useMemo(() => {
    const file = item instanceof File ? item : item.file;
    if (file && file.type?.startsWith('image/')) {
      return URL.createObjectURL(file);
    }
    if (!(item instanceof File) && item.url) {
      const type = item.type ? item.type : parseFileUrl(item.url).type;
      if (type?.startsWith('image/')) {
        return item.url;
      }
    }
    return null;
  }, [item]);

  const fileSize = useMemo(() => {
    if (!item?.size) {
      return null;
    }
    return formatBytesToString(item.size);
  }, [item?.size]);

  let name = item.name || null;
  if (!(item instanceof File)) {
    if (!name && item.url) {
      name = item.url;
    }
    if (!status && item.status) {
      status = item.status;
    }
    if (!errorMessage && item.errorMessage) {
      errorMessage = item.errorMessage;
    }
  }

  const uploading = status === FileUploadStatus.Uploading;
  const info = errorMessage || fileSize;
  let allowReplace = false;
  if (item instanceof File || item.file) {
    allowReplace = true;
  }

  return (
    <Item error={status === FileUploadStatus.Error}>
      <ItemPreview src={previewUrl}>{!previewUrl && <FileIcon />}</ItemPreview>
      <ItemContent>
        {name && <ItemContentName>{name}</ItemContentName>}
        {info && <ItemContentInfo>{info}</ItemContentInfo>}
      </ItemContent>
      {uploading && (
        <ItemActions>
          <Loader />
        </ItemActions>
      )}
      {!uploading && (
        <ItemActions>
          {onReplace && allowReplace && (
            <IconButton
              size="xs"
              color="base"
              type="button"
              disabled={status === FileUploadStatus.Uploading || disabled}
              onClick={replaceHandler}
            >
              <RefreshIcon />
            </IconButton>
          )}
          {onRemove && (
            <IconButton
              size="xs"
              color="danger"
              type="button"
              loading={status === FileUploadStatus.Uploading}
              disabled={status === FileUploadStatus.Uploading || disabled}
              onClick={removeHandler}
            >
              <BinIcon />
            </IconButton>
          )}
        </ItemActions>
      )}
    </Item>
  );
};
