import { Metadata } from "next";
import { Breadcrumb } from "@/types/breadcrumb";
import MainContentLayout from "../../../components/MainContentLayout";

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
    <MainContentLayout
      breadcrumbs={BREADCRUMBS}
      title="Dark Mode"
      subtitle="How to use dark mode in your app."
    ></MainContentLayout>
  );
};

export default DocsPage;
