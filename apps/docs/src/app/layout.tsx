import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GeistSans } from "geist/font/sans";
import { twMerge } from "tailwind-merge";

const font = GeistSans;

export const metadata: Metadata = {
  title: "nativecn",
  description: "Universal shadcn/ui for React Native",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={twMerge(font.className, "min-h-screen")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
