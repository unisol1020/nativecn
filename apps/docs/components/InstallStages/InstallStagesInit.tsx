import {ScrollView, View} from 'react-native';
import {Card, CardContent, P} from '@nativecn/ui';

const InstallStagesInit = () => {
  return (
    <ScrollView>
      <View className="flex flex-col gap-6">
        <P className="font-medium">Start by creating a new Expo project using <P className="relative rounded bg-muted p-1 font-mono text-sm">create-expo-app</P>:</P>

        <Card>
          <CardContent className="pt-4 p-4 bg-muted">
            <P className="font-normal">npx create-expo-app@latest</P>
          </CardContent>
        </Card>

        <P className="font-medium">Run the <P className="relative rounded bg-muted p-1 font-mono text-sm">nativecn</P> init command to setup your project:</P>

        <Card>
          <CardContent className="pt-4 p-4 bg-muted">
            <P className="font-normal">npx nativecn init</P>
          </CardContent>
        </Card>

        <P className="font-medium">Include <P className="relative rounded bg-muted p-1 font-mono text-sm">global.css</P> inside the root layout or component:</P>

        <Card>
          <CardContent className="pt-4 p-4 bg-muted">
            <P className="font-normal">import '../global.css';</P>
          </CardContent>
        </Card>

        <P className="font-medium">You can now start adding components to your project.</P>

        <Card>
          <CardContent className="pt-4 p-4 bg-muted">
            <P className="font-normal">npx nativecn add [component]</P>
          </CardContent>
        </Card>

        <P className="font-medium">You can also run the command without any arguments to view a list of all available components:</P>

        <Card>
          <CardContent className="pt-4 p-4 bg-muted">
            <P className="font-normal">npx nativecn add</P>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
};

export default InstallStagesInit;
