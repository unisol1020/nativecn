import { View } from "react-native";
import { Badge, Text } from "@nativecn/ui";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { useGlobalSearchParams } from "expo-router";

const BadgeScreen = () => {
  const { setColorScheme } = useColorScheme();
  const { theme } = useGlobalSearchParams();

  useEffect(() => {
    setColorScheme(theme === "dark" ? "dark" : "light");
  }, [theme]);

  return (
    <View className="flex-1 justify-center items-center gap-5">
      <Badge>
        <Text>Default</Text>
      </Badge>
      <Badge variant={"secondary"}>
        <Text>Secondary</Text>
      </Badge>
      <Badge variant={"destructive"}>
        <Text>Destructive</Text>
      </Badge>
      <Badge variant={"outline"}>
        <Text>Outline</Text>
      </Badge>
    </View>
  );
};

export default BadgeScreen;
