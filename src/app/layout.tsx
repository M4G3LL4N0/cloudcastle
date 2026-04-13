import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloudCastle | Automated Retail Infrastructure",
  description:
    "CloudCastle builds automated retail infrastructure for controlled distribution environments, combining compliance, smart vending, and scalable network operations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
