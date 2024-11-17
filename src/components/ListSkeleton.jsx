
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ListSkeleton = () => (
  <div>
    <h2>Skeleton for List</h2>
    {[...Array(5)].map((_, i) => (
      <div key={i} style={{ marginBottom: '10px' }}>
        <Skeleton height={30} />
      </div>
    ))}
  </div>
);

export default ListSkeleton;
