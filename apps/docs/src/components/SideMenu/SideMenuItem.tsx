"use client";

import { MenuItem as MenuItemType } from "@/types/menu-item";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideMenuItem = ({ name, items }: MenuItemType) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm font-medium">{name}</div>

      <div className="flex flex-col gap-2">
        {items?.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link href={item.href ?? ""} key={item.name}>
              <div
                className={`text-sm font-light hover:underline ${isActive ? "text-foreground" : "text-muted-foreground"}`}
              >
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenuItem;
