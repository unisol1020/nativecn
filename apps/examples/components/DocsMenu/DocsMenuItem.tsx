import { Button, P, Lead } from "@nativecn/ui";
import { Link, usePathname } from "expo-router";
import { cn } from "~/lib/utils";

const DocsMenuItem = ({
  title,
  link,
  className,
}: {
  title: string;
  link?: string;
  className?: string;
}) => {
  const pathname = usePathname();

  if (!link) {
    return <P className={cn("font-medium text-sm mb-2", className)}>{title}</P>;
  } else {
    return (
      <Link asChild href={link}>
        <Button className={cn("pl-0 items-start", className)} variant="link">
          <Lead
            className={cn("text-sm font-normal web:hover:underline", {
              "text-foreground": pathname === link,
            })}
          >
            {title}
          </Lead>
        </Button>
      </Link>
    );
  }
};

export default DocsMenuItem;
