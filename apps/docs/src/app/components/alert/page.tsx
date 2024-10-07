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
  title: "Alert - nativecn",
  description: "Displays a callout for user attention.",
};

const BREADCRUMBS = [
  {
    name: "Components",
  },
  {
    name: "Alert",
    href: "/components/alert",
  },
];

export default function Alert() {
  return (
    <MainContentLayout
      title="Alert"
      subtitle="Displays a callout for user attention."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="alert" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import { Alert, AlertTitle, AlertDescription } from "@/components/Alert";
import { useLocalSearchParams } from "expo-router";
import { AlertTriangle, Terminal } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { View } from "react-native";

const AlertDemo = () => {
  return (
    <View className="flex-1 justify-center p-6 items-center gap-6">
      <Alert icon={Terminal} className="max-w-xl">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can use a terminal to run commands on your computer.
        </AlertDescription>
      </Alert>
      <Alert icon={AlertTriangle} variant="destructive" className="max-w-xl">
        <AlertTitle>Danger!</AlertTitle>
        <AlertDescription>
          High voltage. Do not touch. Risk of electric shock. Keep away from
          children.
        </AlertDescription>
      </Alert>
    </View>
  );
};

export default AlertDemo;
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

        <CodeBlock code="npx nativecn add Alert" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import { Alert, AlertTitle, AlertDescription } from "@/components/Alert";"`}
          language="tsx"
        />
      </section>
    </MainContentLayout>
  );
}
