import { View } from "react-native";
import { Card, CardContent, Label, Lead, Switch } from "@nativecn/ui";
import { useState } from "react";

const emails = [
  {
    title: "Communication",
    description: "Receive emails about your account activity.",
    disabled: false,
  },
  {
    title: "Marketing",
    description: "Receive emails about new products, features, and more.",
    disabled: false,
  },
  {
    title: "Security",
    description: "Receive emails about your account activity and security.",
    disabled: true,
  },
];

const EmailNotifications = () => {
  const [checked, setChecked] = useState<string[]>([]);

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
    <View className="flex flex-col gap-3 w-full md:w-1/2 ml-auto">
      <Label nativeID="email">Email Notifications</Label>

      <View className="flex flex-col gap-5">
        {emails.map((email) => (
          <Card key={email.title} className="flex flex-col gap-1 w-full">
            <CardContent className="pt-6 flex flex-row w-full items-center">
              <View>
                <Label nativeID={email.title}>{email.title}</Label>
                <Lead className="font-normal text-sm">{email.description}</Lead>
              </View>

              <Switch
                className="ml-auto"
                checked={email.disabled || checked.includes(email.title)}
                onCheckedChange={() => changeChecked(email.title)}
                disabled={email.disabled}
              />
            </CardContent>
          </Card>
        ))}
      </View>
    </View>
  );
};

export default EmailNotifications;
