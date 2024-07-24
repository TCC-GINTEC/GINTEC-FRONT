"use client"
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Modal from '@/components/formCadastro/modal';
import ContainerDoacao from '@/components/formCadastro/ContainerDoacao';

export default function Doacao() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nomeDoacao, setNomeDoacao] = useState('');
  const [pontoDoacao, setPontoDoacao] = useState('');
  const [dataDoacao, setDataDoacao] = useState('');
  const [idObjetoSelecionado, setIdObjetoSelecionado] = useState(null);

  const [retornoApi, setRetornoApi] = useState([
    {
      id: 1,
      nome: 'Domino',
      ponto: 200,
      data: new Date('2024-08-20'),
    },  
    {
      id: 2,
      nome: 'xadrez',
      ponto: 150,
      data: new Date('2024-07-20'),
    },
    {
      id: 3,
      nome: 'Raquete',
      ponto: 100,
      data: new Date('2024-07-15'),
    },
    {
      id: 4,
      nome: 'Medicamento',
      ponto: 250,
      data: new Date('2024-07-25'),
    },
    {
      id: 5,
      nome: 'Arroz',
      ponto: 180,
      data: new Date('2024-07-30'),
    }
  ]);

  const formatDateToBR = (date) => {
    return date ? date.toLocaleDateString('pt-BR') : '';
  };

  const parseDateFromBR = (dateStr) => {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  };

  const handleShowForm = (jogo) => {
    setShowForm(true);
    setIdObjetoSelecionado(jogo.id);
    setNomeDoacao(jogo.nome);
    setPontoDoacao(jogo.ponto);
    setDataDoacao(jogo.data.toISOString().split('T')[0]); // format date as YYYY-MM-DD
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setIdObjetoSelecionado(null);
    setNomeDoacao('');
    setPontoDoacao('');
    setDataDoacao('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nome = nomeDoacao;
    const ponto = Number(pontoDoacao);
    const data = new Date(dataDoacao);

    const posicao = retornoApi.findIndex(
      (elemento) => elemento.id === idObjetoSelecionado
    );

    const novosDados = [...retornoApi];
    novosDados[posicao] = {
      id: idObjetoSelecionado,
      nome: nome,
      ponto: ponto,
      data: data,
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
        <div className='ml-[5%] mt-8  mb-8 flex  sm:gap-8 flex-row sm:flex-col  w-full'>
        <div className='w-1/2'>
          <Link href='/cadastros'>
            <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
          </Link>
        </div>
        <div className="w-full text-start">
          <h1 className='text-2xl  font-medium'>Doações</h1>
        </div>
      </div>

      <div className='gap-4 p-4 grid grid-cols-2 md:grid-cols-3 w-[920px] max-w-full  mx-auto text-wrap'>
        {retornoApi.map((jogo) => (
          <div key={jogo.id} onClick={() => handleShowForm(jogo)} className='max-w-full w-[252px]  h-[63px] text-center text-lg sm:text-xl  flex items-center justify-center  border-[3px] border-[#FFC24C] text-[#FFC24C] rounded-xl font-semibold text-wrap'>
            {jogo.nome}
          </div>
        ))}
      </div>
      {showForm && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <ContainerDoacao alert={'Caso deseje editar algo, aperte do campo desejado e edite'} classe={'-top-60 sm:m-auto fixed inset-0 flex items-center justify-center bg-white z-50 p-4'}>
            <form onSubmit={handleFormSubmit} className='space-y-8 mt-10 w-3/4 flex items-center flex-col z-50 bg-white'>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Nome Doacao
                <input type="text" name="nomeDoacao" value={nomeDoacao} onChange={(e) => setNomeDoacao(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Pontuação da Doacao
                <input type="number" name="pontoDoacao" value={pontoDoacao} onChange={(e) => setPontoDoacao(Number(e.target.value))} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Data
                <input type="date" name="dataDoacao" value={dataDoacao} onChange={(e) => setDataDoacao(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <div className='flex sm:flex-row justify-evenly w-full gap-2'>
                <button type='submit' className='w-1/2 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Salvar</button>
                <button onClick={handleCloseForm} type='button' className='w-1/2 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                  Cancelar
                </button>
              </div>
            </form>
          </ContainerDoacao>
        </>
      )}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <Modal closeModal={closeModal} texto='Essa atividade foi editada com sucesso.' />
        </>
      )}
    </>
  )
}
