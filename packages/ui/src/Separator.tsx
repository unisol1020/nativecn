import * as React from 'react';
import { cn } from '../lib/utils';
import {View} from 'react-native';
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react';

const SeparatorRoot = React.forwardRef<React.ElementRef<typeof View>, ComponentPropsWithoutRef<typeof View> & {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}>(
  ({ decorative, orientation = 'horizontal', ...props }, ref) => {

    return (
      <View
        role={decorative ? 'presentation' : 'separator'}
        aria-orientation={orientation}
        ref={ref}
        {...props}
      />
    );
  }
);

const Separator = forwardRef<
  ElementRef<typeof SeparatorRoot>,
  ComponentPropsWithoutRef<typeof SeparatorRoot>
>(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <SeparatorRoot
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className
    )}
    {...props}
  />
));
Separator.displayName = "Separator";

export { Separator };
