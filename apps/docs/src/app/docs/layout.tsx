import { SideMenu } from "@/components/SideMenu";
import { PropsWithChildren } from "react";

const DocsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <SideMenu className="hidden md:block z-[1] max-h-[calc(100vh-114px)] sticky top-[92px]" />

      <div className="col-span-6 md:col-span-5">{children}</div>
    </div>
  );
};

export default DocsLayout;
