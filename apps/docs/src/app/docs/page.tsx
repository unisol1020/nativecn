import { Metadata } from "next";
import { Breadcrumb } from "@/types/breadcrumb";
import MainContentLayout from "../../components/MainContentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Fragment } from "react";

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
      title="Introduction"
      subtitle={
        <Fragment>
          A collection of re-usable components for{" "}
          <Link
            href="https://expo.dev/"
            target="_blank"
            className="text-primary group relative inline-block"
          >
            <span>React Native Expo</span>
            <span className="absolute bottom-0 left-0 h-[1px] bg-current transition-all duration-300 w-0 group-hover:w-full"></span>
          </Link>
          , inspired by{" "}
          <Link
            href="https://ui.shadcn.com/"
            target="_blank"
            className="text-primary group relative inline-block"
          >
            <span>shadcn/ui</span>
            <span className="absolute bottom-0 left-0 h-[1px] bg-current transition-all duration-300 w-0 group-hover:w-full"></span>
          </Link>{" "}
          and built with{" "}
          <Link
            href="https://www.nativewind.dev/v4/overview"
            target="_blank"
            className="text-primary group relative inline-block"
          >
            <span>NativeWind v4</span>
            <span className="absolute bottom-0 left-0 h-[1px] bg-current transition-all duration-300 w-0 group-hover:w-full"></span>
          </Link>
          .
        </Fragment>
      }
      nextStep={{
        label: "Installation",
        href: "/docs/installation",
      }}
    >
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>What is nativecn?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              nativecn is NOT a component library. Its a collection of re-usable
              components that you can copy and paste into your React Native
              apps.
            </p>
          </CardContent>
        </Card>

        <section>
          <h2 className="text-base font-medium mb-2">How It Works</h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li className="font-light">Browse our component collection</li>
            <li className="font-light">Choose the components you need</li>
            <li className="font-light">Copy the code into your project</li>
            <li className="font-light">
              Customize as needed - the code is yours
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-base font-medium mb-2">Why nativecn?</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li className="font-light">Beautiful, customizable components</li>
            <li className="font-light">Full control over code and styling</li>
            <li className="font-light">
              No dependencies on large UI libraries
            </li>
            <li className="font-light">Seamless integration with NativeWind</li>
            <li className="font-light">
              Reference for building your own component libraries
            </li>
          </ul>
        </section>
      </div>
    </MainContentLayout>
  );
};

export default DocsPage;
