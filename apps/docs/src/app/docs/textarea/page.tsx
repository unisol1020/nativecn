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
  title: "Textarea - nativecn",
  description:
    "Displays a form textarea or a component that looks like a textarea.",
};

const BREADCRUMBS = [
  {
    name: "Components",
  },
  {
    name: "Textarea",
    href: "/components/textarea",
  },
];

export default function ComponentPage() {
  return (
    <MainContentLayout
      title="Textarea"
      subtitle="Displays a form textarea or a component that looks like a textarea."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="textarea" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import { Label } from "@/components/Label";
import { Textarea } from "@/components/Textarea";
import { useRef, useState } from "react";
import { ScrollView, TextInput, View } from "react-native";

const TextareaDemo = () => {
  const inputRef = useRef<TextInput>(null);
  const [value, setValue] = useState<string>("");

  function handleOnLabelPress() {
    if (!inputRef.current) {
      return;
    }
    if (inputRef.current.isFocused()) {
      inputRef.current?.blur();
    } else {
      inputRef.current?.focus();
    }
  }

  function onChangeText(text: string) {
    setValue(text);
  }

  return (
    <ScrollView contentContainerClassName="flex-1 justify-center items-center p-6">
      <View className="web:max-w-xs w-full">
        <Label
          className="pb-2 native:pb-1 pl-0.5"
          nativeID="textareaLabel"
          onPress={handleOnLabelPress}
        >
          Label
        </Label>
        <Textarea
          ref={inputRef}
          placeholder="Write some stuff..."
          value={value}
          onChangeText={onChangeText}
          aria-labelledby="textareaLabel"
        />
        <View className="h-20" />
      </View>
    </ScrollView>
  );
};

export default TextareaDemo;
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
          code={`import { Textarea } from "@/components/Textarea"`}
          language="tsx"
        />

        <CodeBlock code={`<Textarea />`} language="tsx" />
      </section>
    </MainContentLayout>
  );
}
