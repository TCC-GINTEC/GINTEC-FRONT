"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react';

export default function Cadastros(){
  const router = useRouter()

  return(
    <div className='mt-8 pl-2 flex flex-col justify-start m-auto'>
    <div className="pl-2 mx-auto w-[920px] max-w-full" >
      <h1 className='md:pl-4 pl-8 text-3xl mb-10'>Cadastros</h1>
      <div className='pl-2  mx-auto w-[920px] max-w-full  grid md:grid-cols-3 grid-cols-2 gap-10 justify-items-center '>
          <section  onClick={() => router.push('cadastros/novos')}  
            className="block sm:hidden relative w-[200px] h-[120px] xl:w-[240px] xl:h-[150px] border-4 
            rounded-lg border-dashed border-gray-600*:absolute *:w-full  hover:cursor-pointer duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
            <Icon icon={'ph:plus'} className='mt-5' width={50}></Icon>
            <div className="inset-5 flex  flex-col justify-center text-xl text-center font-semibold">
              <p>Novo Cadastro</p>
            </div>
          </section> 
        
          <section 
          onClick={() => router.push('cadastros/calendario')} 
          className="relative w-[200px] h-[100px] xl:w-[240px] xl:h-[150px] *:absolute *:w-full duration-300 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110   hover:cursor-pointer">
            <img src="/images/bg-calendario.svg" alt="test image"/>
            <div className="inset-4 flex  flex-col justify-center text-white text-xl">
              <p>Calendário</p>
            </div>
          </section> 
          
          <section onClick={() => router.push('cadastros/atividade')}  className="relative  w-[200px] h-[100px] xl:w-[240px] xl:h-[150px] *:absolute *:w-full  hover:cursor-pointer  duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
            <img src="/images/bg-atividades.svg" alt="test image"/>
            <div  className="inset-4 flex items-center  text-white text-xl">
              Atividades 
            </div>
          </section>
          
          <section 
            onClick={() => router.push('cadastros/patio_jogos')}  
            className="relative  w-[200px] h-[100px] xl:w-[240px] xl:h-[150px] *:absolute *:w-full 
            hover:cursor-pointer  duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
            <img src="/images/bg-patio.png" alt="test image"/>
            <div  className="inset-4 flex items-center  text-white text-xl">
              Jogos de Pátio
            </div>
          </section>
        
          <section
          onClick={() => router.push('cadastros/quadra')} 
          class="relative w-[200px] h-[100px] xl:w-[240px] xl:h-[150px] *:absolute *:w-full duration-300 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
            <img src="/images/bg-camepeonatos-quadra.png" alt="test image"/>
            <div className="inset-4 flex flex-col justify-center  text-white text-xl">
            <p>Campeonatos </p>
            <p>de Quadra</p>
            </div>
          </section>
      
          <section 
          onClick={() => router.push('cadastros/patio_campeonatos')} 
          class="relative w-[200px] h-[100px] xl:w-[240px] xl:h-[150px] *:absolute *:w-full duration-300 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
            <img src="/images/bg-jogos-patio.png" alt="test image"/>
            <div className="inset-4 flex  flex-col justify-center text-white text-xl">
              <p>Campeonatos </p>
              <p>de Pátio</p>
            </div>
          </section> 
          
          <section 
          onClick={() => router.push('cadastros/doacao')} 
          className="relative w-[200px] h-[100px] xl:w-[240px] xl:h-[150px] *:absolute *:w-full duration-300 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
            <img src="/images/bg-doacoes.png" alt="test image"/>
            <div className="inset-4 flex  flex-col justify-center text-white text-xl">
              <p>Doações</p>
            </div>
          </section> 
          <section 
          onClick={() => router.push('cadastros/representantes')} 
          className="relative w-[200px] h-[100px] xl:w-[240px] xl:h-[150px] *:absolute *:w-full duration-300 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
            <img src="/images/bg-representantes.svg" alt="test image"/>
            <div className="inset-4 flex  flex-col justify-center text-white text-xl">
              <p>Representantes</p>
            </div>
          </section> 
          <section onClick={() => router.push('cadastros/novos')} 
          className=" hidden sm:block relative w-[200px] h-[120px] xl:w-[240px] xl:h-[150px] border-4 
          rounded-lg border-dashed border-gray-600*:absolute *:w-full   hover:cursor-pointer
          duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
          >
            <Icon icon={'ph:plus'} className='mt-5'  width={40}></Icon>
            <div className="inset-5 flex  flex-col justify-center text-xl text-center font-semibold ">
              <p>Novo Cadastro</p>
            </div>
          </section> 
        </div>
     </div>
   </div>
  )
}