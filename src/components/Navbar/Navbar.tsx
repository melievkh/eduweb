'use client';

import { useTheme } from 'next-themes';

import { SidebarTrigger } from '../ui/sidebar';
import ThemeMode from './ThemeMode';
import UserMenu from './UserMenu';

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className='p-4 flex items-center justify-between'>
      <SidebarTrigger />
      <div className='flex items-center gap-4'>
        <ThemeMode setTheme={setTheme} />
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
