import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/_components/theme-provider";
import { Header } from "./_components/header";
import { Toaster } from "./_components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { SessionProvider } from "next-auth/react";

const syne = Syne({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zyon",
  description: "Zyon é uma plataforma de CRM para pequenas e médias empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="pt-BR" suppressHydrationWarning>
        <head />
        <body className={`${syne.className} antialiased`}>
          <SessionProvider>
            <NuqsAdapter>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Header />
                {children}
                <Toaster />
              </ThemeProvider>
            </NuqsAdapter>
          </SessionProvider>
        </body>
      </html>
    </>
  );
}
