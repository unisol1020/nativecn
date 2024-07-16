import { cn } from "../lib/utils";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode,
} from "react";
import { Pressable, Text, ViewStyle } from "react-native";

const LabelRoot = forwardRef<
  ElementRef<typeof Pressable>,
  Omit<
    ComponentPropsWithoutRef<typeof Pressable>,
    "children" | "hitSlop" | "style"
  > & {
    children: ReactNode;
    style?: ViewStyle;
  }
>(({ ...props }, ref) => {
  return <Pressable ref={ref} {...props} />;
});

const LabelText = forwardRef<
  ElementRef<typeof Text>,
  ComponentPropsWithoutRef<typeof Text> & { nativeID: string }
>(({ ...props }, ref) => {
  return <Text ref={ref} {...props} />;
});

const Label = forwardRef<
  ElementRef<typeof LabelText>,
  ComponentPropsWithoutRef<typeof LabelText>
>(
  (
    { className, onPress, onLongPress, onPressIn, onPressOut, ...props },
    ref,
  ) => (
    <LabelRoot
      className="web:cursor-default"
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <LabelText
        ref={ref}
        className={cn(
          "text-sm text-foreground native:text-base font-medium leading-none web:peer-disabled:cursor-not-allowed web:peer-disabled:opacity-70",
          className,
        )}
        {...props}
      />
    </LabelRoot>
  ),
);
Label.displayName = "Label";

export { Label };
