import type { Metadata } from "next";
import { Bricolage_Grotesque, Lexend } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TrainKids Early Intervention & Educare Centre",
  description: "Individualised early intervention & therapy for children aged 2–14 with developmental needs in Singapore.",
};

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${lexend.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
