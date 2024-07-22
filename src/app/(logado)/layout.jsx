"use client";
import { useEffect, useState } from "react";
import SideBarWeb from "../../components/SidebarWeb/SideBar";
import SideBarMobile from "../../components/SidebarMobile/SideBarMobile";

export default function HomePage({ children }) {
const [exibirSidebar,setExibirSidebarMobile] = useState(false)

function exibirSidebarMobile() {
  console.log('pqp vsf')
  setExibirSidebarMobile(!exibirSidebar)
}

  return (
    <html lang="pt-br">
      <body className='relative'>
        <div className="flex min-h-screen w-full text-text-color">
          <SideBarWeb className="sm:block  hidden" />
          <main className={`w-full py-3  overflow-x-hidden ${exibirSidebar?'w-full':''}`}>
            <SideBarMobile exibirSidebar={exibirSidebar} exibirSidebarMobile={exibirSidebarMobile} className="z-50" />
            <button className="sm:hidden block" onClick={() => exibirSidebarMobile()}>X</button>
            {/*mingcute:menu-fill*/}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
