const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4">
      <div className="h-100 pb-5">
        <div className="mx-auto flex max-w-7xl">
          <div className="w-full mt-4 px-4 lg:px-0">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
