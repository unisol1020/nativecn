import React from 'react';
import { View } from 'react-native';
import { Card, CardContent, P } from '@nativecn/ui';
import AutoTextGray from './AutoTextGray'; // Adjust the import based on your AutoTextGray component location

const InstallStagesInit = () => {
  return (
    <View className="flex flex-col gap-6">
      <P className="text-md font-medium">
        Start by creating a new Expo project using <P className="relative rounded bg-muted p-1 font-mono text-sm">create-expo-app</P>:
      </P>

      <Card>
        <CardContent className="p-4 bg-muted rounded-lg">
          <AutoTextGray text="npx create-expo-app@latest" />
        </CardContent>
      </Card>

      <P className="text-md font-medium">
        Run the <P className="relative rounded bg-muted p-1 font-mono text-sm">nativecn</P> init command to setup your project:
      </P>

      <Card>
        <CardContent className="p-4 bg-muted rounded-lg">
          <AutoTextGray text="npx nativecn init" />
        </CardContent>
      </Card>

      <P className="text-md font-medium">
        Include <P className="relative rounded bg-muted p-1 font-mono text-sm">global.css</P> inside the root layout or component:
      </P>

      <Card>
        <CardContent className="p-4 bg-muted rounded-lg">
          <AutoTextGray text="import '../global.css';" />
        </CardContent>
      </Card>

      <P className="text-md font-medium">You can now start adding components to your project.</P>

      <Card>
        <CardContent className="p-4 bg-muted rounded-lg">
          <AutoTextGray text="npx nativecn add [component]" />
        </CardContent>
      </Card>

      <P className="text-md font-medium">
        You can also run the command without any arguments to view a list of all available components:
      </P>

      <Card>
        <CardContent className="p-4 bg-muted rounded-lg">
          <AutoTextGray text="npx nativecn add" />
        </CardContent>
      </Card>
    </View>
  );
};

export default InstallStagesInit;
