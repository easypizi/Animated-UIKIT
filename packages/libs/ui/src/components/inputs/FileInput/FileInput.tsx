import {
  type ChangeEvent,
  type FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  Fragment,
} from 'react';
import { UploadIcon } from '@easypizi/icons';
import {
  InputPlaceholder,
  InputWrapper,
  LabelContent,
  LabelDescription,
  LabelIcon,
  LabelWrapper,
  PlaceholderDivider,
  PlaceholderRow,
  Root,
  StyledInput,
} from './styled';
import { FileInputItem } from './FileInputItem';
import {
  type FileInputPropsUnion,
  type FileObject,
  FileUploadStatus,
  type FileProvider,
} from './types';
import { FileInputSetUrlPlaceholder } from './FileInputSetUrlPlaceholder';

// TODO: refactor
// TODO: add maxCount / maxSize

export const FileInput: FC<FileInputPropsUnion> = ({
  multiple = false,
  useObjects = false,
  value,
  uploadItem,
  onChange,
  label,
  labelIcon,
  description,
  placeholder: placeholderText,
  providers,
  accept,
  showUrlSetter,
  children,
  fullHeight,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const itemToReplaceRef = useRef<File | FileObject | null>(null);
  // TODO: fix types and remove any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [localValue, setLocalValue] = useState<any>(value || null);

  const updateOrAppendItem = useCallback(
    (item: File | FileObject) => {
      setLocalValue((state) => {
        if (!multiple) {
          return item;
        }
        if (!state) {
          return [item];
        }
        let updated = false;
        const newState = state.map((x) => {
          if (x === item || (!(item instanceof File) && x.id === item.id)) {
            updated = true;
            return item;
          }
          return x;
        });
        if (!updated) {
          newState.push(item);
        }
        return newState;
      });
    },
    [multiple],
  );

  const executeUploadItem = useCallback(
    async (item: FileObject) => {
      if (!uploadItem) {
        return;
      }
      updateOrAppendItem({
        ...item,
        status: FileUploadStatus.Uploading,
      });
      try {
        const result = await uploadItem(item);
        updateOrAppendItem({
          ...item,
          ...result,
          status: FileUploadStatus.Done,
        });
      } catch (error) {
        updateOrAppendItem({
          ...item,
          status: FileUploadStatus.Error,
          errorMessage: error.message,
        });
      }
    },
    [uploadItem, updateOrAppendItem],
  );

  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files || event.target.files.length === 0) {
        itemToReplaceRef.current = null;
        return;
      }

      const files: Array<File> = Array.from(event.target.files);
      let items: Array<File | FileObject> = files;

      if (useObjects) {
        items = files.map((file) => {
          const fileObject: FileObject = {
            id: Math.random(),
            file,
            name: file.name,
            size: file.size,
            type: file.type,
          };
          return fileObject;
        });
      }

      if (multiple) {
        setLocalValue((state) => {
          let newState: Array<File | FileObject> = items;

          if (state && itemToReplaceRef.current && newState.length > 0) {
            const [newItem, ...rest] = newState;
            newState = state.map((x) =>
              x === itemToReplaceRef.current ? newItem : x,
            );
            if (rest.length > 0) {
              newState = [...newState, ...rest];
            }
          } else if (state) {
            newState = [...state, ...newState];
          }

          itemToReplaceRef.current = null;
          return newState;
        });
      } else {
        setLocalValue(items[0]);
      }

      if (useObjects && uploadItem) {
        items.forEach((x) => executeUploadItem(x as FileObject));
      }
    },
    [useObjects, multiple, uploadItem, executeUploadItem],
  );

  const openFileUploader = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, []);

  const replaceItem = useCallback((file: File | FileObject) => {
    if (inputRef.current) {
      itemToReplaceRef.current = file;
      const isMultiple = inputRef.current.multiple;
      if (isMultiple) {
        inputRef.current.multiple = false;
      }
      inputRef.current.click();
      if (isMultiple) {
        inputRef.current.multiple = true;
      }
    }
  }, []);

  const removeItem = useCallback((file: File | FileObject) => {
    setLocalValue((state) => {
      if (Array.isArray(state)) {
        return state.filter((x) => x !== file);
      }
      return null;
    });
  }, []);

  useEffect(() => {
    if (onChange) {
      onChange(localValue);
    }
  }, [localValue, onChange]);

  const labelElement = useMemo(() => {
    if (label || labelIcon || description) {
      return (
        <LabelWrapper>
          {labelIcon && <LabelIcon>{labelIcon}</LabelIcon>}
          <LabelContent>
            {label}
            {description && <LabelDescription>{description}</LabelDescription>}
          </LabelContent>
        </LabelWrapper>
      );
    }
    return null;
  }, [label, labelIcon, description]);

  const content = useMemo(() => {
    if (children) {
      return children;
    }
    if (!localValue || localValue.length === 0) {
      return null;
    }
    const items = Array.isArray(localValue) ? localValue : [localValue];
    return (
      <>
        {items.map((item) => (
          <FileInputItem
            key={item.id || item.name}
            item={item}
            onReplace={replaceItem}
            onRemove={removeItem}
          />
        ))}
      </>
    );
  }, [children, localValue, replaceItem, removeItem]);

  const placeholder = useMemo(() => {
    const clickWrapper = (handler: FileProvider['placeholder']['onClick']) => {
      if (!handler) {
        return undefined;
      }
      return async () => {
        const result = await handler();
        if (result) {
          if (!result.id) {
            result.id = Math.random();
          }
          if (multiple) {
            setLocalValue((state) => [...state, result]);
          } else {
            setLocalValue(result);
          }
        }
      };
    };

    const onSetUrl = (item: FileObject) => {
      if (multiple) {
        setLocalValue((state) => {
          if (state) {
            return [...state, item];
          }

          return [item];
        });
      } else {
        setLocalValue(item);
      }
    };

    return (
      <PlaceholderRow>
        <InputPlaceholder onClick={openFileUploader}>
          <UploadIcon />
          {placeholderText}
        </InputPlaceholder>
        {showUrlSetter && useObjects && (
          <>
            <PlaceholderDivider />
            <FileInputSetUrlPlaceholder onSet={onSetUrl} />
          </>
        )}
        {providers?.map((x) => (
          <Fragment key={`${x.id}_fragment`}>
            <PlaceholderDivider key={`${x.id}_divider`} />
            <InputPlaceholder
              key={x.id}
              onClick={clickWrapper(x.placeholder.onClick)}
            >
              {x.placeholder.icon}
              {x.placeholder.text}
            </InputPlaceholder>
          </Fragment>
        ))}
      </PlaceholderRow>
    );
  }, [
    placeholderText,
    showUrlSetter,
    useObjects,
    multiple,
    providers,
    openFileUploader,
  ]);

  return (
    <Root fullHeight={fullHeight}>
      {labelElement}
      <InputWrapper>
        <StyledInput
          ref={inputRef}
          type="file"
          value={multiple ? [] : ''}
          multiple={multiple}
          accept={accept}
          onChange={changeHandler}
        />
        {content}
        {(multiple || !localValue) && placeholder}
      </InputWrapper>
    </Root>
  );
};
