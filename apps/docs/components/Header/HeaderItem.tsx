import { Link } from "expo-router";
import { Button, Lead } from "@nativecn/ui";
import { memo } from "react";
import { cn } from "~/lib/utils";
import { useNavigationState } from "@react-navigation/native";

const HeaderItem = ({ title, link }: { title: string; link: string }) => {
  const routeName = useNavigationState((state) => {
    const route = state.routes[state.index];
    return route.name;
  });

  return (
    <Link asChild href={link}>
      <Button variant="link">
        <Lead
          className={cn("pt-[3px] text-sm hover:underline", {
            "text-foreground": ("/" + routeName).startsWith(link),
          })}
        >
          {title}
        </Lead>
      </Button>
    </Link>
  );
};

export default memo(HeaderItem);
