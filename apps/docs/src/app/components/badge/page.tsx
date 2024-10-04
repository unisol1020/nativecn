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
  title: "Badge - nativecn",
  description: "Displays a badge or a component that looks like a badge.",
};

const BREADCRUMBS = [
  {
    name: "Components",
  },
  {
    name: "Badge",
    href: "/components/badge",
  },
];

export default function BadgePage() {
  return (
    <MainContentLayout
      title="Badge"
      subtitle="Displays a badge or a component that looks like a badge."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="badge" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import { View } from "react-native";
import { Badge } from "@/components/ui/Badge";
import { Text } from "@/components/ui/Text";

const BadgeDemo = () => {
  return (
    <View className="flex-1 justify-center items-center gap-5">
      <Badge>
        <Text>Default</Text>
      </Badge>
      <Badge variant={"secondary"}>
        <Text>Secondary</Text>
      </Badge>
      <Badge variant={"destructive"}>
        <Text>Destructive</Text>
      </Badge>
      <Badge variant={"outline"}>
        <Text>Outline</Text>
      </Badge>
    </View>
  );
};

export default BadgeDemo;
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

        <CodeBlock code="npx nativecn add Badge" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import { Badge } from "@/components/ui/Badge"`}
          language="tsx"
        />

        <CodeBlock
          code={`<Badge>
  <Text>Badge</Text>
</Badge>`}
          language="tsx"
        />
      </section>
    </MainContentLayout>
  );
}
