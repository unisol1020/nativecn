import { ScrollView, View } from "react-native";
import DocsMenuItem from "~/components/DocsMenu/DocsMenuItem";

const items = [
  {
    title: "Getting Started",
  },
  {
    title: "Introduction",
    link: "/docs",
  },
  {
    title: "Installation",
    link: "/docs/installation",
  },
  {
    title: "Dark mode",
    link: "/docs/dark-mode",
  },
  {
    title: "Components",
    className: "mt-4",
  },
  {
    title: "Avatar",
    link: "/docs/avatar",
  },
];

const DocsMenu = () => {
  return (
    <ScrollView className="min-w-[250px] h-full">
      <View className="min-w-[250px] flex-row justify-between md:flex-col md:px-4">
        {items.map((item) => (
          <DocsMenuItem key={item.title} {...item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default DocsMenu;
