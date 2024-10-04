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
  title: "Progress - nativecn",
  description:
    "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
};

const BREADCRUMBS = [
  {
    name: "Components",
  },
  {
    name: "Progress",
    href: "/components/progress",
  },
];

export default function ComponentPage() {
  return (
    <MainContentLayout
      title="Progress"
      subtitle="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="progress" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import { Progress } from "@/components/ui/Progress";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { useEffect, useState } from "react";
import { View } from "react-native";

const ProgressDemo = () => {
  const [progress, setProgress] = useState(13);

  function onPress() {
    setProgress(Math.floor(Math.random() * 100));
  }

  return (
    <View className="flex-1 justify-center items-center p-6 gap-12">
      <View className="w-full gap-8 items-center">
        <Progress value={progress} className="web:w-[60%]" />
        <Button variant="ghost" onPress={onPress}>
          <Text>Randomize</Text>
        </Button>
      </View>
    </View>
  );
}

export default ProgressDemo;
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

        <CodeBlock code="npx nativecn add Progress" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import { Progress } from "@/components/ui/Progress"`}
          language="tsx"
        />

        <CodeBlock code={`<Progress value={13} />`} language="tsx" />
      </section>
    </MainContentLayout>
  );
}
