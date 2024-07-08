import {ComponentPropsWithoutRef, ElementRef, forwardRef,} from 'react';
import {GestureResponderEvent, Platform, Pressable, View} from 'react-native';
import Animated, {interpolateColor, useAnimatedStyle, useDerivedValue, withTiming,} from 'react-native-reanimated';
import {cn} from '../lib/utils';
import {useColorScheme} from 'nativewind';

const RGB_COLORS = {
  light: {
    primary: 'rgb(24, 24, 27)',
    input: 'rgb(228, 228, 231)',
  },
  dark: {
    primary: 'rgb(250, 250, 250)',
    input: 'rgb(39, 39, 42)',
  },
} as const;

const SwitchRoot = forwardRef<
  ElementRef<typeof Pressable>,
  ComponentPropsWithoutRef<typeof Pressable> & {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  /**
   * Platform: WEB ONLY
   */
  onKeyDown?: (ev: KeyboardEvent) => void;
}
>(
  (
    {
      checked,
      onCheckedChange,
      disabled,
      onPress: onPressProp,
      'aria-valuetext': ariaValueText,
      ...props
    },
    ref
  ) => {
    const onPress = (ev: GestureResponderEvent) => {
      if (disabled) return;
      onCheckedChange(!checked);
      onPressProp?.(ev);
    };

    return (
      <Pressable
        ref={ref}
        aria-disabled={disabled}
        role="switch"
        aria-checked={checked}
        aria-valuetext={ariaValueText ?? (checked ? 'on' : 'off')}
        onPress={onPress}
        accessibilityState={{checked, disabled}}
        disabled={disabled}
        {...props}
      />
    );
  }
);

const SwitchThumb = forwardRef<
  ElementRef<typeof View>,
  ComponentPropsWithoutRef<typeof View>
>(({...props}, ref) => {
  return <View ref={ref} role="presentation" {...props} />;
});

const SwitchWeb = forwardRef<
  ElementRef<typeof SwitchRoot>,
  ComponentPropsWithoutRef<typeof SwitchRoot>
>(({className, ...props}, ref) => (
  <SwitchRoot
    className={cn(
      'peer flex-row h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed',
      props.checked ? 'bg-primary' : 'bg-input',
      props.disabled && 'opacity-50',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchThumb
      className={cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-md shadow-foreground/5 ring-0 transition-transform',
        props.checked ? 'translate-x-5' : 'translate-x-0'
      )}
    />
  </SwitchRoot>
));
SwitchWeb.displayName = 'SwitchWeb';

const SwitchNative = forwardRef<
  ElementRef<typeof SwitchRoot>,
  ComponentPropsWithoutRef<typeof SwitchRoot>
>(({className, ...props}, ref) => {
  const {colorScheme} = useColorScheme();
  const translateX = useDerivedValue(() => (props.checked ? 18 : 0));
  const animatedRootStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      translateX.value,
      [0, 18],
      [RGB_COLORS[colorScheme!].input, RGB_COLORS[colorScheme!].primary]
    ),
  }));
  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [{translateX: withTiming(translateX.value, {duration: 200})}],
  }));

  return (
    <Animated.View
      style={animatedRootStyle}
      className={cn('h-8 w-[46px] rounded-full', props.disabled && 'opacity-50')}
    >
      <SwitchRoot
        className={cn(
          'flex-row h-8 w-[46px] shrink-0 items-center rounded-full border-2 border-transparent',
          className
        )}
        {...props}
        ref={ref}
      >
        <Animated.View style={animatedThumbStyle}>
          <SwitchThumb className="h-7 w-7 rounded-full bg-background shadow-md shadow-foreground/25 ring-0"/>
        </Animated.View>
      </SwitchRoot>
    </Animated.View>
  );
});
SwitchNative.displayName = 'SwitchNative';

const Switch = Platform.select({
  web: SwitchWeb,
  default: SwitchNative,
});

export {Switch};
