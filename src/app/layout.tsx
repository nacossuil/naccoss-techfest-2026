import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nacoss Tech Fest 2026 - The Other Side of Tech",
  description: "The Other Side of Tech; by NOVA Administration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} font-sans antialiased`}
      >
        <div className="bg-grid-perspective"></div>
        {children}
      </body>
    </html>
  );
}
