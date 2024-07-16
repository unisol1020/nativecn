import { View, Image, ImageSourcePropType } from "react-native";
import { Link } from "expo-router";
import { Button, H4, Text } from "@nativecn/ui";
import { useColorScheme } from "nativewind";
import { BlurView } from "expo-blur";
import HeaderItem from "~/components/Header/HeaderItem";
import { Github, Moon, Sun } from "lucide-react-native";
import darkIcon from "../../assets/images/icon-dark.svg";
import lightIcon from "../../assets/images/icon-light.svg";

const items = [
  {
    title: "Docs",
    link: "/docs",
  },
  {
    title: "Examples",
    link: "/examples",
  },
];

const Header = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <BlurView
      tint={
        colorScheme === "dark"
          ? "systemChromeMaterialDark"
          : "systemChromeMaterialLight"
      }
      className="absolute flex justify-center items-center w-full"
    >
      <View className="p-3 max-w-[1400px] ml-[-54px] flex flex-row items-center justify-between w-full px-4">
        <View className="flex flex-row items-center px-4 w-full">
          <Image
            style={{ width: 16, height: 16, marginTop: 3 }}
            source={
              (colorScheme === "dark"
                ? darkIcon
                : lightIcon) as ImageSourcePropType
            }
          />

          <Link asChild href="/">
            <Button className="pl-[5px]" variant="link">
              <H4>nativecn</H4>
            </Button>
          </Link>

          <View className="flex flex-row">
            {items.map((item) => (
              <HeaderItem key={item.title} {...item} />
            ))}
          </View>
        </View>

        <View className="flex flex-row ml-[-56px]">
          <Link target="_blank" href="https://github.com/unisol1020/nativecn">
            <Button variant="link">
              <Github className="text-foreground" />
            </Button>
          </Link>

          <Button onPress={toggleColorScheme} variant="link">
            {colorScheme === "dark" ? (
              <Text>
                <Moon />
              </Text>
            ) : (
              <Sun />
            )}
          </Button>
        </View>
      </View>
    </BlurView>
  );
};

export default Header;
