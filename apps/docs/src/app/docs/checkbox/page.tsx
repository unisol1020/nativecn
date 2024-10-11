import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainContentLayout from "@/components/MainContentLayout";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { CodeBlock } from "@/components/CodeBlock";
import { Separator } from "@/components/ui/separator";

const Example = dynamic(() => import("@/components/Example"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Checkbox - nativecn",
  description:
    "A control that allows the user to toggle between checked and not checked.",
};

const BREADCRUMBS = [
  {
    name: "Docs",
  },
  {
    name: "Checkbox",
    href: "/docs/checkbox",
  },
];

export default function CheckboxPage() {
  return (
    <MainContentLayout
      title="Checkbox"
      subtitle="A control that allows the user to toggle between checked and not checked."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="checkbox" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import { Checkbox } from "@/components/Checkbox";
import { Label } from "@/components/Label";
import { useState } from "react";
import { View } from "react-native";

const CheckboxDemo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View className="flex-1 justify-center items-center p-6 gap-12">
      <View className="flex-row gap-3 items-center">
        <Checkbox
          aria-labelledby="terms"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label nativeID="terms" onPress={() => setChecked((prev) => !prev)}>
          Accept terms and conditions
        </Label>
      </View>
    </View>
  );
};

export default CheckboxDemo;
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

        <CodeBlock code="npx nativecn add Checkbox" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import { Checkbox } from "@/components/Checkbox"`}
          language="tsx"
        />

        <CodeBlock code={`<Checkbox />`} language="tsx" />
      </section>
    </MainContentLayout>
  );
}
