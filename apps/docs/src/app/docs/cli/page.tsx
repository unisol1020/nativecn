import { Metadata } from "next";
import { Breadcrumb } from "@/types/breadcrumb";
import MainContentLayout from "../../../components/MainContentLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CodeBlock } from "@/components/CodeBlock";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "CLI - nativecn",
};

const BREADCRUMBS: Breadcrumb[] = [
  { name: "Docs" },
  { name: "CLI", href: "/docs/cli" },
];

const DocsPage = () => {
  return (
    <MainContentLayout
      breadcrumbs={BREADCRUMBS}
      title="CLI"
      subtitle="How to use the nativecn CLI to initialize your project, add components, and manage dependencies."
    >
      <div className="space-y-6">
        <section>
          <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
            Usage
          </h2>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The nativecn CLI provides commands to initialize your project and
            add components.
          </p>
        </section>

        <section>
          <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
            Initialize nativecn
          </h3>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            To initialize your project and install dependencies, run:
          </p>
          <CodeBlock code="npx nativecn init" language="bash" />
          <p className="leading-7 [&:not(:first-child)]:mt-6">Options:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                -y, --yes
              </code>
              : Skip confirmation prompt
            </li>
            <li>
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                -c, --cwd &lt;cwd&gt;
              </code>
              : Specify the working directory (default: current directory)
            </li>
          </ul>
        </section>

        <Separator className="my-4" />

        <section>
          <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
            Add components
          </h3>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            To add specific components to your project, use:
          </p>

          <CodeBlock code="npx nativecn add [...Components]" language="bash" />

          <p className="leading-7 [&:not(:first-child)]:mt-6">Options:</p>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                -y, --yes
              </code>
              : Skip confirmation prompt
            </li>
            <li>
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                -o, --overwrite
              </code>
              : Overwrite existing files
            </li>
            <li>
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                -c, --cwd &lt;cwd&gt;
              </code>
              : Specify the working directory (default: current directory)
            </li>
            <li>
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                -a, --all
              </code>
              : Add all available components
            </li>
            <li>
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                -p, --path &lt;path&gt;
              </code>
              : Specify the path to add the component to
            </li>
          </ul>
        </section>

        <Alert>
          <AlertTitle>Pro Tip</AlertTitle>
          <AlertDescription>
            If you dont specify components, you will be prompted to select from
            a list of available components. You can also chain multiple
            component names:
            <CodeBlock
              code="npx nativecn add Button Text Input"
              language="bash"
            />
            This will add the Button, Text, and Input components in one go.
          </AlertDescription>
        </Alert>

        <section>
          <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight">
            Additional Information
          </h2>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              The{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                init
              </code>{" "}
              command sets up necessary configuration files like{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                tailwind.config.js
              </code>
              ,{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                babel.config.js
              </code>
              , and others.
            </li>
            <li>
              It also installs required dependencies including NativeWind,
              TailwindCSS, and other utility libraries.
            </li>
            <li>
              The{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                add
              </code>{" "}
              command fetches component code from a registry and adds it to your
              project.
            </li>
            <li>
              Use{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                --help
              </code>{" "}
              with any command for more detailed information.
            </li>
          </ul>
        </section>
      </div>
    </MainContentLayout>
  );
};

export default DocsPage;
