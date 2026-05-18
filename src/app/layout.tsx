import type { Metadata } from "next"
import "./globals.css"
import NavBar from "@/components/NavBar"
import Footer from "@/components/site/Footer"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
const metadataBase =
  siteUrl && /^https?:\/\//i.test(siteUrl) ? new URL(siteUrl) : undefined

const title = "CloudCastle | Premium Automated Retail Infrastructure"
const description =
  "CloudCastle is premium automated retail infrastructure and an operator command layer for controlled venue machine networks—launch surfaces, portfolio visibility, and investor-grade presentation."

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: {
    default: title,
    template: "%s | CloudCastle",
  },
  description,
  keywords: [
    "automated retail infrastructure",
    "venue machine network",
    "operator dashboard",
    "smart vending network",
    "retail infrastructure",
    "CloudCastle",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "CloudCastle",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-chrome">
          <div className="site-grid" />
          <div className="site-noise" />
          <div className="site-vignette" />
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
