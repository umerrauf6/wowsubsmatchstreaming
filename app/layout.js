import Head from "next/head";
import Navbar from "./components/Nabar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Live World Cup",
  description: "A website where you can watch live worldcup for free",
};

const containerStyle = {
  backgroundImage: "url(assets/background.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen" style={containerStyle}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
