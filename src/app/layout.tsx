import type { Metadata } from "next";
import { Poppins, Inter, Arimo } from "next/font/google";
import "@/styles/tailwind/globals.css";
import "@/styles/scss/main.scss";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Employement Project",
  description: "This is a Employement Project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${arimo.variable} antialiased`}
        suppressHydrationWarning
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
