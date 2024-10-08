import { Label } from "@nativecn/ui";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "nativewind";
import { View } from "react-native";

const LabelScreen = () => {
  const { setColorScheme } = useColorScheme();
  const { theme } = useLocalSearchParams();

  useEffect(() => {
    if (setColorScheme && theme)
      setColorScheme(theme === "dark" ? "dark" : "light");
  }, [theme, setColorScheme]);

  return (
    <View className="flex-1 justify-center items-center p-6">
      <Label nativeID="label">This is a label</Label>
    </View>
  );
};

export default LabelScreen;
