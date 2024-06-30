"use client"

import SideBar from "../../components/Sidebar/SideBar";

export default function HomePage({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex min-h-screen w-full text-text-color">
          <SideBar />
          <main className=" w-full items-center py-3 px-3 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
