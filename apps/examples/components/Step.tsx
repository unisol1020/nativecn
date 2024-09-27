import { View } from "react-native";
import { Separator, Text } from "@nativecn/ui";
import React, { PropsWithChildren } from "react";

const Step = ({ children, step }: PropsWithChildren & { step: number }) => {
  return (
    <View className="flex flex-row w-full gap-8">
      <View className="flex flex-col items-center pb-2 relative">
        <View className="w-[25px] h-[25px] rounded-full bg-muted flex justify-center items-center">
          <Text>{step}</Text>
        </View>

        <Separator orientation="vertical" />
      </View>

      <View className="flex flex-col gap-6 pb-6 w-full">{children}</View>
    </View>
  );
};

export default Step;
