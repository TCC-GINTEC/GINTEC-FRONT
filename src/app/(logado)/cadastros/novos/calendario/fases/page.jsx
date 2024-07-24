"use client";

import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import {useRouter} from 'next/navigation'
import ContainerCampeonatoQuadra from '@/components/formCadastro/ContainerCampeonatoQuadra'
import Modal from '@/components/formCadastro/modal'

export default function Quadra() {
  const [isModalOpen, setModalOpen] = useState(false);
  const searchParams = useSearchParams()
  const search = searchParams.get('fase')

  const router = useRouter()
      
  const handleBackPageNovos = () => {
    router.push('/cadastros/novos')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const target = e.target;

    // Extrair o número da variável 'fases'
    const fase = extractNumber(target.fases.value);

    const dia1 = target.dia1.value;
    const dia2 = target.dia2.value;
    const dia3 = target.dia3.value;
    console.log(fase,dia1,dia2,dia3)
    setTimeout(() => {
      setModalOpen(true);
    }, 4000);
  };

  const extractNumber = (text) => {
    const match = text.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
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
      <ContainerCampeonatoQuadra>
        <Link href='/cadastros/novos/calendario' className='absolute left-4 top-3'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
        </Link>
        <div className='flex flex-col w-3/4 sm:h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
          <div className='flex text-sm text-[#666666] pt-1'>
            <p className='flex-1'>Tipo do Cadastro</p>
            <Icon icon="iconamoon:arrow-down-2-duotone" width={30} style={{ color: "#005261" }} />
          </div>
          <p className='text-[#005261] font-semibold'>Calendário</p>
        </div>
        <form onSubmit={(e) => handleFormSubmit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
          
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
             Fases
            <input type="text" value={`${search} º fase`} name="fases" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui'/>
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
          Data do 1º dia
            <input type="date" name="dia1" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
          Data do 2º dia
            <input type="date" name="dia2" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
          Data do 3º dia
            <input type="date" name="dia3" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui' />
          </label>
          <div className='flex sm:flex-row justify-evenly w-full'>
              <button type='submit' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
              <button onClick={() => handleBackPageNovos()} type='button' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                cancelar
              </button>
          </div>
        </form>
      </ContainerCampeonatoQuadra>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <Modal closeModal={closeModal} texto={'Este calendário foi cadastrado com sucesso '}/>
        </>
      )}
    </>
  );
}
