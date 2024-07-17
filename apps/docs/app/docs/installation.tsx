import { View } from "react-native";
import { Button, H3, Lead, Text } from "@nativecn/ui";
import InstallStagesInit from "~/components/InstallStagesInit";
import { Link } from "expo-router";
import { ChevronRight } from "lucide-react-native";

const Installation = () => {
  return (
    <View className="flex flex-col w-full h-full gap-8">
      <View className="flex flex-col gap-2">
        <H3>React Native</H3>

        <Lead className="text-base">Install and configure React Native</Lead>
      </View>

      <View className="flex flex-col gap-8 pb-8">
        <View className="flex flex-row gap-8">
          <InstallStagesInit />
        </View>

        <Link asChild href="/docs/dark-mode">
          <Button
            className="flex flex-row gap-4 mr-auto items-center"
            variant="outline"
          >
            <Text>Dark Mode</Text>

            <Text>
              <ChevronRight />
            </Text>
          </Button>
        </Link>
      </View>
    </View>
  );
};

export default Installation;
