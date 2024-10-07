import { Checkbox, Label } from "@nativecn/ui";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";

import { View } from "react-native";

const CheckboxScreen = () => {
  const [checked, setChecked] = useState(false);
  const { setColorScheme } = useColorScheme();
  const { theme } = useLocalSearchParams();

  useEffect(() => {
    if (setColorScheme && theme)
      setColorScheme(theme === "dark" ? "dark" : "light");
  }, [theme, setColorScheme]);

  return (
    <View className="flex-1 justify-center items-center p-6 gap-12">
      <View className="flex-row gap-3 items-center">
        <Checkbox
          aria-labelledby="terms"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label nativeID="terms" onPress={() => setChecked((prev) => !prev)}>
          Accept terms and conditions
        </Label>
      </View>
    </View>
  );
};

export default CheckboxScreen;
