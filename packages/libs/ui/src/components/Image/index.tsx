import { type FC, useCallback, useEffect, useState } from 'react';
import { Skeleton } from '../Skeleton';
import { BluredImage, LazyImage, type StyledImageProps } from './styled';

type ImageProps = StyledImageProps & {
  src: string | null;
  placeholder?: string;
  alt?: string;
  type?: 'blur' | 'skeleton';
  className?: string;
  aspectRatio?: number;
  onError?: () => void;
};

export const Image: FC<ImageProps> = ({
  src,
  type,
  alt,
  rounded,
  placeholder,
  className,
  onError,
  aspectRatio,
}) => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(src);

  const handleImageLoad = useCallback(() => {
    setLoading(false);
    setImageLoaded(true);
  }, [setImageLoaded, setLoading]);

  const handleImageError = useCallback(() => {
    setLoading(false);
    if (placeholder) {
      setImgSrc(placeholder);
    }
    if (onError) {
      onError();
    }
    setIsError(true);
  }, [placeholder, onError]);

  useEffect(() => {
    if (!src && placeholder && !isError) {
      setLoading(false);
      setImgSrc(placeholder);
    }
  }, [placeholder, src, isError]);

  useEffect(() => {
    if (src) {
      setImgSrc(src);
    }
  }, [src]);

  return type === 'blur' ? (
    <>
      <BluredImage
        aspectRatio={aspectRatio}
        src={imgSrc || undefined}
        loaded={imageLoaded}
        rounded={rounded}
        className={className}
      />
      <img
        alt="loaderContainer"
        src={imgSrc || undefined}
        style={{ display: 'none' }}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </>
  ) : (
    <>
      {type === 'skeleton' && loading && <Skeleton className={className} />}
      <LazyImage
        aspectRatio={aspectRatio}
        src={imgSrc || undefined}
        alt={alt}
        loaded={imageLoaded}
        rounded={rounded}
        className={className}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </>
  );
};
