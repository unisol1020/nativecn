import NavItem from "./NavItem";
import NAV_ITEMS from "../../../const/nav-items";

const Nav = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.name} name={item.name} href={item.href} />
      ))}
    </div>
  );
};

export default Nav;
