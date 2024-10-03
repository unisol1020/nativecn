"use client";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative max-h-[500px]">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 bg-transparent hover:bg-muted rounded-md transition-colors"
        aria-label="Copy code"
      >
        <Copy size={16} className="text-muted-foreground" />
      </button>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        className="rounded-md"
        customStyle={{
          padding: "1rem",
          lineHeight: "1.5rem",
          fontSize: "0.875rem",
          backgroundColor: "#1e1e1e",
          color: "#d4d4d4",
        }}
        wrapLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
