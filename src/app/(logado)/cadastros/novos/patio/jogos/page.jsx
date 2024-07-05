'use client'

import { useState } from 'react';
import {useRouter} from 'next/navigation'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import ContainerJogosPatio from '@/components/formCadastro/ContainerJogosPatio';
import Modal from '@/components/formCadastro/modal'

export default function Patio() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [extraClicked, setExtraClicked] = useState(false);
  const [pontoExtra, setPontoExtra] = useState(50);
  const router = useRouter()
  
  const handleCancelar = () => {
    router.push('/cadastros/novos')
  }

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const nome = target.nomeJogo.value;
    const data = target.dataJogo.value;
    const ponto = extraClicked ? (Number(target.pontoJogo.value) + Number(target.pontoExtra.value)) : Number(target.pontoJogo.value);
    
    setTimeout(() => {
      setModalOpen(true);
    }, 4000);
    
  };

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
      <ContainerJogosPatio>
        <div>
          <Link href='/cadastros/novos' className='absolute left-3 top-2'>
            <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
          </Link>
        </div>
        <div className='flex flex-col w-3/4 sm:h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
          <div className='flex text-sm text-[#666666]'>
            <p className='flex-1'>Tipo de cadastro</p>
            <Icon icon="iconamoon:arrow-down-2-duotone" width={30} style={{ color: "#005261" }} />
          </div>
          <p className='text-[#005261] font-semibold'>Jogos de Patio</p>
        </div>
        
        <form onSubmit={handleFormSubmit} className='p-4  w-full flex flex-col'>
        <div className='flex sm:flex-row flex-col gap-4'>
          <div className={`flex flex-col space-y-8 ${extraClicked ? 'w-full sm:w-1/2 transition-all duration-700' : 'w-full duration-700'}`}>
            <input type="text" name='id' />
            <label className='flex flex-col gap-3 w-full px-9 pt-2 h-[73px] rounded-2xl text-sm text-[#666666] bg-[#E6EFF0]'>
              Nome do Jogo
              <input type="text" name="nomeJogo"  className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
            </label>
            <label className='flex flex-col gap-2 w-full px-9 pt-2 h-[73px] rounded-2xl text-sm text-[#666666] bg-[#E6EFF0]'>
              Pontuação do Jogo
              <input type="text" name="pontoJogo"  className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
            </label>
            <label className='flex flex-col gap-3 w-full  px-9 pt-2 h-[73px] rounded-2xl text-sm text-[#666666] bg-[#E6EFF0]'>
              Data
              <input type="date" name="dataJogo"  className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
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
                  <input type="number" name='pontoExtra' className='text-[#005261] font-semibold text-lg' />
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
        <div className='flex sm:flex-row justify-evenly mt-10 '>
          <button type='submit' className='w-1/3 sm:mt-10  rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
          <button onClick={backPageNovos} type='button' className='w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
            Cancelar
          </button>
        </div>
      </form>
      </ContainerJogosPatio>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <Modal closeModal={closeModal} texto={'Jogo de Pátio cadastrado.'}/>
        </>
      )}
    </>
  );
}
