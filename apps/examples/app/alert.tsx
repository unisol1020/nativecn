import { Alert, AlertTitle, AlertDescription } from "@nativecn/ui";
import { useLocalSearchParams } from "expo-router";
import { AlertTriangle, Terminal } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { View } from "react-native";

const AlertScreen = () => {
  const { setColorScheme } = useColorScheme();
  const { theme } = useLocalSearchParams();

  useEffect(() => {
    if (setColorScheme && theme)
      setColorScheme(theme === "dark" ? "dark" : "light");
  }, [theme, setColorScheme]);

  return (
    <View className="flex-1 justify-center p-6 items-center gap-6">
      <Alert icon={Terminal} className="max-w-xl">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can use a terminal to run commands on your computer.
        </AlertDescription>
      </Alert>
      <Alert icon={AlertTriangle} variant="destructive" className="max-w-xl">
        <AlertTitle>Danger!</AlertTitle>
        <AlertDescription>
          High voltage. Do not touch. Risk of electric shock. Keep away from
          children.
        </AlertDescription>
      </Alert>
    </View>
  );
};

export default AlertScreen;
