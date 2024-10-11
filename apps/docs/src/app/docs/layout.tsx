import { SideMenu } from "@/components/SideMenu";
import { PropsWithChildren } from "react";

const DocsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <SideMenu />

      <div className="col-span-6 md:col-span-5">{children}</div>
    </div>
  );
};

export default DocsLayout;
