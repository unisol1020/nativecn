import { View } from "react-native";
import {
  Button,
  Checkbox,
  Label,
  Large,
  Lead,
  RadioGroup,
  RadioGroupItem,
  Separator,
  Text,
} from "@nativecn/ui";
import { useState } from "react";
import EmailNotifications from "~/components/Example/EmailNotifications";

const Notification = () => {
  const [checkbox, setCheckbox] = useState(true);
  const [value, setValue] = useState("All new messages");

  return (
    <View className="flex-col gap-6">
      <View className="flex-col gap-3">
        <Large className="font-normal">Notifications</Large>

        <Lead className="font-normal text-sm">
          Configure how you receive notifications.
        </Lead>
      </View>

      <Separator />

      <View className="flex flex-col md:flex-row gap-8 w-full">
        <View className="flex flex-col gap-5">
          <View className="flex-col gap-3">
            <Label nativeID="notify_me">Notify me about...</Label>

            <RadioGroup
              value={value}
              onValueChange={setValue}
              className="gap-3"
            >
              {[
                "All new messages",
                "Direct messages and mentions",
                "Nothing",
              ].map((value) => (
                <View key={value} className={"flex-row gap-2 items-center"}>
                  <RadioGroupItem
                    aria-labelledby={`label-for-${value}`}
                    value={value}
                  />
                  <Label
                    nativeID={`label-for-${value}`}
                    onPress={() => setValue(value)}
                  >
                    {value}
                  </Label>
                </View>
              ))}
            </RadioGroup>
          </View>

          <View className="flex flex-row items-center gap-3 mt-auto">
            <Checkbox
              nativeID="label"
              checked={checkbox}
              onCheckedChange={setCheckbox}
            />
            <Label
              onPress={() => {
                setCheckbox((prev) => !prev);
              }}
              nativeID="label"
            >
              Use different settings for my mobile devices
            </Label>
          </View>
        </View>

        <EmailNotifications />
      </View>

      <Button className="mr-auto">
        <Text>Update notifications</Text>
      </Button>
    </View>
  );
};

export default Notification;
