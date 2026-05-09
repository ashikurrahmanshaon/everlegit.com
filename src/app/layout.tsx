import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Everlegit - Idea to website",
  description: "Generate Websites Instantly, Customize to Perfection.",
  keywords: ["Everlegit", "Website Builder", "AI Website"],
  openGraph: {
    title: "Everlegit - Idea to website",
    description: "Generate Websites Instantly, Customize to Perfection.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="app-container">
            {/* Background image for the blurred landscape effect */}
            <img src="/bg.png" alt="Background" className="bg-image" />
            <div className="bg-overlay"></div>
            
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
