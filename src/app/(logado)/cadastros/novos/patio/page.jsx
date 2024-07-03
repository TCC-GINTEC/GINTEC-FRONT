'use client'

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Patio() {
  const [extraClicked, setExtraClicked] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const nome = target.nomeJogo.value;
    const ponto = target.pontoJogo.value;
    const data = target.dataJogo.value;
    const pontoExtra = extraClicked ? target.pontoExtra.value : '';

    setTimeout(() => {
      setModalOpen(true);      
    }, 4000);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleExtraClick = () => {
    setExtraClicked(!extraClicked);
  };

  return (
    <>
      <div className='sm:ml-[5%] flex flex-col gap-4'>
        <Link href='/cadastros'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
        </Link>
        <h1 className='text-2xl font-medium'>Novo Cadastro</h1>
      </div>
      <div className='mx-auto relative flex flex-col items-center justify-center max-w-[720px] p-9 border border-[#DADADA] rounded-3xl shadow-xl'>
        <div>
          <Link href='/cadastros/novos' className='absolute left-3 top-2'>
            <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
          </Link>
        </div>
        <div className='flex flex-col w-3/4 h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
          <div className='flex text-sm text-[#666666]'>
            <p className='flex-1'>Tipo de cadastro</p>
            <Icon icon="iconamoon:arrow-down-2-duotone" className='' width={30} style={{ color: "#005261" }} />
          </div>
          <p className='text-[#005261] font-semibold'>Jogos de Patio</p>
        </div>
        <form onSubmit={handleFormSubmit} className='mt-10 w-full flex flex-col'>
          <div className='flex sm:flex-row flex-col gap-4'>
            <div className={`flex flex-col space-y-8 ${extraClicked ? 'w-full sm:w-1/2 transition-all duration-700' : 'w-full duration-700'}`}>
              <label className='flex flex-col gap-3 w-full px-9 pt-2 h-[73px] rounded-2xl text-sm text-[#666666] bg-[#E6EFF0]'>
                Nome do Jogo
                <input type="text" name="nomeJogo" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-2 w-full px-9 pt-2 h-[73px] rounded-2xl text-sm text-[#666666] bg-[#E6EFF0]'>
                Pontuação do Jogo
                <input type="number" name="pontoJogo" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full  px-9 pt-2 h-[73px] rounded-2xl text-sm text-[#666666] bg-[#E6EFF0]'>
                Data
                <input type="date" name="dataJogo" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex justify-between items-center gap-3 w-full px-9 pt-2 h-[70px] pb-2 rounded-2xl text-sm text-[#666666] bg-[#E6EFF0]'>
                Pontuação do Extra
                <div className="flex" onClick={handleExtraClick}>
                  <div className={`rounded-full pt-[5px] pb-[5px] pr-[5px] pl-[5px] w-[25px] h-[25px] border border-[#005261] ${extraClicked ? 'border-8' : ''}`}>
                  </div>
                </div>
              </label>
            </div>
            {extraClicked && (
              <div className={`flex items-end ${extraClicked ? 'w-full sm:w-1/2 transition-all duration-1000' : ''} justify-center mb-10` }>
                <div className='flex flex-col w-3/4 gap-2'>
                  <label className='flex flex-col gap-2 text-[#DADADA] border-b-4'>
                    Adicionar pontos
                    <input type="number" name='pontoExtra' className='text-[#005261] font-semibold text-lg' />
                  </label>
                  <div className='flex items-center justify-between'>
                    <button className='bg-[#E6EFF0] p-2 rounded-full '>
                      <Icon icon="subway:subtraction-1" style={{ color: "#666666" }} width={20} />
                    </button>
                    <button className='bg-[#E6EFF0] p-1 rounded-full'>
                      <Icon icon="prime:plus" style={{ color: "#666666" }} width={30} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button type='submit' className='w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
        </form>
      </div>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 "></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="w-[390px] transition-all delay-1000 h-[330px] bg-white p-6 rounded-lg shadow-lg relative ">
              <img src="../../images/sucess-form.png" className='absolute -top-[43px] left-20' alt="" />
              <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={closeModal}>
                ✕
              </button>
              <div className='mt-28 text-center'>
                <h3 className="font-bold text-lg">Sucesso!</h3>
                <p className="py-4  text-xl">Jogo de pátio foi cadastrado com sucesso.</p>
              </div>
            </div>
            <div>

            </div>
          </div>
        </>
      )}
    </>
  );
}
