import { Button, H3, Lead, P, Text } from "@nativecn/ui";
import { View } from "react-native";
import { Link } from "expo-router";
import { ChevronRight } from "lucide-react-native";

const DocsScreen = () => {
  return (
    <View className="flex flex-col w-full h-full gap-8">
      <View className="flex flex-col gap-2">
        <H3>Introduction</H3>

        <View className="flex flex-col">
          <Lead className="text-base">
            Elegantly crafted components ready to be integrated into your native
            applications.
          </Lead>

          <Lead className="text-base">Inclusive. Flexible. Open Source.</Lead>
        </View>
      </View>

      <View className="flex flex-row items-center">
        <Lead className="text-base">Inspired by the project</Lead>

        <Link target="_blank" href="https://ui.shadcn.com/">
          <Button variant="link">
            <Text>shadcn/ui</Text>
          </Button>
        </Link>
      </View>

      <P className="font-light">
        This is <P className="font-semibold">NOT</P> a library of components.
        It's a set of reusable components for your apps.
      </P>

      <P className="font-semibold">What does "not a component library" mean?</P>

      <P className="font-light">
        It means you don't add it as a dependency. It's not available or
        distributed through npm.
      </P>

      <P className="font-light">
        Select the components you want. Copy the code into your project and
        modify as needed. The code is yours to use.
      </P>

      <P className="font-light">
        Use this as a guide to create your own component libraries.
      </P>

      <Link asChild href="/docs/installation">
        <Button
          className="flex flex-row gap-4 mr-auto items-center"
          variant="outline"
        >
          <Text>Installation</Text>

          <Text>
            <ChevronRight />
          </Text>
        </Button>
      </Link>
    </View>
  );
};

export default DocsScreen;
