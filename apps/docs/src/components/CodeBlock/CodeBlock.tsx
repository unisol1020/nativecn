import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "./CopyButton";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  return (
    <div className="relative max-h-[500px] overflow-auto">
      <CopyButton code={code} />
      {/* @ts-ignore */}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        className="rounded-md"
        customStyle={{
          padding: "1rem",
          lineHeight: "1.5rem",
          fontSize: "0.875rem",
          color: "#d4d4d4",
          backgroundColor: "#27272A",
        }}
        wrapLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
