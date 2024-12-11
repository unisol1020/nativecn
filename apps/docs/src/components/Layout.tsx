const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[calc(100vh-72px)] grid grid-cols-1 pb-5 mx-auto max-w-screen-xl h-full px-4">
      {children}
    </div>
  );
};

export default Layout;
