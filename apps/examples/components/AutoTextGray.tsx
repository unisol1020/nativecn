import React, { PropsWithChildren, ReactNode } from "react";
import { View } from "react-native";
import { P } from "@nativecn/ui";

const regex =
  /(yarn add|npx|{.*?}|const|import|from|if|else|return|nativecn|=>|{|}|:|=|'|"|~|;|\[|]|\.|\?|\(|\)|@|\/|<|>|\/>)/g;

const formatText = (text: string) => {
  const parts = text.split(regex);

  return parts.map((part: string, index: number) => {
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

const getTextFromChildren = (children: ReactNode): string => {
  if (typeof children === "string") {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map((child) => getTextFromChildren(child)).join("");
  }

  if (React.isValidElement(children)) {
    return getTextFromChildren(children.props.children);
  }

  return "";
};

const AutoTextGray = ({ children }: PropsWithChildren) => {
  const text = getTextFromChildren(children);
  const lines = text.split("\n");

  return (
    <View className="rounded-lg flex flex-col gap-1">
      {lines.map((line, index) => {
        const lineNumber = index + 1;

        return (
          <View key={index} className="flex flex-row items-center">
            {lines.length > 1 && (
              <>
                <P className="text-sm text-gray-400">{lineNumber}</P>
                <P className="font-normal text-gray-400">{" ".repeat(6)}</P>
              </>
            )}
            {formatText(line)}
          </View>
        );
      })}
    </View>
  );
};

export default AutoTextGray;
