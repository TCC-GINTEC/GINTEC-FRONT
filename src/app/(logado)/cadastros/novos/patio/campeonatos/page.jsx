"use client";

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import {useRouter} from 'next/navigation'
import CampeonatoPatioForm from '@/components/formCadastro/CampeonatoPatioForm'; // Renomeie o componente importado para evitar conflitos
import ContainerCampeonatoPatio from '@/components/formCadastro/ContainerCampeonatoPatio'
import Modal from '@/components/formCadastro/modal'

export default function Campeonato() {
  const [isModalOpen, setModalOpen] = useState(false);
  
  const router = useRouter()
      
  const handleCancelar = () => {
    router.push('/cadastros/novos')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e)
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
      <ContainerCampeonatoPatio>
        <Link href='/cadastros/novos' className='absolute left-4 top-3'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
        </Link>
        <div className='flex flex-col w-3/4 h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
          <div className='flex text-sm text-[#666666] pt-1'>
            <p className='flex-1'>Tipo de cadastro</p>
            <Icon icon="iconamoon:arrow-down-2-duotone" width={30} style={{ color: "#005261" }} />
          </div>
          <p className='text-[#005261] font-semibold'>Campeonato de Pátio</p>
        </div>
        <CampeonatoPatioForm handleFormSubmit={handleFormSubmit} handleCloseForm={handleCancelar}/>
      </ContainerCampeonatoPatio>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <Modal closeModal={closeModal} texto={'Campeonato de Pátio cadastrado.'}/>
        </>
      )}
    </>
  );
}
