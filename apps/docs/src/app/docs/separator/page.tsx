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
  title: "Separator - nativecn",
  description: "Visually or semantically separates content.",
};

const BREADCRUMBS = [
  {
    name: "Components",
  },
  {
    name: "Separator",
    href: "/components/separator",
  },
];

export default function ComponentPage() {
  return (
    <MainContentLayout
      title="Separator"
      subtitle="Visually or semantically separates content."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="separator" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import { Separator } from "@/components/Separator";
import { H4, P, Small } from "@/components/Typography";
import { View } from "react-native";

const SeparatorDemo = () => {
  return (
    <View className="flex-1 justify-center items-center p-6 gap-12">
      <View className="w-full max-w-xs ">
        <View className="gap-1">
          <H4 className="text-sm native:text-base font-medium leading-none">
            Radix Primitives
          </H4>
          <P className="text-sm native:text-base text-muted-foreground">
            An open-source UI component library.
          </P>
        </View>
        <Separator className="my-4" />
        <View className="flex flex-row h-5 items-center gap-4 ">
          <Small className="font-normal">Blog</Small>
          <Separator orientation="vertical" />
          <Small className="font-normal">Docs</Small>
          <Separator orientation="vertical" />
          <Small className="font-normal">Source</Small>
        </View>
      </View>
    </View>
  );
};

export default SeparatorDemo;
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

        <CodeBlock code="npx nativecn add Separator" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import { Separator } from "@/components/Separator"`}
          language="tsx"
        />

        <CodeBlock code="<Separator />" language="tsx" />
      </section>
    </MainContentLayout>
  );
}
