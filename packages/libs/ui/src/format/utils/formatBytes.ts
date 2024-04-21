export const formatBytesToString = (size: number): string => {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB'];

  let convertedSize = size;
  let unitIndex = 0;

  while (convertedSize >= 1024 && unitIndex < units.length - 1) {
    convertedSize /= 1024;
    unitIndex += 1;
  }

  return `${convertedSize.toFixed(1)} ${units[unitIndex]}`;
};
