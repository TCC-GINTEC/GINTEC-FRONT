"use client"

import SideBar from "../../components/Sidebar/SideBar";

export default function HomePage({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex min-h-screen w-full text-text-color">
          <SideBar className="bg-gray-400" />
          <main className="flex flex-col w-full items-center py-3 px-3 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
