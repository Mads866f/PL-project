import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PL-Project 2024",
  description: "PL-Project 2024 for school project",
};

export default function RootLayout({ children }) {
  return (
          <html>
           <body>
             {children}
           </body></html>
  )
}
