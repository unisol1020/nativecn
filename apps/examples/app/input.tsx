import { Input, Text } from "@nativecn/ui";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect, useRef, useState } from "react";
import { Platform, TextInput, View } from "react-native";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";

export default function InputScreen() {
  const inputRef = useRef<TextInput>(null);
  const [value, setValue] = useState<string>("");
  const [err, setErr] = useState<string | null>(null);
  const { setColorScheme } = useColorScheme();
  const { theme } = useLocalSearchParams();

  useEffect(() => {
    if (setColorScheme && theme)
      setColorScheme(theme === "dark" ? "dark" : "light");
  }, [theme, setColorScheme]);

  function onChangeText(text: string) {
    if (err) {
      setErr(null);
    }
    setValue(text);
  }

  function onSubmitEditing() {
    setErr("Write more stuff to remove this error message.");
  }

  return (
    <View className="flex-1 justify-center items-center p-6">
      <Input
        className="web:max-w-xs w-full"
        ref={inputRef}
        placeholder="Write some stuff..."
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        aria-labelledby="inputLabel"
        aria-errormessage="inputError"
      />
      {err && <ErrorMessage msg={err} />}
      <View className="h-20" />
    </View>
  );
}

function ErrorMessage({ msg }: { msg: string }) {
  if (Platform.OS === "web") {
    return (
      <Text
        className="text-destructive text-sm native:px-1 py-1.5 web:animate-in web:zoom-in-95"
        aria-invalid="true"
        id="inputError"
      >
        {msg}
      </Text>
    );
  }
  return (
    <Animated.Text
      entering={FadeInDown}
      exiting={FadeOut.duration(275)}
      className="text-destructive text-sm native:px-1 py-1.5"
      aria-invalid="true"
      id="inputError"
    >
      {msg}
    </Animated.Text>
  );
}
