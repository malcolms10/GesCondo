import type { Metadata } from "next";
import ThemeProvider from "@/providers/ThemeProviders";
import "./globals.css";



export const metadata: Metadata = {
  title: "geskila",
  description: "App para gestão de condomínio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
