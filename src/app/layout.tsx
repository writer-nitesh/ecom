import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import AlertProvider from "@/components/alert/alertProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ECOM",
  description: "A next project for shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AlertProvider />
        <Header />
        {children}</body>
    </html>
  );
}
