import "./globals.css";
import Navbar from "./components/Navbar";
import {Poppins} from "next/font/google";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Metadata} from "next";
import PixelTrackerProvider from "@/app/PixelTrackerProvider";
import Banner from "@/app/components/Banner";
import GaInitializer from "@/app/components/GAInitializer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Lyly - Croitorie Mobila La Comanda!',
  description:
    'lylydesign.ro: Croitorie mobilă la comandă. Retușuri, ajustări și creații vestimentare personalizate, direct la tine acasă. Calitate și eleganță la fiecare cusătură!',
  keywords: 'croitorie mobilă, croitorie mobila, croitorie piatra neamt, retus, retusuri haine, retusuri piatra neamt, Lyly Design, retușuri haine, ajustări vestimentare, croitor la domiciliu, croitorie personalizata, modificari haine, reparatii vestimentare, servicii croitorie, croitor profesionist, croitorie la comanda, cusaturi de calitate, design vestimentar, haine la comandă'
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
    <head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '666932342680278');
              fbq('track', 'PageView');
              `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=666932342680278&ev=PageView&noscript=1"
        />
      </noscript>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-JP6E0E8DQ5"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
  
          gtag('config', 'G-JP6E0E8DQ5');
        `,
      }}>
      </script>
    </head>
    <body className={`${poppins.className} font-medium`}>
    <div>
      <PixelTrackerProvider />
      <div className='flex flex-col'>
        <Banner />
        <Navbar/>
      </div>

      <main className='mt-16 md:h-24'><Suspense fallback={<div>Loading...</div>}>{children}</Suspense></main>
    </div>
    <ToastContainer/>
    </body>
    </html>
  );
}
