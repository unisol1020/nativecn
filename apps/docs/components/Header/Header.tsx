import {View} from 'react-native';
import {Link} from 'expo-router';
import {Button, H4} from '@nativecn/ui';
import {colorScheme} from 'nativewind';
import {BlurView} from 'expo-blur';
import HeaderItem from '~/components/Header/HeaderItem';

const items = [
  {
    title: "Docs",
    link: "/docs"
  },
  {
    title: "Examples",
    link: "/examples"
  }
];

const Header = () => {
  return (
    <BlurView
      tint={colorScheme.get() === "dark" ? "systemChromeMaterialDark" : "systemChromeMaterialLight"}
      className="absolute flex justify-center items-center w-full"
    >
      <View
        style={{maxWidth: 1400, marginLeft: -54}}
        className="p-3 flex flex-row items-center w-full"
      >
        <View
          className="flex flex-row items-center"
        >
          <Link asChild href="/">
            <Button variant="link">
              <H4>nativecn</H4>
            </Button>
          </Link>

          <View className="flex flex-row">
            {items.map((item) => (
              <HeaderItem key={item.title} {...item}  />
            ))}
          </View>
        </View>
      </View>
    </BlurView>
  )
};

export default Header;
