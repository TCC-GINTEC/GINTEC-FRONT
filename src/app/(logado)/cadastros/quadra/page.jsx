"use client"

import { useState } from 'react';
import Modal from '@/components/formCadastro/modal';
import ContainerCampeonatoQuadra from '@/components/formCadastro/ContainerCampeonatoQuadra';
import QuadraForm from '@/components/formCadastro/QuadraForm';

export default function Quadra() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [extraClicked, setExtraClicked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nomeCampeonato, setNomeCampeonato] = useState('');
  const [pontoCampeonato, setPontoCampeonato] = useState('');
  const [dataCampeonato, setDataCampeonato] = useState('');
  const [faseCampeonato, setFaseCampeonato] =useState('');
  const [idObjetoSelecionado, setIdObjetoSelecionado] = useState(null);

  const [retornoApi, setRetornoApi] = useState([
    {
      id: 1,
      nome: 'Futsal',
      ponto: 200,
      fase:3,
      data: new Date('2024-08-01'),
    },  
    {
      id: 2,
      nome: 'Futsal Fem',
      ponto: 150,
      fase:3,
      data: new Date('2024-07-20'),
    },
    {
      id: 3,
      nome: 'Futsal Masc',
      ponto: 100,
      fase:3,
      data: new Date('2024-07-15'),
    },
    {
      id: 4,
      nome: 'Volei',
      ponto: 250,
      fase:3,
      data: new Date('2024-07-25'),
    },
    {
      id: 5,
      nome: 'Queimada',
      ponto: 180,
      fase:3,
      data: new Date('2024-07-30'),
    }
  ]);

  const handleShowForm = (jogo) => {
    setShowForm(true);
    setIdObjetoSelecionado(jogo.id);
    setNomeCampeonato(jogo.nome);
    setPontoCampeonato(jogo.ponto);
    setFaseCampeonato(jogo.fase); // format date for input type="date"
    setDataCampeonato(jogo.data.toISOString().split('T')[0]); // format date for input type="date"
  }

  const handleCloseForm = () => {
    setShowForm(false);
    setIdObjetoSelecionado(null);
    setNomeCampeonato('');
    setPontoCampeonato('');
    setDataCampeonato('');
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nome = nomeCampeonato;
    const ponto = Number(pontoCampeonato);
    const fase = Number(faseCampeonato);
    const data = new Date(dataCampeonato);

    const posicao = retornoApi.findIndex(
      (elemento) => elemento.id === idObjetoSelecionado
    );

    const novosDados = [...retornoApi];
    novosDados[posicao] = {
      id: idObjetoSelecionado,
      nome: nome,
      ponto: ponto,
      fase:fase,
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
          <div key={jogo.id} onClick={() => handleShowForm(jogo)} className='border-[3px] border-blue-500 text-blue-500 pt-2 pb-2 pl-8 rounded-xl font-semibold'>
            {jogo.nome}
          </div>
        ))}
      </div>
      {showForm && (
        <>
          <div  className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <ContainerCampeonatoQuadra alert={'Caso deseje editar algo, aperte do campo desejado e edite'} classe={'fixed inset-0 flex items-center justify-center z-50 p-4'}>
            <QuadraForm 
              setNomeCampeonato={setNomeCampeonato}
              setPontoCampeonato={setPontoCampeonato}
              setFaseCampeonato={setFaseCampeonato}
              setDataCampeonato={setDataCampeonato}
              handleCloseForm={handleCloseForm}
              handleFormSubmit={handleFormSubmit}
              extraClicked={extraClicked}
              setExtraClicked={setExtraClicked}
              valueNome={nomeCampeonato}
              valuePonto={pontoCampeonato}
              valueFase={faseCampeonato}
              valueData={dataCampeonato}
            />
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
  )
}
