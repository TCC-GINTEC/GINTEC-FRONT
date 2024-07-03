"use client";

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Quadra() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const nome = target.nomeCampeonato.value;
    const ponto = target.pontoCampeonato.value;
    const qntFase = target.qntFases.value;
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
      <div className='mx-auto relative flex flex-col items-center justify-center max-w-[525px] p-x-4 pt-11 pb-4 border border-[#DADADA] rounded-3xl shadow-xl'>
        <Link href='/cadastros/novos' className='absolute left-4 top-3'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
        </Link>
        <div className='flex flex-col w-3/4 h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
          <div className='flex text-sm text-[#666666] pt-1'>
            <p className='flex-1'>Tipo de cadastro</p>
            <Icon icon="iconamoon:arrow-down-2-duotone" width={30} style={{ color: "#005261" }} />
          </div>
          <p className='text-[#005261] font-semibold'>Campeonato de Quadra</p>
        </div>
        <form onSubmit={(e) => handleFormSubmit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
            Nome campeonato
            <input type="text" name="nomeCampeonato" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
            Pontuação do campeonato
            <input type="number" name="pontoCampeonato" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
            Quantidade de fases
            <input type="number" name="qntFases" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
            Data
            <input type="date" name="dataCampeonato" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
          </label>
          <button type='submit' className='w-1/3 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
        </form>
      </div>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="w-[390px] h-[330px] bg-white p-6 rounded-lg shadow-lg relative">
            <img src="../../images/sucess-form.png" className='absolute -top-[43px] left-20' alt="" />
              <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={closeModal}>
                ✕
              </button>
              <div className='mt-28 text-center'>
                <h3 className="font-bold text-lg">Sucesso!</h3>
                <p className="py-4 text-xl">Campeonato de quadra foi cadastrado com sucesso.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
