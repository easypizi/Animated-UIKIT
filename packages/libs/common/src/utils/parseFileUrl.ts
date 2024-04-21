import { getFileMimeTypeByExtension } from './mimeType';

export const parseFileUrl = (
  url: string,
): { name: string | null; extension: string | null; type: string | null } => {
  const regex =
    /^(?:https?:\/\/\S+\/)?(?:(?<name1>[^/?]+)(?:\.(?<extension>\w+))|(?<name2>[^/?]+))(?:\?.*)?$/;
  const match = url.match(regex);
  const { name1 = null, name2 = null, extension = null } = match?.groups || {};

  const name = name1 || name2;
  const type = extension ? getFileMimeTypeByExtension(extension) : null;

  return {
    name,
    extension,
    type,
  };
};

export const urlIsImage = (str: string): boolean => {
  const { type } = parseFileUrl(str);
  return type?.startsWith('image') || false;
};

export const urlIsVideo = (str: string): boolean => {
  const { type } = parseFileUrl(str);
  return type?.startsWith('video') || false;
};

export const urlIsAudio = (str: string): boolean => {
  const { type } = parseFileUrl(str);
  return type?.startsWith('audio') || false;
};
