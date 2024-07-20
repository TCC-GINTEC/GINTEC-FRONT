"use client"

import SideBar from "../../components/Sidebar/SideBar";

export default function HomePage({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex min-h-screen w-full text-text-color">
          <SideBar className="z-50  "/>
          <main className=" w-full py-3 px-3 overflow-x-hidden ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

