import { Inter } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prueba Fujitsu",
  description: "Prueba front Fujitsu Accesibilidad",
  keywords: "funcionalidad, accesibilidad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <body className={inter.className}>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
