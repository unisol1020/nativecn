import { ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import DocsMenu from "../../components/DocsMenu/DocsMenu";

const DocsLayout = () => {
  return (
    <ScrollView>
      <View className="flex w-full h-full items-center gap-6 px-4">
        <View className="max-w-[1400px] flex flex-col md:flex-row pt-20 pb-6 gap-8 w-full h-full">
          <DocsMenu />

          <View className="w-full h-full">
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="index" />
              <Stack.Screen name="dark-mode" />
            </Stack>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DocsLayout;
