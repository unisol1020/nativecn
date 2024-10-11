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
  title: "Label - nativecn",
  description:
    "A user-friendly label linked to controls for improved accessibility.",
};

const BREADCRUMBS = [
  {
    name: "Components",
  },
  {
    name: "Label",
    href: "/components/label",
  },
];

export default function ComponentPage() {
  return (
    <MainContentLayout
      title="Label"
      subtitle="A user-friendly label linked to controls for improved accessibility."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="label" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import { Label } from "@/components/Label";
import { View } from "react-native";

const LabelDemo = () => {
  return (
    <View className="flex-1 justify-center items-center p-6">
      <Label nativeID="label">This is a label</Label>
    </View>
  );
};

export default LabelDemo;
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

        <CodeBlock code="npx nativecn add Label" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import { Label } from "@/components/Label"`}
          language="tsx"
        />

        <CodeBlock code={`<Label>This is a label</Label>`} language="tsx" />
      </section>
    </MainContentLayout>
  );
}
