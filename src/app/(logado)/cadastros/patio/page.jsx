"use client"

import { useState } from 'react';
import Modal from '@/components/formCadastro/modal'
import ContainerCampeonatoPatio from '@/components/formCadastro/ContainerCampeonatoPatio'
import JogosPatioForm from '@/components/formCadastro/JogosPatioForm'


export default function Patio(){
  const [isModalOpen, setModalOpen] = useState(false);
  const [extraClicked, setExtraClicked] = useState(false);
  const [showForm,setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const nome = target.nomeJogo.value;
    const data = target.dataJogo.value;
    const ponto = extraClicked ? (Number(target.pontoJogo.value) + Number(target.pontoExtra.value)) : Number(target.pontoJogo.value);
    
    setTimeout(() => {
      handleCloseForm()
      setModalOpen(true);
    }, 4000);
  };

  const closeModal = () => {
    setModalOpen(false);
  }

  return(
    <>
      <div className='grid grid-cols-3 gap-4 w-1/2'>
        <div onClick={handleShowForm}  className='border-[3px] border-blue-500 text-blue-500 pt-2 pb-2 pl-8 rounded-xl font-semibold'>
          Skate
        </div>
        <div className=' border-[3px] border-blue-500 text-blue-500 pt-2 pb-2 pl-8 rounded-xl font-semibold'>
          Laborito 3D
        </div>
        <div className=' border-[3px] border-blue-500  text-blue-500 pt-2 pb-2 pl-8 rounded-xl font-semibold'>
          Damas
        </div>
      </div>
      {showForm &&(
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div> 
          <ContainerCampeonatoPatio alert={'Caso deseje editar algo, aperte do campo desejado e edite'}  classe={'fixed inset-0 flex items-center justify-center z-50 p-4'}>
              <JogosPatioForm  
                  handleCloseForm={handleCloseForm} 
                  handleFormSubmit={handleFormSubmit}
                  extraClicked={extraClicked}  
                  setExtraClicked={setExtraClicked}
              >
            </JogosPatioForm>
          </ContainerCampeonatoPatio >
        
        </>
      )}   
        {isModalOpen && (
          <>
           <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div> 
           <Modal closeModal={closeModal} texto='Essa atividade foi editada com sucesso.'/>
          </>
          )}   
    </>
  )
}