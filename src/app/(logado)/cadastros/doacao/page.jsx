"use client"

import { useState } from 'react';
import Modal from '@/components/formCadastro/modal';
import ContainerDoacao from '@/components/formCadastro/ContainerDoacao';
import QuadraForm from '@/components/formCadastro/QuadraForm';

export default function Doacao() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [extraClicked, setExtraClicked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nomeDoacao, setNomeDoacao] = useState('');
  const [pontoDoacao, setPontoDoacao] = useState('');
  const [dataDoacao, setDataDoacao] = useState('');
  const [faseCampeonato, setFaseCampeonato] =useState('');
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
      nome: 'Peça xadrez mutante pqp',
      ponto: 150,
      fase:3,
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

  const handleShowForm = (jogo) => {
    setShowForm(true);
    setIdObjetoSelecionado(jogo.id);
    setNomeDoacao(jogo.nome);
    setPontoDoacao(jogo.ponto);
    setDataDoacao(jogo.data.toISOString().split('T')[0]); // format date for input type="date"
  }

  const handleCloseForm = () => {
    setShowForm(false);
    setIdObjetoSelecionado(null);
    setNomeDoacao('');
    setPontoDoacao('');
    setDataDoacao('');
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nome = nomeDoacao;
    const ponto = Number(pontoDoacao);
    const data = new Date(dataDoacao);
    console.log(nome,ponto,data)
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

    console.log(novosDados);

    setTimeout(() => {
      handleCloseForm();
      setModalOpen(true);
    }, 4000);
  };

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <div className='grid grid-cols-3 gap-4  w-full md:w-1/2 sm:mx-auto'>
        {retornoApi.map((jogo) => (
          <div key={jogo.id} onClick={() => handleShowForm(jogo)} className='border-[3px] border-blue-500 text-blue-500 pt-2 pb-2 pl-8 rounded-xl font-semibold text-wrap'>
            {jogo.nome}
          </div>
        ))}
      </div>
      {showForm && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
            <ContainerDoacao alert={'Caso deseje editar algo, aperte do campo desejado e edite'} classe={'fixed inset-0 flex items-center justify-center bg-white z-50 p-4'}>
            <form onSubmit={(e) => handleFormSubmit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col z-50 bg-white'>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Nome Doacao
                <input type="text" name="nomeCampeonato" value={nomeDoacao} onChange={(e) => setNomeDoacao(e.target.value)}  className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Pontuação do Doacao
                <input type="text" name="pontoCampeonato" value={pontoDoacao} onChange={(e) => setPontoDoacao(Number(e.target.value))}className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Data
                <input type="text" name="dataCampeonato" value={dataDoacao}  onChange={(e) => setDataDoacao(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <div className='flex sm:flex-row sm:justify-evenly w-full'>
                  <button type='submit' className='w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Salvar</button>
                  <button onClick={() => handleCloseForm()} type='button' className='w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                    cancelar
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
