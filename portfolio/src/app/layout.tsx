import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import icon from '@/app/favicon.ico'

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MRCDEV",
  description: "Portifólio criado para a autodivugação e projetos pessoais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
