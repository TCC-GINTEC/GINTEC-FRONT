"use client";

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import {useRouter} from 'next/navigation'
import ContainerCampeonatoPatio from '@/components/formCadastro/ContainerCampeonatoPatio'
import Modal from '@/components/formCadastro/modal'

export default function Campeonato() {
  const [isModalOpen, setModalOpen] = useState(false);
  
  const router = useRouter()
      
  const handleBackPageNovos = () => {
    router.push('/cadastros/novos')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    const target = e.target;
    const nome = target.nomeCampeonato.value;
    const ponto = Number(target.pontoCampeonato.value);
    const qntFase = Number(target.qntFases.value);
    const data = target.dataCampeonato.value;
    console.log(data)
    
    setTimeout(() => {
      setModalOpen(true);
    }, 4000);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className='ml-[5%] mt-8 mb-8 flex flex-col gap-4'>
          <div className='w-1/3'> 
            <Link href='/cadastros'>
              <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
            </Link>
          </div>
          <div className='w-full text-start'>
            <h1 className='text-2xl font-medium'>Novo Cadastro</h1>
          </div>
       </div>
      <ContainerCampeonatoPatio>
        <Link href='/cadastros/novos' className='absolute left-4 top-3'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
        </Link>
        <div className='flex flex-col w-3/4 h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
          <div className='flex text-sm text-[#666666] pt-1'>
            <p className='flex-1'>Tipo de cadastro</p>
            <Icon icon="iconamoon:arrow-down-2-duotone" width={30} style={{ color: "#005261" }} />
          </div>
          <p className='text-[#005261] font-semibold'>Campeonato de Pátio</p>
        </div>

        <form onSubmit={(e) => handleFormSubmit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
            <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
              Nome campeonato
              <input type="text" name="nomeCampeonato" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui'/>
            </label>
            <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
              Pontuação do campeonato
              <input type="text" name="pontoCampeonato" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui'/>
            </label>
            <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
              Quantidade de fases
              <input type="text" name="qntFases" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui' />
            </label>
            <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
              Data
              <input type="date" name="dataCampeonato" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
            </label>
            <div className='flex sm:flex-row justify-evenly w-full'>
              <button type='submit' className=' sm:w-1/3  sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
              <button onClick={() => handleBackPageNovos()} type='button' className=' sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                cancelar
              </button>
            </div>
          </form>
      </ContainerCampeonatoPatio>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <Modal closeModal={closeModal} texto={'Campeonato de pátio cadastrado.'}/>
        </>
      )}
    </>
  );
}
