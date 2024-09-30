const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-100 pb-5">
      <div className="mx-auto flex max-w-screen-xl">
        <div className="w-full mt-4 px-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
