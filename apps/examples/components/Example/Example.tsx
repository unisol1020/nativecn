import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
  Text,
} from "@nativecn/ui";
import { View } from "react-native";
import { useState } from "react";
import Profile from "~/components/Example/Profile";
import Notification from "~/components/Example/Notification";
import Display from "~/components/Example/Display";

type PageKey = "profile" | "notification" | "display";

const pages: Record<PageKey, JSX.Element> = {
  profile: <Profile />,
  notification: <Notification />,
  display: <Display />,
};

const Example = () => {
  const [page, setPage] = useState<PageKey>("profile");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Settings</CardTitle>

        <CardDescription>
          Manage your account settings and set e-mail preferences.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Separator />

        <View className="flex flex-col w-full md:flex-row gap-8 mt-6">
          <View className="flex flex-col gap-1 w-full md:w-1/5">
            {Object.keys(pages).map((key) => (
              <Button
                key={key}
                className="flex items-center md:items-start"
                onPress={() => setPage(key as PageKey)}
                variant={key === page ? "secondary" : "ghost"}
              >
                <Text>{key[0].toUpperCase() + key.slice(1)}</Text>
              </Button>
            ))}
          </View>

          <View className="w-full md:w-4/5 pr-8">{pages[page]}</View>
        </View>
      </CardContent>
    </Card>
  );
};

export default Example;
