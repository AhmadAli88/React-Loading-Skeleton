
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = () => (
  <div>
    <h2>Card Skeleton</h2>
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <Skeleton circle height={50} width={50} />
      <div>
        <Skeleton height={20} width={200} />
        <Skeleton height={15} width={150} />
      </div>
    </div>
  </div>
);

export default CardSkeleton;
