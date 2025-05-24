import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/baseComponents/navBar";
import SideBar from "@/components/ui/baseComponents/sideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShadCn",
  description: "UI for ShadCn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <div className="flex ">
          <div className="hidden sm:block border-none bg-slate-200 md:min-w-[250px] min-h-[100vh]">
            <SideBar />
          </div>
          <div className="flex-1 m-2 sm:m-4 lg:m-6">{children}</div>
        </div>
      </body>
    </html>
  );
}
