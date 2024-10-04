import { Text } from "@nativecn/ui";
import { useGlobalSearchParams } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "nativewind";
import { View } from "react-native";

const TextScreen = () => {
  const { setColorScheme } = useColorScheme();
  const { theme } = useGlobalSearchParams();

  useEffect(() => {
    setColorScheme(theme === "dark" ? "dark" : "light");
  }, [theme]);

  return (
    <View className="flex-1 justify-center items-center p-6">
      <Text nativeID="text">This is a text</Text>
    </View>
  );
};

export default TextScreen;
