import { Stack } from 'expo-router';

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
    </>
  );
}

export default NotFoundScreen;
