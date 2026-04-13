import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VVN | Vape Vending Network",
  description: "Nationwide vape vending infrastructure built for compliance, automation, and scale.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
