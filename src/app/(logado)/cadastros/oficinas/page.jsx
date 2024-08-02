"use client"

import Link from 'next/link'
import { Icon } from '@iconify/react';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image'
import Modal from '@/components/formCadastro/modal';
import ContainerDoacao from '@/components/formCadastro/ContainerDoacao';

export default function Quadra() {
  const [nomeOficina, setNomeOficina] = useState('');
  const [nomeALuno, setNomeAluno] = useState('');
  const [dataOficina, setDataOficina] = useState('');
  const [dataHorario1, setHorario1] = useState('');

  const [isModalOpen, setModalOpen] = useState(false);
  const [mostrarFormularioEdicao, setMostrarFormularioEdicao] = useState(false);
  const [mostrarFormularioCadastro, setMostrarFormularioCadastro] = useState(false);

  const [moveBar, setMoveBar] = useState("28");
  const [transition, setTransition] = useState(false); // Estado para controlar a transição
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(prevShow => !prevShow); 
  }

  const [idObjetoSelecionado, setIdObjetoSelecionado] = useState(null);
  const [cursoEtec, setCursoEtec] = useState('');
  const[form1_Atv1_Dia1,setForm1Atv1Dia1] = useState('');

  const [dataCampeonato, setDataCampeonato] = useState('');
 
  const [alertShowFase, setAlertShowFase] = useState(false) 
  const [showFilterFasesOptions,setShowFilterFasesOptions]= useState(false)


  const [retornoApi, setRetornoApi] = useState([
    {
      id: 1,
      curso:'1 informatica',
      form1Atv1Dia1:'labirito 3D',
      data: new Date('2024-08-01'),
    },
    {
      id: 2,
      curso:'2 informatica',
      form1Atv1Dia1:'labirito 3D',
      data: new Date('2024-07-20'),
    },
    {
      id: 3,
      curso:'3 informatica',

      data: new Date('2024-07-15'),
    },
    {
      id: 4,
      curso:'1 admnistração',
      form1Atv1Dia1:'labirito 3D',
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

  const handleShowForm = (cursosEtec) => {
    setMostrarFormularioEdicao(true);
    setIdObjetoSelecionado(cursosEtec.id);
    setCursoEtec(cursosEtec.curso);
    
    setForm1Atv1Dia1(cursosEtec.form1Atv1Dia1)

    setDataCampeonato(formatDateToBR(cursosEtec.data));
  };

  const handleCloseForm = () => {
    setMostrarFormularioCadastro(false);
    setMostrarFormularioEdicao(false);
    setIdObjetoSelecionado(null);
    setCursoEtec('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const curso = cursoEtec;
    const oficina= nomeOficina ;
    const dataof = dataOficina;
    const hr1 = horario1;

    const data = parseDateFromBR(dataCampeonato);

    const posicao = retornoApi.findIndex(
      (elemento) => elemento.id === idObjetoSelecionado
    );

    const novosDados = [...retornoApi];
    novosDados[posicao] = {
      id: idObjetoSelecionado,
      curso: curso,
      form1Atv1Dia1:formulario1Atv1Dia1,
      data: data,
    };

    setRetornoApi(novosDados);

    setTimeout(() => {
      handleCloseForm()
      setModalOpen(true);
    }, 4000);
  };


  const closeModal = () => {
    setModalOpen(false);
  };

  const [faseForm, setFaseForm] = useState("");

  function handleOpcaoFaseForm(fase) {
    if (fase == 1) {
      setFaseForm(1)
    }else if(fase == 2){
      setFaseForm(2)
    }

    setShow(!show)
  }
  function handleFaseOpcoes() {
    setShowFilterFasesOptions(false);
  }
  
  const handleCloseAlertFase = () => {
    setAlertShowFase(false);
  };
   //exibe o alerta quando a 2 fase não está disponivel
   function handleFase(fase) {
    if (fase === 2) {
      setAlertShowFase(true);
    }
    setShowFilterFasesOptions(false);
  }

  {/*função para aplicar responsividade */}

  const divRef = useRef(null);
  const [largura, setLargura] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (divRef.current) {
        setLargura(divRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function mostrarSecaoCalendario() {
    setMostrarCalendario(true)
  }

  //escolha de cores
  const getColorByCourse = (course) => {
    const colors = {
      '1 informatica': '#ff0000',
      '2 informatica': '#00ff00',
      '3 informatica': '#0000ff',
      '1 admnistração': '#ffff00',
    };
    // Use a cor padrão se o curso não estiver definido no objeto
    return colors[course] || '#e0e0e0'; // Corrigido para uma cor padrão no formato hexadecimal
  };
  
  return (
    <>
     {/*Exibe o alerta quando a 2 fase não está disponivel*/}
     {alertShowFase && (
           <>
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="mx-auto w-[290px] h-[360px] sm:w-[390px]  bg-white p-6 rounded-3xl shadow-lg relative">
                  <Image 
                    width={200}
                    height={154}
                    src="/images/alert-fase.png"
                    className="absolute -top-[41px] left-[40px] sm:-top-[48px] sm:left-[45px]  sm:h-[179px] sm:w-[307px]"
                    alt="Sucesso"
                  />
                  <button
                    className="absolute top-4 right-6   hover:text-gray-400 "
                    onClick={handleCloseAlertFase}
                  >
                    ✕
                  </button>
                  <div className="mt-28 text-center">
                    <h3 className="font-bold text-2xl">Atenção!</h3>
                    <p className="py-4 pb-8 text-xl">
                      Este Fase não está disponível para visualização
                    </p>
                  </div>
                </div>
              </div>
           </>
        )}
     <div className='ml-[5%] mt-8 mb-8 flex  flex-row sm:flex-col  sm:gap-8 w-full relative'>
        <div className=' flex flex-row sm:justify-center sm:flex-col w-full'>
          <Link href='/cadastros'>
            <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
          </Link>
            <div className='flex flex-row justify-evenly sm:justify-between sm:pr-40 w-full '>
                 <h1 className='flex items-center text-2xl font-medium '>Oficinas </h1>
                  {/* Filtro por fases */}

                  <div
                    onClick={() => setShowFilterFasesOptions(!showFilterFasesOptions)}
                    className="w-[113px] shadow-xl bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center"
                  >
                    <Icon icon="mynaui:filter" className="mr-2 h-6 w-6" />
                    Fases
                  </div>
                  {showFilterFasesOptions && (
                    <>
                      <div className="fixed inset-0 bg-black bg-opacity-20 z-50" onClick={() => setShowFilterFasesOptions(false)}></div>
                      <div className="absolute bg-white shadow-md rounded-lg mt-20 ml-20 w-48 py-2 z-50">
                        <ul>
                          <li onClick={() => handleFase(1)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">1ª fase</li>
                          <li onClick={() => handleFase(2)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">2ª fase</li>
                        </ul>
                      </div>
                    </>
                  )}
            </div>
        </div>
      </div>

      <div ref={divRef} className='gap-4 p-4 grid grid-cols-2 md:grid-cols-3 w-[1020px] max-w-full  mx-auto text-wrap bg-[#F8F8F8]'>
        {retornoApi.map((cursosEtec) => (
          <div key={cursosEtec.id} onClick={() => handleShowForm(cursosEtec)} className={`flex   gap-4 text-start sm:pl-7 pt-3 pb-5 flex-col max-w-full w-[270px] h-auto bg-white  rounded-xl`}  style={{ borderLeft: `8px solid ${getColorByCourse(cursosEtec.curso)}` }}>
              <div className='flex items-center sm:block flex-col'>
                <h1 className='font-semibold  text-xl'>{cursosEtec.curso}</h1>
                <div className={`w-[44px] p-[1.3px]  bg-[${getColorByCourse(cursosEtec.curso)}]`}>

                </div>
              </div>
              <p className='font-semibold text-xl text-center sm:text-start'>Capoeira</p>
              <span className='text-[#DADADA] text-center sm:text-start'>Data: 28 ago</span>
           </div>
        ))}
          <section 
          onClick={() => setMostrarFormularioCadastro(!mostrarFormularioCadastro)}
          className="  relative max-w-full w-[200px] h-[120px] xl:w-[240px] xl:h-[150px] border-4 
          rounded-lg border-dashed border-gray-600*:absolute *:w-full   hover:cursor-pointer
          duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
          >
            <Icon icon={'ph:plus'} className='mt-5'  width={40}></Icon>
            <div className="inset-5 flex  flex-col justify-center text-xl text-center font-semibold ">
              <p>Novo Cadastro</p>
            </div>
          </section> 
      </div>
      {mostrarFormularioCadastro && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
            <ContainerDoacao
              alert={'Caso deseje editar algo, aperte do campo desejado e edite'}
              classe={' -top-[650px] sm:-top-[500px] sm:m-auto fixed inset-0 flex items-center justify-center bg-white z-50 p-4'}
            > 
              
              {/*estagiario */}

              <div className='flex jusitfy-center mt-7'>
                <div>
                  qnt campos de horarios
                    <input type="text" />
                </div>
                <div>
                  qnt de campos de estagiario
                <input type="text" />
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className='space-y-8 mt-10 w-3/4 flex items-center flex-col z-50 bg-white overflow-y-auto'>
               

                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Nome oficina
                  <input type="text" name="nomeOficina" onChange={(e) => e.target.value} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
                </label>
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Nome do aluno responsável
                  <input type="number" name="pontoDoacao" onChange={(e) => e.target.value} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
                </label>
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Data
                  <input type="date" name="dataOficina" onChange={(e) => e.target.value} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
                </label>

                <section className='w-full flex flex-col items-end'>
                  <div className='flex w-full gap-4'>
                    <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                      1º Horário
                      <input type="time" name="horarioOficina1" className='w-full bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
                    </label>
                  </div>
                </section>

                {/*estagiario */}
                <section className='flex flex-col gap-4 items-center w-full mt-10 text-[#666666] rounded-xl'>
                  <div onClick={handleShow} className='flex items-center justify-between w-full h-[60px] px-9 pt-3 pb-2 text-lg rounded-full bg-[#E6EFF0] cursor-pointer transition-colors duration-300'>
                    Estágiario
                    <Icon icon="iconamoon:arrow-down-2-duotone" width={40} style={{ color: "#005261" }} />
                  </div>
                  <div className={`w-full flex flex-col gap-4 rounded-3xl overflow-hidden transition-all duration-500 ${show ? 'max-h-[400px] duration-300' : 'max-h-0 p-0'}`}>
                    <section className='w-full flex flex-col items-end'>
                      <div className='flex w-full gap-4'>
                        <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                          Nome do 1 º Estagiário
                          <input type="time" name="horarioOficina1" className='w-full bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
                        </label>
                      </div>
                    </section>
                    <label className='flex flex-col gap-3 w-full h-[86px] px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                      Rg do 1º Estagiário
                      <input type="text" name="nomeOficina" onChange={(e) => e.target.value} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
                    </label>
                    <section className='w-full flex flex-col sm:flex-row gap-4'>
                      <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                        Entrada
                        <input type="time" name="dataOficina" onChange={(e) => e.target.value} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
                      </label>
                      <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                        Saída
                        <input type="time" name="dataOficina" onChange={(e) => e.target.value} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
                      </label>
                    </section>
                  </div>
                </section>

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

      {mostrarFormularioEdicao && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <ContainerDoacao alert={'Caso deseje editar algo, aperte do campo desejado e edite'} classe={' -top-[400px] sm:m-auto fixed inset-0 flex items-center justify-center bg-white z-50 p-4'}>
            <form onSubmit={handleFormSubmit} className='space-y-8 mt-10 w-3/4 flex items-center flex-col z-50 bg-white'>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Nome oficina
                <input type="text" name="nomeOficina"  className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Nome do aluno responsável
                <input type="number" name="pontoDoacao" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Data
                <input type="date" name="dataOficina"  className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
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
          <Modal edicao={"edicao"} closeModal={closeModal} texto='Essa atividade foi editada com sucesso.' />
        </>
      )}
    </>
  );
}

{/*
  
  <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Nome da Oficina
                <input type="text" name="nomeCampeonato" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Nome do aluno responsável 
                <input type="text" name="nomeCampeonato" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Data
                <input type="date" name="dataCampeonato" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                1 º horário
                <input type="time" name="qntFases" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
  */}