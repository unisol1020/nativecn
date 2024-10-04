import { Label, Textarea } from "@nativecn/ui";
import { useGlobalSearchParams } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect, useRef, useState } from "react";
import { ScrollView, TextInput, View } from "react-native";

const TextareaScreen = () => {
  const inputRef = useRef<TextInput>(null);
  const [value, setValue] = useState<string>("");
  const { setColorScheme } = useColorScheme();
  const { theme } = useGlobalSearchParams();

  useEffect(() => {
    setColorScheme(theme === "dark" ? "dark" : "light");
  }, [theme]);

  function handleOnLabelPress() {
    if (!inputRef.current) {
      return;
    }
    if (inputRef.current.isFocused()) {
      inputRef.current?.blur();
    } else {
      inputRef.current?.focus();
    }
  }

  function onChangeText(text: string) {
    setValue(text);
  }

  return (
    <ScrollView contentContainerClassName="flex-1 justify-center items-center p-6">
      <View className="web:max-w-xs w-full">
        <Label
          className="pb-2 native:pb-1 pl-0.5"
          nativeID="textareaLabel"
          onPress={handleOnLabelPress}
        >
          Label
        </Label>
        <Textarea
          ref={inputRef}
          placeholder="Write some stuff..."
          value={value}
          onChangeText={onChangeText}
          aria-labelledby="textareaLabel"
        />
        <View className="h-20" />
      </View>
    </ScrollView>
  );
};

export default TextareaScreen;
