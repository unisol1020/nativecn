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
  title: "Button - nativecn",
  description: "Displays a button or a component that looks like a button.",
};

const BREADCRUMBS = [
  {
    name: "Docs",
  },
  {
    name: "Button",
    href: "/docs/button",
  },
];

export default function ButtonPage() {
  return (
    <MainContentLayout
      title="Button"
      subtitle="Displays a button or a component that looks like a button."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="button" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import { Button, Text } from "@/components/Button";
import { Text } from "@/components/Text";
import { View } from "react-native";

const ButtonDemo = () => {
  return (
    <View className="flex-1 justify-center items-center gap-5">
      <Button>
        <Text>Default</Text>
      </Button>
      <Button variant="destructive">
        <Text>Destructive</Text>
      </Button>
      <Button variant="destructive" disabled>
        <Text>Destructive disabled</Text>
      </Button>
      <Button variant="secondary">
        <Text>Secondary</Text>
      </Button>
      <Button variant="outline" size="lg">
        <Text>Outline lg</Text>
      </Button>
      <Button variant="outline" size="sm">
        <Text>Outline sm</Text>
      </Button>
      <Button variant="ghost">
        <Text>Ghost</Text>
      </Button>
      <Button variant="link" size="sm">
        <Text>Link sm</Text>
      </Button>
    </View>
  );
};

export default ButtonDemo;
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

        <CodeBlock code="npx nativecn add Button" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import { Button } from "@/components/Button"`}
          language="tsx"
        />

        <CodeBlock
          code={`<Button>
  <Text>Badge</Text>
</Button>`}
          language="tsx"
        />
      </section>
    </MainContentLayout>
  );
}
