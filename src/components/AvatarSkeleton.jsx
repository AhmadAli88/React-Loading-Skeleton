
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AvatarSkeleton = () => (
  <div>
    <h2>Skeleton for Avatar</h2>
    <Skeleton circle height={100} width={100} />
  </div>
);

export default AvatarSkeleton;
