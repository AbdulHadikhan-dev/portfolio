import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "my personal portfolio",
  description: "this is my personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/* <hr className="mx-10 bg-slate-700 max-mobile:mx-4 max-ipad:mx-6" /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
