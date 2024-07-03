"use client"

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Doacao() {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleFormValue(e) {
    e.preventDefault();
    const target = e.target;
    let nome = target.nomeDoacao.value;
    let ponto = target.pontoDoacao.value;
    let data = target.dataDoacao.value;

    // Aqui você pode fazer algo com os valores do formulário, como enviá-los para um servidor

    // Mostrar o modal
    setTimeout(() => {
      setModalOpen(true);      
    }, 4000);
  }

  function closeModal() {
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
      <div className='mx-auto relative flex flex-col items-center justify-center max-w-[525px] px-4 pt-11 pb-4 border border-[#DADADA] rounded-3xl shadow-xl'>
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
        <form onSubmit={handleFormValue} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-4 rounded-2xl bg-[#E6EFF0]'>
            Nome da Doação
            <input type="text" name="nomeDoacao" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg mb-4' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
            Pontuação da Doação
            <input type="number" name="pontoDoacao" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
            Data para Doar
            <input type="date" name="dataDoacao" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
          </label>
          <button type='submit' className='w-1/3 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
        </form>
         {/*  <svg class="w-20 h-20 text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none"
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path
        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
        stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path
        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
        stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-[#39a3b6]">
      </path>
    </svg> */}
      </div>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="w-[390px] h-[330px] bg-white p-6 rounded-lg shadow-lg relative ">
              <img src="../../images/sucess-form.png" className='absolute -top-[43px] left-20' alt="" />
              <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={closeModal}>
                ✕
              </button>
              <div className='mt-28 text-center'>
                <h3 className="font-bold text-lg">Sucesso!</h3>
                <p className="py-4">Sua doação foi cadastrada com sucesso.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
