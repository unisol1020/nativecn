import * as React from 'react';
import { Pressable, View, type GestureResponderEvent } from 'react-native';
import { TextClassContext } from './Text';
import { cn } from '../lib/utils';
import {ComponentPropsWithoutRef, createContext, ElementRef, forwardRef, useContext} from 'react';

type TabsRootProps = {
  value: string;
  onValueChange: (value: string) => void;
  /**
   * Platform: WEB ONLY
   */
  orientation?: 'horizontal' | 'vertical';
  dir?: 'ltr' | 'rtl';
  activationMode?: 'automatic' | 'manual';
}


type RootContext = TabsRootProps & {
  nativeID: string;
}

const TabsContext = createContext<RootContext | null>(null);

const Tabs = forwardRef<ElementRef<typeof View>, ComponentPropsWithoutRef<typeof View> & TabsRootProps>(
  (
    {
      value,
      onValueChange,
      ...viewProps
    },
    ref
  ) => {
    const nativeID = React.useId();
    return (
      <TabsContext.Provider
        value={{
          value,
          onValueChange,
          nativeID,
        }}
      >
        <View ref={ref} {...viewProps} />
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = 'Tabs';

function useRootContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs compound components cannot be rendered outside the Tabs component');
  }
  return context;
}

const TabsList = forwardRef<ElementRef<typeof View>, ComponentPropsWithoutRef<typeof View>>(({ className, ...props }, ref) => {
  return (
      <View
        ref={ref}
        className={cn(
          'web:inline-flex h-10 native:h-12 items-center justify-center rounded-md bg-muted p-1 native:px-1.5',
          className
        )}
        role='tablist'
        {...props}
      />
  );
});

TabsList.displayName = 'TabsList';

const TabsTrigger = forwardRef<
  React.ElementRef<typeof Pressable>,
  ComponentPropsWithoutRef<typeof Pressable> & {
  value: string;
}
>(({ onPress: onPressProp, disabled, value: tabValue, className, ...props }, ref) => {
  const { onValueChange, value: rootValue, nativeID } = useRootContext();

  const onPress = (ev: GestureResponderEvent) => {
    if (disabled) return;
    onValueChange(tabValue);
    onPressProp?.(ev);
  }

  return (
    <TextClassContext.Provider
      value={cn(
        'text-sm native:text-base font-medium text-muted-foreground web:transition-all',
        rootValue === tabValue && 'text-foreground'
      )}
    >
      <Pressable
        ref={ref}
        nativeID={`${nativeID}-tab-${tabValue}`}
        aria-disabled={!!disabled}
        aria-selected={rootValue === tabValue}
        role='tab'
        onPress={onPress}
        accessibilityState={{
          selected: rootValue === tabValue,
          disabled: !!disabled,
        }}
        disabled={!!disabled}
        className={cn(
          'flex-1 inline-flex items-center justify-center shadow-none web:whitespace-nowrap rounded px-3 h-full text-sm font-medium web:ring-offset-background web:transition-all web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
          disabled && 'web:pointer-events-none opacity-50',
          tabValue === rootValue && 'bg-background shadow-lg shadow-foreground/10',
          className
        )}
        {...props}
      />
    </TextClassContext.Provider>
  );
});

TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = forwardRef<ElementRef<typeof View>, ComponentPropsWithoutRef<typeof View> & { forceMount?: true, value: string }>(
  ({ forceMount, value: tabValue, ...props }, ref) => {
    const { value: rootValue, nativeID } = useRootContext();

    if (!forceMount) {
      if (rootValue !== tabValue) {
        return null;
      }
    }

    return (
      <View
        ref={ref}
        aria-hidden={!(forceMount || rootValue === tabValue)}
        aria-labelledby={`${nativeID}-tab-${tabValue}`}
        role='tabpanel'
        className={cn(
          'web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
          props.className
        )}
        {...props}
      />
    );
  }
);

TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, TabsTrigger, TabsContent, useRootContext };
