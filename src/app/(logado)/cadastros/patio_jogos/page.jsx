"use client"
import Link from 'next/link'
import { Icon } from '@iconify/react';

import { useState } from 'react';
import Modal from '@/components/formCadastro/modal';
import ContainerCampeonatoPatio from '@/components/formCadastro/ContainerCampeonatoPatio';

export default function Patio() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [extraClicked, setExtraClicked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nomeJogo, setNomeJogo] = useState('');
  const [pontoJogo, setPontoJogo] = useState('');
  const [pontoExtra, setPontoExtra] = useState(50);
  const [idObjetoSelecionado, setIdObjetoSelecionado] = useState(null);

  const [retornoApi, setRetornoApi] = useState([
    {
      id: 1,
      nome: 'Skate',
      ponto: 200,
    },
    {
      id: 2,
      nome: 'Labirinto 3D',
      ponto: 150,
    },
    {
      id: 3,
      nome: 'Damas',
      ponto: 100,
    },
    {
      id: 4,
      nome: 'Pebolim',
      ponto: 250,
    },
    {
      id: 5,
      nome: 'Bicicleta',
      ponto: 180,
    }
  ]);

  const handleShowForm = (jogo) => {
    setShowForm(true);
    setIdObjetoSelecionado(jogo.id);
    setNomeJogo(jogo.nome);
    setPontoJogo(jogo.ponto);
  }

  const handleCloseForm = () => {
    setShowForm(false);
    setIdObjetoSelecionado(null);
    setNomeJogo('');
    setPontoJogo('');
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nome = nomeJogo;
    const ponto = extraClicked ? (Number(pontoJogo) + Number(pontoExtra)) : Number(pontoJogo);

    const posicao = retornoApi.findIndex(
      (elemento) => elemento.id === idObjetoSelecionado
    );

    const novosDados = [...retornoApi];
    novosDados[posicao] = {
      id: idObjetoSelecionado,
      nome: nome,
      ponto: ponto
    };

    setRetornoApi(novosDados);

    console.log(novosDados);

    setTimeout(() => {
      handleCloseForm();
      setModalOpen(true);
    }, 4000);
  };

  
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

  const closeModal = () => {
    setModalOpen(false);
  }


  return (
    <>
       <div className='ml-[5%] mt-8 mb-8 flex  flex-row sm:flex-col  sm:gap-8 w-full'>
       <div className='w-1/3 '>
          <Link href='/cadastros'>
            <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
          </Link>
        </div>
        <div className='w-full text-start'>
          <h1 className='text-2xl  font-medium '>Jogos de Pátio </h1>
        </div>
      </div>
      <div className='gap-4 p-4 grid grid-cols-2 md:grid-cols-3 w-[920px] max-w-full  mx-auto text-wrap'>
        {retornoApi.map((jogo) => (
          <div key={jogo.id} onClick={() => handleShowForm(jogo)} className='max-w-full w-[252px]  h-[63px] text-center text-lg sm:text-xl  flex items-center justify-center border-[3px] border-blue-500 text-blue-500 pt-2 pb-2 pl-4 pr-4 rounded-xl font-semibold'>
            {jogo.nome}
          </div>
        ))}
      </div>
      {showForm && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <ContainerCampeonatoPatio alert={'Caso deseje editar algo, aperte do campo desejado e edite'} classe={'-top-60 sm:m-auto fixed inset-0 flex items-center justify-center z-50 p-4'}>
            <form onSubmit={handleFormSubmit} className='-mt-10 p-4 w-full flex flex-col'>
              <div className='flex sm:flex-row flex-col gap-4'>
                <div className={`flex flex-col space-y-8 ${extraClicked ? 'w-full sm:w-1/2 transition-all duration-700' : 'w-full duration-700'}`}>
                  <input type="text" name='id' />
                  <label className='flex flex-col gap-3 w-full px-9 pt-2 h-[73px] rounded-2xl text-sm text-[#666666] bg-[#E6EFF0]'>
                    Nome do Jogo
                    <input type="text" name="nomeJogo" value={nomeJogo} onChange={(e) => setNomeJogo(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
                  </label>
                  <label className='flex flex-col gap-2 w-full px-9 pt-2 h-[73px] rounded-2xl text-sm text-[#666666] bg-[#E6EFF0]'>
                    Pontuação do Jogo
                    <input type="text" name="pontoJogo" value={pontoJogo} onChange={(e) => setPontoJogo(Number(e.target.value))} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
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
              <div className='flex sm:flex-row justify-evenly gap-2 mt-10'>
                <button type='submit' className='w-1/2 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Salvar</button>
                <button onClick={handleCloseForm} type='button' className='w-1/2 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                  Cancelar
                </button>
              </div>
            </form>
          </ContainerCampeonatoPatio>
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
