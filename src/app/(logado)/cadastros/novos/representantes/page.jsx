"use client";

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ContainerRepresentantes from '@/components/formCadastro/ContainerRepresentantes';
import Modal from '@/components/formCadastro/modal';

export default function Quadra() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [cursos, setCursos] = useState(["Administração", "Informática", "Recursos Humanos", "Contabilidade"]);
  const [isAlertOpen, setAlertOpen] = useState(true);

  const router = useRouter();

  const handleBackPageNovos = () => {
    router.push('/cadastros/novos');
  };

  useEffect(() => {
    setAlertOpen(true); // Exibir o alerta inicial ao carregar a página
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const rmRepresentante = Number(target.rmRepresentante.value);
    const rmViceRepresentante = Number(target.rmViceRepresentante.value);
    const curso = target.curso.value;
    const serie = target.serie.value;

    setTimeout(() => {
      setModalOpen(true);
    }, 4000);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeAlert = () => {
    setAlertOpen(false);
  };

  const AlertaInicial = () => (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="mx-auto w-[290px] h-[220px] sm:w-[390px] sm:h-[360px] bg-white p-6  rounded-lg shadow-lg relative">
          <img
            src="../../../images/alert-form.png"
            className="absolute -top-[43px] left-[53px] sm:-top-[43px] sm:left-20 h-[154px] w-[200px] sm:h-[159px] sm:w-[217px]"
            alt="Sucesso"
          />
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            onClick={closeAlert}
          >
            ✕
          </button>
          <div className="mt-28 text-center">
            <h3 className="font-bold text-2xl">Atenção!</h3>
            <p className="py-4 pb-8 text-xl">Você só pode cadastrar representantes e 
            vice-representantes do mesmo 
            curso e da mesma série.
            </p>
          </div>
        </div>
      </div>
    </>
  );
  
  return (
    <>
       <div className='ml-[5%] mt-8 mb-8 flex flex-col gap-4'>
          <div className='w-1/3'> 
            <Link href='/cadastros'>
              <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
            </Link>
          </div>
          <div className='w-full text-start'>
            <h1 className='text-2xl font-medium'>Novo Cadastro</h1>
          </div>
       </div>
      <ContainerRepresentantes>
        <Link href="/cadastros/novos" className="absolute left-4 top-3">
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
        </Link>
        <div className="flex flex-col w-3/4 sm:h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]">
          <div className="flex text-sm text-[#666666] pt-1">
            <p className="flex-1">Tipo de cadastro</p>
            <Icon icon="iconamoon:arrow-down-2-duotone" width={30} style={{ color: "#005261" }} />
          </div>
          <p className="text-[#005261] font-semibold">Representantes</p>
        </div>
        <form onSubmit={handleFormSubmit} className="space-y-8 mt-10 w-3/4 flex items-center flex-col">
          <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
            RM do Representante
            <input type="text" name="rmRepresentante" className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg" placeholder='digite aqui' />
          </label>
          <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
            RM do Vice-representante
            <input type="text" name="rmViceRepresentante" className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg"placeholder='digite aqui' />
          </label>
          <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
            Série
            <select name="serie" className="appearance-none bg-[#E6EFF0] text-[#005261] font-semibold text-lg rounded-2xl p-3 border-2 border-[#005261]">
              {[1, 2, 3].map((serie) => (
                <option key={serie} className="text-center mt-2" value={serie}>
                  {serie}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
            Curso
            <select name="curso" className="appearance-none bg-[#E6EFF0] text-[#005261] font-semibold text-lg rounded-2xl p-3 border-2 border-[#005261]">
              {cursos.map((curso, index) => (
                <option key={index} className="text-center mt-2" value={curso}>
                  {curso}
                </option>
              ))}
            </select>
          </label>
          <div className="flex sm:flex-row justify-evenly w-full">
            <button type="submit" className="sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4">
              Cadastrar
            </button>
            <button onClick={handleBackPageNovos} type="button" className="sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4">
              cancelar
            </button>
          </div>
        </form>
      </ContainerRepresentantes>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <Modal closeModal={closeModal} texto="Representante e Vice-representante cadastrado com sucesso" />
        </>
      )}
      {isAlertOpen && <AlertaInicial />}
    </>
  );
}
