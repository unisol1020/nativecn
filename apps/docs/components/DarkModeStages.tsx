import {View} from 'react-native';
import {Card, CardContent, P} from '@nativecn/ui';

const DarkModeStages = () => {
  return (
    <View className="flex flex-col gap-6">
      <P className="text-md font-medium">Start by installing <P className="relative rounded bg-muted p-1 font-mono text-sm">async-storage</P>:</P>

      <Card>
        <CardContent className="p-4 bg-muted rounded-lg">
          <P className="font-normal">yarn add @react-native-async-storage/async-storage</P>
        </CardContent>
      </Card>

      <P className="text-md font-medium">Install <P className="relative rounded bg-muted p-1 font-mono text-sm">ThemeProvider</P>:</P>

      <Card>
        <CardContent className="p-4 bg-muted rounded-lg">
          <P className="font-normal">npx nativecn add ThemeProvider</P>
        </CardContent>
      </Card>

      <P className="text-md font-medium">Remove old ThemeProvider from root layout:</P>

      <View className="flex flex-col gap-2">
        <P className="text-md ml-2">app/_layout.tsx</P>

        <Card>
          <CardContent className="p-4 bg-muted rounded-lg flex flex-col">
            <View className="flex flex-row gap-6">
              <P style={{color: "red"}} className="font-normal">-</P>
              <P className="font-normal">{"<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>"}</P>
            </View>

            <View className="flex flex-row gap-12">
              <P className="font-normal">{" "}</P>
              <P className="font-normal">{"<Stack />"}</P>
            </View>

            <View className="flex flex-row gap-6">
              <P style={{color: "red"}} className="font-normal">-</P>
              <P className="font-normal">{"</ThemeProvider>"}</P>
            </View>
          </CardContent>
        </Card>
      </View>

      <P className="text-md font-medium">Wrap your root layout:</P>

      <View className="flex flex-col gap-2">
        <P className="text-md ml-2">app/_layout.tsx</P>

        <Card>
          <CardContent className="p-4 bg-muted rounded-lg flex flex-col">
            <View className="flex flex-row gap-6">
              <P style={{color: "green"}} className="font-normal">+</P>
              <P className="font-normal">{"import {ThemeProvider} from '~/lib/ThemeProvider';"}</P>
            </View>

            <View className="flex flex-row gap-6">
              <P style={{color: "green"}} className="font-normal">+</P>
            </View>

            <View className="flex flex-row gap-6">
              <P style={{color: "green"}} className="font-normal">+</P>
              <P className="font-normal">{"const RootLayout = () => {"}</P>
            </View>


            <View className="flex flex-row gap-8">
              <P style={{color: "green"}} className="font-normal">+</P>
              <P className="font-normal">{"<ThemeProvider>"}</P>
            </View>

            <View className="flex flex-row gap-12">
              <P style={{color: "green"}} className="font-normal">+</P>
              <P className="font-normal">{"<Stack />"}</P>
            </View>

            <View className="flex flex-row gap-8">
              <P style={{color: "green"}} className="font-normal">+</P>
              <P className="font-normal">{"</ThemeProvider>"}</P>
            </View>

            <View className="flex flex-row gap-6">
              <P style={{color: "green"}} className="font-normal">+</P>
              <P className="font-normal">{"};"}</P>
            </View>
          </CardContent>
        </Card>
      </View>
    </View>
  )
};

export default DarkModeStages;
