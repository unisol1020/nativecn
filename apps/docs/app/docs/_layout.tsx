import {ScrollView, View} from 'react-native';
import {Stack} from 'expo-router';
import DocsMenu from '../../components/DocsMenu/DocsMenu';

const DocsLayout = () => {
  return (
      <View className="flex w-full h-full items-center gap-6 px-4">
        <View style={{maxWidth: 1400}} className="flex flex-row pt-20 gap-8 w-full h-full">
          <DocsMenu />

          <ScrollView className="h-full w-full">
            <Stack screenOptions={{
              headerShown: false,
            }}>
              <Stack.Screen name="index"/>
              <Stack.Screen name="dark-mode"/>
            </Stack>
          </ScrollView>
        </View>
      </View>
  );
};

export default DocsLayout;
