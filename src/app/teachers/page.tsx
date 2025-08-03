import React from 'react';
import { DataTable } from './data-table';
import { columns, teachersData } from './columns';

const TeachersPage = () => {
  return (
    <div>
      <div className='mb-8 px-4 py-2 bg-secondary rounded-md'>
        <h1 className='font-semibold'>All Teachers</h1>
      </div>
      <DataTable columns={columns} data={teachersData} />
    </div>
  );
};

export default TeachersPage;
