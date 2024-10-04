import CopyButton from "./CopyButton";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  return (
    <div className="relative max-h-[500px] overflow-auto">
      <CopyButton code={code} />
    </div>
  );
};

export default CodeBlock;
