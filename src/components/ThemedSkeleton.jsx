
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ThemedSkeleton = () => (
  <SkeletonTheme baseColor="#16a085" highlightColor="#f0f0f0">
    <h2>Themed Skeleton</h2>
    <Skeleton height={30} width={200} />
  </SkeletonTheme>
);

export default ThemedSkeleton;
