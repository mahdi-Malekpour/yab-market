import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "یاب | مقایسه هوشمند قیمت",
  description: "مشاهده و مقایسه قیمت محصولات فروشگاه‌های مختلف",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-white text-zinc-900 transition-colors duration-300">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
