import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Aside from "@/components/aside";

const lexendFont = Lexend({
  variable: "--font-lexend",
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Livio",
  description:
    "Livio es una aplicacion de red social para hablar y compartir temas tales como politica, noticias, intereses, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${lexendFont.variable} antialiased min-h-screen  flex flex-col md:flex-row max-w-[800px] w-full  mx-auto`}
      >
        <main className=" max-w-[530px] w-full mx-auto ">{children}</main>

        <Aside />
      </body>
    </html>
  );
}
