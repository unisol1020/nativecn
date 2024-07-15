import {View} from 'react-native';
import {Slot} from 'expo-router';
import DocsMenu from '../../components/DocsMenu/DocsMenu';

const DocsLayout = () => {
  return (
    <View className="flex w-full items-center gap-6 px-4">
      <View style={{maxWidth: 1400}} className="flex flex-row pt-20 gap-8 w-full">
        <DocsMenu />

        <Slot />
      </View>
    </View>
  );
};

export default DocsLayout;
