import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Algerian tech makers",
  description: "Algerian Tech Makers Dahbord", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-[#FFFCFA]" >{children}</body>
    </html>
  );
}
