"use client"

import SideBar from "../../components/Sidebar/SideBar";

export default function HomePage({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex w-screen h-screen overflow-y-scroll md:min-h-screen text-text-color fixed">
          <SideBar />
          <main className="flex flex-col w-full py-3 md:px-12 px-6 bg-white overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
