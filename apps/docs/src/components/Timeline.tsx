import React from "react";

const TimelineItem = ({
  title,
  children,
  stepNumber,
}: {
  title: string;
  children: React.ReactNode;
  stepNumber: number;
}) => (
  <li className="mb-10 ml-6">
    <span className="absolute flex items-center justify-center w-6 h-6 bg-muted rounded-full -left-3">
      <span className="text-xs font-medium text-foreground">{stepNumber}</span>
    </span>

    <h3 className="flex items-center mb-1 text-base font-medium text-foreground">
      {title}
    </h3>

    <div className="mb-4 text-base font-normal text-muted-foreground">
      {children}
    </div>
  </li>
);

const Timeline = ({ children }: { children: React.ReactNode }) => {
  return <ol className="relative border-l border-muted">{children}</ol>;
};

export { Timeline, TimelineItem };
