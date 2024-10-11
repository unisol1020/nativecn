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
  title: "Skeleton - nativecn",
  description: "Use to show a placeholder while content is loading.",
};

const BREADCRUMBS = [
  {
    name: "Docs",
  },
  {
    name: "Skeleton",
    href: "/docs/skeleton",
  },
];

export default function ComponentPage() {
  return (
    <MainContentLayout
      title="Skeleton"
      subtitle="Use to show a placeholder while content is loading."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="skeleton" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import { Skeleton } from "@/components/Skeleton";
import { View } from "react-native";

const SkeletonDemo = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="flex flex-row items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <View className="gap-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </View>
      </View>
    </View>
  );
};

export default SkeletonDemo;
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

        <CodeBlock code="npx nativecn add Skeleton" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import { Skeleton } from "@/components/Skeleton"`}
          language="tsx"
        />

        <CodeBlock
          code={`<Skeleton className="h-12 w-12 rounded-full" />`}
          language="tsx"
        />
      </section>
    </MainContentLayout>
  );
}
