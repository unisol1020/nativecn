import { View } from "react-native";
import { H3, Lead } from "@nativecn/ui";

const Avatar = () => {
  return (
    <View className="flex flex-col w-full h-full gap-8">
      <View className="flex flex-col gap-2">
        <H3>Avatar</H3>

        <Lead className="text-base">
          An image element with a fallback for representing the user.
        </Lead>
      </View>

      <View className="flex flex-row gap-8 pb-8"></View>
    </View>
  );
};

export default Avatar;
