import { View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage, Text } from "@nativecn/ui";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "nativewind";

const AvatarScreen = () => {
  const { setColorScheme } = useColorScheme();
  const { theme } = useLocalSearchParams();

  useEffect(() => {
    if (setColorScheme && theme)
      setColorScheme(theme === "dark" ? "dark" : "light");
  }, [theme, setColorScheme]);

  return (
    <View className="flex-1 flex-row justify-center items-center gap-5">
      <Avatar alt="avatar-with-image">
        <AvatarImage
          source={{
            uri: "https://avatars.githubusercontent.com/u/66306912?v=4",
          }}
        />
        <AvatarFallback>
          <Text>UN</Text>
        </AvatarFallback>
      </Avatar>

      <Avatar alt="avatar-without-image">
        <AvatarFallback>
          <Text>UN</Text>
        </AvatarFallback>
      </Avatar>
    </View>
  );
};

export default AvatarScreen;
