import {ScrollView, View} from 'react-native';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
  Separator,
  Skeleton,
  Text,
  Textarea,
  Toggle,
  ToggleIcon
} from '@mono-ui/ui';
import {Bold} from 'lucide-react-native';
import {useState} from 'react';

export default function HomeScreen() {
  const [pressed, setPressed] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView className="flex flex-col items-center py-6">
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

        <Input placeholder="Input" />

        <Textarea placeholder="Textarea" />

        <View className='flex flex-row items-center gap-4'>
          <Skeleton className='h-12 w-12 rounded-full' />
          <View className='gap-2'>
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='h-4 w-[200px]' />
          </View>
        </View>

        <View className='flex flex-row justify-center items-center gap-5'>
          <Badge>
            <Text>Default</Text>
          </Badge>
          <Badge variant={'secondary'}>
            <Text>Secondary</Text>
          </Badge>
          <Badge variant={'destructive'}>
            <Text>Destructive</Text>
          </Badge>
          <Badge variant={'outline'}>
            <Text>Outline</Text>
          </Badge>
        </View>

        <View className='flex-1 justify-center items-center p-6 gap-12'>
          <Toggle
            pressed={pressed}
            onPressedChange={setPressed}
            aria-label='Toggle bold'
            variant='outline'
          >
            <ToggleIcon icon={Bold} size={18} />
          </Toggle>
        </View>

        <View className='flex-row gap-3 items-center'>
          <Checkbox aria-labelledby='terms' checked={checked} onCheckedChange={setChecked} />
          <Label nativeID='label'>Checkbox label</Label>
        </View>

        <Label nativeID='label'>This is a label</Label>

        <View className='w-full max-w-xs '>
          <View className='gap-1'>
            <Text>Text</Text>
          </View>
          <Separator className='my-4' />
          <View className='flex flex-row h-5 items-center gap-4 '>
            <Text className='font-normal'>Blog</Text>
            <Separator orientation='vertical' />
            <Text className='font-normal'>Docs</Text>
            <Separator orientation='vertical' />
            <Text className='font-normal'>Source</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
