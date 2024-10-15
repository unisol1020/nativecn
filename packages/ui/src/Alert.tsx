import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { useTheme } from "@react-navigation/native";
import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react-native";
import { Text, View } from "react-native";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative bg-background w-full rounded-lg border border-border p-4 shadow shadow-foreground/10",
  {
    variants: {
      variant: {
        default: "",
        destructive: "border-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = forwardRef<
  ElementRef<typeof View>,
  ComponentPropsWithoutRef<typeof View> &
    VariantProps<typeof alertVariants> & {
      icon: LucideIcon;
      iconSize?: number;
      iconClassName?: string;
    }
>(
  (
    {
      className,
      variant,
      children,
      icon: Icon,
      iconSize = 16,
      iconClassName,
      ...props
    },
    ref
  ) => {
    const { colors } = useTheme();
    return (
      <View
        ref={ref}
        role="alert"
        className={alertVariants({ variant, className })}
        {...props}
      >
        <View className="absolute left-3.5 top-4 -translate-y-0.5">
          <Icon
            size={iconSize}
            color={
              variant === "destructive" ? colors.notification : colors.text
            }
          />
        </View>
        {children}
      </View>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = forwardRef<
  ElementRef<typeof Text>,
  ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={cn(
      "pl-7 mb-1 font-medium text-base leading-none tracking-tight text-foreground",
      className
    )}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = forwardRef<
  ElementRef<typeof Text>,
  ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={cn("pl-7 text-sm leading-relaxed text-foreground", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
