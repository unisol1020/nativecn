import {View} from 'react-native';
import {H3, Lead, Separator} from '@nativecn/ui';
import DarkModeStages from '~/components/DarkModeStages';

const DarkMode = () => {
  return (
    <View className="flex flex-col w-full h-full gap-4">
      <H3>Dark Mode</H3>

      <Lead className="text-md">Adding dark mode to your project.</Lead>

      <View className="flex flex-row gap-6 pb-6">
        <Separator orientation="vertical" />

        <DarkModeStages />
      </View>
    </View>
  );
};

export default DarkMode;
