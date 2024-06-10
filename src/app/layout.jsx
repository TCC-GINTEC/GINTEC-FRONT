import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner'

const roboto = Roboto({ subsets: ["latin"] , weight:['300','400','500','700','900']});

export const metadata = {
  title: "Gintec",
  description: "By NathanzSilva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
          {children}
        <Toaster position="top-right" richColors expand={true} />
      </body>
    </html>
  );
}
