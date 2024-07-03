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
          <label className='flex flex-col gap-2 w-full px-9 pt-3  rounded-2xl bg-[#E6EFF0]'>
            Nome da Doação
            <input type="text" name="nomeDoacao" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg mb-2' />
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
                <p className="py-4  text-xl">Doação foi cadastrada com sucesso.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
