import { Breadcrumb } from "@/types/breadcrumb";
import { PropsWithChildren } from "react";
import Breadcrumbs from "./Breadcrumbs";

const MainSection = ({
  children,
  breadcrumbs,
  title,
  subtitle,
}: PropsWithChildren & {
  breadcrumbs: Breadcrumb[];
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <h1 className="text-3xl font-bold">{title}</h1>

      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
      {children}
    </div>
  );
};

export default MainSection;
