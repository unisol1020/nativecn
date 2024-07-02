import * as React from 'react';
import { Text as RNText } from 'react-native';
import { cn } from '../lib/utils';

const TextClassContext = React.createContext<string | undefined>(undefined);

type TextProps = React.ComponentPropsWithoutRef<typeof RNText> & { asChild?: boolean };

const Text = React.forwardRef<React.ElementRef<typeof RNText>, TextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const textClass = React.useContext(TextClassContext);

    return (
      <RNText
        className={cn('text-base text-foreground web:select-text', textClass, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';

export { Text, TextClassContext };
