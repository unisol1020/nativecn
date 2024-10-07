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
  title: "Accordion - nativecn",
  description:
    "A vertically stacked set of interactive headings that each reveal a section of content.",
};

const BREADCRUMBS = [
  {
    name: "Components",
  },
  {
    name: "Accordion",
    href: "/components/accordion",
  },
];

export default function Accordion() {
  return (
    <MainContentLayout
      title="Accordion"
      subtitle="A vertically stacked set of interactive headings that each reveal a section of content."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="accordion" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

const AccordionDemo = () => {
  return (
    <View className="flex-1 justify-center items-center p-6">
      <Accordion
        type="multiple"
        collapsible
        defaultValue={["item-1"]}
        className="w-full max-w-sm native:max-w-md"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Text>Is it accessible?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <Text>What are universal components?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>
              In the world of React Native, universal components are components
              that work on both web and native platforms.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <Text>Is this component universal?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>Yes. Try it out on the web, iOS, and/or Android.</Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
};

export default AccordionDemo;
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

        <CodeBlock code="npx nativecn add Accordion" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";`}
          language="tsx"
        />
      </section>
    </MainContentLayout>
  );
}
