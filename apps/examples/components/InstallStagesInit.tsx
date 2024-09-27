import React from "react";
import { View } from "react-native";
import { P } from "@nativecn/ui";
import AutoTextGray from "./AutoTextGray";
import CopyCard from "~/components/CopyCard";
import Step from "~/components/Step";

const InstallStagesInit = () => {
  return (
    <View className="flex flex-col">
      <Step step={1}>
        <P className="text-md font-medium pt-1">
          Start by creating a new Expo project using{" "}
          <P className="relative rounded bg-muted p-1 font-mono text-sm">
            create-expo-app
          </P>
          :
        </P>

        <CopyCard rawValue="npx create-expo-app@latest">
          <AutoTextGray>npx create-expo-app@latest</AutoTextGray>
        </CopyCard>
      </Step>

      <Step step={2}>
        <P className="text-md font-medium pt-1">
          Run the{" "}
          <P className="relative rounded bg-muted p-1 font-mono text-sm">
            nativecn
          </P>{" "}
          init command to setup your project:
        </P>

        <CopyCard rawValue="npx nativecn init">
          <AutoTextGray>npx nativecn init</AutoTextGray>
        </CopyCard>
      </Step>

      <Step step={3}>
        <P className="text-md font-medium pt-1">
          Include{" "}
          <P className="relative rounded bg-muted p-1 font-mono text-sm">
            global.css
          </P>{" "}
          inside the root layout or component:
        </P>

        <CopyCard rawValue="import '../global.css';">
          <AutoTextGray>import '../global.css';</AutoTextGray>
        </CopyCard>
      </Step>

      <Step step={5}>
        <P className="text-md font-medium pt-1">
          You can now start adding components to your project.
        </P>

        <CopyCard rawValue="npx nativecn add [component]">
          <AutoTextGray>npx nativecn add [component]</AutoTextGray>
        </CopyCard>
      </Step>

      <Step step={6}>
        <P className="text-md font-medium">
          You can also run the command without any arguments to view a list of
          all available components:
        </P>

        <CopyCard rawValue="npx nativecn add">
          <AutoTextGray>npx nativecn add</AutoTextGray>
        </CopyCard>
      </Step>
    </View>
  );
};

export default InstallStagesInit;
