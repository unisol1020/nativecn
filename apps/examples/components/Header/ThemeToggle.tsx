import { Switch } from "@nativecn/ui";
import { useState } from "react";

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <Switch
      checked={isDarkTheme}
      onCheckedChange={setIsDarkTheme}
      nativeID="dark-mode"
    />
  );
};

export default ThemeToggle;
