import { CodeBlock } from "@/components/CodeBlock";
import MainContentLayout from "@/components/MainContentLayout";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const Example = dynamic(() => import("@/components/Example"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Toggle - nativecn",
  description: "A two-state button that can be either on or off.",
};

const BREADCRUMBS = [
  {
    name: "Docs",
  },
  {
    name: "Toggle",
    href: "/docs/toggle",
  },
];

export default function ComponentPage() {
  return (
    <MainContentLayout
      title="Toggle"
      subtitle="A two-state button that can be either on or off."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="toggle" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import { Toggle, ToggleIcon } from "@/components/Toggle";
import { Bitcoin } from "lucide-react-native";
import { useState } from "react";
import { View } from "react-native";

const ToggleDemo = () => {
  const [pressed, setPressed] = useState(false);
  
  return (
    <View className="flex-1 justify-center items-center p-6 gap-12">
      <Toggle
        pressed={pressed}
        onPressedChange={setPressed}
        aria-label="Toggle bold"
        variant="outline"
      >
        <ToggleIcon icon={Bitcoin} size={18} />
      </Toggle>
    </View>
  );
};

export default ToggleDemo;
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

        <CodeBlock code="npx nativecn add Toggle" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import { Toggle } from "@/components/Toggle"`}
          language="tsx"
        />

        <CodeBlock
          code={`<Toggle
  pressed={pressed}
  onPressedChange={setPressed}
  aria-label='Toggle bold'
  variant='outline'
>
  <ToggleIcon icon={Bold} size={18} />
</Toggle>`}
          language="tsx"
        />
      </section>
    </MainContentLayout>
  );
}
