import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-medium`}>
        <div>
          <Navbar />
          <main>{children}</main>
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
