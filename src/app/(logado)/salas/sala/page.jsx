"use client"

import "../../../globals.css";
import { useRef, useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import ModalAlunosInformacao from '@/components/Salas/sala/ModalAlunosInformacao'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image'


export default function Sala() {

  const[mostrarInformacoesAluno, setExibirInformacoesAluno] = useState(false);
  const [nomeAluno, setNomeAluno] = useState('');
  const [mostrarOpcoesDiasParticipado, setMostrarOpcoesDiasParticipado] = useState(false);
  const [diaAlertaDiaIndisponivel, setDiaAlertaDiaIndisponivel] = useState(false);

  const[exibirLista, setExibirLista] =useState('');
  const [listaDeDoador, setListaDeDoadores] = useState([]);
  const [listaDeJogadores, setListaDeJogadores] = useState([]); 
  const [nomeCampeonato, setNomeCampeonato]= useState('');
  const [nomeDoacao, setNomeDoacao]= useState('');
  const[imgDoacoesDialog1,setImgDoacoesDialog1] = useState('/images/');
  const[imgDoacoesDialog2,setImgDoacoesDialog2] = useState('/images/');

  {/*selecionar a fase */}

  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showFilterFasesOptions,setShowFilterFasesOptions]= useState(false);
  const [showFilterDataOptions, setShowFilterDataOptions] = useState(false);
  
  const [faseFilter, setFaseFilter] = useState("1 º Fase"); // Estado para armazenar a fase selecionada
  const [faseDia,setFaseDia]= useState("");
  const [dia,setDia]= useState("");

  {/*colocar o movimento da barra de navegação*/}

  const [moveBar, setMoveBar] = useState("principal");
  const [transition, setTransition] = useState(false); // Estado para controlar a transição

  const [moveBar2, setMoveBar2] = useState(1);
  const [transition2, setTransition2] = useState(false);
  
  {/* para colocar o titulo do curso e a serie selecionada */}
  const searchParams = useSearchParams();
  const urlCurso = searchParams.get("curso");
  const urlSerie = searchParams.get("serie");  

  const [retornoApi, setRetornoApi] = useState([
    {
      id: 1,
      nome: "Victoria Laurinda Camargo",
      qda: 25,
      qdp: 18.436,
      dia: 28,
      totalPontos: 60.7,
      mencao: "MB",
      doacao: [{ jogos: 700 },{oficina:15000},{PS:500},{ livros: 500 }],
      dia: new Date("2024-08-28"),
      time: [{esporte:"Futsal-Fem"},{esporte:"Queimada"},{esporte:"Volei"}]
    },
    {
      id: 2,
      nome: "Ana B Almeida Silva",
      qda: 13,
      qdp: 9.896,
      dia: 28,
      totalPontos: 25.76,
      mencao: "R",
      doacao: [{ jogos: 700 },{PS:500},{ livros: 500 }],
      dia: new Date("2024-08-28"),
      time: [{esporte:"Futsal-Fem"},{esporte:"Basquete"},{esporte:"Handebol"}]
    },
    {
      id: 3,
      nome: "Ana B Buzana Silva",
      qda: 19,
      qdp: 18.436,
      dia: 28,
      totalPontos: 48.367,
      mencao: "B",
      doacao: [{ jogos: 700 },{ livros: 500 }],
      dia: new Date("2024-08-28"),
      time: [{esporte:"Futsal-Fem"},{esporte:"Basquete"},{esporte:"Handebol"}]
    },
    {
      id: 4,
      nome: "Ana J dos Santos Olidin",
      qda: 25,
      qdp: 1200,
      dia: 28,
      totalPontos: 0,
      mencao: "I",
      doacao: [{ jogos: 700 },{ livros: 500 }],
      dia: new Date("2024-08-28"),
      time: [{esporte:"Volei"},{esporte:"Basquete"},{esporte:"Handebol"}]
    },
    {
      id: 5,
      nome: "Andre L Scalise Albanese Junior",
      qda: 25,
      qdp: 18.436,
      dia: 28,
      totalPontos: 60.7,
      mencao: "MB",
      doacao: [{ estagiario: 700 },{ jogos: 700 },{ livros: 500 }],
      dia: new Date("2024-08-28"),
      time: [{esporte:"Volei"},{esporte:"Queimada"},{esporte:"Handebol"}]

    },
    {
      id: 6,
      nome: "Andre Victor Garcia de Jesus",
      qda: 19,
      qdp: 12.098,
      dia: 28,
      totalPontos: 48.367,
      mencao: "B",
      doacao: [ {cesta:500},{ jogos: 700 },{ livros: 500 } ],
      dia: new Date("2024-08-28"),
      time: [{esporte:"Volei"},{esporte:"Basquete"},{esporte:"Handebol"}]
    },
    {
      id: 7,
      nome: "Beatriz Barros de Morais",
      qda: 25,
      qdp: 18.436,
      dia: 28,
      totalPontos: 60.7,
      mencao: "MB",
      doacao: [ {cesta:500},{ jogos: 700 },{ livros: 500 } ],
      dia: new Date("2024-08-28"),
      time: [{esporte:"Futsal-Fem"},{esporte:"Queimada"},{esporte:"Volei"}]
    },
    {
      id: 8,
      nome: "Camila Marques",
      qda: 25,
      qdp: 18.436,
      dia: 28,
      totalPontos: 60.7,
      mencao: "MB",
      doacao: [ {cesta:500},{ jogos: 700 },{ livros:500 } ],
      dia: new Date("2024-08-28"),
      time: [{esporte:"Futsal-Fem"},{esporte:"Queimada"},{esporte:"Handebol"}]
    },
    {
      id: 9,
      nome: "Carlos Daniel Lima de Abreu",
      qda: 25,
      qdp: 18.436,
      dia: 28,
      totalPontos: 60.7,
      mencao: "MB",
      doacao: [ {cesta:500},{ jogos: 700 },{ livros: 500 } ],
      dia: new Date("2024-08-28"),
      time: [{esporte:"Futsal-Masc"},{esporte:"Basquete"},{esporte:"Queimada"}]
    },
    {
      id: 10,
      nome: "Carlos Eduardo Da Silva Costa",
      qda: 25,
      qdp: 18.436,
      dia: 28,
      totalPontos: 60.7,
      mencao: "MB",
      doacao: [ {cesta:500},{ jogos: 700 },{ livros: 500 } ],
      dia: new Date("2024-08-28"),
      time: [{esporte:"Futsal-Masc"},{esporte:"Queimada"},{esporte:"Handebol"}]
    },
    {
      id: 11,
      nome: "Eduardo Lima",
      qda: 7,
      qdp: 3.765,
      dia: 28,
      totalPontos: 10.345,
      mencao: "I",
      doacao: [ {cesta:500},{ jogos: 700 },{ livros: 700 } ],
      dia: new Date("2024-08-28"),
      time: [{esporte:"Futsal-Masc"},{esporte:"Queimada"},{esporte:"Handebol"}]
    },
    {
      id: 12,
      nome: "Erick Henrique Monteiro Lima",
      qda: 7,
      qdp: 3.765,
      dia: 28,
      totalPontos: 10.345,
      mencao: "I",
      doacao: [ {cesta:500},{ jogos: 700 },{ livros: 500 } ],
      time: [{esporte:"Futsal-Masc"},{esporte:"Basquete"},{esporte:"Handebol"}]
    },
    {
      id: 13,
      nome: "Evely Gusmão de Almeida",
      qda: 25,
      qdp: 18.436,
      dia: 28,
      totalPontos: 60.7,
      mencao: "MB",
      doacao: [ {cesta:500},{ jogos: 700 },{ livros: 500 } ],
      time: [{esporte:"Basquete"},{esporte:"Volei"},{esporte:"Handebol"}]
    },
    {
      id: 14,
      nome: "Eyshila Neubert Basseto",
      qda: 25,
      qdp: 18.436,
      dia: 28,
      totalPontos: 60.7,
      mencao: "MB",
      doacao: [ {cesta:500},{ jogos: 700 },{ livros: 500 } ],
      time: [{esporte:"Basquete"},{esporte:"Futsal-Fem"},{esporte:"Queimada"}]
    },
    {
      id: 15,
      nome: "Gabriela Silva de Araujo",
      qda: 19,
      qdp: 12.098,
      dia: 28,
      totalPontos: 48.367,
      mencao: "B",
      doacao: [ {cesta:500},{ jogos: 700 },{ livros: 500 } ],
      time: [{esporte:"Futsal-Fem"},{esporte:"Volei"},{esporte:"Handebol"}]
    }
  ]);

  const [alertShowFase, setAlertShowFase] = useState(false) 
  const [alertShowDia, setAlertShowDia] = useState(false) 
  
  
  function exibirModalAlunoInformacao(aluno){
    setExibirInformacoesAluno(!mostrarInformacoesAluno)
    setNomeAluno(aluno)
  }

  {/*ativa transição */}

  useEffect(() => {
    setTransition(true); // Ativa a transição após o componente ser montado
  }, []);

  function getColorClass(mencao) {
    switch (mencao) {
      case "MB":
        return "bg-[#3ACF1F]"; // Verde para MB
      case "B":
        return "bg-[#A0C340]"; // Verde-claro para B
      case "I":
        return "bg-[#D32719]"; // Vermelho para I
      case "R":
        return "bg-[#FFC24C]"; // Laranja para R
      default:
        return "bg-gray-200"; // Cor padrão para outras menções
    }
  }

  {/*na opção de PRINCIPAL filtrar informacoes por data */}

  function handleFilterData() {
    setShowFilterDataOptions(false)
  }
  
  function handleFase(fase) {
    setShowFilterOptions(false);
    if (fase === 1) {
      setFaseFilter("1 º Fase");
    } else if (fase === 2) {
      setAlertShowFase(true);      
      setFaseFilter("2 º Fase");
    }
    setShowFilterFasesOptions(false);
  }

  function handleDataTabela(diaSelecionado) {
    setShowFilterOptions(false);
    if (diaSelecionado === "29 ago" || diaSelecionado === "30 ago") {
      setAlertShowDia(true);
      setShowFilterDataOptions(false);
    } else {
      setDia(diaSelecionado);
      setShowFilterDataOptions(false);
    }
  }
 
  function handleDiaInformacoes(diaSelecionado) {
    setMostrarOpcoesDiasParticipado(false);
    if (diaSelecionado === 29 || diaSelecionado === 30) {
      setMostrarOpcoesDiasParticipado(true);
      setDiaAlertaDiaIndisponivel(true);
    } else {
      setMostrarOpcoesDiasParticipado(true);
      setDiaAlertaDiaIndisponivel(false);
    }
  }

  const handleCloseAlertFase = () => {
    setAlertShowFase(false);
  };

  const handleCloseAlertDia = () => {
    setAlertShowDia(false);
  };


  function mostrarNomeDoacaoDialog1(nome, img) {
    setNomeDoacao(nome);
    setImgDoacoesDialog1(img);
  }


  function mostrarNomeCampeonatoDialog2(nome,img){
    setNomeCampeonato(nome)
    setImgDoacoesDialog2(img);

  }


  const [isEditing, setIsEditing] = useState(false);

  const [originalFormData, setOriginalFormData] = useState({
    jogos: ["", "", "", "", "", "","","","","","","","","","","",""],
    pontuacao: ["", "", "", "", "", "","","","","",""],
    extras: ["", "", "", "", "", "","","","","",""],
  });

  const [formData, setFormData] = useState({ ...originalFormData });

  const handleInputChange = (index, field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: prevState[field].map((item, i) => (i === index ? value : item))
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
    // Save the current form data to allow reverting
    setOriginalFormData({ ...formData });
  };

  const handleSaveClick = () => {
    console.log("Dados Submetidos:", formData);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Revert to original data and exit editing mode
    setFormData({ ...originalFormData });
    setIsEditing(false);
  };

    {/*função para aplicar responsividade em dispositivos com telas menores */}
   
    const [larguraJanela, setLarguraJanela] = useState(0);
  
    useEffect(() => {
        const handleResize = () => {
            setLarguraJanela(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
  
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <div className='pl-4 pr-4 '>

        {/*Exibe o alerta quando a 2 fase não está disponivel*/}
        {alertShowFase && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="mx-auto w-[290px]  h-[360px] sm:w-[390px] bg-white p-6 rounded-3xl shadow-lg relative">
                <Image width={200} height={154} 
                  src="/images/alert-fase.png"
                  className="absolute -top-[43px] left-[40px] sm:-top-[48px] sm:left-[45px]  sm:h-[179px] sm:w-[307px]"
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
                    Esta fase não está disponível para visualização
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
       {/*Exibe o alerta quando o dia não está disponivel*/}
        {alertShowDia && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="mx-auto w-[290px] h-[360px] sm:w-[390px]  bg-white p-6 rounded-3xl shadow-lg relative">
                <Image
                  src="/images/alert-fase.png"
                  width={200}
                  height={154}
                  className="absolute -top-[43px] left-[40px] sm:-top-[48px] sm:left-[45px] sm:h-[179px] sm:w-[307px]"
                  alt="Sucesso"
                />
                <button
                  className="absolute top-4 right-6   hover:text-gray-400 "
                  onClick={handleCloseAlertDia}
                >
                  ✕
                </button>
                <div className="mt-28 text-center">
                  <h3 className="font-bold text-2xl">Atenção!</h3>
                  <p className="py-4 pb-8 text-xl">
                     Este dia não está disponível para visualização
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/*mostrar o modal quando a pessoa clicar na informação do aluno 
        nela tem que aparecer o nome (dentro do modalAlunsInformacao), os jogos que ela fez, pontuação, e ponto extra.
        Esse modal é editavel. Falta mostrar a tabela nela de campeonatos de quadra, campeonatos de patio, oficinas
        */}

        <dialog id="my_modal_3" className="modal w-full">
           <div className="modal-box relative sm:max-w-full sm:w-[762px] ">
               
                 <div className='w-full sm:max-w-full sm:w-[667px] flex flex-col gap-4'>
                    {/*cabeçalho */}
                    <div className='flex sm:flex-row flex-col justify-center '>
                      <form method="dialog" className='w-1/2 relative'>
                        <button className="absolute left-2 ">
                          <Icon icon="solar:arrow-left-linear"
                            className="hover:scale-125 cursor-pointer duration-100 transition-all"
                            style={{ color: "#005261" }} width={30} onClick={exibirModalAlunoInformacao}/>

                        </button>
                      </form>
                      <div className='w-full text-center '>
                        <h1 className='text-[#005261] text-lg font-semibold'>Quantidade de Pontos</h1>
                      </div>
                      {/*filtrar por dia */}
                        <div className='flex w-[300px] sm:w-[320px]  justify-end flex-col'>
                          <button
                            className="mx-auto w-full h-[38px]  shadow-xl bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center justify-evenly relative" // Adicione 'relative' para posicionar elementos filhos
                            onClick={() => setMostrarOpcoesDiasParticipado(!mostrarOpcoesDiasParticipado)}
                          >
                            <Image src="/images/img-calendario-filtro.svg"  width={20} height={20} className="ml-2 h-6 w-6" />
                            <p className='text-[#005261] font-medium'> 28 ago</p>
                            <Icon icon="solar:alt-arrow-down-line-duotone" className='text-[#005261]' width={30} />
                          </button>
                          <div>
                           <p className={`${diaAlertaDiaIndisponivel ? 'text-red-500' : ''} text-end`}>
                              {diaAlertaDiaIndisponivel ? 'Dia indisponível' : ''}
                            </p>
                          </div>
                        </div>
                        {/*mudar de forma dinamica, para aparecer os dias cadastrados */}
                        
                        {mostrarOpcoesDiasParticipado && (
                            <>
                              <div className="fixed inset-0 bg-black bg-opacity-20 z-50"></div>
                              <div className="absolute bg-white shadow-md rounded-lg mt-20 right-10 w-48 py-2 z-50">
                                <ul>
                                <li 
                                    onClick={() => {handleDiaInformacoes(28); setMostrarOpcoesDiasParticipado(!mostrarOpcoesDiasParticipado) }}
                                    className="cursor-pointer hover:bg-gray-100 py-1 px-3"
                                  >
                                    28
                                  </li>
                                  <li 
                                    onClick={() => {handleDiaInformacoes(29); setMostrarOpcoesDiasParticipado(!mostrarOpcoesDiasParticipado)}}
                                    className="cursor-pointer hover:bg-gray-100 py-1 px-3"
                                  >
                                    29
                                  </li>
                                  <li 
                                    onClick={() => {handleDiaInformacoes(30); setMostrarOpcoesDiasParticipado(!mostrarOpcoesDiasParticipado)}}
                                    className="cursor-pointer hover:bg-gray-100 py-1 px-3"
                                  >
                                    30
                                  </li>
                                </ul>
                              </div>
                          </>
                         )} 
                    </div>
                    <div className='flex justify-start bg-[#005261] w-[300px]  p-2 rounded-lg'>
                      <p className='text-white'>Aluno:</p>
                      <p className='text-white pl-1'>--</p>
                    </div>

                    {/*navegação das opções*/}
                    <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-center p-2 sm:gap-8 sm:mx-auto mb-4 border-b-4 border-b-[#DADADA] relative">
                      <div
                        onClick={() => setMoveBar2("Jogos de Pátio")}
                        className={` underline sm:no-underline text-base flex items-center gap-2  cursor-pointer ${moveBar2 === "Jogos de Pátio" ? "text-[#005261]" : "text-[#DADADA]"}`}
                      >
                        <Image src="../images/home-icon.svg" alt="" width={20} height={20} className='sm:block hidden'/>
                        Jogos de Pátio
                      </div>
                      <div
                        onClick={() => setMoveBar2("Campeonatos de Quadra")}
                        className={` underline sm:no-underline sm:ml-2 text-base flex cursor-pointer ${moveBar2 === "Campeonatos de Quadra" ? "text-[#005261]" : "text-[#DADADA]"}`}
                      >
                        Campeonatos de Quadra
                      </div>
                      <div
                        onClick={() => setMoveBar2("Campeonatos de Pátio")}
                        className={`underline sm:no-underline text-base cursor-pointer ${moveBar2 === "Campeonatos de Pátio" ? "text-[#005261]" : "text-[#DADADA]"}`}
                      >
                        Campeonatos de Pátio
                      </div>
                      <div
                        onClick={() => setMoveBar2("Oficinas")}
                        className={`underline sm:no-underline text-base cursor-pointer ${moveBar2 === "Oficinas" ? "text-[#005261]" : "text-[#DADADA]"}`}
                      >
                        Oficinas
                      </div>
                      <div
                        className={`sm:hidden xl:block h-[4px] w-[165px] bg-[#005261] ${transition2 ? "duration-700 delay-100" : ""}
                          ${moveBar2 === "Jogos de Pátio" ? "left-0" : ""}
                          ${moveBar2 === "Campeonatos de Quadra" ? "left-[180px]" : ""}
                          ${moveBar2 === "Campeonatos de Pátio" ? "left-[380px]" : ""}
                          ${moveBar2 === "Oficinas" ? "left-[500px]" : ""}
                          absolute -bottom-1 font-bold`}
                      ></div>
                    </div>
                  </div>
                  <div className={`${larguraJanela < 600 ? 'overflow-x-auto' : ''} w-full`}>
                    <table className="w-full table-auto border-collapse border border-gray-300">
                      <thead className="bg-[#005261] text-white">
                        <tr>
                          <th className="w-[200px] h-[51px] border-r-4 border-white sticky left-0 bg-[#005261] z-20">Jogos</th>
                          <th className="w-[200px] h-[51px] border-r-4 border-white">Pontuação</th>
                          <th className="w-[200px] h-[51px] border-r-4 border-white">Extra</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.jogos.map((jogo, index) => (
                          <tr key={index} className="border-b  border-gray-300">
                            <td className="h-[50px] border-r border-gray-300 p-1 text-center sticky left-0 bg-white z-10">
                              {isEditing ? (
                                <input
                                  type="text"
                                  value={formData.jogos[index]}
                                  onChange={(e) => handleInputChange(index, 'horarios', e.target.value)}
                                />
                              ) : (
                                formData.jogos[index]
                              )}
                            </td>
                            <td className="h-[50px] border border-gray-300 p-1 text-center">
                              {isEditing ? (
                                <input
                                  type="text"
                                  value={formData.pontuacao[index]}
                                  onChange={(e) => handleInputChange(index, 'jogos', e.target.value)}
                                />
                              ) : (
                                formData.pontuacao[index]
                              )}
                            </td>
                            <td className="h-[50px] border-r border-gray-300 p-1 text-center">
                              {isEditing ? (
                                <input
                                  type="text"
                                  value={formData.extras[index]}
                                  onChange={(e) => handleInputChange(index, 'timeA', e.target.value)}
                                />
                              ) : (
                                formData.extras[index]
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div>
                     <div className="flex sm:justify-between items-center  flex-row gap-4 mt-4 pl-8 sm:pl-4">
                      {isEditing ? (
                        <>
                          <button onClick={handleSaveClick} className="w-[180px] h-[60px] rounded-xl bg-[#005261] text-white px-4 py-2 ">
                            Salvar
                          </button>
                          <button onClick={handleCancelClick} className="w-[180px] h-[60px] rounded-xl bg-[#E6EFF0] text-[#005261] px-4 py-2">
                            Cancelar
                          </button>
                        </>
                      ) : (
                        <button onClick={handleEditClick} className="w-[180px] h-[60px] rounded-xl bg-[#005261] text-white px-4 py-2 ">
                          Editar
                        </button>
                      )}
                  </div>
                 </div> 
           </div>
        </dialog>
    
       
        {/*botão para selecioanr a fase */}
       <div className='mx-auto pl-5 md:pl-20 flex flex-col gap-10 m-5'>
         <div className='max-w-[1400px]  flex flex-row justify-between'>
              <button>
                <Link href={'/salas'}>
                  <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
                </Link>
              </button>
              <div className='flex justify-center items-center relative '>
                <div
                  onClick={() => setShowFilterFasesOptions(!showFilterFasesOptions)}
                  className="w-[170px] bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center mr-4"
                >
                  <Icon icon="mynaui:filter" className="mr-2 h-6 w-6" />
                  Fases
                
                </div>
                    {showFilterFasesOptions && (
                    <>
                      <div className="fixed inset-0 bg-black bg-opacity-20 z-50"></div>
                      <div className="absolute bg-white shadow-md rounded-lg mt-40 right-0 w-48 py-2 z-50">
                        <ul>
                          <li 
                            onClick={() => handleFase(1)}
                            className="cursor-pointer hover:bg-gray-100 py-1 px-3"
                          >
                            1 º fase
                          </li>
                          <li 
                            onClick={() => handleFase(2)}
                            className="cursor-pointer hover:bg-gray-100 py-1 px-3"
                          >
                            2 º fase
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
              </div>
             
          </div>
          <h1 className="text-2xl font-semibold">
            {urlSerie} º {urlCurso}
          </h1>
          <p className='-mt-5 text-[#DADADA]'>{faseFilter}</p>
       </div>
      {/*esta parte é a navegação das opções */}
      <div className="flex justify-center sm:justify-start sm:w-[670px] sm:max-w-full md:w-[920px] gap-4 md:gap-20 mx-auto mb-4 border-b-4 border-b-[#DADADA] relative">
        <div
          onClick={() => setMoveBar("principal")}
          className={` sm:font-semibold text-base sm:text-xl flex items-center gap-2  cursor-pointer ${moveBar === "principal" ? "text-[#005261]" : "text-[#DADADA]"}`}
        >
          <Image src="../images/home-icon.svg" alt="" width={20} height={20} className='sm:block hidden'/>
          Principal
        </div>
        <div
          onClick={() => setMoveBar("doacoes")}
          className={`sm:font-semibold ml-2 text-base sm:text-xl flex cursor-pointer ${moveBar === "doacoes" ? "text-[#005261]" : "text-[#DADADA]"}`}
        >
          Doações
        </div>
        <div
          onClick={() => setMoveBar("campeonato")}
          className={`sm:font-semibold text-base sm:text-xl cursor-pointer ${moveBar === "campeonato" ? "text-[#005261]" : "text-[#DADADA]"}`}
        >
          Campeonatos
        </div>
        <div
          className={`hidden sm:block h-[4px] w-[100px] md:w-[124px] bg-[#005261] ${transition ? "duration-700 delay-100" : ""} 
            ${moveBar === "principal" ? "left-0" : ""} 
            ${moveBar === "doacoes" ? "md:left-40 left-30" : ""} 
            ${moveBar === "campeonato" ? "md:left-[350px]" : ""} 
            absolute -bottom-1 font-bold`}
        ></div>
      </div>
  
      {moveBar === "principal" && (
        <div className="md:w-[85%] mx-auto">
          <div className="overflow-x-auto rounded-lg bg-[#005261]">
            <div className="flex">
              <div className="w-[300px]">
                <div className="p-3 font-semibold border border-white border-r-2 text-white">Alunos</div>
                {retornoApi.map((aluno) => (
                  <div key={aluno.id} className="pt-[10px] pl-[4px] h-[59px] Right-to-left bg-white border border-[#DADADA]">
                    {aluno.nome}
                  </div>
                ))}
              </div>
              <div className="w-3/4 flex overflow-x-auto">
                <div className="min-w-[200px]">
                  <div className="p-3 font-bold border border-white border-r-2 text-white sm:text-center">QDA</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id}  className="sm:text-center pt-[10px] h-[59px] pl-4 Right-to-left bg-white border border-[#DADADA]">
                      {aluno.qda}
                    </div>
                  ))}
                </div>
                <div className="min-w-[200px]">
                  <div className="p-3 font-bold border border-white border-r-2 text-white sm:text-center">QDP</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className="sm:text-center pt-[10px]  h-[59px]  pl-4 Right-to-left bg-white border border-[#DADADA]" onClick={() => {document.getElementById('my_modal_3').showModal();exibirModalAlunoInformacao(aluno.nome)}}>
                      {aluno.qdp}
                    </div>
                  ))}
                </div>
                <div className="min-w-[200px]">
                  <div 
                  onClick={() => setShowFilterDataOptions(!showFilterDataOptions)}
                  className="p-3 font-bold border border-white border-r-2 text-white sm:text-center relative">
                    <p className='flex justify-center items-center'>
                      DATA
                      <Icon icon="solar:alt-arrow-down-linear" width={20}/>
                    </p>
                    {showFilterDataOptions && (
                        <>
                          <div className="fixed inset-0 bg-black bg-opacity-20 z-50"></div>
                          <div className="text-center absolute mt-7 bg-white shadow-md rounded-lg  right-0 w-48 py-2 z-50">
                            <ul>
                              <li 
                                
                                className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                              >
                                {faseDia == 1? "28 ago"  :'28 set'}
                              </li>
                              <li 
                                onClick={() => handleDataTabela("29 ago")}
                                className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                              >
                                {faseDia == 1? "29 ago": '29 set'}
                              </li>
                              <li 
                                onClick={() => handleDataTabela("30 ago")}
                                className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                              >
                                {faseDia == 1? "30 ago": '30 set' }
                              </li>
                            </ul>
                          </div>
                        </>
                      )}
                  </div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className="text-center pt-[10px]  h-[59px]  Right-to-left bg-white border border-[#DADADA]">
                          {faseDia === 1 ? "28 ago" : "28 set"}
                    </div>
                  ))}
                </div>
                <div className="min-w-[200px]">
                  <div className="p-3 font-bold border border-white border-r-2 text-white sm:text-center">Total Geral</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className="sm:text-center pt-[10px] h-[59px] pl-4 Right-to-left bg-white border border-[#DADADA]">
                      {aluno.totalPontos}
                    </div>
                  ))}
                </div>
                <div className="min-w-[200px] border border-[#DADADA] border-l-2 text-center">
                  <div className="p-3 font-bold text-white text-center">MENÇÕES</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className={`pt-[10px] Right-to-left h-[59px]  border border-[#DADADA] ${getColorClass(aluno.mencao)}`}>
                      {aluno.mencao}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {moveBar === "doacoes" && (
       <div className='mx-auto p-4 w-[920px] max-w-full grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center	bg-[#dbdada] rounded-3xl'>
          {
            [
              {doacao:'Lacres',imgSrc:'/images/img-doacao-lacres.svg',vencimento:'18 ago'},
              {doacao:'Livros',imgSrc:'/images/img-doacao-livros.svg',vencimento:'15 ago'},
              {doacao:'Prontos Socorros',imgSrc:'/images/img-doacao-socorros.svg',vencimento:'10 ago'},
            ].map((doacoes,index) => (            
              <section className='flex flex-row sm:flex-col md:flex-row px-4 py-4 sm:py-0 sm:px-0 xl:py-8 xl:px-8 h-[110px] max-h-full w-[371px] max-w-full bg-white rounded-lg'>
                <div className=' md:w-full grid grid-cols-[40px_1fr] items-center h-[75px] '>
                  <div className='w-[40px] h-[40px] flex justify-center items-center bg-[#005261] rounded-lg'>
                    <Image src={doacoes.imgSrc} width={25} height={25}/>
                  </div>
                  <h1 className='w-full text-lg text-[#005261] flex items-center pl-2 sm:text-wrap xl:text-nowrap'>
                    {doacoes.doacao}
                  </h1>
                  <div className='col-span-2'>
                    <span className='font-medium text-base text-[#b1b1b1] pl-1'>Vence em {doacoes.vencimento}</span>
                  </div>
                </div>
                <div className='basis-2/3 mt-3 sm:mt-2 xl:mt-3'>
                  <button   onClick={() => { document.getElementById('my_modal_1').showModal(); mostrarNomeDoacaoDialog1(doacoes.doacao, doacoes.imgSrc) }} className='mx-auto block w-[80px] h-[32px] bg-[#E6EFF0] text-[#005261] font-semibold rounded-lg'>
                    Ver mais
                  </button>
                </div>
              </section>
            ))

          }
      
        </div>
      )}
      {moveBar === "campeonato" && (
        
        <div className='mx-auto p-4 w-[920px] max-w-full grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center	bg-[#dbdada] rounded-3xl'>
            {[
              { nome: 'Futebol Masculino', imgSrc: '/images/img-futsal.svg', status: 'Cadastrado' },
              { nome: 'Futebol Feminino', imgSrc: '/images/img-futsal.svg', status: 'Cadastrado' },
              { nome: 'Basquete', imgSrc: '/images/img-basquete.svg', status: 'Cadastrado' },
              { nome: 'Queimada', imgSrc: '/images/img-queimada.svg', status: 'Cadastrado' },
              { nome: 'Vôlei', imgSrc: '/images/img-volei.svg', status: 'Cadastrado' },
              { nome: 'Ping Pong', imgSrc: '/images/img-ping-pong.svg', status: 'Não Cadastrado' },
              { nome: 'Xadrez', imgSrc: '/images/img-xadrez.svg', status: 'Cadastrado' },
              { nome: 'Damas', imgSrc: '/images/img-damas.svg', status: 'Não Cadastrado' }
            ].map((atividade, index) => (
              <section
               onClick={()=>{document.getElementById('my_modal_2').showModal(); mostrarNomeCampeonatoDialog2(atividade.nome, atividade.imgSrc)}} 
               className='flex flex-row sm:flex-col md:flex-row items-center justify-center  px-4 py-4 sm:py-0 sm:px-0 xl:py-8 xl:px-8 h-[110px] max-h-full w-[371px] max-w-full bg-white  rounded-lg '>
                <div className='w-full flex sm:flex-col mt-2 md:flex-row pl-2 items-center'>
                  <div className=' w-[40px] h-[40px] flex justify-center items-center bg-[#005261] rounded-lg'>
                    <Image src={atividade.imgSrc} width={25} height={25} alt={atividade.nome} />
                  </div>
                  <div>
                    <p className='font-medium text-base md:text-lg text-[#005261]  pl-2 sm:text-wrap xl:text-nowrap'>{atividade.nome}</p>
                  </div>
                </div>
                <div className='basis-2/3 mt-3 sm:mt-0 md:mt-3'>
                  {atividade.status === 'Cadastrado' ? (
                    <div className=' border  bg-[#E8FBE4] block md:block mx-auto text-[#3ACF1F] h-[23px] w-[91px] rounded-lg px-1'>Cadastrado</div>
                  ) : (
                    <div className=' text-[#D32719] block md:block mx-auto  text-nowrap bg-[#FDD5D1] h-[23px] w-[123px] rounded-lg px-1'>Não Cadastrado</div>
                  )}
                </div>

              </section>
            ))}
          </div>
      )}
      {/*modal da opção de doações */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box overflow-visible overflow-x-hidden">
          <div className="flex">
            <form method="dialog" className='w-1/2 relative border-none'>
                <button className="absolute left-2 ">
                  <Image
                    src="/images/fechar-menu.svg"
                    className="hover:scale-125 cursor-pointer duration-100 transition-all"
                    width={30}
                    height={25}
                   />
                </button>
            </form>
            <div className="w-full">
              <h1 className="text-2xl text-[#005261] font-bold">Doação</h1>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <div className="flex gap-2">
              <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#005261] rounded-lg">
                <Image src={imgDoacoesDialog1} width={25} height={25} alt="imagem doações" />
              </div>
              <div>
                <p className="text-lg text-[#005261] font-semibold">{nomeDoacao}</p>
                <p>
                  Pontuação: <span className="text-[#3ACF1F]">0000</span>
                </p>
              </div>
            </div>
            <div>
              <p>Data para Limite</p>
              <p className="text-end">21 ago</p>
            </div>
          </div>
          <form>
            <label>
              <h2 className="mt-4 ml-4 text-lg font-medium text-[#005261]">Adicione um Novo Jogador</h2>
              <div className="flex justify-around gap-4 pt-2">
                <input type="text" placeholder="Digite nome do aluno" className="w-[250px] md:w-[350px] max-w-full p-1 border border-gray-400" />
                <button className="bg-[#005261] w-[36px] h-[36px] grid place-items-center" type="submit">
                  <Image src="/images/enviar.svg" width={20} height={20} alt="Enviar" />
                </button>
              </div>
            </label>
          </form>
          <div className="mt-4 pl-3 sm:pb-20 pt-6 h-full bg-[#efefef]">
            <div className="flex items-center justify-between pb-4">
              <h1 className="text-lg font-medium">Alunos que Doaram</h1>
              <span className="text-[#979797] mr-4">0 Alunos</span>
            </div>
            <div className="w-full overflow-auto space-y-2 h-[220px]">
              <p>Fulano Ciclano Silano Beltrano</p>
              <p>Fulano Ciclano Silano Beltrano</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
            </div>
          </div>
          <div className='flex justify-end pt-2'>
            <button className='px-2 py-1 bg-[#005261] text-white  rounded-lg'>
              editar
            </button>
          </div>
          <div className="flex justify-between items-center py-4 px-4">
            <h2 className="font-semibold text-lg">Total de Pontos</h2>
            <p className="text-bold text-[#3ACF1F] font-medium">00000</p>
          </div>
        </div>
      </dialog>
      
      {/*modal da opção de campeonatos */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box overflow-visible overflow-x-hidden">
          <div className="flex">
          <form method="dialog" className='w-1/2 relative border-none'>
                <button className="absolute left-2 ">
                  <Image
                    src="/images/fechar-menu.svg"
                    className="hover:scale-125 cursor-pointer duration-100 transition-all"
                    width={30}
                    height={25}
                 
                   />
                </button>
            </form>
            <div className="flex justify-between w-full">
              <h1 className="text-2xl text-[#005261] font-bold">Campeonatos</h1>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <div className="flex gap-2">
              <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#005261] rounded-lg">
              <Image src={imgDoacoesDialog2} width={25} height={25} alt="imagem esporte" />
              </div>
              <div>
                <p className="text-lg text-[#005261] font-semibold">{nomeCampeonato}</p>
                <p>
                  Pontuação: <span className="text-[#3ACF1F]">0000</span>
                </p>
              </div>
            </div>
            <div>
              <p>Data para Limite</p>
              <p className="text-end">21 ago</p>
            </div>
          </div>
          <form>
            <label>
              <h2 className="mt-4 ml-4 text-lg font-medium text-[#005261]">Adicione um Novo Jogador</h2>
              <div className="flex justify-around gap-4 pt-2">
                <input type="text" placeholder="Digite nome do aluno" className="w-[250px] md:w-[350px] max-w-full p-1 border border-gray-400" />
                <button className="bg-[#005261] w-[36px] h-[36px] grid place-items-center" type="submit">
                  <Image src="/images/enviar.svg" width={20} height={20} alt="Enviar" />
                </button>
              </div>
            </label>
          </form>
          <div className="mt-4 pl-3 sm:pb-20 pt-6 h-full bg-[#efefef]">
            <div className="flex items-center justify-between pb-4">
              <h1 className="text-lg font-medium">Alunos que Doaram</h1>
              <span className="text-[#979797] mr-4">0 Alunos</span>
            </div>
            <div className="w-full overflow-auto space-y-2 h-[220px]">
              <p>Fulano Ciclano Silano Beltrano</p>
              <p>Fulano Ciclano Silano Beltrano</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
            </div>
          </div>
          <div className='flex justify-end pt-2'>
            <button className='px-2 py-1 bg-[#005261] text-white  rounded-lg'>
              editar
            </button>
          </div>
          <div className="flex justify-between items-center py-4 px-4">
            <h2 className="font-semibold text-lg">Total de Pontos</h2>
            <p className="text-bold text-[#3ACF1F] font-medium">00000</p>
          </div>
        </div>
      </dialog>
    </div>
  );
} 

