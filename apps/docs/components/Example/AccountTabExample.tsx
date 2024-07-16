import {View} from 'react-native';
import {Input, Label, Large, Lead, Separator} from '@nativecn/ui';
import LatestActivity from '~/components/Example/LatestActivity';

const AccountTabExample = () => {
  return (
    <View className="flex-col gap-6">
      <View className="flex-col gap-3">
        <Large className="font-normal">Profile</Large>

        <Lead className="font-normal text-sm">This is how others will see you on the site.</Lead>
      </View>

      <Separator />

      <View className="lex-col md:flex-row md:pr-6">
        <View className="flex-col gap-5 w-full md:mr-3 md:w-1/2">
          <View className="flex-col gap-3">
            <Label nativeID="name">Name</Label>

            <Input nativeID="name" placeholder="Name" />
          </View>
        </View>

        <LatestActivity />
      </View>
    </View>
  );
};

export default AccountTabExample;
