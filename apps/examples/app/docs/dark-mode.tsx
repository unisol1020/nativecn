import { View } from "react-native";
import { H3, Lead } from "@nativecn/ui";
import DarkModeStages from "~/components/DarkModeStages";

const DarkMode = () => {
  return (
    <View className="flex flex-col w-full h-full gap-8">
      <View className="flex flex-col gap-2">
        <H3>Dark Mode</H3>

        <Lead className="text-base">Adding dark mode to your project.</Lead>
      </View>

      <View className="flex flex-row gap-8 pb-8">
        <DarkModeStages />
      </View>
    </View>
  );
};

export default DarkMode;
