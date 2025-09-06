import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Austin Wallace - Next.js on Azure",
  description: "Resume built with Next.js, deployed on Azure App Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}