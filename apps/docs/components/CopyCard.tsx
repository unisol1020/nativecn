import { Button, Card, CardContent, Text } from "@nativecn/ui";
import React, { PropsWithChildren } from "react";
import { Copy } from "lucide-react-native";
import * as Clipboard from "expo-clipboard";

const CopyCard = ({
  children,
  rawValue,
}: PropsWithChildren & { rawValue?: string }) => {
  const handleCopy = async () => {
    if (rawValue) {
      await Clipboard.setStringAsync(rawValue);
    }
  };

  return (
    <Card>
      <CardContent className="p-4 flex flex-row items-center gap-2">
        {children}

        {rawValue && (
          <Button className="ml-auto" onPress={handleCopy} variant="ghost">
            <Text>
              <Copy style={{ width: 15, height: 15 }} />
            </Text>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CopyCard;
