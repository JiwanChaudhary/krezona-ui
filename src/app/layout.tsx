import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krezona UI",
  description: "This is the UI for Krezona Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full w-full">{children}</body>
    </html>
  );
}
