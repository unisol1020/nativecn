export const ALL_COMPONENTS = [
  "Avatar",
  "Accordion",
  "Alert",
  "Badge",
  "Button",
  "Card",
  "Checkbox",
  "Input",
  "Label",
  "Progress",
  "RadioGroup",
  "Separator",
  "Skeleton",
  "Switch",
  "Text",
  "Textarea",
  "Toggle",
  "Typography",
  "Tabs",
  "DropdownMenu",
];

const baseUrl = "https://raw.githubusercontent.com/unisol1020/nativecn/main";

interface ComponentMetadata {
  name: string;
  dependencies?: string[];
}

export const COMPONENT_METADATA: Record<string, ComponentMetadata> = {
  Avatar: {
    name: "Avatar",
    dependencies: ["@rn-primitives/avatar"],
  },
  Accordion: {
    name: "Accordion",
    dependencies: ["@rn-primitives/accordion"],
  },
  Checkbox: {
    name: "Checkbox",
    dependencies: ["@rn-primitives/checkbox"],
  },
  Label: {
    name: "Label",
    dependencies: ["@rn-primitives/label"],
  },
  Progress: {
    name: "Progress",
    dependencies: ["@rn-primitives/progress"],
  },
  RadioGroup: {
    name: "RadioGroup",
    dependencies: ["@rn-primitives/radio-group"],
  },
  Separator: {
    name: "Separator",
    dependencies: ["@rn-primitives/separator"],
  },
  Switch: {
    name: "Switch",
    dependencies: ["@rn-primitives/switch"],
  },
  Tabs: {
    name: "Tabs",
    dependencies: ["@rn-primitives/tabs"],
  },
  Toggle: {
    name: "Toggle",
    dependencies: ["@rn-primitives/toggle"],
  },
  DropdownMenu: {
    name: "DropdownMenu",
    dependencies: ["@rn-primitives/dropdown-menu"],
  },
};

export async function fetchComponents(components: string[]) {
  try {
    return await Promise.all(
      components.map(async (component) => {
        const response = await fetch(
          `${baseUrl}/packages/ui/src/${component}.tsx`
        );
        const content = await response.text();
        return {
          name: `${component}.tsx`,
          content,
          metadata: COMPONENT_METADATA[component] || { name: component },
        };
      })
    );
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch components from registry.`);
  }
}
