const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div>12</div>
      <div className="col-span-5">{children}</div>
    </div>
  );
};

export default DocsLayout;
