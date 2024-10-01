"use client";

import { MenuItem as MenuItemType } from "@/types/menu-item";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({ name, items }: { name: string; items: MenuItemType[] }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm font-medium">{name}</div>

      <div className="flex flex-col gap-2">
        {items.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link href={item.href} key={item.name} className="group">
              <div
                className={`text-sm font-light relative inline-block ${isActive ? "text-white" : "text-muted-foreground"}`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 h-[1px] bg-current transition-all duration-300 w-0 group-hover:w-full"></span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItem;
