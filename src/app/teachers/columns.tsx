'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import { Edit, MoreHorizontal, Trash } from 'lucide-react';

export type Teacher = {
  id: string;
  fullname: string;
  email?: '';
  phoneNumber: string;
  isActive: boolean;
  profession: 'maths' | 'english' | 'biology' | 'chemistry' | 'native'[];
  profileImage?: '';
  startDate?: Date;
  dateOfBirth?: Date;
};

export const teachersData: Teacher[] = [
  {
    id: '123',
    fullname: 'Jasur',
    phoneNumber: '902334122',
    isActive: true,
    profession: 'english',
  },
  {
    id: '1233',
    fullname: 'Akbar Falonchiyev',
    phoneNumber: '902334122',
    isActive: false,
    profession: 'biology',
  },
];

export const columns: ColumnDef<Teacher>[] = [
  {
    accessorKey: 'fullname',
    header: 'Fullname',
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Phone Number',
  },
  {
    accessorKey: 'isActive',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('isActive');

      return (
        <div
          className={cn(
            `p-1 rounded-md w-max text-xs`,
            status === true && 'bg-green-400/40',
            status === false && 'bg-red-500/40'
          )}
        >
          <span>{status ? 'active' : 'no active'}</span>
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>
              <Edit /> Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant='destructive'>
              <Trash />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
