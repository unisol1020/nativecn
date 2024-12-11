import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

const font = GeistSans;

export const metadata: Metadata = {
  title: "nativecn",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "XExTxZ1pj8JqzJxQjwJICAL-9nUdEH1MoKs1PNpn-MA",
  },
  description: "Universal shadcn/ui for React Native",
  openGraph: {
    title: "nativecn",
    description: "Universal shadcn/ui for React Native",
    images: [
      {
        url: "/cover-image.png",
        width: 800,
        height: 600,
        alt: "Cover Image",
      },
    ],
    url: "https://nativecn.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "nativecn",
    description: "Universal shadcn/ui for React Native",
    images: ["/cover-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "min-h-screen subpixel-antialiased antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          className="flex flex-col"
        >
          <Header />
          <main className="flex-1">
            <Layout>{children}</Layout>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
