import {View, Image, ImageSourcePropType} from 'react-native';
import {Link} from 'expo-router';
import {Button, H4, Text} from '@nativecn/ui';
import {useColorScheme} from 'nativewind';
import {BlurView} from 'expo-blur';
import HeaderItem from '~/components/Header/HeaderItem';
import {Moon, Sun} from 'lucide-react-native';
import darkIcon from '../../assets/images/icon-dark.svg';
import lightIcon from '../../assets/images/icon-light.svg';

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
  const {colorScheme, toggleColorScheme} = useColorScheme();

  return (
    <BlurView
      tint={colorScheme === "dark" ? "systemChromeMaterialDark" : "systemChromeMaterialLight"}
      className="absolute flex justify-center items-center w-full"
    >
      <View
        style={{maxWidth: 1400, marginLeft: -54}}
        className="p-3 flex flex-row items-center justify-between w-full"
      >
        <View
          className="flex flex-row items-center w-full px-4"
        >
          <Image
            style={{ width: 16, height: 16, marginTop: 2 }}
            source={(colorScheme === 'dark' ? darkIcon : lightIcon) as ImageSourcePropType}
          />

          <Link asChild href="/">
            <Button style={{paddingLeft: 5}} variant="link">
              <H4>nativecn</H4>
            </Button>
          </Link>

          <View className="flex flex-row">
            {items.map((item) => (
              <HeaderItem key={item.title} {...item}  />
            ))}
          </View>
        </View>

        <Button onPress={toggleColorScheme} variant="link">
          {colorScheme === "dark" ? (
            <Text>
              <Moon/>
            </Text>
          ) : (
            <Sun/>
          )}
        </Button>
      </View>
    </BlurView>
  )
};

export default Header;
