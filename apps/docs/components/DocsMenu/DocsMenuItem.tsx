import {Button, P, Lead} from '@nativecn/ui';
import {Link} from 'expo-router';
import {useNavigationState} from '@react-navigation/native';
import {cn} from '~/lib/utils';


const DocsMenuItem = ({title, link}: {title: string, link?: string})  => {
  const routeName = useNavigationState((state) => {
    const route = state.routes[state.index];
    return route.name;
  });

  if (!link) {
    return <P className="font-medium">{title}</P>;
  } else {
    return (
      <Link asChild href={link}>
        <Button style={{paddingLeft: 0, alignItems: 'flex-start'}} variant="link">
          <Lead className={cn('text-sm font-normal web:hover:underline', {
            'text-foreground': ('/' + routeName).startsWith(link),
          })}>
            {title}
          </Lead>
        </Button>
      </Link>
    )
  }
};

export default DocsMenuItem;
