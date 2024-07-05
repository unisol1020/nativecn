import {ComponentPropsWithoutRef, useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {cn} from '../lib/utils';

const Skeleton = ({
  className,
  duration = 1000,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Animated.View>, 'style'> & Partial<{duration: number}>) => {
  const sv = useSharedValue(1);

  useEffect(() => {
    sv.value = withRepeat(
      withSequence(withTiming(0.5, {duration}), withTiming(1, {duration})),
      -1
    );
  }, []);

  const style = useAnimatedStyle(() => ({
    opacity: sv.value,
  }));

  return (
    <Animated.View
      style={style}
      className={cn('rounded-md bg-secondary dark:bg-muted', className)}
      {...props}
    />
  );
}

export { Skeleton };
