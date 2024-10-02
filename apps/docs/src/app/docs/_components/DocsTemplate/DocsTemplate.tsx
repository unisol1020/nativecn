import { Breadcrumb } from "@/types/breadcrumb";
import { PropsWithChildren } from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { LinkAndLabel } from "@/types/link-and-label";

const MainSection = ({
  children,
  breadcrumbs,
  title,
  subtitle,
  nextStep,
  previousStep,
}: PropsWithChildren & {
  breadcrumbs: Breadcrumb[];
  title: string;
  subtitle?: string;
  nextStep?: LinkAndLabel;
  previousStep?: LinkAndLabel;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <h1 className="text-3xl font-bold">{title}</h1>

      {subtitle && (
        <p className="text-base font-light text-muted-foreground max-w-[480px]">
          {subtitle}
        </p>
      )}

      <div className="flex flex-col mt-6 gap-4">{children}</div>
    </div>
  );
};

export default MainSection;
