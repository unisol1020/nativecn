import {View} from 'react-native';
import {H2, Lead, Separator} from '@nativecn/ui';

const DarkMode = () => {
  return (
    <View className="flex flex-col w-full h-full gap-4">
      <H2>Dark Mode</H2>

      <Lead className="text-xl">Adding dark mode to your project.</Lead>

      <View className="flex flex-row gap-6">
        <Separator orientation="vertical" />


      </View>
    </View>
  );
};

export default DarkMode;
