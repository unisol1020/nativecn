import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Muted,
  Skeleton,
  Small,
} from "@nativecn/ui";
import { View } from "react-native";

const LatestActivity = () => {
  return (
    <Card className="w-full md:w-1/2 mt-6 md:ml-3 max-h-[325px]">
      <CardHeader>
        <CardTitle>Latest Activity</CardTitle>
        <CardDescription>
          See what's happening with your account.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-col justify-between gap-8">
        <View className="flex-row items-center gap-4">
          <Avatar>
            <AvatarImage
              source={{
                uri: "https://avatars.githubusercontent.com/u/66306912?v=4",
              }}
            />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>

          <View className="flex-col">
            <Small>unisol1020</Small>

            <Muted>Added new url.</Muted>
          </View>
        </View>

        <View className="flex-row items-center gap-4">
          <Avatar>
            <AvatarImage
              source={{
                uri: "https://avatars.githubusercontent.com/u/66306912?v=4",
              }}
            />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>

          <View className="flex-col">
            <Small>unisol1020</Small>

            <Muted>Added logo.</Muted>
          </View>
        </View>

        <View className="flex flex-row items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <View className="gap-2">
            <Skeleton className="h-4 w-[200px] md:w-[250px]" />
            <Skeleton className="h-4 w-[150px] md:w-[200px]" />
          </View>
        </View>
      </CardContent>
    </Card>
  );
};

export default LatestActivity;
