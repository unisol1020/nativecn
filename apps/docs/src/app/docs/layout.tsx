import { SideMenu } from "@/components/SideMenu";
import { PropsWithChildren } from "react";

const DocsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <SideMenu className="hidden md:block z-[1] max-h-[calc(100vh-58px)] sticky top-[57px] pt-4 border-r" />

      <div className="col-span-6 md:col-span-5 pt-4 px-0 md:px-10 pb-5">
        {children}
      </div>
    </div>
  );
};

export default DocsLayout;
