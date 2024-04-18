"use client"

import SideBar from "../../components/Sidebar/SideBar";

export default function HomePage({ children }) {
  return (
    <html lang="pt-br">
      <body>
      <div className="flex min-h-screen w-full text-text-color">
        <SideBar className="bg-gray-400" />
          <main className="flex flex-col items-center w-full py-3 px-5">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
