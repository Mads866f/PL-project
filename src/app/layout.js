import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PL-Project 2024",
  description: "PL-Project 2024 for school project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <header className="bg-gray-800 rounded-lg shadow m-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <h1 className="text-xl font-semibold text-white">PL-Project 2024</h1>
            <nav>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Services</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    {children}
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024
          <a href="https://flowbite.com/"
             className="hover:underline">PL-Project</a>. All Rights Reserved.
      </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
    </footer>
    </body>
    </html>
  );
}
