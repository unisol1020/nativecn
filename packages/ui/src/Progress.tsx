import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Platform, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";
import { cn } from "../lib/utils";

const DEFAULT_MAX = 100;

const defaultGetValueLabel = (value: number, max: number) => {
  return `${Math.round((value / max) * 100)}%`;
};

const isValidValueNumber = (value: any, max: number): value is number => {
  return (
    typeof value === "number" && !isNaN(value) && value <= max && value >= 0
  );
};

const ProgressRoot = forwardRef<
  ElementRef<typeof View>,
  ComponentPropsWithoutRef<typeof View> & {
    value?: number | null | undefined;
    max?: number;
    getValueLabel?(value: number, max: number): string;
  }
>(
  (
    {
      value: valueProp,
      max: maxProp,
      getValueLabel = defaultGetValueLabel,
      ...props
    },
    ref,
  ) => {
    const max = maxProp ?? DEFAULT_MAX;
    const value = isValidValueNumber(valueProp, max) ? valueProp : 0;

    return (
      <View
        role="progressbar"
        ref={ref}
        aria-valuemax={max}
        aria-valuemin={0}
        aria-valuenow={value}
        aria-valuetext={getValueLabel(value, max)}
        accessibilityValue={{
          min: 0,
          max,
          now: value,
          text: getValueLabel(value, max),
        }}
        {...props}
      />
    );
  },
);

const ProgressIndicator = forwardRef<
  ElementRef<typeof View>,
  ComponentPropsWithoutRef<typeof View>
>(({ ...props }, ref) => {
  return <View ref={ref} role="presentation" {...props} />;
});

const Progress = forwardRef<
  ElementRef<typeof ProgressRoot>,
  ComponentPropsWithoutRef<typeof ProgressRoot> & {
    indicatorClassName?: string;
  }
>(({ className, value, indicatorClassName, ...props }, ref) => {
  return (
    <ProgressRoot
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className,
      )}
      value={value}
      {...props}
    >
      <Indicator value={value} className={indicatorClassName} />
    </ProgressRoot>
  );
});
Progress.displayName = "Progress";

const Indicator = ({
  value,
  className,
}: {
  value: number | undefined | null;
  className?: string;
}) => {
  const progress = useDerivedValue(() => value ?? 0);
  const indicator = useAnimatedStyle(() => {
    return {
      width: withSpring(
        `${interpolate(progress.value, [0, 100], [1, 100], Extrapolation.CLAMP)}%`,
        { overshootClamping: true },
      ),
    };
  });

  if (Platform.OS === "web") {
    return (
      <View
        className={cn(
          "h-full w-full flex-1 bg-primary web:transition-all",
          className,
        )}
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      >
        <ProgressIndicator className={cn("h-full w-full", className)} />
      </View>
    );
  }

  return (
    <ProgressIndicator>
      <Animated.View
        style={indicator}
        className={cn("h-full bg-foreground", className)}
      />
    </ProgressIndicator>
  );
};

export { Progress };
