"use client"

import Link from 'next/link'
import { Icon } from '@iconify/react';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image'
import Modal from '@/components/formCadastro/modal';
import ContainerAtividade from '@/components/formCadastro/ContainerAtividade';

export default function Quadra() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [moveBar, setMoveBar] = useState("28");
  const [transition, setTransition] = useState(false); // Estado para controlar a transição
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(prevShow => !prevShow); 
  }

  const [idObjetoSelecionado, setIdObjetoSelecionado] = useState(null);
  const [cursoEtec, setCursoEtec] = useState('');
  const[form1_Atv1_Dia1,setForm1Atv1Dia1] = useState('');
  const[form1_Atv2_Dia2,setForm1Atv2Dia2] = useState('');
  const[form1_Atv3_Dia3,setForm1Atv3Dia3] = useState('');
  
  const[form2_Atv1_Dia1,setForm2Atv1Dia1] = useState('');
  const[form2_Atv2_Dia2,setForm2Atv2Dia2] = useState('');
  const[form2_Atv3_Dia3,setForm2Atv3Dia3] = useState('');

  const[form3_Atv1_Dia1,setForm3Atv1Dia1] = useState('');
  const[form3_Atv2_Dia2,setForm3Atv2Dia2] = useState('');
  const[form3_Atv3_Dia3,setForm3Atv3Dia3] = useState('');
 
  const [dataCampeonato, setDataCampeonato] = useState('');
 
  const [alertShowFase, setAlertShowFase] = useState(false) 
  const [showFilterFasesOptions,setShowFilterFasesOptions]= useState(false)


  const [retornoApi, setRetornoApi] = useState([
    {
      id: 1,
      curso:'1 informatica',
      form1Atv1Dia1:'labirito 3D',
      form1Atv2Dia2:'labirito 3D',
      form1Atv3Dia3:'labirito 3D',
      form2Atv1Dia1:'labirito 3D',
      form2Atv2Dia2:'labirito 3D',
      form2Atv3Dia3:'labirito 3D',
      form3Atv1Dia1:'labirito 3D',
      form3Atv2Dia2:'labirito 3D',
      form3Atv3Dia3:'labirito 3D',
      data: new Date('2024-08-01'),
    },
    {
      id: 2,
      curso:'2 informatica',
      form1Atv1Dia1:'labirito 3D',
      form1Atv2Dia2:'labirito 3D',
      form1Atv3Dia3:'labirito 3D',
      form2Atv1Dia1:'labirito 3D',
      form2Atv2Dia2:'labirito 3D',
      form2Atv3Dia3:'labirito 3D',
      form3Atv1Dia1:'labirito 3D',
      form3Atv2Dia2:'labirito 3D',
      form3Atv3Dia3:'labirito 3D',
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
      form1Atv2Dia2:'labirito 3D',
      form1Atv3Dia3:'labirito 3D',
      form2Atv1Dia1:'labirito 3D',
      form2Atv2Dia2:'labirito 3D',
      form2Atv3Dia3:'labirito 3D',
      form3Atv1Dia1:'labirito 3D',
      form3Atv2Dia2:'labirito 3D',
      form3Atv3Dia3:'labirito D',
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
    setShowForm(true);
    setIdObjetoSelecionado(cursosEtec.id);
    setCursoEtec(cursosEtec.curso);
    
    setForm1Atv1Dia1(cursosEtec.form1Atv1Dia1)
    setForm1Atv2Dia2(cursosEtec.form1Atv2Dia2)
    setForm1Atv3Dia3(cursosEtec.form1Atv3Dia3)
    
    setForm2Atv1Dia1(cursosEtec.form2Atv1Dia1)
    setForm2Atv2Dia2(cursosEtec.form2Atv2Dia2)
    setForm2Atv3Dia3(cursosEtec.form2Atv3Dia3)
    
    setForm3Atv1Dia1(cursosEtec.form3Atv1Dia1)
    setForm3Atv2Dia2(cursosEtec.form3Atv2Dia2)
    setForm3Atv3Dia3(cursosEtec.form3Atv3Dia3)

    setDataCampeonato(formatDateToBR(cursosEtec.data));
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setIdObjetoSelecionado(null);
    setCursoEtec('');

   
  };

  const handleForm1Submit = (e) => {
    e.preventDefault();
    const curso = cursoEtec;
    const formulario1Atv1Dia1 = form1_Atv1_Dia1 ;
    const formulario1Atv2Dia2 = form1_Atv2_Dia2;
    const formulario1Atv3Dia3 = form1_Atv3_Dia3;

    const data = parseDateFromBR(dataCampeonato);

    const posicao = retornoApi.findIndex(
      (elemento) => elemento.id === idObjetoSelecionado
    );

    const novosDados = [...retornoApi];
    novosDados[posicao] = {
      id: idObjetoSelecionado,
      curso: curso,
      form1Atv1Dia1:formulario1Atv1Dia1,
      form1Atv2Dia2:formulario1Atv2Dia2,
      form1Atv3Dia3:formulario1Atv3Dia3,
      data: data,
    };

    setRetornoApi(novosDados);

    setTimeout(() => {
      handleCloseForm()
      setModalOpen(true);
    }, 4000);
  };


  const handleForm2Submit = (e) => {
    e.preventDefault();
    const curso = cursoEtec;
    const formulario2Atv1Dia1 = form2_Atv1_Dia1 ;
    const formulario2Atv2Dia2 = form2_Atv2_Dia2;
    const formulario2Atv3Dia3 = form2_Atv3_Dia3;
    
    const data = parseDateFromBR(dataCampeonato);

    const posicao = retornoApi.findIndex(
      (elemento) => elemento.id === idObjetoSelecionado
    );

    const novosDados = [...retornoApi];
    novosDados[posicao] = {
      id: idObjetoSelecionado,
      curso: curso,
      form2Atv1Dia1:formulario2Atv1Dia1,
      form2Atv2Dia2:formulario2Atv2Dia2 ,
      form2Atv3Dia3:formulario2Atv3Dia3,
      data: data,
    };

    setRetornoApi(novosDados);

    setTimeout(() => {
      handleCloseForm()
      setModalOpen(true);
    }, 4000);
  };


  const handleForm3Submit = (e) => {
    e.preventDefault();
    const curso = cursoEtec;
    const  formulario3Atv1Dia1= form3_Atv1_Dia1;
    const formulario3Atv2Dia2 = form3_Atv2_Dia2;
    const formulario3Atv3Dia3 = form3_Atv3_Dia3;

    const data = parseDateFromBR(dataCampeonato);

    const posicao = retornoApi.findIndex(
      (elemento) => elemento.id === idObjetoSelecionado
    );

    const novosDados = [...retornoApi];
    novosDados[posicao] = {
      id: idObjetoSelecionado,
      curso: curso,
      form3Atv1Dia1: formulario3Atv1Dia1,
      form3Atv2Dia2: formulario3Atv2Dia2 ,
      form3Atv3Dia3: formulario3Atv3Dia3 ,
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
        <div className=' flex flex-row sm:justify-center sm:flex-col w-full relative'>
          <Link href='/cadastros'>
            <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
          </Link>
            <div className='flex flex-row  w-full justify-evenly sm:justify-between md:pr-40 relative '>
                 <h1 className='flex items-center text-2xl font-medium '>Atividades </h1>
                  {/* Filtro por fases */}
                  <div
                    onClick={() => setShowFilterFasesOptions(!showFilterFasesOptions)}
                    className="w-[113px] shadow-xl bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center relative"
                  >
                    <Icon icon="mynaui:filter" className="mr-2 h-6 w-6" />
                    Fases
                    {showFilterFasesOptions && (
                    <>
                      <div className="fixed inset-0 bg-black bg-opacity-20 z-50" onClick={() => setShowFilterFasesOptions(false)}></div>
                       <div className="absolute right-0 bg-white shadow-md rounded-lg mt-40 ml-20 w-48 py-2 z-50">
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
      </div>
      
      {/*aqui onde o conteudo da pagina aparece */}
      <div ref={divRef} className='gap-4 p-4 grid grid-cols-2 md:grid-cols-3 w-[1020px] max-w-full  mx-auto text-wrap bg-[#F8F8F8]'>
        {retornoApi.map((cursosEtec) => (
          <div key={cursosEtec.id}  className='flex items-start sm:pl-7 pt-7 pb-5 flex-col max-w-full w-[270px]   text-center  bg-white rounded-xl '>
            <div className={`flex ${largura <= 740 && largura >404?'sm:flex-col items-center gap-1 mb-4 ':'sm:flex-row sm:justify-evenly sm:gap-8'}  items-center flex-col w-full   `}>
              <h1 className='text-center font-bold pb-1 w-1/2'>{cursosEtec.curso}</h1>
              <div className={`${cursosEtec.form1Atv1Dia1 == null?'text-[#D32719] bg-[#FDD5D1]  ':'bg-[#E8FBE4] text-[#3ACF1F] '}  h-[23px] rounded-lg px-1  `}>{cursosEtec.form1Atv1Dia1 == null?'Pendente ':'Concluido'}</div>
            </div>
            <div className='flex  justify-evenly items-end sm:flex-row w-full relative'>
              <ul className={`flex flex-col ${cursosEtec.form1Atv1Dia1 == null?'hidden':'block'} list-disc`}>
                <li>{cursosEtec.form1Atv1Dia1}</li>
                <li>{cursosEtec.form1Atv2Dia2}</li>
                <li>{cursosEtec.form1Atv3Dia3}</li>
              </ul>
              <div >
                 <Image src={'/images/edicao.svg'} onClick={() => handleShowForm(cursosEtec)} className={`${cursosEtec.form1Atv1Dia1 == null ?'hidden':''} hover:scale-125`}width={20} height={20}/>
                  <p className={`${cursosEtec.form1Atv1Dia1 == null ?'block text-[#a0a0a0]':'hidden'} mt-10`}>Aguardando cadastros</p>
              </div>
            </div>
           </div>
        ))}
      </div>
      {showForm && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 "></div>
          <ContainerAtividade  alert={'Caso deseje editar algo, aperte do campo desejado e edite'} classe={'right-80 -top-[500px] fixed inset-0 bg-white flex items-center justify-center z-50 p-4'}>
           <div className='hidden'>
                <div className='absolute left-4 top-4 cursor-pointer' onClick={() => handleCloseForm()}>
                    <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
                </div>
                <div className="max-w-[500px] mx-auto mb-8 mt-2  flex gap-3 justify-evenly md:gap-20  border-b-4 border-b-[#DADADA] relative">
                  <div
                    onClick={() => setMoveBar("28")}
                    className={ `sm:font-semibold text-xl flex items-center gap-2  cursor-pointer ${moveBar === "28" ? "text-[#005261]" : "text-[#DADADA]"}`}
                  >
                    28 Agos
                  </div>
                  <div
                    onClick={() => setMoveBar("29")}
                    className={`sm:font-semibold ml-2 text-xl flex cursor-pointer ${moveBar === "29" ? "text-[#005261]" : "text-[#DADADA]"}`}
                  >
                    29 Agos
                  </div>
                  <div
                    onClick={() => setMoveBar("30")}
                    className={`sm:font-semibold text-xl cursor-pointer ${moveBar === "30" ? "text-[#005261]" : "text-[#DADADA]"}`}
                  >
                  30 Agos
                  </div>
                  <div
                    className={`hidden sm:block h-[4px] w-[100px] md:w-[124px] bg-[#005261] ${transition ? "duration-1000 delay-700" : ""} 
                      ${moveBar === "28" ? "left-0" : ""} 
                      ${moveBar === "29" ? "md:left-[140px] left-30" : ""} 
                      ${moveBar === "30" ? "md:left-[290px]" : ""} 
                      absolute -bottom-1 font-bold transition-all`}
                  ></div>
                </div>
           </div>
            
    
          {/*caso seja 2 dias */}
          <div className='block w-[400px] max-w-full'>
                <div className='absolute left-4 top-4 cursor-pointer' onClick={() => handleCloseForm()}>
                  <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
                </div>
                <div className="max-w-[500px] mx-auto mb-8 mt-2  flex gap-3 justify-evenly md:gap-20  md:border-b-4 border-b-[#DADADA] relative">
                  <div
                    onClick={() => setMoveBar("28")}
                    className={ `underline sm:no-underline sm:font-semibold text-xl flex items-center gap-2  cursor-pointer ${moveBar === "28" ? "text-[#005261]" : "text-[#DADADA]"}`}
                  >
                    28 Agos
                  </div>
                  <div
                    onClick={() => setMoveBar("29")}
                    className={`underline sm:no-underline sm:font-semibold ml-2 text-xl flex cursor-pointer ${moveBar === "29" ? "text-[#005261]" : "text-[#DADADA]"}`}
                  >
                    29 Agos
                  </div>
                  <div
                    className={`hidden sm:block h-[4px] w-[200px] md:w-[200px] max-w-full bg-[#005261] ${transition ? "duration-1000 delay-700" : ""} 
                      ${moveBar === "28" ? "left-0" : ""} 
                      ${moveBar === "29" ? "md:left-[200px] left-[200px]" : ""} 
                      absolute -bottom-1 font-bold transition-all`}
                  ></div>
              </div>
            </div>
         
            <div className='flex flex-col w-3/4 sm:h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
                <div className='flex text-sm text-[#666666] pt-1'>
                  <p className='flex-1'>Tipo de cadastro</p>
                  <Icon icon="iconamoon:arrow-down-2-duotone" width={30} style={{ color: "#005261" }} />
                </div>
                <p className='text-[#005261] font-semibold'>Atividades</p>
             </div>
            
           {moveBar === "28" && (
            <>
             
             
              <form onSubmit={(e) => handleForm1Submit(e)} className="space-y-8 mt-10 w-3/4 flex items-center flex-col">
              <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                Fases
                <input
                  type="text"
                  name="fasesForm1"
                  onClick={handleShow}
                  className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg"
                  value={`${faseForm} º fase`}
                  readOnly
                />
              </label>
              
              <div className={`w-full bg-[#E6EFF0] rounded-3xl overflow-hidden transition-all duration-500 ${show ? 'block max-h-[400px] duration-300 p-6' : 'hidden max-h-0 p-0'}`}>
                <ul className="space-y-4">
                  <li className="hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer" onClick={() => handleOpcaoFaseForm(1)}>fase 1</li>
                  <li className="hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer" onClick={() => handleOpcaoFaseForm(2)}>fase 2</li>
                </ul>
              </div>
              
              <label style={{ padding: '20px' }} className="flex flex-col w-full px-9 rounded-2xl bg-[#E6EFF0]">
                Série
                <input
                  type="text"
                  value={cursoEtec}
                  className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full"
                  style={{ padding: '10px' }}
                  placeholder="Digite aqui..."
                />
              </label>
              
              <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                Atividade 1
                <input
                  type="text"
                  name="atv1"
                  onChange={(e) => setForm1Atv1Dia1(e.target.value)}
                  value={form1_Atv1_Dia1}
                  className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full"
                  style={{ padding: '10px'}}
                  placeholder="Digite Aqui..."
                />
              </label>
              
              <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                Atividade 2
                <input
                  type="text"
                  name="atv2"
                  onChange={(e) => setForm1Atv2Dia2(e.target.value)}
                  value={form1_Atv2_Dia2}
                  className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full"
                  style={{ padding: '10px'}}
                  placeholder="Digite Aqui..."
                />
              </label>
              
              <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                Atividade 3
                <input
                  type="text"
                  name="atv3"
                  onChange={(e) => setForm1Atv3Dia3(e.target.value)}
                  value={form1_Atv3_Dia3}
                  className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-ful"
                  style={{ padding: '10px'}}
                  placeholder="Digite Aqui..."
                />
              </label>
              
              <div className="flex sm:flex-row justify-evenly w-full">
                <button type="submit" className="sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4">Cadastrar</button>
                <button onClick={() => setShowForm(!showForm)} type="button" className="sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4">Cancelar</button>
              </div>
              
              <input type="text" name="dia1Form1" className="hidden" value={"28"} />
            </form>
            </>
          )}
          {moveBar == "29" && (
            <>
              <form onSubmit={(e) => handleForm2Submit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
                  
                  <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                     Fases
                    <input type="text" name="fasesForm2" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'  onClick={handleShow} value={`${faseForm} º fase`} />
                  </label>
                  <div className={`w-full bg-[#E6EFF0] rounded-3xl overflow-hidden transition-all duration-500 ${show ? 'block max-h-[400px] duration-300 p-6' : 'hidden max-h-0 p-0'}`}>
                      <ul className='space-y-4'>
                        <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer' onClick={(e) =>  handleOpcaoFaseForm(1)}>fase 1</li>
                        <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer'onClick={(e) =>  handleOpcaoFaseForm(2)}>fase 2</li>
                      </ul>
                   </div>
                   
                <label style={{ padding: '20px' }} className='flex flex-col w-full px-9  rounded-2xl bg-[#E6EFF0]'>
                  Série
                  <input
                    type="text"
                    value={cursoEtec}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite aqui..."
                  />
                </label>
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                   Atividade 1
                  <input
                    type="text"
                    name="atv1"
                    value={form2_Atv1_Dia1}
                    onChange={(e) => setForm2Atv1Dia1(e.target.value)}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />
                </label>
                
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Atividade 2
                  <input
                    type="text"
                    name="atv2"
                    value={form2_Atv2_Dia2}
                    onChange={(e) => setForm2Atv2Dia2(e.target.value)}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />
                </label>   
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Atividade 3
                  <input
                    type="text"
                    name="atv3"
                    value={form2_Atv3_Dia3}
                    onChange={(e) => setForm2Atv3Dia3(e.target.value)}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />
                  
                </label>
                
                <div className='flex sm:flex-row justify-evenly w-full'>
                    <button type='submit' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
                    <button onClick={() => setShowForm(!showForm)} type='button' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                      cancelar
                    </button>
                </div>
                <input type="text" name="dia2Form2" className='hidden' value={"29"} />
              </form>
            </>
          )}
          {
            moveBar == "30" && (
              <>
                   <form onSubmit={(e) => handleForm3Submit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
                  <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                      Fases
                    <input type="text" name="fasesForm3" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'  onClick={handleShow} value={`${faseForm} º fase`} />
                  </label>
                  <div className={`w-full bg-[#E6EFF0] rounded-3xl overflow-hidden transition-all duration-500 ${show ? 'block max-h-[400px] duration-300 p-6' : 'hidden max-h-0 p-0'}`}>
                      <ul className='space-y-4'>
                        <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer' onClick={(e) =>  handleOpcaoFaseForm(1)}>fase 1</li>
                        <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer'onClick={(e) =>  handleOpcaoFaseForm(2)}>fase 2</li>
                      </ul>
                   </div>
               <label style={{ padding: '20px' }} className='flex flex-col w-full px-9  rounded-2xl bg-[#E6EFF0]'>
                  Série
                  <input
                    type="text"
                    value={cursoEtec}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px'}}
                    placeholder="Digite aqui ..."
                  />
                </label>
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                   Atividade 1
                  <input
                    type="text"
                    name="atv1"
                    value={form3_Atv1_Dia1}
                    onChange={(e) => setForm3Atv1Dia1(e.target.value)}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />
                  
                </label>
                
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Atividade 2
                  <input
                    type="text"
                    name="atv2"
                    value={form3_Atv2_Dia2}
                    onChange={(e) => setForm3Atv2Dia2(e.target.value)}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />           
                </label>
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Atividade 3
                  <input
                    type="text"
                    name="atv3"
                    value={form3_Atv3_Dia3}
                    onChange={(e) => setForm3Atv3Dia3(e.target.value)}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />
                 
                </label>
                <div className='flex sm:flex-row justify-evenly w-full'>
                    <button type='submit' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
                    <button onClick={() => setShowForm(!showForm)} type='button' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                      cancelar
                    </button>
                </div>
                <input type="text" name="dia3Form3" className='hidden' value={"30"} />
              </form>
              </>
            )
          }
          </ContainerAtividade>
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