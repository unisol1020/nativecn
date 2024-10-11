import { CodeBlock } from "@/components/CodeBlock";
import MainContentLayout from "@/components/MainContentLayout";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const Example = dynamic(() => import("@/components/Example"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Tabs - nativecn",
  description:
    "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
};

const BREADCRUMBS = [
  {
    name: "Docs",
  },
  {
    name: "Tabs",
    href: "/docs/tabs",
  },
];

export default function TabsPage() {
  return (
    <MainContentLayout
      title="Tabs"
      subtitle="A set of layered sections of content—known as tab panels—that are displayed one at a time."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="tabs" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/Tabs";
import { Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/Card";
import { Input, Label } from "@/components/Input";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { useEffect, useState } from "react";
import { View } from "react-native";

const TabsDemo = () => {
  const [value, setValue] = useState("account");

  return (
    <View className="flex-1 justify-center p-6">
      <Tabs
        value={value}
        onValueChange={setValue}
        className="w-full max-w-[400px] mx-auto flex-col gap-1.5"
      >
        <TabsList className="flex-row w-full">
          <TabsTrigger value="account" className="flex-1">
            <Text>Account</Text>
          </TabsTrigger>
          <TabsTrigger value="password" className="flex-1">
            <Text>Password</Text>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>User</CardTitle>
              <CardDescription>Create a user to get started.</CardDescription>
            </CardHeader>
            <CardContent className="gap-4 native:gap-2">
              <View className="gap-1">
                <Label nativeID="name">Name</Label>
                <Input aria-aria-labelledby="name" defaultValue="Unisol" />
              </View>
              <View className="gap-1">
                <Label nativeID="username">Username</Label>
                <Input id="username" defaultValue="@unisol" />
              </View>
            </CardContent>
            <CardFooter>
              <Button>
                <Text>Save</Text>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="gap-4 native:gap-2">
              <View className="gap-1">
                <Label nativeID="current">Current password</Label>
                <Input
                  placeholder="********"
                  aria-labelledby="current"
                  secureTextEntry
                />
              </View>
              <View className="gap-1">
                <Label nativeID="new">New password</Label>
                <Input
                  placeholder="********"
                  aria-labelledby="new"
                  secureTextEntry
                />
              </View>
            </CardContent>
            <CardFooter>
              <Button>
                <Text>Save</Text>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </View>
  );
};

export default TabsDemo;
`}
            language="tsx"
          />
        </TabsContent>
      </Tabs>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Installation
        </h3>

        <Separator className="my-2" />

        <CodeBlock code="npx nativecn add Tabs" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs"`}
          language="tsx"
        />
      </section>
    </MainContentLayout>
  );
}
