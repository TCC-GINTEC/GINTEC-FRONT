"use client"

import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import VLibras from 'vlibras-nextjs';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto', 
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" >
      <head>
        <link rel="icon" type="image/x-icon" href="/images/icon.svg" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3455907849850728"
          crossOrigin="anonymous"></script>
      </head>
      <body className={roboto.variable}>        
        {children}        
        <Toaster position="top-right" richColors expand={true} />
      </body>
    </html>
  );
}
