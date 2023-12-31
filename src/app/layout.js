import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mateo's Portfolio",
  description: "My personal website, portfolio and blog!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <Navbar />
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
