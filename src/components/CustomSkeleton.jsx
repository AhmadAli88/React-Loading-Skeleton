
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CustomSkeleton = () => (
  <div>
    <h2>Custom Height and Width</h2>
    <Skeleton height={50} width={300} />
  </div>
);

export default CustomSkeleton;
