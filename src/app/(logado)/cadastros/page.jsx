"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react';

export default function Cadastros(){
  const router = useRouter()
  return(
    <div className='xl:w-2/4 flex flex-col justify-start m-auto'>
    <h1 className='text-3xl mb-10'>Cadastros</h1>
    <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-10 justify-items-center '>
      <section class="block sm:hidden relative w-[240px] h-[150px] border-4 rounded-lg border-dashed border-gray-600*:absolute *:w-full">
        <Icon icon={'ph:plus'} className='mt-5' width={50}></Icon>
        <div className="inset-5 flex  flex-col justify-center text-xl text-center font-semibold">
          <p>Novo Cadastro</p>
        </div>
      </section> 
      <section class="relative w-[240px] h-[150px] *:absolute *:w-full">
        <img src="/images/bg-patio.png" alt="test image"/>
        <div onClick={() => router.push('cadastros/patio')}  className="inset-4 flex items-center  text-white text-xl">
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
      <section className="relative w-[240px] h-[150px] *:absolute *:w-full">
        <img src="/images/bg-doacoes.png" alt="test image"/>
        <div className="inset-4 flex  flex-col justify-center text-white text-xl">
          <p>Doações</p>
        </div>
      </section>  
      <section onClick={() => router.push('cadastros/novos')} 
      className=" hidden sm:block relative w-[240px] h-[150px] border-4 
      rounded-lg border-dashed border-gray-600*:absolute *:w-full
      hover:cursor-pointer"
      >
        <Icon icon={'ph:plus'} className='mt-5' width={50}></Icon>
        <div className="inset-5 flex  flex-col justify-center text-xl text-center font-semibold ">
          <p>Novo Cadastro</p>
        </div>
      </section> 
    </div>
    </div>
  )
}