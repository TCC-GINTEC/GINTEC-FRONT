'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import JogosPatioForm from '@/components/formCadastro/JogosPatioForm'; 
import ContainerJogosPatio from '@/components/formCadastro/ContainerJogosPatio';


export default function Patio() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [extraClicked, setExtraClicked] = useState(false);

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
        <div className='flex flex-col w-3/4 h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
          <div className='flex text-sm text-[#666666]'>
            <p className='flex-1'>Tipo de cadastro</p>
            <Icon icon="iconamoon:arrow-down-2-duotone" width={30} style={{ color: "#005261" }} />
          </div>
          <p className='text-[#005261] font-semibold'>Jogos de Patio</p>
        </div>
        <JogosPatioForm handleFormSubmit={handleFormSubmit}  extraClicked={extraClicked}  setExtraClicked={setExtraClicked}/>
      </ContainerJogosPatio>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="w-[390px] transition-all delay-1000 h-[330px] bg-white p-6 rounded-lg shadow-lg relative">
              <img src="../../../images/sucess-form.png" className='absolute -top-[43px] left-20' alt="Success" />
              <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={() => setModalOpen(false)}>
                ✕
              </button>
              <div className='mt-28 text-center'>
                <h3 className="font-bold text-lg">Sucesso!</h3>
                <p className="py-4 text-xl">Jogo de pátio foi cadastrado com sucesso.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
