import {View} from 'react-native';
import {Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Text} from '@mono-ui/ui';

export default function HomeScreen() {
  return (
    <View className="flex flex-col items-center py-6">
      <View className="flex flex-col gap-6 w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <Text>Card Content</Text>
          </CardContent>
          <CardFooter>
            <Text>Card Footer</Text>
          </CardFooter>
        </Card>

        <Button size="lg">
          <Text className="p-5">123</Text>
        </Button>

        <Input />
      </View>
    </View>
  );
}
