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
      {
        name: "CLI",
        href: "/docs/cli",
      },
    ],
  },
  {
    name: "Components",
    items: [
      { name: "Avatar", href: "/docs/avatar" },
      { name: "Accordion", href: "/docs/accordion" },
      { name: "Alert", href: "/docs/alert" },
      { name: "Badge", href: "/docs/badge" },
      { name: "Button", href: "/docs/button" },
      { name: "Card", href: "/docs/card" },
      { name: "Checkbox", href: "/docs/checkbox" },
      { name: "Dropdown Menu", href: "/docs/dropdown-menu" },
      { name: "Input", href: "/docs/input" },
      { name: "Label", href: "/docs/label" },
      { name: "Progress", href: "/docs/progress" },
      { name: "Radio Group", href: "/docs/radio-group" },
      { name: "Separator", href: "/docs/separator" },
      { name: "Skeleton", href: "/docs/skeleton" },
      { name: "Switch", href: "/docs/switch" },
      { name: "Textarea", href: "/docs/textarea" },
      { name: "Toggle", href: "/docs/toggle" },
      { name: "Typography", href: "/docs/typography" },
      { name: "Tabs", href: "/docs/tabs" },
    ],
  },
];

export default MENU_ITEMS;
