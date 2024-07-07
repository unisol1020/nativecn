import { Text } from 'react-native';
import { cn } from '../lib/utils';
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react';

const H1 = forwardRef<ElementRef<typeof Text>, ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => {
    return (
      <Text
        role='heading'
        aria-level='1'
        className={cn(
          'web:scroll-m-20 text-4xl text-foreground font-extrabold tracking-tight lg:text-5xl web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
H1.displayName = 'H1';

const H2 = forwardRef<ElementRef<typeof Text>, ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => {
    return (
      <Text
        role='heading'
        aria-level='2'
        className={cn(
          'web:scroll-m-20 border-b border-border pb-2 text-3xl text-foreground font-semibold tracking-tight first:mt-0 web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
H2.displayName = 'H2';

const H3 = forwardRef<ElementRef<typeof Text>, ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => {
    return (
      <Text
        role='heading'
        aria-level='3'
        className={cn(
          'web:scroll-m-20 text-2xl text-foreground font-semibold tracking-tight web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
H3.displayName = 'H3';

const H4 = forwardRef<ElementRef<typeof Text>, ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => {
    return (
      <Text
        role='heading'
        aria-level='4'
        className={cn(
          'web:scroll-m-20 text-xl text-foreground font-semibold tracking-tight web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
H4.displayName = 'H4';

const P = forwardRef<ElementRef<typeof Text>, ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => {
    return (
      <Text
        className={cn('text-base text-foreground web:select-text', className)}
        ref={ref}
        {...props}
      />
    );
  }
);
P.displayName = 'P';

const Lead = forwardRef<ElementRef<typeof Text>, ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => {
    return (
      <Text
        className={cn('text-xl text-muted-foreground web:select-text', className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Lead.displayName = 'Lead';

const Large = forwardRef<ElementRef<typeof Text>, ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => {
    return (
      <Text
        className={cn('text-xl text-foreground font-semibold web:select-text', className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Large.displayName = 'Large';

const Small = forwardRef<ElementRef<typeof Text>, ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => {
    return (
      <Text
        className={cn(
          'text-sm text-foreground font-medium leading-none web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Small.displayName = 'Small';

const Muted = forwardRef<ElementRef<typeof Text>, ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => {
    return (
      <Text
        className={cn('text-sm text-muted-foreground web:select-text', className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Muted.displayName = 'Muted';

export { H1, H2, H3, H4, Large, Lead, Muted, P, Small };
