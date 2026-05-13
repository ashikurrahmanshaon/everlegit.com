import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact EverLegit | Enterprise Commerce Operations",
  description: "Contact EverLegit for enterprise ecommerce systems, marketplace infrastructure, supplier operations, strategic partnerships, and business development inquiries.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
