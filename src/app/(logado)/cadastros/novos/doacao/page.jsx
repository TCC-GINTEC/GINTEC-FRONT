"use client"

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import {useRouter} from 'next/navigation'
import DoacaoForm from '@/components/formCadastro/DoacaoForm'
import ContainerDoacao from '@/components/formCadastro/ContainerDoacao'
import Modal from '@/components/formCadastro/modal'

export default function Doacao() {
  const [isModalOpen, setModalOpen] = useState(false);
  
  const router = useRouter()
      
  const handleBackPageNovos = () => {
    router.push('/cadastros/novos')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    let nome = target.nomeDoacao.value;
    let ponto = Number(target.pontoDoacao.value);
    let data = target.dataDoacao.value;

    setTimeout(() => {
      setModalOpen(true);      
    }, 4000);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <div className='sm:ml-[5%] flex flex-col gap-4'>
        <Link href='/cadastros'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
        </Link>
        <h1 className='text-2xl font-medium'>Novo Cadastro</h1>
      </div>
      <ContainerDoacao>
        <Link href='/cadastros/novos' className='absolute left-4 top-3'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
        </Link>
        <div className='flex flex-col w-3/4 h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
          <div className='flex text-sm text-[#666666] pt-1'>
            <p className='flex-1'>Tipo de cadastro</p>
            <Icon icon="iconamoon:arrow-down-2-duotone" width={30} style={{ color: "#005261" }} />
          </div>
          <p className='text-[#005261] font-semibold'>Doação</p>
        </div>
        <form onSubmit={handleFormSubmit} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
          <label className='flex flex-col gap-2 w-full px-9 pt-3  rounded-2xl bg-[#E6EFF0]'>
              Nome da Doação
            <input type="text" name="nomeDoacao" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg mb-2' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
            Pontuação da Doação
            <input type="text" name="pontoDoacao" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
            Data para Doar
            <input type="date" name="dataDoacao" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
          </label>
          <div className='flex sm:flex-row justify-evenly w-full'>
              <button type='submit' className='w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
              <button onClick={() => handleBackPageNovos()} type='button' className='w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                cancelar
              </button>
          </div>
        </form>
      </ContainerDoacao>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <Modal closeModal={closeModal}  texto={'Doação cadastrado.'}/>
        </>
      )}
    </>
  );
}
