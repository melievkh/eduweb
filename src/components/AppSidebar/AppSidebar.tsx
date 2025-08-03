import {
  BookOpenCheck,
  CalendarSync,
  ChartNoAxesCombined,
  CreditCard,
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
  const items = [
    {
      title: 'Teachers',
      url: '/teachers',
      icon: ShieldUser,
    },
    {
      title: 'Courses',
      url: '#',
      icon: TableProperties,
    },
    {
      title: 'Students',
      url: '#',
      icon: Users,
    },
    {
      title: 'Payments',
      url: '#',
      icon: CreditCard,
    },
    {
      title: 'Schedule',
      url: '#',
      icon: CalendarSync,
    },
    {
      title: 'Statistics',
      url: '#',
      icon: ChartNoAxesCombined,
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings,
    },
    {
      title: 'Exams',
      url: '#',
      icon: BookOpenCheck,
    },
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
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>
                    {item.title === 'Teachers'
                      ? 24
                      : item.title === 'Students'
                      ? 21
                      : item.title === 'Courses'
                      ? 12
                      : null}
                  </SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
