import { Metadata } from "next";
import { Breadcrumb } from "@/types/breadcrumb";
import DocsTemplate from "./_components/DocsTemplate/DocsTemplate";

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
    ></DocsTemplate>
  );
};

export default DocsPage;
