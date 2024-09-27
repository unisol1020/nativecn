import { ScrollView, View } from "react-native";
import { Button, H2, Badge, P, Text, Lead } from "@nativecn/ui";
import { Link } from "expo-router";
import Example from "../components/Example/Example";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View className="flex w-full items-center gap-6 pb-6">
        <View className="flex flex-col w-full pt-20 gap-4 max-w-[1400px] px-4">
          <H2 className="border-b-0 pb-0">
            Build your native component library
          </H2>

          <P className="font-light max-w-[615px]">
            Beautifully designed native components that you can copy and paste
            into your apps. All documentation built with
            <Link className="px-1" target="_blank" href="https://expo.dev/">
              <Lead className="font-medium">React Native Expo</Lead>
            </Link>
            and
            <Link
              className="px-1"
              target="_blank"
              href="https://github.com/unisol1020/nativecn"
            >
              <Lead className="font-medium">nativecn</Lead>
            </Link>
            components.
          </P>

          <View className="flex flex-row gap-2 mb-8">
            <Link asChild href="/docs">
              <Button>
                <Text>Get Started</Text>
              </Button>
            </Link>

            <Link target="_blank" href="https://github.com/unisol1020/nativecn">
              <Button variant="outline">
                <Text>GitHub</Text>
              </Button>
            </Link>
          </View>

          <View className="flex flex-col gap-4">
            <Badge className="mr-auto p-2" variant="secondary">
              <Text>Examples</Text>
            </Badge>

            <Example />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
