import { Progress, Button, Text } from "@nativecn/ui";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { View } from "react-native";

const ProgressScreen = () => {
  const [progress, setProgress] = useState(13);
  const { setColorScheme } = useColorScheme();
  const { theme } = useLocalSearchParams();

  useEffect(() => {
    if (setColorScheme && theme)
      setColorScheme(theme === "dark" ? "dark" : "light");
  }, [theme, setColorScheme]);

  function onPress() {
    setProgress(Math.floor(Math.random() * 100));
  }

  return (
    <View className="flex-1 justify-center items-center p-6 gap-12">
      <View className="w-full gap-8 items-center">
        <Progress value={progress} className="web:w-[60%]" />
        <Button variant="ghost" onPress={onPress}>
          <Text>Randomize</Text>
        </Button>
      </View>
    </View>
  );
};

export default ProgressScreen;
