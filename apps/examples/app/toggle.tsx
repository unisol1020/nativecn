import { Toggle, ToggleIcon } from "@nativecn/ui";
import { useLocalSearchParams } from "expo-router";
import { Bitcoin } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import * as React from "react";
import { useEffect } from "react";
import { View } from "react-native";

const ToggleScreen = () => {
  const { setColorScheme } = useColorScheme();
  const { theme } = useLocalSearchParams();

  useEffect(() => {
    if (setColorScheme && theme)
      setColorScheme(theme === "dark" ? "dark" : "light");
  }, [theme, setColorScheme]);

  const [pressed, setPressed] = React.useState(false);
  return (
    <View className="flex-1 justify-center items-center p-6 gap-12">
      <Toggle
        pressed={pressed}
        onPressedChange={setPressed}
        aria-label="Toggle bold"
        variant="outline"
      >
        <ToggleIcon icon={Bitcoin} size={18} />
      </Toggle>
    </View>
  );
};

export default ToggleScreen;
