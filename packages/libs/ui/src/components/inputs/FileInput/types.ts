import type { ReactNode } from 'react';

export enum FileUploadStatus {
  Done = 'done',
  Uploading = 'uploading',
  Error = 'error',
}

export interface FileObject {
  id: string | number;
  url?: string;
  file?: File;
  type?: string;
  size?: number;
  name?: string;
  status?: FileUploadStatus;
  errorMessage?: string;
}
export interface FileProvider {
  id: string;
  placeholder: {
    icon: ReactNode;
    text: ReactNode;
    onClick: () => Promise<Partial<FileObject> | null>;
  };
}

export interface FileInputProps<
  Multiple extends boolean,
  UseObjects extends boolean,
  Item extends FileObject | File = UseObjects extends true ? FileObject : File,
  Value extends Array<Item> | Item = Multiple extends true ? Array<Item> : Item,
> {
  multiple?: Multiple;
  useObjects?: UseObjects;
  value: Value | null;
  onChange: (value: Value | null) => void;

  uploadItem?: (item: FileObject) => Promise<{ url: string }>;
  error?: boolean | ReactNode;
  label?: string;
  labelIcon?: ReactNode;
  description?: string;
  placeholder?: ReactNode;
  accept?: string;
  showUrlSetter?: boolean;
  children?: ReactNode;
  providers?: Array<FileProvider>;
  fullHeight?: boolean;
}

type FileInputPropsSingleFile = FileInputProps<false, false> & {
  multiple?: false;
  useObjects?: false;
};

type FileInputPropsSingleObject = FileInputProps<false, true> & {
  multiple?: false;
  useObjects: true;
};

type FileInputPropsMultipleFile = FileInputProps<true, false> & {
  multiple: true;
  useObjects?: false;
};

type FileInputPropsMultipleObject = FileInputProps<true, true> & {
  multiple: true;
  useObjects: true;
};

export type FileInputPropsUnion =
  | FileInputPropsSingleFile
  | FileInputPropsSingleObject
  | FileInputPropsMultipleFile
  | FileInputPropsMultipleObject;
