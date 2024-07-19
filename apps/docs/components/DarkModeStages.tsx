import React from "react";
import { View } from "react-native";
import { Button, Card, CardContent, Lead, P, Text } from "@nativecn/ui";
import AutoTextGray from "./AutoTextGray";
import Step from "~/components/Step";
import CopyCard from "~/components/CopyCard";
import { Link } from "expo-router";
import { Info } from "lucide-react-native";

const DarkModeStages = () => {
  return (
    <View className="flex flex-col">
      <Step step={1}>
        <P className="text-md font-medium pt-1">
          Start by installing{" "}
          <P className="relative rounded bg-muted p-1 font-mono text-sm">
            async-storage
          </P>
          :
        </P>

        <CopyCard rawValue="yarn add @react-native-async-storage/async-storage">
          <AutoTextGray>
            yarn add @react-native-async-storage/async-storage
          </AutoTextGray>
        </CopyCard>
      </Step>

      <Step step={2}>
        <P className="text-md font-medium pt-1">
          Install{" "}
          <P className="relative rounded bg-muted p-1 font-mono text-sm">
            ThemeProvider
          </P>
          :
        </P>

        <CopyCard rawValue="npx nativecn add ThemeProvider">
          <AutoTextGray>npx nativecn add ThemeProvider</AutoTextGray>
        </CopyCard>
      </Step>

      <Step step={3}>
        <P className="text-md font-medium pt-1">
          Remove old ThemeProvider from root layout:
        </P>

        <View className="flex flex-col gap-2">
          <P className="text-md ml-2">app/_layout.tsx</P>

          <CopyCard>
            <View className="rounded-lg flex flex-col">
              <AutoTextGray>
                {`<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>\n\t<Stack />\n</ThemeProvider>`}
              </AutoTextGray>
            </View>
          </CopyCard>
        </View>
      </Step>

      <Step step={4}>
        <P className="text-md font-medium pt-1">Wrap your root layout:</P>
        <View className="flex flex-col gap-2">
          <P className="text-md pl-4">app/_layout.tsx</P>

          <CopyCard>
            <View className="rounded-lg flex flex-col">
              <AutoTextGray>
                <AutoTextGray>
                  {
                    "import { ThemeProvider } from '~/lib/ThemeProvider';\n\nconst RootLayout = () => {\n\t return (\n\t\t<ThemeProvider>\n\t\t\t<Stack>\n\t\t</ThemeProvider>\n\t);\n};"
                  }
                </AutoTextGray>
              </AutoTextGray>
            </View>
          </CopyCard>
        </View>
      </Step>

      <Step step={4}>
        <P className="text-md font-medium pt-1">
          Place a mode toggle on your app to toggle between light and dark mode:
        </P>

        <View className="flex flex-col gap-2">
          <CopyCard>
            <View className="rounded-lg flex flex-col">
              <AutoTextGray>
                <AutoTextGray>
                  {
                    "import { useColorScheme } from 'nativewind';\nimport { Button } from '@/components/Button';\nimport { Text } from \"@/components/Text\";\n\nconst ToggleComponent = () => {\n\tconst { toggleColorScheme } = useColorScheme();\n\n\treturn (\n\t\t <Button onPress={toggleColorScheme}>\n\t\t\t<Text>\n\t\t\t\tToggle Theme\n\t\t\t</Text>\n\t\t</Button>\n\t);\n};"
                  }
                </AutoTextGray>
              </AutoTextGray>
            </View>
          </CopyCard>
        </View>
      </Step>

      <Card className="w-full mt-4 ml-14">
        <CardContent className="p-4 flex flex-row items-center">
          <Text className="mr-4">
            <Info />
          </Text>

          <Lead className="text-base">Reference:</Lead>

          <Link
            target="_blank"
            href="https://www.nativewind.dev/v4/core-concepts/dark-mode#manual-color-scheme-control"
          >
            <Button variant="link">
              <Text className="pt-[2px]">NativeWind docs</Text>
            </Button>
          </Link>
        </CardContent>
      </Card>
    </View>
  );
};

export default DarkModeStages;
