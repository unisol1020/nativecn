import {
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  forwardRef,
  useContext,
} from "react";
import * as React from "react";
import { Text as RNText } from "react-native";
import { cn } from "../lib/utils";

const TextClassContext = createContext<string | undefined>(undefined);

const Text = forwardRef<
  ElementRef<typeof RNText>,
  ComponentPropsWithoutRef<typeof RNText>
>(({ className = false, ...props }, ref) => {
  const textClass = useContext(TextClassContext);

  return (
    <RNText
      className={cn(
        "text-base text-foreground web:select-text",
        textClass,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

Text.displayName = "Text";

export { Text, TextClassContext };
