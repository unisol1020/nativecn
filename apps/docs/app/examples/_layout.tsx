import { Slot } from "expo-router";
import { ScrollView, View } from "react-native";

const LayoutExamples = () => {
  return (
    <ScrollView>
      <View className="flex w-full h-full items-center gap-6 px-4 pb-6">
        <View className="max-w-[1400px] flex flex-row pt-20 gap-8 md:px-4 w-full">
          <Slot />
        </View>
      </View>
    </ScrollView>
  );
};

export default LayoutExamples;
