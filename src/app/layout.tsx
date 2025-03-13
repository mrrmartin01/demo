import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const pushPenny = localFont({
  src: [
    {
      path: "../assets/fonts/PushPenny-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/PushPenny-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/PushPenny-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/PushPenny-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/PushPenny-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bomba - Home",
  description:
    "Receive, transfer and earn money back especially on referals. Send money the easy eay, use Bomba Now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pushPenny.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
