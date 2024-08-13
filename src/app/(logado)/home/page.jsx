"use client"

import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Home() {



  return (
    <div>
      <h1 className="text-[32px] font-[500]">Home</h1>
      <section className="py-6 px-12 bg-[#F3EAFC] rounded-[20px] flex justify-between md:max-h-[120px]">
        <div>
          <h2>Olá, seja Bem Vindo !</h2>
          <p>Sinta-se a vontade para navegar pela nossa plataforma</p>
        </div>
        <img src="/images/imageHome1.png" className="relative h-[150px] bottom-[60px] hidden md:block" />
      </section>

      <div className="grid grid-cols-5 grid-rows-3 gap-4">
        <section className="py-6 px-12 col-span-4 row-span-2 flex-col gap-5 shadow-md rounded-[20px] flex justify-between mt-6">
          <h1 className="text-[#005261] font-[500]">Participação de cada sala</h1>
          <div className="h-[30vh] w-full flex justify-around">

            {/* Espacador */}
            <div className="h-full flex flex-col items-center">
              <div className="h-full w-3 bg-[#E6E6E6] content-end">
                <div className="h-[50%] w-3 bg-red-800"></div>
              </div>
              <h3>3º ADM</h3>
            </div>
            {/* Espacador */}
            <div className="h-full flex flex-col items-center">
              <div className="h-full w-3 bg-[#E6E6E6] content-end">
                <div className="h-[50%] w-3 bg-red-800"></div>
              </div>
              <h3>3º ADM</h3>
            </div>
            {/* Espacador */}
            <div className="h-full flex flex-col items-center">
              <div className="h-full w-3 bg-[#E6E6E6] content-end">
                <div className="h-[50%] w-3 bg-red-800"></div>
              </div>
              <h3>3º ADM</h3>
            </div>
            {/* Espacador */}
            <div className="h-full flex flex-col items-center">
              <div className="h-full w-3 bg-[#E6E6E6] content-end">
                <div className="h-[50%] w-3 bg-red-800"></div>
              </div>
              <h3>3º ADM</h3>
            </div>
            {/* Espacador */}
            <div className="h-full flex flex-col items-center">
              <div className="h-full w-3 bg-[#E6E6E6] content-end">
                <div className="h-[50%] w-3 bg-red-800"></div>
              </div>
              <h3>3º ADM</h3>
            </div>
            {/* Espacador */}
            <div className="h-full flex flex-col items-center">
              <div className="h-full w-3 bg-[#E6E6E6] content-end">
                <div className="h-[50%] w-3 bg-red-800"></div>
              </div>
              <h3>3º ADM</h3>
            </div>
            {/* Espacador */}
            <div className="h-full flex flex-col items-center">
              <div className="h-full w-3 bg-[#E6E6E6] content-end">
                <div className="h-[50%] w-3 bg-red-800"></div>
              </div>
              <h3>3º ADM</h3>
            </div>
            {/* Espacador */}
            <div className="h-full flex flex-col items-center">
              <div className="h-full w-3 bg-[#E6E6E6] content-end">
                <div className="h-[50%] w-3 bg-red-800"></div>
              </div>
              <h3>3º ADM</h3>
            </div>
            {/* Espacador */}
            <div className="h-full flex flex-col items-center">
              <div className="h-full w-3 bg-[#E6E6E6] content-end">
                <div className="h-[50%] w-3 bg-red-800"></div>
              </div>
              <h3>3º ADM</h3>
            </div>
            {/* Espacador */}

          </div>
        </section>
        <section className="py-6 px-12 col-span-1 row-span-1 flex-col gap-5 shadow-md rounded-[20px] flex justify-betweenmt-6">
          <img src="images/iconTPontos.svg" className=" w-[64px]" />
          <h2 className="text-[#4C7EFF] font-[500]">Total de Pontos</h2>
          <p className="font-[700]">123812903123</p>
        </section>
        <section className="py-6 px-12 col-span-1 row-span-1 flex-col gap-5 shadow-md rounded-[20px] flex justify-betweenmt-6">
          <img src="images/iconMPontos.svg" className=" w-[64px]" />
          <h2 className="text-[#8A29E6] font-[500]">Total de Pontos</h2>
          <p className="font-[700]">123812903123</p>
        </section>


        <section className="py-6 px-12 col-span-2 row-span-1 flex-col gap-5 shadow-md rounded-[20px] flex justify-betweenmt-6 ">
          <div className="flex items-center">
            <img src="images/IconAlunosAtv.svg" className=" w-[64px] h-[48px] object-cover" />
            <h2 className="text-[#FF4C4D] font-[500]">Total de Pontos</h2>
          </div>
          <p className="font-[700]">123812903123</p>
        </section>

        <section className="py-6 px-12 col-span-2 row-span-1 flex-col gap-5 shadow-md rounded-[20px] flex justify-betweenmt-6">
          <h2 className="text-[#005261] font-[500]">Calendário</h2>
          <div className="flex gap-4">
            <div className="bg-[#005261] p-5 rounded-xl">
              <h1 className="text-[#ffffff] text-3xl">28</h1>
            </div>
            <div className="bg-[#F8F8F8] p-5 rounded-xl">
            <h1 className="text-[#005261] text-3xl">29</h1>
            </div>
          </div>
        </section>


        <section className="py-6 px-12 col-span-1 row-span-1 flex-col gap-5 shadow-md rounded-[20px] flex justify-betweenmt-6">
          <img src="images/iconEPontos.svg" className=" w-[64px]" />
          <h2 className="text-[#FFC24C] font-[500]">Total de Pontos</h2>
          <p className="font-[700]">123812903123</p>
        </section>
      </div>
    </div>
  );
}
