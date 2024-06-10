import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gintec",
  description: "By NathanzSilva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
          {children}
        <Toaster position="top-right" richColors expand={true} />
      </body>
    </html>
  );
}
