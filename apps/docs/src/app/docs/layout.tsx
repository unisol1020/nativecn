import Menu from "./_components/Menu/Menu";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <Menu />
      <div className="col-span-5">{children}</div>
    </div>
  );
};

export default DocsLayout;
