'use client';

import { useParams } from 'next/navigation';

const StaffDetailPage = () => {
  const params: { id: string } = useParams();

  return (
    <div>
      <h1>Staff Details</h1>
      <p>ID: {params.id}</p>
    </div>
  );
};

export default StaffDetailPage;
