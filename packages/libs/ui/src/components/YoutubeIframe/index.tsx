import React, {
  useRef,
  useEffect,
  type FC,
  useState,
  useCallback,
} from 'react';
import { Skeleton } from '../Skeleton';
import { StyledIframe } from './styled';
import { Stack } from '../Stack';
import { Typography } from '../Typography';

interface YouTubeIFrameProps {
  src: string;
  title: string;
  width?: string;
  height?: string;
  withSkeleton?: boolean;
  className?: string;
  onError?: () => void;
}

export const YouTubeIFrame: FC<YouTubeIFrameProps> = ({
  src,
  title,
  width = '560',
  height = '315',
  withSkeleton = true,
  className,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setIsError(true);
    onError?.();
  }, [onError]);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (iframe) {
      iframe.addEventListener('load', handleLoad);
      iframe.addEventListener('error', handleError);
    }

    return () => {
      iframe?.removeEventListener('load', handleLoad);
      iframe?.removeEventListener('error', handleError);
    };
  }, [handleError, handleLoad]);

  if (isError) {
    return (
      <Stack
        alignItems="center"
        justifyContent="center"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <Typography variant="textSMBold" color="danger100">
          Video url is broken
        </Typography>
      </Stack>
    );
  }

  return (
    <>
      {withSkeleton && isLoading && (
        <Skeleton
          width={`${width}px`}
          height={`${height}px`}
          className={className}
        />
      )}
      <StyledIframe
        isLoading={isLoading}
        className={className}
        title={title}
        ref={iframeRef}
        width={width}
        height={height}
        src={`${src}`}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </>
  );
};
