import { Metadata } from "next";
import { Breadcrumb } from "@/types/breadcrumb";
import DocsTemplate from "../_components/DocsTemplate/DocsTemplate";
export const metadata: Metadata = {
  title: "Dark Mode - nativecn",
};

const BREADCRUMBS: Breadcrumb[] = [
  {
    name: "Docs",
  },
  {
    name: "Dark Mode",
    href: "/docs/dark-mode",
  },
];

const DocsPage = () => {
  return (
    <DocsTemplate breadcrumbs={BREADCRUMBS} title="Dark Mode"></DocsTemplate>
  );
};

export default DocsPage;
