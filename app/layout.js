import Navbar from "./components/Nabar";
import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
