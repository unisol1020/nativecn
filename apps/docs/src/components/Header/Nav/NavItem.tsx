import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ name, href }: { name: string; href: string }) => {
  const pathname = usePathname();
  const isActive = pathname?.includes(href);

  return (
    <Link href={href}>
      <div
        className={`relative text-sm font-light transition-colors duration-300 ease-in-out group px-2 py-1
        ${
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <span className="relative z-10">{name}</span>
        <span
          className={`absolute inset-0 bg-muted rounded-full transition-transform duration-300 ease-out origin-left
          ${
            isActive
              ? "transform scale-x-100"
              : "transform scale-x-0 group-hover:scale-x-100"
          }`}
        ></span>
      </div>
    </Link>
  );
};

export default NavItem;
