import { View } from "react-native";
import {
  Button,
  Input,
  Label,
  Large,
  Lead,
  Separator,
  Textarea,
  Text,
} from "@nativecn/ui";
import { useState } from "react";
import LatestActivity from "~/components/Example/LatestActivity";

const Profile = () => {
  const [urls, setUrls] = useState<string[]>([
    "https://nativecn.vercel.app/",
    "https://github.com/unisol1020/nativecn",
  ]);

  const addUrl = () => {
    setUrls((prev) => [...prev, ""]);
  };

  return (
    <View className="flex-col gap-6">
      <View className="flex-col gap-3">
        <Large className="font-normal">Profile</Large>

        <Lead className="font-normal text-sm">
          This is how others will see you on the site.
        </Lead>
      </View>

      <Separator />

      <View className="flex-col md:flex-row md:pr-6">
        <View className="flex-col gap-5 mr-3 w-full md:w-1/2">
          <View className="flex-col gap-3">
            <Label nativeID="username">Username</Label>

            <Input nativeID="username" placeholder="nativecn" />
          </View>

          <View className="flex-col gap-3">
            <Label nativeID="bio">BIO</Label>

            <Textarea
              nativeID="bio"
              placeholder="Tell us a little bit about yourself"
              value={"I own a pc."}
            />
          </View>

          <View className="flex-col gap-3">
            <View className="flex-col gap-3">
              <Label nativeID="url">URLs</Label>

              <View className="flex-col gap-4">
                {urls.map((url, index) => (
                  <Input
                    key={url + index}
                    nativeID="url"
                    placeholder="nativecn"
                    value={url}
                  />
                ))}
              </View>
            </View>

            <Button onPress={addUrl} className="mr-auto" variant="outline">
              <Text>Add url</Text>
            </Button>
          </View>
        </View>

        <LatestActivity />
      </View>

      <Button className="mr-auto">
        <Text>Update my profile</Text>
      </Button>
    </View>
  );
};

export default Profile;
