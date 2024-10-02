import { Metadata } from "next";
import { Breadcrumb } from "@/types/breadcrumb";
import DocsTemplate from "../_components/DocsTemplate/DocsTemplate";

export const metadata: Metadata = {
  title: "Installation - nativecn",
};

const BREADCRUMBS: Breadcrumb[] = [
  {
    name: "Docs",
  },
  {
    name: "Installation",
    href: "/docs/installation",
  },
];

const DocsPage = () => {
  return (
    <DocsTemplate breadcrumbs={BREADCRUMBS} title="Installation"></DocsTemplate>
  );
};

export default DocsPage;
