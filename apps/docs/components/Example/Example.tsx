import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text
} from '@nativecn/ui';
import {View} from 'react-native';
import {useState} from 'react';
import ProfileTabExample from '~/components/Example/ProfileTabExample';
import AccountTabExample from '~/components/Example/AccountTabExample';

const Example = () => {
  const [tab, setTab] = useState('profile');

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your account settings and set e-mail preferences.</CardDescription>
      </CardHeader>

      <CardContent>
        <View className="flex justify-center">
          <Tabs
            value={tab}
            onValueChange={setTab}
            className="w-full mx-auto flex-col gap-4"
          >
            <TabsList className="flex-row w-full">
              <TabsTrigger value="profile">
                <Text>Profile</Text>
              </TabsTrigger>

              <TabsTrigger value="account">
                <Text>Account</Text>
              </TabsTrigger>

              <TabsTrigger value="appearance">
                <Text>Appearance</Text>
              </TabsTrigger>

              <TabsTrigger value="password">
                <Text>Notification</Text>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <ProfileTabExample />
            </TabsContent>

            <TabsContent value="account">
              <AccountTabExample />
            </TabsContent>

            <TabsContent value="appearance">
            </TabsContent>

            <TabsContent value="password">
            </TabsContent>
          </Tabs>
        </View>
      </CardContent>
    </Card>
  )
};

export default Example;
