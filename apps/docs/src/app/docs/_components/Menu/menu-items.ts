import { MenuItem } from "@/types/menu-item";

const MENU_ITEMS: MenuItem[] = [
  {
    name: "Getting Started",
    items: [
      {
        name: "Introduction",
        href: "/docs",
      },
      {
        name: "Installation",
        href: "/docs/installation",
      },
      {
        name: "Dark Mode",
        href: "/docs/dark-mode",
      },
    ],
  },
];

export default MENU_ITEMS;
