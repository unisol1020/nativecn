import React from "react";
import { View } from "react-native";
import { Card, CardContent, P } from "@nativecn/ui";
import AutoTextGray from "./AutoTextGray";

const DarkModeStages = () => {
  return (
    <View className="flex flex-col gap-6">
      <P className="text-md font-medium">
        Start by installing{" "}
        <P className="relative rounded bg-muted p-1 font-mono text-sm">
          async-storage
        </P>
        :
      </P>

      <Card>
        <CardContent className="p-4 bg-muted rounded-lg">
          <AutoTextGray text="yarn add @react-native-async-storage/async-storage" />
        </CardContent>
      </Card>

      <P className="text-md font-medium">
        Install{" "}
        <P className="relative rounded bg-muted p-1 font-mono text-sm">
          ThemeProvider
        </P>
        :
      </P>

      <Card>
        <CardContent className="p-4 bg-muted rounded-lg">
          <AutoTextGray text="npx nativecn add ThemeProvider" />
        </CardContent>
      </Card>

      <P className="text-md font-medium">
        Remove old ThemeProvider from root layout:
      </P>

      <View className="flex flex-col gap-2">
        <P className="text-md ml-2">app/_layout.tsx</P>

        <Card>
          <CardContent className="p-4 bg-muted rounded-lg flex flex-col">
            <AutoTextGray text="<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>" />
            <AutoTextGray text="  <Stack />" />
            <AutoTextGray text="</ThemeProvider>" />
          </CardContent>
        </Card>
      </View>

      <P className="text-md font-medium">Wrap your root layout:</P>

      <View className="flex flex-col gap-2">
        <P className="text-md ml-2">app/_layout.tsx</P>

        <Card>
          <CardContent className="p-4 bg-muted rounded-lg flex flex-col">
            <AutoTextGray text="import { ThemeProvider } from '~/lib/ThemeProvider';" />
            <AutoTextGray text="const RootLayout = () => {" />
            <AutoTextGray text="  <ThemeProvider>" />
            <AutoTextGray text="    <Stack>" />
            <AutoTextGray text="  </ThemeProvider>" />
            <AutoTextGray text="};" />
          </CardContent>
        </Card>
      </View>
    </View>
  );
};

export default DarkModeStages;
