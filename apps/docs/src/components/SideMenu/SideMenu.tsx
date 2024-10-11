import MENU_ITEMS from "@/const/menu-items";
import SideMenuItem from "./SideMenuItem";
import { cn } from "@/lib/utils";

const SideMenu = ({ className }: { className?: string }) => {
  return (
    <div className={cn("overflow-y-auto", className)}>
      <div className="flex flex-col gap-4">
        {MENU_ITEMS.map((item) => (
          <SideMenuItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
