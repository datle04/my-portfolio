import type { Metadata } from "next";
import { VT323, Inter, Permanent_Marker } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/custom-cursor";
import { SpeedInsights } from "@vercel/speed-insights/next"

const vt323 = VT323({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-vt323" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter"
});

const handwriting = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwriting"
});

export const metadata: Metadata = {
  title: "Le Tan Dat | Portfolio",
  description: "Frontend Developer Portfolio - Retro Industrial Style",
  keywords: ["Le Tan Dat", "Software Engineer", "Frontend Developer", "Portfolio", "Retro"],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${vt323.variable} ${inter.variable} ${handwriting.variable} antialiased`}>
        <CustomCursor/>
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}
