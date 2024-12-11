import { Breadcrumb as BreadcrumbType } from "@/types/breadcrumb";
import { Fragment, PropsWithChildren } from "react";
import { LinkAndLabel } from "@/types/link-and-label";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MainContentLayout = ({
  children,
  breadcrumbs,
  title,
  subtitle,
  nextStep,
  previousStep,
}: PropsWithChildren & {
  breadcrumbs: BreadcrumbType[];
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  nextStep?: LinkAndLabel;
  previousStep?: LinkAndLabel;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((breadcrumb, index) => (
            <Fragment key={breadcrumb.name}>
              <BreadcrumbItem>
                {index === 0 ? (
                  breadcrumb.name
                ) : (
                  <Fragment>
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{breadcrumb.name}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={breadcrumb.href ?? "#"}>
                        {breadcrumb.name}
                      </BreadcrumbLink>
                    )}
                  </Fragment>
                )}
              </BreadcrumbItem>

              {index !== breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold">{title}</h1>

      {subtitle && (
        <p className="text-base font-light text-muted-foreground max-w-[480px]">
          {subtitle}
        </p>
      )}

      <div className="grid grid-cols-7 mt-6">
        <div className="col-span-7 md:col-span-6">{children}</div>

        {(previousStep || nextStep) && (
          <div className="col-span-7 md:col-span-5 flex justify-between mt-8">
            {previousStep && (
              <Link href={previousStep.href}>
                <Button variant="outline">
                  <ChevronLeft className="h-4 w-4" /> {previousStep.label}
                </Button>
              </Link>
            )}

            {nextStep && (
              <Link href={nextStep.href} className="ml-auto">
                <Button variant="outline">
                  {nextStep.label} <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContentLayout;
