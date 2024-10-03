import { MenuItem } from "@/types/menu-item";
import SideMenuItem from "./SideMenuItem";

const SideMenu = ({ items }: { items: MenuItem[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <SideMenuItem key={item.name} {...item} />
      ))}
    </div>
  );
};

export default SideMenu;
