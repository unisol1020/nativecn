import {Button, P, Lead} from '@nativecn/ui';
import {Link, usePathname} from 'expo-router';
import {cn} from '~/lib/utils';


const DocsMenuItem = ({title, link}: {title: string, link?: string})  => {
  const pathname = usePathname();

  if (!link) {
    return <P className="font-medium text-sm py-2">{title}</P>;
  } else {
    return (
      <Link asChild href={link}>
        <Button className="pl-0 items-start	" variant="link">
          <Lead className={cn('text-sm font-normal web:hover:underline', {
            'text-foreground': pathname === link,
          })}>
            {title}
          </Lead>
        </Button>
      </Link>
    )
  }
};

export default DocsMenuItem;
