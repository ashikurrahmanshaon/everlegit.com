import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About EverLegit | USA-Based Enterprise Ecommerce Infrastructure Company",
  description: "Learn about EverLegit — a USA-based enterprise ecommerce infrastructure and marketplace technology company operating since 2017. Our mission, values, and global operational philosophy.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
