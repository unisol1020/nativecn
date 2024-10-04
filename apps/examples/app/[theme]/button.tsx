import { Button, Text } from "@nativecn/ui";
import { useGlobalSearchParams } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { View } from "react-native";

const ButtonScreen = () => {
  const { setColorScheme } = useColorScheme();
  const { theme } = useGlobalSearchParams();

  useEffect(() => {
    setColorScheme(theme === "dark" ? "dark" : "light");
  }, [theme]);

  return (
    <View className="flex-1 justify-center items-center gap-5">
      <Button>
        <Text>Default</Text>
      </Button>
      <Button variant="destructive">
        <Text>Destructive</Text>
      </Button>
      <Button variant="destructive" disabled>
        <Text>Destructive disabled</Text>
      </Button>
      <Button variant="secondary">
        <Text>Secondary</Text>
      </Button>
      <Button variant="outline" size="lg">
        <Text>Outline lg</Text>
      </Button>
      <Button variant="outline" size="sm">
        <Text>Outline sm</Text>
      </Button>
      <Button variant="ghost">
        <Text>Ghost</Text>
      </Button>
      <Button variant="link" size="sm">
        <Text>Link sm</Text>
      </Button>
    </View>
  );
};

export default ButtonScreen;
