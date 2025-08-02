'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';

import ThemeMode from './ThemeMode';
import UserMenu from './UserMenu';

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className='p-4 flex items-center justify-between'>
      Collapse button
      <div className='flex items-center gap-4'>
        <Link href='/'>Dashboard</Link>
        <ThemeMode setTheme={setTheme} />
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
