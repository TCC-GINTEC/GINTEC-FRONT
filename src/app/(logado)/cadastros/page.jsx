"use client"
import Image from 'next/image'
import { Icon } from '@iconify/react';

export default function Cadastros(){
  return(
    <>
    <h1>Cadastros</h1>
    <div className='grid grid-cols-3 '>
      <section class="relative w-[240px] h-[150px] *:absolute *:w-full">
        <img src="/images/bg-patio.png" alt="test image"/>
        <div className="inset-4 flex items-center  text-white text-xl">
          Jogos de Pátio
        </div>
      </section>
      <section class="relative w-[240px] h-[150px] *:absolute *:w-full">
        <img src="/images/bg-camepeonatos-quadra.png" alt="test image"/>
        <div className="inset-4 flex flex-col justify-center  text-white text-xl">
        <p>Campeonatos </p>
        <p>de Quadra</p>
        </div>
      </section>
      <section class="relative w-[240px] h-[150px] *:absolute *:w-full">
        <img src="/images/bg-jogos-patio.png" alt="test image"/>
        <div className="inset-4 flex  flex-col justify-center text-white text-xl">
          <p>Campeonatos </p>
          <p>de Pátio</p>
        </div>
      </section> 
      <section class="relative w-[240px] h-[150px] *:absolute *:w-full">
        <img src="/images/bg-doacoes.png" alt="test image"/>
        <div className="inset-4 flex  flex-col justify-center text-white text-xl">
          <p>Doções</p>
        </div>
      </section>  
      <section class="relative w-[240px] h-[150px] border-4 rounded-lg border-dashed border-gray-600*:absolute *:w-full">
        <Icon icon={'ic:twotone-plus'} width={70}></Icon>
        <div className="inset-4 flex  flex-col justify-center text-white text-xl">
          <p>Novo Cadastro</p>
        </div>
      </section> 
    </div>
    </>
  )
}