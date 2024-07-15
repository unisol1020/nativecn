import {View} from 'react-native';
import {H2, Lead, Separator} from '@nativecn/ui';
import InstallStagesInit from '~/components/InstallStages/InstallStagesInit';

const InstallStages = () => {
  return (
    <View className="flex flex-col w-full h-full gap-4">
        <H2>React Native</H2>

        <Lead className="text-xl">Install and configure React Native</Lead>

        <View className="flex flex-row gap-6">
          <Separator orientation="vertical" />

          <InstallStagesInit />
        </View>
      </View>
  )
};

export default InstallStages;
