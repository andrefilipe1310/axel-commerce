import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import Hydrate from "@/app/components/Hydrate"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "e-commerce",
  description: "Next e-commerce desenvolvido",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={clsx(inter.className, 'bg-slate-700')}>
          <Navbar />
          <Hydrate>
          <main className="bg-slate-700 h-screen p-16">
            {children}
          </main>
          </Hydrate>
        </body>
      </html>
    </ClerkProvider>
  );
}
