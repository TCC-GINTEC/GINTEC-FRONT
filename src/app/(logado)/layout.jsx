"use client"

import { Icon } from '@iconify/react';
import Image from "next/image";
import Sidebar from "./../../components/SideBar";

export default function HomePage({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex h-screen">
          
          <main className="flex flex-col flex-1 items-center gap-3">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
