"use client";

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import {useRouter} from 'next/navigation'
import ContainerCampeonatoQuadra from '@/components/formCadastro/ContainerCampeonatoQuadra'
import Modal from '@/components/formCadastro/modal'

export default function Quadra() {
  const [isModalOpen, setModalOpen] = useState(false);

  const router = useRouter()
      
  const handleBackPageNovos = () => {
    router.push('/cadastros/novos')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const nome = target.nomeCampeonato.value;
    const ponto = target.pontoCampeonato.value;
    const qntFase = target.qntFases.value;
    const qntJogos   = target.qntJogos.value;
    const data = target.dataCampeonato.value;

    setTimeout(() => {
      setModalOpen(true);
    }, 4000);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className='sm:ml-[5%] flex flex-col gap-4'>
        <Link href='/cadastros'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
        </Link>
        <h1 className='text-2xl font-medium'>Novo Cadastro</h1>
      </div>
      <ContainerCampeonatoQuadra>
        <Link href='/cadastros/novos' className='absolute left-4 top-3'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
        </Link>
        <div className='flex flex-col w-3/4 sm:h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
          <div className='flex text-sm text-[#666666] pt-1'>
            <p className='flex-1'>Tipo de cadastro</p>
            <Icon icon="iconamoon:arrow-down-2-duotone" width={30} style={{ color: "#005261" }} />
          </div>
          <p className='text-[#005261] font-semibold'>Campeonato de Quadra</p>
        </div>
        <form onSubmit={(e) => handleFormSubmit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
            Nome campeonato
            <input type="text" name="nomeCampeonato"  className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
            Pontuação do campeonato
            <input type="number" name="pontoCampeonato" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
            Quantidade de fases
            <input type="number" name="qntFases" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
            Quantidade de Jogos
            <input type="text" name="qntFases" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
            Data
            <input type="date" name="dataCampeonato" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
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
          <Modal closeModal={closeModal} texto={'Campeonato de Quadra'}/>
        </>
      )}
    </>
  );
}
