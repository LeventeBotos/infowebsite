import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weboldalak",
  description: "Botos Levente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body
        className={`${inter.className} items-center flex flex-col justify-center`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
