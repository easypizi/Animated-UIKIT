const mimeTypeExtensionMap = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  'image/bmp': 'bmp',
  'image/webp': 'webp',
  'image/svg+xml': 'svg',
  'application/pdf': 'pdf',
  'text/plain': 'txt',
  // Video
  'video/mp4': 'mp4',
  'video/webm': 'webm',
  'video/ogg': 'ogv',
  'video/x-msvideo': 'avi',
  'video/x-ms-wmv': 'wmv',
  'video/quicktime': 'mov',
  'video/mpeg': 'mpeg',
  'video/3gpp': '3gp',
  'video/3gpp2': '3g2',
  'video/x-matroska': 'mkv',
  // Audio
  'audio/mpeg': 'mp3',
  'audio/ogg': 'oga',
  'audio/wav': 'wav',
  'audio/webm': 'weba',
  'audio/aac': 'aac',
  'audio/mp4': 'm4a',
  'audio/x-m4a': 'm4a',
  'audio/x-aiff': 'aiff',
  'audio/flac': 'flac',
};

const extensionMimeTypeMap = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  bmp: 'image/bmp',
  webp: 'image/webp',
  svg: 'image/svg+xml',
  pdf: 'application/pdf',
  txt: 'text/plain',
  // Video
  mp4: 'video/mp4',
  webm: 'video/webm',
  ogv: 'video/ogg',
  avi: 'video/x-msvideo',
  wmv: 'video/x-ms-wmv',
  mov: 'video/quicktime',
  mpeg: 'video/mpeg',
  mpg: 'video/mpeg',
  '3gp': 'video/3gpp',
  '3g2': 'video/3gpp2',
  mkv: 'video/x-matroska',
  // Audio
  mp3: 'audio/mpeg',
  oga: 'audio/ogg',
  ogg: 'audio/ogg',
  wav: 'audio/wav',
  weba: 'audio/webm',
  aac: 'audio/aac',
  m4a: 'audio/mp4',
  aiff: 'audio/x-aiff',
  flac: 'audio/flac',
};

export const getFileExtensionByMimeType = (mimeType: string): string | null => {
  if (mimeType in mimeTypeExtensionMap) {
    return mimeTypeExtensionMap[mimeType] || null;
  }
  return null;
};

export const getFileMimeTypeByExtension = (
  extension: string,
): string | null => {
  const lower = extension.toLocaleLowerCase();
  if (lower in extensionMimeTypeMap) {
    return extensionMimeTypeMap[lower] || null;
  }
  return null;
};
