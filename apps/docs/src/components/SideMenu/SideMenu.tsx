import { MenuItem } from "@/types/menu-item";
import SideMenuItem from "./SideMenuItem";

const SideMenu = ({ items }: { items: MenuItem[] }) => {
  return (
    <div className="block z-[1] max-h-[calc(100vh-114px)] sticky top-[92px]">
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <SideMenuItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
