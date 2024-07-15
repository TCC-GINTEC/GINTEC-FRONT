"use client"

import Link from 'next/link'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Modal from '@/components/formCadastro/modal';
import ContainerCampeonatoQuadra from '@/components/formCadastro/ContainerCampeonatoQuadra';

export default function Quadra() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  const [fases, setFases] = useState('');
  const [dia1, setDia1] = useState('');
  const [dia2, setDia2] = useState('');
  const [dia3, setDia3] = useState('');
  
  const [idObjetoSelecionado, setIdObjetoSelecionado] = useState(null);

  const [retornoApi, setRetornoApi] = useState([
    {
      id: 1,
      fases: '1º Fase',
      dia1: new Date('2024-08-28'),
      dia2: new Date('2024-08-29'),
      dia3: new Date('2024-08-30'),
    },
    {
      id: 2,
      fases: '2º Fase',
      dia1: new Date('2024-09-28'),
      dia2: new Date('2024-09-29'),
      dia3: new Date('2024-09-30'),
    }
  ]);

  const formatDateToInput = (date) => {
    return date ? date.toISOString().split('T')[0] : '';
  };

  const handleShowForm = (calendario) => {
    setShowForm(true);
    setIdObjetoSelecionado(calendario.id);
    setFases(calendario.fases);
    setDia1(formatDateToInput(calendario.dia1));
    setDia2(formatDateToInput(calendario.dia2));
    setDia3(formatDateToInput(calendario.dia3));
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setIdObjetoSelecionado(null);
    setFases('');
    setDia1('');
    setDia2('');
    setDia3('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const fasesGincana = fases;
    const dia1Gincana = new Date(dia1);
    const dia2Gincana = new Date(dia2);
    const dia3Gincana = new Date(dia3);
  
    const posicao = retornoApi.findIndex((elemento) => elemento.id === idObjetoSelecionado);
  
    const novosDados = [...retornoApi];
    novosDados[posicao] = {
      id: idObjetoSelecionado,
      fases: fasesGincana,
      dia1: dia1Gincana,
      dia2: dia2Gincana,
      dia3: dia3Gincana,
    };
  
    setRetornoApi(novosDados);
  
    setTimeout(() => {
      handleCloseForm();
      setModalOpen(true);
    }, 4000);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className='sm:ml-[5%] flex flex-col gap-8 '>
        <Link href='/cadastros'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
        </Link>
        <h1 className='text-2xl font-medium'>Calendário</h1>
      </div>

      <div className='gap-4 flex justify-center border border-red-500 w-1/2 mx-auto text-wrap'>
        {retornoApi.map((calendario) => (
          <div key={calendario.id} onClick={() => handleShowForm(calendario)} className='w-[252px] text-center border-[3px] border-blue-500 text-blue-500 pt-2 pb-2 pl-4 pr-4 rounded-xl font-semibold'>
            {calendario.fases}
          </div>
        ))}
      </div>
      {showForm && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 "></div>
          <ContainerCampeonatoQuadra alert={'Caso deseje editar algo, aperte do campo desejado e edite'} classe={'sm:m-auto -top-24 fixed inset-0 bg-white flex items-center justify-center z-50 p-4'}>
            <form onSubmit={handleFormSubmit} className='space-y-8 mt-10 w-3/4 flex items-center flex-col bg-white'>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0] '>
                Fases
                <input type="text" name="fases" value={fases} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Data 1 dia 
                <input type="date" name="dia1" value={dia1} onChange={(e) => setDia1(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Data 2 dia 
                <input type="date" name="dia2" value={dia2} onChange={(e) => setDia2(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Data 3 dia 
                <input type="date" name="dia3" value={dia3} onChange={(e) => setDia3(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <div className='flex sm:flex-row justify-evenly gap-2 w-full mt-20'>
                <button type='submit' className='w-1/2 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Salvar</button>
                <button onClick={handleCloseForm} type='button' className='w-1/2 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cancelar</button>
              </div>
            </form>
          </ContainerCampeonatoQuadra>
        </>
      )}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <Modal closeModal={closeModal} texto='Essa atividade foi editada com sucesso.' />
        </>
      )}
    </>
  );
}



{/*
  
  
    <form onSubmit={(e) => handleFormSubmit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
          
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
             Fases
            <input type="text" value={`${search} º fase`} name="fases" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui'/>
          </label>

          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
            Mês
            <input type="text" name="mes"  className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
          Data do 1º dia
            <input type="number" name="dia1" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
          Data do 2º dia
            <input type="number" name="dia2" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui' />
          </label>
          <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
          Data do 3º dia
            <input type="text" name="dia3" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui' />
          </label>
          <div className='flex sm:flex-row justify-evenly w-full'>
              <button type='submit' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
              <button onClick={() => handleBackPageNovos()} type='button' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                cancelar
              </button>
          </div>
        </form>
  
  */}