import React from 'react';

import { DataTable } from './data-table';
import { columns, staffsData } from './columns';

const StaffsPage = () => {
  return (
    <div>
      <div className='mb-8 px-4 py-2 bg-secondary rounded-md'>
        <h1 className='font-semibold'>All Staff</h1>
      </div>
      <DataTable columns={columns} data={staffsData} />
    </div>
  );
};

export default StaffsPage;
