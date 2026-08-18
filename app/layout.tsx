import type { Metadata } from "next";

import "./globals.css";
import { Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Pari App",
  description: "Pari UI/UX App for Camping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body> */}
      <body className={lexend.className}>
        <Navbar />
        <main className="relative overflow-hidden lexend ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
