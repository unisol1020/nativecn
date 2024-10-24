import { useEffect, useState } from "react";

const ExampleLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="absolute inset-0 bg-background flex items-center justify-center rounded-md border border-muted">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 bg-background border-solid"></div>
      </div>
    );
  }
};

export default ExampleLoading;
