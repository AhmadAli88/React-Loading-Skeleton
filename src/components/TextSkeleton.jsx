
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TextSkeleton = () => (
  <div>
    <h2>Skeleton for Text Content</h2>
    <Skeleton count={5} />
  </div>
);

export default TextSkeleton;
