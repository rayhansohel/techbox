import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";



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
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
