import { Metadata } from "next";
import { Breadcrumb } from "@/types/breadcrumb";
import MainContentLayout from "../../../components/MainContentLayout";

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
    <MainContentLayout
      breadcrumbs={BREADCRUMBS}
      title="CLI"
      subtitle="How to use the nativecn CLI to generate components and install dependencies."
    ></MainContentLayout>
  );
};

export default DocsPage;
