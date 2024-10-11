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
  title: "Switch - nativecn",
  description:
    "A control that allows the user to toggle between checked and not checked.",
};

const BREADCRUMBS = [
  {
    name: "Docs",
  },
  {
    name: "Switch",
    href: "/docs/switch",
  },
];

export default function ComponentPage() {
  return (
    <MainContentLayout
      title="Switch"
      subtitle="A control that allows the user to toggle between checked and not checked."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="switch" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import { Switch } from "@/components/Switch";
import { Label } from "@/components/Label";
import { useState } from "react";
import { View } from "react-native";

const SwitchDemo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View className="flex-1 justify-center items-center p-6 gap-12">
      <View className="flex-row items-center gap-2">
        <Switch
          checked={checked}
          onCheckedChange={setChecked}
          nativeID="airplane-mode"
        />
        <Label
          nativeID="airplane-mode"
          onPress={() => {
            setChecked((prev) => !prev);
          }}
        >
          Airplane Mode
        </Label>
      </View>
    </View>
  );
};

export default SwitchDemo;
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

        <CodeBlock code="npx nativecn add Switch" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import { Switch } from "@/components/Switch"`}
          language="tsx"
        />

        <CodeBlock
          code={`<Switch
  checked={checked}
  onCheckedChange={setChecked}
/>`}
          language="tsx"
        />
      </section>
    </MainContentLayout>
  );
}
