"use client";
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Modal from '@/components/formCadastro/modal';
import ContainerCampeonatoQuadra from '@/components/formCadastro/ContainerCampeonatoQuadra';

export default function Quadra() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nomeCampeonato, setNomeCampeonato] = useState('');
  const [pontoCampeonato, setPontoCampeonato] = useState('');
  const [dataCampeonato, setDataCampeonato] = useState('');
  const [faseCampeonato, setFaseCampeonato] = useState('');
  const [idObjetoSelecionado, setIdObjetoSelecionado] = useState(null);

  const [retornoApi, setRetornoApi] = useState([
    {
      id: 1,
      nome: 'damas',
      ponto: 200,
      fase: 3,
      data: new Date('2024-08-01'),
    },
    {
      id: 2,
      nome: 'xadrez',
      ponto: 150,
      fase: 3,
      data: new Date('2024-07-20'),
    },
    {
      id: 3,
      nome: 'pembolim',
      ponto: 100,
      fase: 3,
      data: new Date('2024-07-15'),
    },
    {
      id: 4,
      nome: 'ping pong',
      ponto: 250,
      fase: 3,
      data: new Date('2024-07-25'),
    },
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
    setNomeCampeonato(jogo.nome);
    setPontoCampeonato(jogo.ponto);
    setFaseCampeonato(jogo.fase);
    setDataCampeonato(formatDateToBR(jogo.data));
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setIdObjetoSelecionado(null);
    setNomeCampeonato('');
    setPontoCampeonato('');
    setFaseCampeonato('');
    setDataCampeonato('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nome = nomeCampeonato;
    const ponto = Number(pontoCampeonato);
    const fase = Number(faseCampeonato);
    const data = parseDateFromBR(dataCampeonato);

    const posicao = retornoApi.findIndex(
      (elemento) => elemento.id === idObjetoSelecionado
    );

    const novosDados = [...retornoApi];
    novosDados[posicao] = {
      id: idObjetoSelecionado,
      nome: nome,
      ponto: ponto,
      fase: fase,
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
      <div className='sm:ml-[5%] flex flex-col gap-8'>
        <Link href='/cadastros'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
        </Link>
        <h1 className='text-2xl font-medium'>Campeonatos de Pátio</h1>
      </div>
      <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 w-full md:w-1/2 sm:mx-auto text-wrap'>
        {retornoApi.map((jogo) => (
          <div key={jogo.id} onClick={() => handleShowForm(jogo)} className='border-[3px] border-blue-500 text-blue-500 pt-2 pb-2 pl-4 pr-4 rounded-xl font-semibold'>
            {jogo.nome}
          </div>
        ))}
      </div>
      {showForm && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <ContainerCampeonatoQuadra alert={'Caso deseje editar algo, aperte do campo desejado e edite'} classe={'-top-32  sm:m-auto fixed inset-0 bg-white flex items-center justify-center z-50 p-4'}>
            <form onSubmit={(e) => handleFormSubmit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col bg-white'>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Nome campeonato
                <input type="text" name="nomeCampeonato" value={nomeCampeonato} onChange={(e) => setNomeCampeonato(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Pontuação do campeonato
                <input type="text" name="pontoCampeonato" value={pontoCampeonato} onChange={(e) => setPontoCampeonato(Number(e.target.value))} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Quantidade de fases
                <input type="text" name="qntFases" value={faseCampeonato} onChange={(e) => setFaseCampeonato(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Data
                <input type="text" name="dataCampeonato" value={dataCampeonato} onChange={(e) => setDataCampeonato(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <div className='flex sm:flex-row justify-evenly gap-2 w-full'>
                <button type='submit' className='w-1/2 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Salvar</button>
                <button onClick={() => handleCloseForm()} type='button' className='w-1/2 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                  cancelar
                </button>
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
