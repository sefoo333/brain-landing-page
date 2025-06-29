import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/componants/page/Navbar";

const RubikSans = Rubik({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});



export const metadata: Metadata = {
  title: "BrainWave",
  description: "Created By Seifeldeen Ali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${RubikSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
