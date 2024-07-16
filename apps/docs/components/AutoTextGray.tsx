import React from "react";
import { View } from "react-native";
import { P } from "@nativecn/ui";

const regex =
  /(yarn add|npx|{.*?}|const|import|from|if|else|return|nativecn|=>|{|}|:|=|'|"|~|;|\[|]|\.|\?|\(|\)|@|\/|<|>|\/>)/g;
const formatText = (text: string) => {
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.startsWith("{") && part.endsWith("}")) {
      const innerPart = part.slice(1, -1);

      return (
        <P key={index} className="font-normal text-gray-400">
          {"{"}
          <P className="font-normal text-white">{formatText(innerPart)}</P>
          {"}"}
        </P>
      );
    }

    if (regex.test(part)) {
      return (
        <P key={index} className="font-normal text-gray-400">
          {part}
        </P>
      );
    }

    return (
      <P key={index} className="font-normal">
        {part}
      </P>
    );
  });
};

const AutoTextGray = ({ text }: { text: string }) => {
  return (
    <View className="flex flex-row gap-6">
      <P className="font-normal">{formatText(text)}</P>
    </View>
  );
};

export default AutoTextGray;
