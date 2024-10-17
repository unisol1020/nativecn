import { CodeBlock } from "@/components/CodeBlock";
import { Example } from "@/components/Example";
import MainContentLayout from "@/components/MainContentLayout";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radio Group - nativecn",
  description:
    "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
};

const BREADCRUMBS = [
  {
    name: "Docs",
  },
  {
    name: "Radio Group",
    href: "/docs/radio-group",
  },
];

export default function RadioGroupPage() {
  return (
    <MainContentLayout
      title="Radio Group"
      subtitle="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="radio-group" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import { Label } from "@/components/Label";
import { RadioGroup, RadioGroupItem } from "@/components/RadioGroup";
import * as React from "react";
import { View } from "react-native";

export default function RadioGroupScreen() {
  const [value, setValue] = React.useState("Comfortable");

  function onLabelPress(label: string) {
    return () => {
      setValue(label);
    };
  }

  return (
    <View className="flex-1 justify-center items-center p-6">
      <RadioGroup value={value} onValueChange={setValue} className="gap-3">
        <RadioGroupItemWithLabel
          value="Default"
          onLabelPress={onLabelPress("Default")}
        />
        <RadioGroupItemWithLabel
          value="Comfortable"
          onLabelPress={onLabelPress("Comfortable")}
        />
        <RadioGroupItemWithLabel
          value="Compact"
          onLabelPress={onLabelPress("Compact")}
        />
      </RadioGroup>
    </View>
  );
}

function RadioGroupItemWithLabel({
  value,
  onLabelPress,
}: Readonly<{
  value: string;
  onLabelPress: () => void;
}>) {
  return (
    <View className={"flex-row gap-2 items-center"}>
      <RadioGroupItem aria-labelledby={"label-for-" + value} value={value} />
      <Label nativeID={"label-for-" + value} onPress={onLabelPress}>
        {value}
      </Label>
    </View>
  );
}
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

        <CodeBlock code="npx nativecn add RadioGroup" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import { RadioGroup, RadioGroupItem } from "@/components/RadioGroup"`}
          language="tsx"
        />
      </section>
    </MainContentLayout>
  );
}
