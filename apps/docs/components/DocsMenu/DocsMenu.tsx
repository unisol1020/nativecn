import {ScrollView} from 'react-native';
import DocsMenuItem from '~/components/DocsMenu/DocsMenuItem';

const items = [
  {
    title: 'Getting Started',
  },
  {
    title: 'Installation',
    link: '/docs',
  }
];

const DocsMenu = () => {
  return (
    <ScrollView style={{minWidth: 150}} className="flex flex-col px-4">
      {items.map((item) => <DocsMenuItem key={item.title} {...item} />)}
    </ScrollView>
  )
};

export default DocsMenu;
