import {View} from 'react-native';
import {Button, H2, H4, Text} from '@nativecn/ui';
import {Link} from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="flex w-full items-center gap-6 px-4">
      <View style={{maxWidth: 1400}} className="flex flex-col w-full pt-20 gap-4">
        <H2>Build your component library</H2>

        <H4>Beautifully designed components that you can copy and paste into your apps.</H4>

        <View className="flex flex-row gap-2">
          <Link asChild href="/docs">
            <Button>Get Started</Button>
          </Link>

          <Link href="https://github.com/unisol1020/nativecn">
            <Button variant="ghost">
              <Text>GitHub</Text>
            </Button>
          </Link>
        </View>
      </View>
    </View>
  );
}

