import { Textarea } from "@nativecn/ui";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect, useRef, useState } from "react";
import { TextInput, View } from "react-native";

const TextareaScreen = () => {
  const inputRef = useRef<TextInput>(null);
  const [value, setValue] = useState<string>("");
  const { setColorScheme } = useColorScheme();
  const { theme } = useLocalSearchParams();

  useEffect(() => {
    if (setColorScheme && theme)
      setColorScheme(theme === "dark" ? "dark" : "light");
  }, [theme, setColorScheme]);

  function onChangeText(text: string) {
    setValue(text);
  }

  return (
    <View className="flex-1 justify-center items-center p-6">
      <Textarea
        className="web:max-w-xs w-full"
        ref={inputRef}
        placeholder="Write some stuff..."
        value={value}
        onChangeText={onChangeText}
        aria-labelledby="textareaLabel"
      />
      <View className="h-20" />
    </View>
  );
};

export default TextareaScreen;
