"use client"

import SideBar from '@/components/SideBar';
import Image from "next/image";

export default function Home(){
  return(
    <>
     <SideBar/>
      {/* tirar a imagemw -[600px] h-[100px] */}
      <Image src="/images/backgroundLogin.png"  width="400" height="150"></Image>
      <div className=" bg-slate-400">
        Grafico de participação de cada sala
      </div>
    </>
  )
}
