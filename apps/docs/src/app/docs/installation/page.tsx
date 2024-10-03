import { Metadata } from "next";
import { Breadcrumb } from "@/types/breadcrumb";
import MainContentLayout from "../../../components/MainContentLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CodeBlock } from "@/components/CodeBlock";
import { Timeline, TimelineItem } from "@/components/Timeline";

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
          <TimelineItem title="Initialize nativecn" stepNumber={1}>
            <p className="mb-2 font-light">
              Run the following command in your project directory:
            </p>

            <CodeBlock code="npx nativecn init" language="bash" />
          </TimelineItem>

          <TimelineItem title="Include global styles" stepNumber={2}>
            <p className="mb-2 font-light">
              After initialization, make sure to include the{" "}
              <code className="bg-muted text-foreground px-1 py-0.5 rounded ">
                global.css
              </code>{" "}
              file inside your root layout.
            </p>
          </TimelineItem>

          <TimelineItem title="Adding Components" stepNumber={3}>
            <p className="mb-2 font-light">
              You can easily add specific components to your project using the{" "}
              <code className="bg-muted px-1 text-foreground py-0.5 rounded">
                add
              </code>{" "}
              command:
            </p>

            <CodeBlock code="npx nativecn add [Component]" language="bash" />

            <p className="mt-2 mb-2 font-light">
              For example, to add the Text component:
            </p>

            <CodeBlock code="npx nativecn add Text" language="bash" />
          </TimelineItem>
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
