import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ name, href }: { name: string; href: string }) => {
  const pathname = usePathname();
  const isActive = pathname?.includes(href);

  return (
    <Link href={href}>
      <div
        className={`text-sm px-2 pt-[3px] ${
          isActive
            ? "text-foreground border-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {name}
      </div>
    </Link>
  );
};

export default NavItem;
