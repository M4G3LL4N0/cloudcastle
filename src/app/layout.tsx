import type { Metadata } from "next"
import "./globals.css"
import NavBar from "@/components/NavBar"

export const metadata: Metadata = {
  title: "CloudCastle | Automated Retail Infrastructure",
  description:
    "CloudCastle builds automated retail infrastructure for controlled, high-demand environments with premium software, machine visibility, and launch-ready operator tooling.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
