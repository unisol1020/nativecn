import { Metadata } from "next";
import { Breadcrumb } from "@/types/breadcrumb";
import DocsTemplate from "./_components/DocsTemplate/DocsTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Introduction - nativecn",
};

const BREADCRUMBS: Breadcrumb[] = [
  {
    name: "Docs",
  },
  {
    name: "Introduction",
    href: "/docs",
  },
];

const DocsPage = () => {
  return (
    <DocsTemplate
      breadcrumbs={BREADCRUMBS}
      title="Introduction"
      subtitle="nativecn is a modern, open-source, customizable components inspired by shadcn/ui and built on top of NativeWind v4."
    >
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Purpose</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row items-center font-light gap-1">
              <p>
                <span>Build your own component libraries with </span>
                <span className="font-bold text-base bg-muted p-1 rounded-md">
                  nativecn
                </span>
                <span>
                  . Copy, paste, and tailor the code to suit your specific
                  requirements.
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsTemplate>
  );
};

export default DocsPage;
