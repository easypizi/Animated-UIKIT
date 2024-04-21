import { useMemo, type FC } from 'react';
import { getColorByString } from '@easypizi/common';
import { CoverTitle, CoverWrapper } from './styled';
import { Image } from '../Image';

interface CoverProps {
  title?: string;
  imageSrc?: string | null;
  rounded?: boolean;
  aspectRatio?: number;
  className?: string;
}

export const Cover: FC<CoverProps> = ({
  title,
  imageSrc,
  rounded,
  aspectRatio,
  className,
}) => {
  const letters = useMemo(() => {
    if (!title) {
      return '';
    }

    const words = title.split(/\s+|-|_/).filter((word) => word.length > 1);
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }
    return words
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }, [title]);

  const bgColors = useMemo(() => {
    if (!title || !title.length) {
      return `${getColorByString('scade')}, ${getColorByString('pro')}`;
    }

    return `${getColorByString(title)}, ${getColorByString(
      title.split('').reverse().join(),
    )}`;
  }, [title]);

  return imageSrc ? (
    <Image
      className={className}
      type="skeleton"
      alt={title}
      placeholder={title}
      src={imageSrc ?? null}
      rounded={rounded}
      aspectRatio={aspectRatio}
    />
  ) : (
    <CoverWrapper
      aspectRatio={aspectRatio}
      rounded={rounded}
      bgColors={bgColors}
      className={className}
    >
      <CoverTitle>{letters}</CoverTitle>
    </CoverWrapper>
  );
};
