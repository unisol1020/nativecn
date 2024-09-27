import { View } from "react-native";
import {
  Button,
  Checkbox,
  Label,
  Large,
  Lead,
  Separator,
  Text,
} from "@nativecn/ui";
import { useState } from "react";

const checkboxes = [
  "Recents",
  "Home",
  "Applications",
  "Desktop",
  "Downloads",
  "Documents",
];

const Display = () => {
  const [checked, setChecked] = useState(["Desktop", "Downloads"]);

  const changeChecked = (value: string) => {
    setChecked((prev) => {
      const newValue = [...prev];

      if (newValue.includes(value)) {
        return newValue.filter((i) => i !== value);
      }

      newValue.push(value);
      return newValue;
    });
  };

  return (
    <View className="flex-col gap-6">
      <View className="flex-col gap-3">
        <Large className="font-normal">Display</Large>

        <Lead className="font-normal text-sm">
          Turn items on or off to control what's displayed in the app.
        </Lead>
      </View>

      <Separator />

      <View className="flex flex-col gap-3 w-full">
        <View className="flex flex-col gap-1">
          <Label nativeID="sidebar">Sidebar</Label>
          <Lead className="font-normal text-xs">
            Select the items you want to display in the sidebar.
          </Lead>
        </View>

        <View className="flex flex-col gap-2">
          {checkboxes.map((checkbox) => (
            <View
              key={checkbox}
              className="flex flex-row items-center gap-3 mt-auto"
            >
              <Checkbox
                nativeID="label"
                checked={checked.includes(checkbox)}
                onCheckedChange={() => changeChecked(checkbox)}
              />
              <Label onPress={() => changeChecked(checkbox)} nativeID="label">
                {checkbox}
              </Label>
            </View>
          ))}
        </View>
      </View>

      <Button className="mr-auto">
        <Text>Update display</Text>
      </Button>
    </View>
  );
};

export default Display;
