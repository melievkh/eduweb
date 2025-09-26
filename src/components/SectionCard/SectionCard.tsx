import { TrendingDown, TrendingUp } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const SectionCards = () => {
  return (
    <div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4'>
      <Card className='@container/card'>
        <CardHeader>
          <CardDescription>Total Students</CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
            320
          </CardTitle>
          <CardAction>
            <Badge variant='outline'>
              <TrendingUp /> +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            +15% since last month <TrendingUp className='size-4' />
          </div>
          <div className='text-muted-foreground'>
            Engaged in ongoing courses
          </div>
        </CardFooter>
      </Card>
      <Card className='@container/card'>
        <CardHeader>
          <CardDescription>New Students</CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
            48
          </CardTitle>
          <CardAction>
            <Badge variant='outline'>
              <TrendingDown />
              -10%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            -10% compared to last month <TrendingDown className='size-4' />
          </div>
          <div className='text-muted-foreground'>Campaign needed for leads</div>
        </CardFooter>
      </Card>
      <Card className='@container/card'>
        <CardHeader>
          <CardDescription>Total Staffs</CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
            18
          </CardTitle>
          <CardAction>
            <Badge variant='outline'>
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            2 new hires <TrendingUp className='size-4' />
          </div>
          <div className='text-muted-foreground'>All groups covered</div>
        </CardFooter>
      </Card>
      <Card className='@container/card'>
        <CardHeader>
          <CardDescription>Monthly Revenue</CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
            $5,750
          </CardTitle>
          <CardAction>
            <Badge variant='outline'>
              <TrendingUp />
              +45%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            Revenue up <TrendingUp className='size-4' />
          </div>
          <div className='text-muted-foreground'>Compared to last month</div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SectionCards;
