import { Metadata } from "next";
import { Breadcrumb } from "@/types/breadcrumb";
import MainContentLayout from "../../../components/MainContentLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import dynamic from "next/dynamic";
import Timeline from "@/components/Timeline";

const CodeBlock = dynamic(() => import("@/components/CodeBlock"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Installation - nativecn",
};

const BREADCRUMBS: Breadcrumb[] = [
  { name: "Docs" },
  { name: "Installation", href: "/docs/installation" },
];

const DocsPage = () => {
  return (
    <MainContentLayout
      breadcrumbs={BREADCRUMBS}
      title="Installation"
      subtitle="How to install dependencies and structure your app."
    >
      <div className="space-y-6">
        <Timeline>
          <Timeline.Item title="Initialize nativecn">
            <p className="mb-2 font-light">
              Run the following command in your project directory:
            </p>
            <CodeBlock code="npx nativecn init" language="bash" />
          </Timeline.Item>

          <Timeline.Item title="Include global styles">
            <p className="mb-2 font-light">
              After initialization, make sure to include the{" "}
              <code className="bg-muted px-1 py-0.5 rounded">global.css</code>{" "}
              file inside your root layout.
            </p>
          </Timeline.Item>

          <Timeline.Item title="Adding Components">
            <p className="mb-2 font-light">
              You can easily add specific components to your project using the{" "}
              <code className="bg-muted px-1 py-0.5 rounded">add</code> command:
            </p>
            <CodeBlock code="npx nativecn add [Component]" language="bash" />

            <p className="mt-2 mb-2 font-light">
              For example, to add the Text component:
            </p>
            <CodeBlock code="npx nativecn add Text" language="bash" />
          </Timeline.Item>
        </Timeline>

        <Alert>
          <AlertTitle>Pro Tip</AlertTitle>
          <AlertDescription>
            Explore our component library to find the perfect building blocks
            for your app. Each component is designed to be flexible and
            customizable.
          </AlertDescription>
        </Alert>
      </div>
    </MainContentLayout>
  );
};

export default DocsPage;
