import MENU_ITEMS from "@/const/menu-items";
import SideMenuItem from "./SideMenuItem";
import { cn } from "@/lib/utils";

const SideMenu = ({ className }: { className?: string }) => {
  return (
    <div className={cn("overflow-y-auto border-r pr-4 ", className)}>
      <div className="flex flex-col gap-4 mx-7">
        {MENU_ITEMS.map((item) => (
          <SideMenuItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
