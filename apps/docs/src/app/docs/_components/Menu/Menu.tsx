import MENU_ITEMS from "./menu-items";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="flex flex-col gap-4">
      {MENU_ITEMS.map((item) => (
        <MenuItem key={item.name} {...item} />
      ))}
    </div>
  );
};

export default Menu;
