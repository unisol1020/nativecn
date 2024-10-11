import MENU_ITEMS from "@/const/menu-items";
import SideMenuItem from "./SideMenuItem";

const SideMenu = () => {
  return (
    <div className="hidden md:block z-[1] max-h-[calc(100vh-114px)] sticky top-[92px] overflow-y-auto">
      <div className="flex flex-col gap-4">
        {MENU_ITEMS.map((item) => (
          <SideMenuItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
