"use client"

import SideBar from "../../components/Sidebar/SideBar";

export default function HomePage({ children }) {
  return (
    <html lang="pt-br">
      <body>
      <div className="flex min-h-screen w-full text-text-color">
        <SideBar className="bg-gray-400" />
          <main className="flex flex-col flex-1 items-center gap-3 py-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
