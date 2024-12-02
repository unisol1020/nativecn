import { Metadata } from "next";
import { Breadcrumb } from "@/types/breadcrumb";
import MainContentLayout from "../../components/MainContentLayout";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowRight, Code2, Paintbrush, Boxes } from "lucide-react";

export const metadata: Metadata = {
  title: "Introduction - nativecn",
};

const BREADCRUMBS: Breadcrumb[] = [
  { name: "Docs" },
  { name: "Introduction", href: "/docs" },
];

const DocsPage = () => {
  return (
    <MainContentLayout
      breadcrumbs={BREADCRUMBS}
      title={"Beautiful React Native Components"}
      subtitle={
        <Fragment>
          A modern collection of ready-to-use components for{" "}
          <Link
            href="https://expo.dev/"
            target="_blank"
            className="text-primary hover:underline"
          >
            React Native Expo
          </Link>
          , powered by{" "}
          <Link
            href="https://www.nativewind.dev/"
            target="_blank"
            className="text-primary hover:underline"
          >
            NativeWind v4
          </Link>
          .
        </Fragment>
      }
    >
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4 p-6 rounded-lg bg-card border">
            <Code2 className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold">Copy & Paste</h3>
            <p className="text-muted-foreground">
              No complex setup. Just copy the components you need and customize
              them to match your requirements.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-6 rounded-lg bg-card border">
            <Paintbrush className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold">Fully Customizable</h3>
            <p className="text-muted-foreground">
              Each component is built with NativeWind, making it easy to modify
              styles and behavior.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-6 rounded-lg bg-muted/50">
          <div className="flex items-center gap-3">
            <Boxes className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Getting Started</h2>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-medium">Browse Components</p>
                <p className="text-sm text-muted-foreground">
                  Explore our collection of pre-built components
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-medium">Copy Code</p>
                <p className="text-sm text-muted-foreground">
                  Choose and copy the components you need
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-medium">Customize</p>
                <p className="text-sm text-muted-foreground">
                  Modify the components to match your design
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/docs/installation"
            className="inline-flex items-center gap-2 text-primary hover:underline mt-2"
          >
            Start Installation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </MainContentLayout>
  );
};

export default DocsPage;
