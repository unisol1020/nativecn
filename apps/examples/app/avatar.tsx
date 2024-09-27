import { View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "@nativecn/ui";

const AvatarScreen = () => {
  return (
    <View className="flex-1 flex-row justify-center items-center gap-5">
      <Avatar>
        <AvatarImage
          source={{
            uri: "https://avatars.githubusercontent.com/u/66306912?v=4",
          }}
        />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
    </View>
  );
};

export default AvatarScreen;
