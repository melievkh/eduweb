'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { Edit, MoreHorizontal, Trash } from 'lucide-react';

export type Teacher = {
  id: string;
  fullname: string;
  email?: '';
  phone_number: string;
  profession: 'maths' | 'english' | 'biology' | 'chemistry' | 'native'[];
  start_date?: Date;
  date_of_birth?: string;
  profile_image?: string;
  date_joined: string;
};

export const teachersData: Teacher[] = [
  {
    id: '1',
    fullname: 'Jasur',
    phone_number: '902334122',
    profession: 'english',
    date_of_birth: '1997.22.09',
    date_joined: '2025.22.09',
    profile_image:
      'https://yt3.googleusercontent.com/MwOv3-G2bIfI1yHJovHJeDCHYW0p-PK2pYCTlSqOem-A87cTdBPBtxJQ9Fofz9XSR6TlOnDxGbw=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: '2',
    fullname: 'Akbar Falonchiyev',
    phone_number: '902334122',
    profession: 'biology',
    date_of_birth: '1997.22.09',
    date_joined: '2025.22.09',
  },
];

export const columns: ColumnDef<Teacher>[] = [
  {
    header: 'ID',
    cell: ({ row }) => {
      return <span>{row.index + 1}.</span>;
    },
  },
  {
    accessorKey: 'profile_image',
    header: 'Photo',
    cell: ({ row }) => {
      const { profile_image, fullname } = row.original;

      return (
        <Avatar className='h-10 w-10'>
          <AvatarImage src={profile_image} alt={fullname} />
          <AvatarFallback>
            {fullname
              .split(' ')
              .map((word) => word[0])
              .join('')
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: 'fullname',
    header: 'Fullname',
  },
  {
    accessorKey: 'phone_number',
    header: 'Phone Number',
  },
  {
    id: 'actions',
    cell: () => {
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
