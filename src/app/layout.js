// layout.js (Server Component)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientLayout from "@/components/ClientLayout";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Krishi Smart",
  description: "An App for Farmers and Agriculture",
};


export default function RootLayout({ children }) {
  return (
    
    <html lang="en">   
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientLayout>
          <Navbar />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}