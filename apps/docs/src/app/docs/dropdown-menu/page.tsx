import { CodeBlock } from "@/components/CodeBlock";
import { Example } from "@/components/Example";
import MainContentLayout from "@/components/MainContentLayout";
import { Timeline, TimelineItem } from "@/components/Timeline";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dropdown Menu - nativecn",
  description:
    "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
};

const BREADCRUMBS = [
  {
    name: "Docs",
  },
  {
    name: "Dropdown Menu",
    href: "/docs/dropdown-menu",
  },
];

export default function DropdownMenuPage() {
  return (
    <MainContentLayout
      title="Dropdown Menu"
      subtitle="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="dropdown-menu" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import {
  DropdownMenuGroup,
  DropdownMenu,
  DropdownMenuShortcut,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/DropdownMenu";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import {
  Cloud,
  Github,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  UserPlus,
  Users,
} from "lucide-react-native";
import * as React from "react";
import { Pressable, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DropdownMenuDemo = () => {
  const triggerRef =
    React.useRef<React.ElementRef<typeof DropdownMenuTrigger>>(null);
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

  return (
    <View className="flex-1 justify-center items-center p-6 gap-12">
      <Pressable
        className="absolute top-0 right-0 w-16 h-16 active:bg-primary/5"
        onPress={() => {
          triggerRef.current?.open();
        }}
      />
      <DropdownMenu>
        <DropdownMenuTrigger ref={triggerRef} asChild>
          <Button variant="outline">
            <Text>Open</Text>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          insets={contentInsets}
          className="w-64 native:w-72"
        >
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users className="text-foreground" size={14} />
              <Text>Team</Text>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus className="text-foreground" size={14} />
                <Text>Invite users</Text>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <Animated.View entering={FadeIn.duration(200)}>
                  <DropdownMenuItem>
                    <Mail className="text-foreground" size={14} />
                    <Text>Email</Text>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="text-foreground" size={14} />
                    <Text>Message</Text>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle className="text-foreground" size={14} />
                    <Text>More...</Text>
                  </DropdownMenuItem>
                </Animated.View>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <Plus className="text-foreground" size={14} />
              <Text>New Team</Text>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Github className="text-foreground" size={14} />
            <Text>GitHub</Text>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy className="text-foreground" size={14} />
            <Text>Support</Text>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud className="text-foreground" size={14} />
            <Text>API</Text>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="text-foreground" size={14} />
            <Text>Log out</Text>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </View>
  );
};

export default DropdownMenuDemo;
`}
            language="tsx"
          />
        </TabsContent>
      </Tabs>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Installation
        </h3>

        <Separator className="my-2" />

        <Timeline>
          <TimelineItem title="Install rn-primatives/portal" stepNumber={1}>
            <p className="mb-2 font-light">
              Follow the instructions to install the Portal Primative from{" "}
              <Link
                href="https://rn-primitives.vercel.app/portal/"
                target="_blank"
                className="text-primary group relative inline-block"
              >
                <span>@rn-primatives/portal</span>
                <span className="absolute bottom-0 left-0 h-[1px] bg-current transition-all duration-300 w-0 group-hover:w-full"></span>
              </Link>
            </p>
          </TimelineItem>

          <TimelineItem
            title="Add DropdownMenu to your codebase"
            stepNumber={2}
          >
            <CodeBlock code="npx nativecn add DropdownMenu" language="bash" />
          </TimelineItem>
        </Timeline>
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import {
  DropdownMenuGroup,
  DropdownMenu,
  DropdownMenuShortcut,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/dropdown-menu";`}
          language="tsx"
        />
      </section>
    </MainContentLayout>
  );
}
