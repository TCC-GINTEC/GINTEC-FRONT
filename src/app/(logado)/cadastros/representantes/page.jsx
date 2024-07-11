"use client"

import { Icon } from '@iconify/react';
import { useState } from 'react';
import Modal from '@/components/formCadastro/modal';
import ContainerRepresentantes from '@/components/formCadastro/ContainerRepresentantes';

export default function Patio() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [extraClicked, setExtraClicked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [rmViceRepresentante, setRmViceRepresentante] = useState('');
  const [rmRepresentante, setRmRepresentante] = useState('');
  const [curso,setCurso] = useState('')
  const [serie,setSerie] = useState('')
  const [idObjetoSelecionado, setIdObjetoSelecionado] = useState(null);

  const [retornoApi, setRetornoApi] = useState([
    {
      id: 1,
      curso:'Informatica',
      serie:3,
      viceRepresentante:'2222',
      representante:'2111'
    },
    {
      id: 2,
      curso:'Admnistração',
      serie:2,
      viceRepresentante:'2222',
      representante:'2111'
    },
    {
      id: 3,
      curso:'informatica',
      viceRepresentante:'2222',
      representante:'2111'
    },
    {
      id: 4,
      curso:'informatica',
      serie:1,
      viceRepresentante:'2222',
      representante:'2111'
    },
    {
      id: 5,
      curso:'recursos humanos',
      serie:2,
      viceRepresentante:'2222',
      representante:'2111'
    }
  ]);

  const handleShowForm = (aluno) => {
    setShowForm(true);
    setRmViceRepresentante(aluno.viceRepresentante);
    setRmRepresentante(aluno.representante);
    setSerie(aluno.serie);
    setCurso(aluno.curso);
    setIdObjetoSelecionado(aluno.id); // Adicione esta linha para definir o id do objeto selecionado
  }
  

  const handleCloseForm = () => {
    setShowForm(false);
    setIdObjetoSelecionado(null);
    setRmViceRepresentante('')
    setRmRepresentante('');
    setSerie('');
    setCurso('');
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const representante = rmRepresentante;
    const viceRepresentante = rmViceRepresentante;
  
    const posicao = retornoApi.findIndex(
      (elemento) => elemento.id === idObjetoSelecionado
    );
  
    const novosDados = [...retornoApi];
    novosDados[posicao] = {
      ...novosDados[posicao], // Mantém as outras propriedades
      representante: representante,
      viceRepresentante: viceRepresentante,
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
      <div className='grid sm:grid-cols-3 grid-cols-1 gap-4  w-full md:w-1/2 sm:mx-auto'>
        {retornoApi.map((curso) => (
          <div key={curso.id} onClick={() => handleShowForm(curso)} className='border-[3px] border-blue-500 text-blue-500 pt-2 pb-2 pl-4 pr-4 rounded-xl font-semibold'>
            {curso.serie} º {curso.curso}
          </div>
        ))}
      </div>
      {showForm && (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
            <ContainerRepresentantes alert={'Caso deseje editar o Vice-representante e o Represente aperte o campo e edite'} classe={'-mt-40 sm:m-auto fixed inset-0 flex items-center justify-center z-50 p-4'}>
              <form onSubmit={handleFormSubmit} className="space-y-8 mt-10 w-3/4 flex items-center flex-col">
              <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                RM do Representante
                <input type="text" value={rmRepresentante} onChange={(e) => setRmRepresentante(e.target.value)} name="rmRepresentante" className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg" placeholder='digite aqui' />
              </label>
              <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                RM do Vice-representante
                <input type="text" value={rmViceRepresentante} onChange={(e) => setRmViceRepresentante(e.target.value)} name="rmViceRepresentante" className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg"placeholder='digite aqui' />
              </label>
              <label className="h-[84px] flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                Série
                <p className=' text-[#005261] font-semibold text-lg'>{serie}</p>
              </label>
              <label className="h-[84px] flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                Curso  
                <p className=' text-[#005261] font-semibold text-lg'>{curso}</p>
              </label>
              <div className="flex sm:flex-row justify-evenly w-full">
                <button type="submit" className="sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4">
                  Cadastrar
                </button>
                <button onClick={handleCloseForm} type="button" className="sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4">
                  cancelar
                </button>
              </div>
            </form>
          </ContainerRepresentantes>

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
