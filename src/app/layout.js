import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google-next",
  description: "An open source project using next js and tailwind css.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"relative min-h-screen"}>
        {children} 
        <Footer />
      </body>
    </html>
  );
}
