import { StyledSkeleton, type SkeletonStyledProps } from './styled';
import type { FCWithAs } from '../../types';

interface SkeletonProps extends SkeletonStyledProps {
  className?: string;
}

export const Skeleton: FCWithAs<'div', SkeletonProps> = (props) => {
  return <StyledSkeleton {...props} />;
};
