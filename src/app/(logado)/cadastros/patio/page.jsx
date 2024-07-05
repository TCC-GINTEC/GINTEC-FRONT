"use client"

import { useState } from 'react';
import Modal from '@/components/formCadastro/modal';
import ContainerCampeonatoPatio from '@/components/formCadastro/ContainerCampeonatoPatio';
import JogosPatioForm from '@/components/formCadastro/JogosPatioForm';

export default function Patio() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [extraClicked, setExtraClicked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nomeJogo, setNomeJogo] = useState('');
  const [pontoJogo, setPontoJogo] = useState('');
  const [dataJogo, setDataJogo] = useState('');
  const [pontoExtra, setPontoExtra] = useState(50);
  const [idObjetoSelecionado, setIdObjetoSelecionado] = useState(null);

  const [retornoApi, setRetornoApi] = useState([
    {
      id: 1,
      nome: 'Skate',
      ponto: 200,
      data: new Date('2024-08-01'),
    },
    {
      id: 2,
      nome: 'Labirinto 3D',
      ponto: 150,
      data: new Date('2024-07-20'),
    },
    {
      id: 3,
      nome: 'Damas',
      ponto: 100,
      data: new Date('2024-07-15'),
    },
    {
      id: 4,
      nome: 'Pebolim',
      ponto: 250,
      data: new Date('2024-07-25'),
    },
    {
      id: 5,
      nome: 'Bicicleta',
      ponto: 180,
      data: new Date('2024-07-30'),
    }
  ]);

  const handleShowForm = (jogo) => {
    setShowForm(true);
    setIdObjetoSelecionado(jogo.id);
    setNomeJogo(jogo.nome);
    setPontoJogo(jogo.ponto);
    setDataJogo(jogo.data.toISOString().split('T')[0]); // format date for input type="date"
  }

  const handleCloseForm = () => {
    setShowForm(false);
    setIdObjetoSelecionado(null);
    setNomeJogo('');
    setPontoJogo('');
    setDataJogo('');
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nome = nomeJogo;
    const ponto = extraClicked ? (Number(pontoJogo) + Number(pontoExtra)) : Number(pontoJogo);
    const data = new Date(dataJogo);

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
      <div className='grid grid-cols-3 gap-4 w-1/2'>
        {retornoApi.map((jogo) => (
          <div key={jogo.id} onClick={() => handleShowForm(jogo)} className='border-[3px] border-blue-500 text-blue-500 pt-2 pb-2 pl-8 rounded-xl font-semibold'>
            {jogo.nome}
          </div>
        ))}
      </div>
      {showForm && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <ContainerCampeonatoPatio alert={'Caso deseje editar algo, aperte do campo desejado e edite'} classe={'fixed inset-0 flex items-center justify-center z-50 p-4'}>
            <JogosPatioForm
              setNomeJogo={setNomeJogo}
              setPontoJogo={setPontoJogo}
              setPontoExtra={setPontoExtra}
              pontoExtra={pontoExtra}
              handleCloseForm={handleCloseForm}
              handleFormSubmit={handleFormSubmit}
              extraClicked={extraClicked}
              setExtraClicked={setExtraClicked}
              valueNome={nomeJogo}
              valuePonto={pontoJogo}
              valueData={dataJogo}
            />
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
