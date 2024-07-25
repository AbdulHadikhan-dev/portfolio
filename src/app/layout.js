import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
// import "E:/Projects/portfolio/node_modules/bootstrap/dist/css/bootstrap.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "my personal portfolio",
  description: "this is my personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#60a5fa_100%)]"> */}
          <Navbar />
          {/* <hr className="mx-10 bg-slate-700 max-mobile:mx-4 max-ipad:mx-6" /> */}
          {children}
          <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
