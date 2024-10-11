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
  title: "Text - nativecn",
  description: "Styled text component and inheritance system.",
};

const BREADCRUMBS = [
  {
    name: "Components",
  },
  {
    name: "Text",
    href: "/components/text",
  },
];

const TextPage = () => {
  return (
    <MainContentLayout
      title="Text"
      subtitle="Styled text component and inheritance system."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="text" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import { Text } from "@/components/text";
import { View } from "react-native";

const TextDemo = () => {
  return (
    <View className="flex-1 justify-center items-center p-6">
      <Text nativeID="text">This is a text</Text>
    </View>
  );
};

export default TextDemo;
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

        <CodeBlock code="npx nativecn add Textarea" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import { Text } from "@/components/Text"`}
          language="tsx"
        />

        <CodeBlock code={`<Text>This is a text</Text>`} language="tsx" />
      </section>
    </MainContentLayout>
  );
};

export default TextPage;
