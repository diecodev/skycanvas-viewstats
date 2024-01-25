import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@root/app/components/root/header";
import { ThemeProvider } from "@root/app/components/root/theme-provider";
import { Background } from "@root/app/components/root/bg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viewstats - weather app",
  description: "technical assessment for viewstats by Diecodev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Background />
          <Header />
          <div className="min-h-[calc(100vh_-_4rem)]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
