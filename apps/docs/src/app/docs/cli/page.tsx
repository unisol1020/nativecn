import { Metadata } from "next";
import { Breadcrumb } from "@/types/breadcrumb";
import DocsTemplate from "../_components/DocsTemplate/DocsTemplate";

export const metadata: Metadata = {
  title: "CLI - nativecn",
};

const BREADCRUMBS: Breadcrumb[] = [
  {
    name: "Docs",
  },
  {
    name: "CLI",
    href: "/docs/cli",
  },
];

const DocsPage = () => {
  return (
    <DocsTemplate
      breadcrumbs={BREADCRUMBS}
      title="CLI"
      subtitle="How to use the nativecn CLI to generate components and install dependencies."
    ></DocsTemplate>
  );
};

export default DocsPage;
