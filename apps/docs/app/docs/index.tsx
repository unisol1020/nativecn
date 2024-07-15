import {View} from 'react-native';
import {H3, Lead, Separator} from '@nativecn/ui';
import InstallStagesInit from '~/components/InstallStagesInit';

const DocsScreen = () => {
  return (
    <View className="flex flex-col w-full h-full gap-4">
      <H3>React Native</H3>

      <Lead className="text-md">Install and configure React Native</Lead>

      <View className="flex flex-row gap-6 pb-6">
        <Separator orientation="vertical" />

        <InstallStagesInit />
      </View>
    </View>
  );
};

export default DocsScreen;
