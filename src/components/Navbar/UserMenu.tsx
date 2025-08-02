import { CircleUserRound, LogOut, Settings, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>
            <CircleUserRound />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={10}>
        <DropdownMenuLabel>user</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className='h-[1.2rem] w-[1.2rem] mr-2' />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className='h-[1.2rem] w-[1.2rem] mr-2' />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem variant='destructive'>
          <LogOut className='h-[1.2rem] w-[1.2rem] mr-2' /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
