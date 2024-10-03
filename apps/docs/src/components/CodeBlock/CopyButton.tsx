"use client";

import { Copy } from "lucide-react";

const CopyButton = ({ code }: { code: string }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="absolute top-2 right-2 p-2 bg-transparent hover:bg-muted rounded-md transition-colors"
      aria-label="Copy code"
    >
      <Copy size={16} className="text-muted-foreground" />
    </button>
  );
};

export default CopyButton;
