import { Breadcrumb } from "@/types/breadcrumb";
import Link from "next/link";
import React from "react";

const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) => {
  return (
    <div className="flex items-center gap-2">
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.name}>
          {breadcrumb.href ? (
            <Link className="text-sm font-light" href={breadcrumb.href}>
              {breadcrumb.name}
            </Link>
          ) : (
            <span className="text-sm font-light text-muted-foreground cursor-default">
              {breadcrumb.name}
            </span>
          )}

          {index < breadcrumbs.length - 1 && (
            <span className="text-sm font-light text-muted-foreground">/</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
