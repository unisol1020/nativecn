import MainContentLayout from "@/components/MainContentLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import dynamic from "next/dynamic";

const Example = dynamic(() => import("@/components/Example"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Avatar - nativecn",
  description: "An image element with a fallback for representing the user.",
};

const BREADCRUMBS = [
  {
    name: "Docs",
  },
  {
    name: "Avatar",
    href: "/docs/avatar",
  },
];

export default function AvatarPage() {
  return (
    <MainContentLayout
      title="Avatar"
      subtitle="An image element with a fallback for representing the user."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="avatar" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import { View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import { Text } from "@/components/Text";

const AvatarDemo = () => {
  return (
    <View className="flex-1 flex-row justify-center items-center gap-5">
      <Avatar alt="avatar-with-image">
        <AvatarImage
          source={{
            uri: "https://avatars.githubusercontent.com/u/66306912?v=4",
          }}
        />
        <AvatarFallback>
          <Text>UN</Text>
        </AvatarFallback>
      </Avatar>

      <Avatar alt="avatar-without-image">
        <AvatarFallback>
          <Text>UN</Text>
        </AvatarFallback>
      </Avatar>
    </View>
  );
  );
};

export default AvatarDemo;
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

        <CodeBlock code="npx nativecn add Avatar" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar"
import { Text } from "@/components/Text"`}
          language="tsx"
        />

        <CodeBlock
          code={`<Avatar>
  <AvatarImage
    source={{
      uri: "https://avatars.githubusercontent.com/u/66306912?v=4",
    }}
  />
  <AvatarFallback>
    <Text>UN</Text>
  </AvatarFallback>
</Avatar>`}
          language="tsx"
        />
      </section>
    </MainContentLayout>
  );
}
