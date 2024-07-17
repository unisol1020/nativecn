import React from "react";
import { View } from "react-native";
import { P } from "@nativecn/ui";
import AutoTextGray from "./AutoTextGray";
import Step from "~/components/Step";
import CopyCard from "~/components/CopyCard";

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
                    "import { ThemeProvider } from '~/lib/ThemeProvider';\n\nconst RootLayout = () => {\n\t<ThemeProvider>\n\t\t<Stack>\n\t</ThemeProvider>\n};"
                  }
                </AutoTextGray>
              </AutoTextGray>
            </View>
          </CopyCard>
        </View>
      </Step>
    </View>
  );
};

export default DarkModeStages;
