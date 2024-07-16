import {
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  forwardRef,
  useContext,
} from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";
import { cn } from "../lib/utils";

type RadioGroupRootProps = {
  value: string | undefined;
  onValueChange: (val: string) => void;
  disabled?: boolean;
};

type RadioGroupItemProps = {
  value: string;
  "aria-labelledby": string;
};

const RadioGroupContext = createContext<RadioGroupRootProps | null>(null);
const RadioItemContext = createContext<{
  itemValue: string | undefined;
} | null>(null);

const useRadioGroupContext = () => {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error(
      "RadioGroup compound components cannot be rendered outside the RadioGroup component",
    );
  }
  return context;
};

const useRadioItemContext = () => {
  const context = useContext(RadioItemContext);
  if (!context) {
    throw new Error(
      "RadioItem compound components cannot be rendered outside the RadioItem component",
    );
  }
  return context;
};

const RadioGroupRoot = forwardRef<
  ElementRef<typeof View>,
  ComponentPropsWithoutRef<typeof View> & RadioGroupRootProps
>(({ value, onValueChange, disabled = false, ...viewProps }, ref) => {
  return (
    <RadioGroupContext.Provider value={{ value, disabled, onValueChange }}>
      <View ref={ref} role="radiogroup" {...viewProps} />
    </RadioGroupContext.Provider>
  );
});

const RadioGroupRootItem = forwardRef<
  ElementRef<typeof Pressable>,
  ComponentPropsWithoutRef<typeof Pressable> & RadioGroupItemProps
>(
  (
    {
      value: itemValue,
      disabled: disabledProp = false,
      onPress: onPressProp,
      ...props
    },
    ref,
  ) => {
    const { disabled, value, onValueChange } = useRadioGroupContext();

    const onPress = (ev: GestureResponderEvent) => {
      if (disabled || disabledProp) return;
      onValueChange(itemValue);
      onPressProp?.(ev);
    };

    return (
      <RadioItemContext.Provider value={{ itemValue }}>
        <Pressable
          ref={ref}
          role="radio"
          onPress={onPress}
          aria-checked={value === itemValue}
          disabled={(disabled || disabledProp) ?? false}
          accessibilityState={{
            disabled: (disabled || disabledProp) ?? false,
            checked: value === itemValue,
          }}
          {...props}
        />
      </RadioItemContext.Provider>
    );
  },
);

const RadioGroupRootIndicator = forwardRef<
  ElementRef<typeof View>,
  ComponentPropsWithoutRef<typeof View> & { forceMount?: true }
>(({ forceMount, ...props }, ref) => {
  const { value } = useRadioGroupContext();
  const { itemValue } = useRadioItemContext();

  if (!forceMount && value !== itemValue) return null;

  return <View ref={ref} role="presentation" {...props} />;
});

const RadioGroup = forwardRef<
  ElementRef<typeof RadioGroupRoot>,
  ComponentPropsWithoutRef<typeof RadioGroupRoot>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupRoot
      className={cn("web:grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = "RadioGroup";

const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupRootItem>,
  ComponentPropsWithoutRef<typeof RadioGroupRootItem>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupRootItem
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 native:h-5 native:w-5 rounded-full justify-center items-center border border-primary text-primary web:ring-offset-background web:focus:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
        props.disabled && "web:cursor-not-allowed opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupRootIndicator className="flex items-center justify-center">
        <View className="aspect-square h-[10px] w-[10px] native:h-[10] native:w-[10] bg-primary rounded-full" />
      </RadioGroupRootIndicator>
    </RadioGroupRootItem>
  );
});
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
