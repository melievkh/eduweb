import AppSidebar from '@/components/AppSidebar/AppSidebar';
import Navbar from '@/components/Navbar/Navbar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { cookies } from 'next/headers';
import React from 'react';

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className='w-full'>
        <Navbar />
        <div className='px-4'>{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default AdminLayout;
