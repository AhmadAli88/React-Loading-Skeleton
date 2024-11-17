import  { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DynamicContentSkeleton = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData('Loaded Content!');
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Dynamic Content Loading</h2>
      {data ? <p>{data}</p> : <Skeleton height={30} width={200} />}
    </div>
  );
};

export default DynamicContentSkeleton;
