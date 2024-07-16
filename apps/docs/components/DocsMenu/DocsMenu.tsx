import {ScrollView, View} from 'react-native';
import DocsMenuItem from '~/components/DocsMenu/DocsMenuItem';

const items = [
  {
    title: 'Getting Started',
  },
  {
    title: 'Installation',
    link: '/docs',
  },
  {
    title: 'Dark mode',
    link: '/docs/dark-mode',
  }
];

const DocsMenu = () => {
  return (
    <ScrollView>
      <View className="min-w-[150px] flex-row justify-between md:flex-col md:px-4">
        {items.map((item) => <DocsMenuItem key={item.title} {...item} />)}
      </View>
    </ScrollView>
  )
};

export default DocsMenu;
