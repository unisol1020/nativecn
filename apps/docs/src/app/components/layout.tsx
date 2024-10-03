import { SideMenu } from "@/components/SideMenu";
import MENU_ITEMS from "./menu-items";
import { PropsWithChildren } from "react";

const ComponentsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <SideMenu items={MENU_ITEMS} />

      <div className="col-span-5">{children}</div>
    </div>
  );
};

export default ComponentsLayout;
