import "./globals.css";
import Navbar from "./components/Navbar";
import {Poppins} from "next/font/google";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Lyly - Croitorie Mobila La Comanda!',
  description:
    'lylydesign.ro: Croitorie mobilă la comandă. Retușuri, ajustări și creații vestimentare personalizate, direct la tine acasă. Calitate și eleganță la fiecare cusătură!',
  keywords: 'croitorie mobilă, Lyly Design, retușuri haine, ajustări vestimentare, croitor la domiciliu, croitorie personalizată, modificări haine, reparații vestimentare, servicii croitorie, croitor profesionist, croitorie la comandă, cusături de calitate, design vestimentar, haine la comandă'
};

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
      <Navbar/>
      <main className='mt-16 md:h-24'>{children}</main>
    </div>
    <ToastContainer/>
    </body>
    </html>
  );
}
