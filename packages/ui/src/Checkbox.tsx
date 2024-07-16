import {
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  forwardRef,
  useContext,
} from "react";
import { GestureResponderEvent, Platform, Pressable, View } from "react-native";
import { cn } from "../lib/utils";
import { Check } from "lucide-react-native";

const CheckboxContext = createContext<{
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  nativeID?: string;
} | null>(null);

const useCheckboxContext = () => {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error(
      "Checkbox compound components cannot be rendered outside the Checkbox component",
    );
  }
  return context;
};

const CheckboxRoot = forwardRef<
  ElementRef<typeof Pressable>,
  ComponentPropsWithoutRef<typeof Pressable> & {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    disabled?: boolean;
  }
>(({ disabled = false, checked, onCheckedChange, nativeID, ...props }, ref) => {
  return (
    <CheckboxContext.Provider
      value={{ disabled, checked, onCheckedChange, nativeID }}
    >
      <CheckboxTrigger ref={ref} {...props} />
    </CheckboxContext.Provider>
  );
});

const CheckboxTrigger = forwardRef<
  ElementRef<typeof Pressable>,
  ComponentPropsWithoutRef<typeof Pressable>
>(({ onPress: onPressProp, ...props }, ref) => {
  const { disabled, checked, onCheckedChange, nativeID } = useCheckboxContext();

  const onPress = (ev: GestureResponderEvent) => {
    if (disabled) return;
    const newValue = !checked;
    onCheckedChange(newValue);
    onPressProp?.(ev);
  };

  return (
    <Pressable
      ref={ref}
      nativeID={nativeID}
      aria-disabled={disabled}
      role="checkbox"
      aria-checked={checked}
      onPress={onPress}
      accessibilityState={{ checked, disabled }}
      disabled={disabled}
      {...props}
    />
  );
});

const CheckboxIndicator = forwardRef<
  ElementRef<typeof View>,
  ComponentPropsWithoutRef<typeof View> & { forceMount?: true }
>(({ forceMount, ...props }, ref) => {
  const { checked, disabled } = useCheckboxContext();

  if (!forceMount && !checked) return null;

  return (
    <View
      ref={ref}
      aria-disabled={disabled}
      aria-hidden={!(forceMount || checked)}
      role="presentation"
      {...props}
    />
  );
});

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxRoot>,
  ComponentPropsWithoutRef<typeof CheckboxRoot>
>(({ className, ...props }, ref) => {
  return (
    <CheckboxRoot
      ref={ref}
      className={cn(
        "web:peer h-4 w-4 native:h-[20] native:w-[20] shrink-0 rounded border border-primary web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        props.checked && "bg-primary",
        className,
      )}
      {...props}
    >
      <CheckboxIndicator
        className={cn("items-center justify-center h-full w-full")}
      >
        <Check
          size={12}
          strokeWidth={Platform.OS === "web" ? 2.5 : 3.5}
          className="text-primary-foreground"
        />
      </CheckboxIndicator>
    </CheckboxRoot>
  );
});
Checkbox.displayName = "Checkbox";

export { Checkbox };
