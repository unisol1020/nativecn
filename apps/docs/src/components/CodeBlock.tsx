"use client";

import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  coy,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const { theme } = useTheme();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative max-h-[500px]">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 bg-transparent hover:bg-slate-700/50 rounded-md transition-colors"
        aria-label="Copy code"
      >
        <Copy
          size={16}
          className={theme === "dark" ? "text-slate-400" : "text-slate-600"}
        />
      </button>

      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? vscDarkPlus : coy}
        className="rounded-md"
        customStyle={{
          padding: theme === "dark" ? "1rem" : "1rem 0",
          lineHeight: "1.5rem",
          fontSize: "0.875rem",
          backgroundColor: theme === "dark" ? "#1e1e1e" : "#d4d4d4",
          color: theme === "dark" ? "#d4d4d4" : "#1e1e1e",
        }}
        wrapLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
