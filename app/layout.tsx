import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AmbiSight",
  description: "Precision Diagnostics for Organisational Ambidexterity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
