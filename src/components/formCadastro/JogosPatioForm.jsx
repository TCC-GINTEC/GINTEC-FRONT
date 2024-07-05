'use client'

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';

export default function JogosPatioForm({ handleFormSubmit, extraClicked, setExtraClicked, handleCloseForm, setNomeJogo, setPontoJogo, setDataJogo, valueNome, valueData, valuePonto, pontoExtra, setPontoExtra}) {
  const router = useRouter();

  const handleExtraClick = () => {
    setExtraClicked(!extraClicked);
  };

  const handlePontoExtra = (acao) => {
    if (acao === 0) {
      setPontoExtra((prev) => (prev === 0 ? 0 : prev - 50));
    }
    if (acao === 1) {
      setPontoExtra((prev) => prev + 50);
    }
  };

  const backPageNovos = () => {
    router.push('/cadastros/novos');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className='p-4 mt-10 w-full flex flex-col'>
        <div className='flex sm:flex-row flex-col gap-4'>
          <div className={`flex flex-col space-y-8 ${extraClicked ? 'w-full sm:w-1/2 transition-all duration-700' : 'w-full duration-700'}`}>
            <input type="text" name='id' />
            <label className='flex flex-col gap-3 w-full px-9 pt-2 h-[73px] rounded-2xl text-sm text-[#666666] bg-[#E6EFF0]'>
              Nome do Jogo
              <input type="text" name="nomeJogo" value={valueNome} onChange={(e) => setNomeJogo(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
            </label>
            <label className='flex flex-col gap-2 w-full px-9 pt-2 h-[73px] rounded-2xl text-sm text-[#666666] bg-[#E6EFF0]'>
              Pontuação do Jogo
              <input type="number" name="pontoJogo" value={valuePonto} onChange={(e) => setPontoJogo(Number(e.target.value))} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
            </label>
            <label className='flex flex-col gap-3 w-full  px-9 pt-2 h-[73px] rounded-2xl text-sm text-[#666666] bg-[#E6EFF0]'>
              Data
              <input type="date" name="dataJogo" value={valueData} onChange={(e) => setDataJogo(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
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
            <div className={`flex items-end ${extraClicked ? 'w-full sm:w-1/2 transition-all duration-1000' : ''} justify-center mb-10`}>
              <div className='flex flex-col w-3/4 gap-2'>
                <label className='flex flex-col gap-2 text-[#DADADA] border-b-4'>
                  Adicionar pontos
                  <input type="number" name='pontoExtra' value={pontoExtra} onChange={(e) => setPontoExtraJogo(Number(e.target.value))} className='text-[#005261] font-semibold text-lg' />
                </label>
                <div className='flex items-center justify-between'>
                  <button type='button' onClick={() => handlePontoExtra(0)} className='bg-[#E6EFF0] p-2 rounded-full'>
                    <Icon icon="subway:subtraction-1" style={{ color: "#666666" }} width={20} />
                  </button>
                  <button type='button' onClick={() => handlePontoExtra(1)} className='bg-[#E6EFF0] p-1 rounded-full'>
                    <Icon icon="prime:plus" style={{ color: "#666666" }} width={30} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='flex sm:flex-row sm:justify-evenly'>
          <button type='submit' className='w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
          <button onClick={handleCloseForm} type='button' className='w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
}
