import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Text, View } from "react-native";
import { TextClassContext } from "./Text";
import { cn } from "../lib/utils";

const Card = forwardRef<
  ElementRef<typeof View>,
  ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn(
      "rounded-lg border border-border bg-card shadow-sm shadow-foreground/10",
      className,
    )}
    {...props}
  />
));

Card.displayName = "Card";

const CardHeader = forwardRef<
  ElementRef<typeof View>,
  ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
  ElementRef<typeof View>,
  ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    role="heading"
    aria-level={3}
    ref={ref}
    className={cn(
      "text-2xl text-card-foreground font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
  ElementRef<typeof View>,
  ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<
  ElementRef<typeof View>,
  ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => (
  <TextClassContext.Provider value="text-card-foreground">
    <View ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  </TextClassContext.Provider>
));
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<
  ElementRef<typeof View>,
  ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn("flex flex-row items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
