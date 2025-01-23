import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from './../lib/utils';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "techbox",
  description: "Your ultimate technology blog box",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-sm">
        <Navbar />
        <div className="min-h-[calc(100vh-118px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
