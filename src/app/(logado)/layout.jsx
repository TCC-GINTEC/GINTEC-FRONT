"use client"

import SideBar from "../../components/Sidebar/SideBar";

export default function HomePage({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex min-h-screen w-full text-text-color">
          <SideBar />
          <main className="flex flex-col w-full py-3 px-12 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
