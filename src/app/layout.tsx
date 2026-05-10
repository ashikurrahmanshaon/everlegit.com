import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EverLegit | Enterprise Ecommerce Infrastructure & Marketplace Technology",
  description:
    "EverLegit is a USA-based enterprise ecommerce infrastructure and marketplace technology company. Scalable digital commerce systems, supplier operations, and global marketplace management solutions since 2017.",
  keywords: [
    "EverLegit",
    "Enterprise Ecommerce Infrastructure",
    "Marketplace Technology",
    "Supplier Operations",
    "Digital Commerce Systems",
    "Global Ecommerce",
    "Commerce Automation",
    "B2B Commerce",
    "Marketplace Management",
  ],
  openGraph: {
    title: "EverLegit | Enterprise Ecommerce Infrastructure",
    description:
      "USA-based enterprise ecommerce infrastructure and marketplace technology company supporting scalable digital commerce operations worldwide.",
    type: "website",
    siteName: "EverLegit",
  },
  twitter: {
    card: "summary_large_image",
    title: "EverLegit | Enterprise Ecommerce Infrastructure",
    description:
      "Scalable ecommerce infrastructure, marketplace technology, and supplier operations for modern enterprises.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable}`}>
        <div className="app-container">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
