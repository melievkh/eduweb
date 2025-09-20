'use client';

import { usePathname } from 'next/navigation';
import {
  BookOpenCheck,
  CalendarArrowUp,
  CreditCard,
  House,
  Settings,
  ShieldUser,
  TableProperties,
  Users,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar';
import Link from 'next/link';

const AppSidebar = () => {
  const pathname = usePathname();

  const items = [
    { title: 'Main page', url: '/', icon: House },
    { title: 'Staffs', url: '/staffs', icon: ShieldUser },
    { title: 'Groups', url: '/groups', icon: TableProperties },
    { title: 'Students', url: '/students', icon: Users },
    { title: 'Settings', url: '/settings', icon: Settings },
    { title: 'Payments', url: '/payments', icon: CreditCard },
    { title: 'Reports', url: '/reports', icon: CalendarArrowUp },
    { title: 'Exams', url: '/exams', icon: BookOpenCheck },
  ];

  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader className='py-4'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href='/'>
                <span>Zone LC</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url; // check active
                return (
                  <SidebarMenuItem
                    key={item.title}
                    className={`${isActive ? 'bg-muted text-primary' : ''}`}
                  >
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon
                          className={`w-20 h-20 sm:w-6 sm:h-6 md:w-7 md:h-7 ${
                            isActive ? 'text-primary' : ''
                          }`}
                        />
                        <span className='text-sm sm:text-base md:text-[16px]'>
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>
                      {item.title === 'Staff'
                        ? 24
                        : item.title === 'Students'
                        ? 21
                        : item.title === 'Courses'
                        ? 12
                        : null}
                    </SidebarMenuBadge>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
