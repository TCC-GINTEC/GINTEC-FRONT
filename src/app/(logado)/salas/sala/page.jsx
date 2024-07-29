"use client";
import { useRef, useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image'


export default function Sala() {
  const [mostrarLista, setMostrarLista] = useState(false) 

  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showFilterFasesOptions,setShowFilterFasesOptions]= useState(false)
  const [showFilterDataOptions, setShowFilterDataOptions] = useState(false);
  
  const [faseFilter, setFaseFilter] = useState("1 º Fase"); // Estado para armazenar a fase selecionada
  const [faseDia,setFaseDia]= useState("");
  const [dia,setDia]= useState("");

  const [moveBar, setMoveBar] = useState("principal");
  const [transition, setTransition] = useState(false); // Estado para controlar a transição
  
  
  const searchParams = useSearchParams();
  const urlCurso = searchParams.get("curso");
  const urlSerie = searchParams.get("serie");

  {/*ter ideia do que ela vai inserir de doação */}
  
  const [doacoesInseridas, setDoacoesInseridas] = useState([
    "estagiario",
    "domino",
    "PS",
    "oficina",
    "jogos",
    "livros"
  ]);

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

  const esportes = [
    ["Basquete", "Volei", "Queimada"],
    ["Futsal-Masc", "Futsal-Fem", "Handebol"],
  ];

  const [alertShowFase, setAlertShowFase] = useState(false) 
  const [alertShowDia, setAlertShowDia] = useState(false) 

  
  
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

  function handleData(diaSelecionado) {
    setShowFilterOptions(false);
    if (diaSelecionado === "29 ago" || diaSelecionado === "30 ago") {
      setAlertShowDia(true);
      setShowFilterDataOptions(false);
    } else {
      setDia(diaSelecionado);
      setShowFilterDataOptions(false);
    }
  }

  const handleCloseAlertFase = () => {
    setAlertShowFase(false);
  };

  const handleCloseAlertDia = () => {
    setAlertShowDia(false);
  };

  // Estado do formulário para armazenar os valores dos inputs
  const [formData, setFormData] = useState({});

  /**
   * Função handleChange
   * Atualiza o estado formData com o valor do input correspondente ao alunoId e doacao
   * @param {number} alunoId - ID do aluno
   * @param {string} doacao - Nome da doação
   * @param {string} value - Valor do input
   */

  const handleChange = (alunoId, doacao, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [alunoId]: {
        ...prevFormData[alunoId],
        [doacao]: value
      }
    }));
  };


  /**
   * Função handleFormularioPontos
   * Lida com a submissão do formulário, evitando o comportamento padrão e processando os dados do estado formData
   * @param {Event} e - Evento de submissão do formulário
   */
  const handleFormularioPontos = (e) => {
    e.preventDefault();
  
    const hasValidData = Object.values(formData).some(
      alunoData => Object.values(alunoData).some(value => value.trim() !== '')
    );
  
    if (!hasValidData) {
      alert('Por favor, preencha pelo menos um campo.');
      return;
    }
  
    console.log(formData);
  };


  const handleFecharLista = () => {
    setFecharLista(false);
  };

  const divRef = useRef(null);
  const [largura, setLargura] = useState(); // Inicializa com valor maior que 700

  useEffect(() => {
    const updateWidth = () => {
      if (divRef.current) {
        setLargura(divRef.current.offsetWidth);
        console.log('Largura da div:', divRef.current.offsetWidth); // Log para depuração
      }
    };

    updateWidth;
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
  return (
    <div className=''>
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
     
      <div className="flex justify-center sm:justify-start md:w-3/4  gap-4 md:gap-20 mx-auto mb-4 border-b-4 border-b-[#DADADA] relative">
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
                    <div key={aluno.id} className="sm:text-center pt-[10px]  h-[59px]  pl-4 Right-to-left bg-white border border-[#DADADA]">
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
                                onClick={() => handleData("29 ago")}
                                className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                              >
                                {faseDia == 1? "29 ago": '29 set'}
                              </li>
                              <li 
                                onClick={() => handleData("30 ago")}
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
        <div ref={divRef} className={`w-[841px] max-w-full grid ${largura < 720?'grid-cols-1 justify-items-center	':'grid-cols-2'}  gap-5 mx-auto bg-[#dbdada] p-8 rounded-3xl`}>
          <div className='flex justify-evenly items-center w-[371px] max-w-full h-[105px] bg-white rounded-lg '>
            <div>
              <div className='w-[40px] h-[40px] flex justify-center  items-center bg-[#005261] rounded-lg'>
                <Image src='/images/lacres.svg' width={25} height={25}/>
              </div>
              <span className='font-medium text-base text-[#b1b1b1]'>Vence em 21 ago</span>
            </div>
            <button onClick={() => setMostrarLista(!mostrarLista)} className='w-[80px] h-[32px] bg-[#E6EFF0] text-[#005261] font-semibold rounded-lg'>
              Ver mais
            </button>
          </div>
          <div className='flex justify-evenly items-center w-[371px] max-w-full h-[105px] bg-white rounded-lg '>
            <div>
              <div className='w-[40px] h-[40px] flex justify-center  items-center bg-[#005261] rounded-lg'>
                <Image src='/images/lacres.svg' width={25} height={25}/>
              </div>
              <span className='font-medium text-base text-[#b1b1b1]'>Vence em 21 ago</span>
            </div>
            <button onClick={() => setMostrarLista(!mostrarLista)} className='w-[80px] h-[32px] bg-[#E6EFF0] text-[#005261] font-semibold rounded-lg'>
              Ver mais
            </button>
          </div>
          <div className='flex justify-evenly items-center w-[371px] max-w-full h-[105px] bg-white rounded-lg '>
            <div>
              <div className='w-[40px] h-[40px] flex justify-center  items-center bg-[#005261] rounded-lg'>
                <Image src='/images/lacres.svg' width={25} height={25}/>
              </div>
              <span className='font-medium text-base text-[#b1b1b1]'>Vence em 21 ago</span>
            </div>
            <button onClick={() => setMostrarLista(!mostrarLista)} className='w-[80px] h-[32px] bg-[#E6EFF0] text-[#005261] font-semibold rounded-lg'>
              Ver mais
            </button>
          </div>
        </div>
      )}
      {moveBar === "campeonato" && (
       <div ref={divRef} className={`w-[841px] max-w-full grid ${largura < 720?'grid-cols-1 justify-items-center	':'grid-cols-2'}  gap-5 mx-auto bg-[#dbdada] p-8 rounded-3xl`}>
          
          <div className='flex justify-evenly items-start pt-4 w-[371px] max-w-full h-[105px] bg-white rounded-lg '>
            <div className='flex justify-evenly gap-2 border border-red-500  items-center'>
              <div className='w-[40px] h-[40px] flex justify-center  items-center bg-[#005261] rounded-lg'>
                <Image src='/images/img-futsal.svg' width={25} height={25}/>
              </div>
              <div>
                <p className='font-medium  text-[#b1b1b1] text-lg'>Futebol </p>
                <p className='font-medium  text-[#b1b1b1] text-lg'>Masculino</p>
              </div>
            </div>
            <div className='bg-[#E8FBE4] text-[#3ACF1F] h-[23px] rounded-lg px-1 '>Cadastrado</div>
            <div className='text-[#D32719] bg-[#FDD5D1]  h-[23px] rounded-lg px-1 hidden'>Não Cadastrado</div>
          </div>

          <div className='flex justify-evenly items-start pt-4 w-[371px] max-w-full h-[105px] bg-white rounded-lg '>
            <div className='flex justify-evenly gap-2 border border-red-500  items-center'>
              <div className='w-[40px] h-[40px] flex justify-center  items-center bg-[#005261] rounded-lg'>
                <Image src='/images/img-futsal.svg' width={25} height={25}/>
              </div>
              <div>
                <p className='font-medium  text-[#b1b1b1] text-lg'>Futebol </p>
                <p className='font-medium  text-[#b1b1b1] text-lg'>Femino</p>
              </div>
            </div>
            <div className='bg-[#E8FBE4] text-[#3ACF1F] h-[23px] rounded-lg px-1 '>Cadastrado</div>
            <div className='text-[#D32719] bg-[#FDD5D1]  h-[23px] rounded-lg px-1 hidden'>Não Cadastrado</div>
          </div>

          <div className='flex justify-evenly items-start pt-4 w-[371px] max-w-full h-[105px] bg-white rounded-lg '>
            <div className='flex justify-evenly gap-2 border border-red-500  items-center'>
              <div className='w-[40px] h-[40px] flex justify-center  items-center bg-[#005261] rounded-lg'>
                <Image src='/images/img-basquete.svg' width={25} height={25}/>
              </div>
              <div>
                <p className='font-medium  text-[#b1b1b1] text-lg'>Basquete </p>
              </div>
            </div>
            <div className='bg-[#E8FBE4] text-[#3ACF1F] h-[23px] rounded-lg px-1 '>Cadastrado</div>
            <div className='text-[#D32719] bg-[#FDD5D1]  h-[23px] rounded-lg px-1 hidden'>Não Cadastrado</div>
          </div>

          <div className='flex justify-evenly items-start pt-4 w-[371px] max-w-full h-[105px] bg-white rounded-lg '>
            <div className='flex justify-evenly gap-2 border border-red-500  items-center'>
              <div className='w-[40px] h-[40px] flex justify-center  items-center bg-[#005261] rounded-lg'>
                <Image src='/images/img-queimada.svg' width={25} height={25}/>
              </div>
              <div>
                <p className='font-medium  text-[#b1b1b1] text-lg'>Queimada </p>
              </div>
            </div>
            <div className='bg-[#E8FBE4] text-[#3ACF1F] h-[23px] rounded-lg px-1 '>Cadastrado</div>
            <div className='text-[#D32719] bg-[#FDD5D1]  h-[23px] rounded-lg px-1 hidden'>Não Cadastrado</div>
          </div>

          <div className='flex justify-evenly items-start pt-4 w-[371px] max-w-full h-[105px] bg-white rounded-lg '>
            <div className='flex justify-evenly gap-2 border border-red-500  items-center'>
              <div className='w-[40px] h-[40px] flex justify-center  items-center bg-[#005261] rounded-lg'>
                <Image src='/images/img-volei.svg' width={25} height={25}/>
              </div>
              <div>
                <p className='font-medium  text-[#b1b1b1] text-lg'>Vôlei </p>
              </div>
            </div>
            <div className='bg-[#E8FBE4] text-[#3ACF1F] h-[23px] rounded-lg px-1 '>Cadastrado</div>
            <div className='text-[#D32719] bg-[#FDD5D1]  h-[23px] rounded-lg px-1 hidden'>Não Cadastrado</div>
          </div>

          <div className='flex justify-evenly items-start pt-4 w-[371px] max-w-full h-[105px] bg-white rounded-lg '>
            <div className='flex justify-evenly gap-2 border border-red-500  items-center'>
              <div className='w-[40px] h-[40px] flex justify-center  items-center bg-[#005261] rounded-lg'>
                <Image src='/images/img-ping-pong.svg' width={25} height={25}/>
              </div>
              <div>
                <p className='font-medium  text-[#b1b1b1] text-lg'>Ping Pong </p>
              </div>
            </div>
            <div className='bg-[#E8FBE4] text-[#3ACF1F] h-[23px] rounded-lg px-1 hidden'>Cadastrado</div>
            <div className='text-[#D32719] bg-[#FDD5D1]  h-[23px] rounded-lg px-1 block'>Não Cadastrado</div>
          </div>

          <div className='flex justify-evenly items-start pt-4 w-[371px] max-w-full h-[105px] bg-white rounded-lg '>
            <div className='flex justify-evenly gap-2 border border-red-500  items-center'>
              <div className='w-[40px] h-[40px] flex justify-center  items-center bg-[#005261] rounded-lg'>
                <Image src='/images/img-xadrez.svg' width={15} height={15}/>
              </div>
              <div>
                <p className='font-medium  text-[#b1b1b1] text-lg'>Xadrez </p>
              </div>
            </div>
            <div className='bg-[#E8FBE4] text-[#3ACF1F] h-[23px] rounded-lg px-1 '>Cadastrado</div>
            <div className='text-[#D32719] bg-[#FDD5D1]  h-[23px] rounded-lg px-1 hidden'>Não Cadastrado</div>
          </div>

           
          <div className='flex justify-evenly items-start pt-4 w-[371px] max-w-full h-[105px] bg-white rounded-lg '>
            <div className='flex justify-evenly gap-2 border border-red-500  items-center'>
              <div className='w-[40px] h-[40px] flex justify-center  items-center bg-[#005261] rounded-lg'>
                <Image src='/images/img-damas.svg' width={30} height={30}/>
              </div>
              <div>
                <p className='font-medium  text-[#b1b1b1] text-lg'>Damas </p>
              </div>
            </div>
            <div className='bg-[#E8FBE4] text-[#3ACF1F] h-[23px] rounded-lg px-1 hidden'>Cadastrado</div>
            <div className='text-[#D32719] bg-[#FDD5D1]  h-[23px] rounded-lg px-1 block'>Não Cadastrado</div>
          </div>

        </div>
      )}

      {mostrarLista && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="mx-auto w-[445px] h-[660px] bg-white p-6 rounded-3xl shadow-lg relative">
                <div className='flex'>
                  <div className='w-1/2'>
                    <Image src="/images/fechar-menu.svg"  className="hover:scale-125 cursor-pointer duration-100 transition-all " width={30} height={25} onClick={() => setMostrarLista(!mostrarLista)}/>
                  </div>
                  <div className='w-full border border-orange-500'>
                    <h1 className='text-2xl text-[#005261] font-bold'>Doação</h1>
                  </div>
                </div>
                <div className='flex justify-between mt-10'>
                  <div className='w-[40px] h-[40px] flex justify-center  items-center bg-[#005261] rounded-lg'>
                    <Image src='/images/lacres.svg' width={25} height={25}/>
                  </div>
                  <div className=''>
                    <p>Data para Limite</p>
                    <p className='text-end'>21 ago</p>
                  </div>
                </div>
                <div className='pl-8 pt-6 h-[408px] bg-[#efefef] border border-orange-500'>
                  <h1 className='text-lg font-medium pb-7'>Alunos que doaram</h1>
                  <div className='w-full overflow-y-auto h-[300px]'>
                    {/*nomes alunos */}
                    <p>Fulano Ciclano Silano Beltrano</p>
                    <p>Fulano Ciclano Silano Beltrano</p>
                  </div>
                </div>
                <div className='flex justify-between items-center py-4 px-4'>
                  <h2 className='font-semibold text-lg '>Total de Pontos</h2>
                  <p className='text-bold text-[#3ACF1F] font-medium'>00000</p>
                </div>
             </div>
          </div>
        </>
      )}

{mostrarLista && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="mx-auto w-[445px] h-[660px] bg-white p-6 rounded-3xl shadow-lg relative">
                <div className='flex'>
                  <div className='w-1/2'>
                    <Image src="/images/fechar-menu.svg"  className="hover:scale-125 cursor-pointer duration-100 transition-all " width={30} height={25} onClick={() => setMostrarLista(!mostrarLista)}/>
                  </div>
                  <div className='w-full border border-orange-500'>
                    <h1 className='text-2xl text-[#005261] font-bold'>Doação</h1>
                  </div>
                </div>
                <div className='flex justify-between mt-10'>
                  <div className='w-[40px] h-[40px] flex justify-center  items-center bg-[#005261] rounded-lg'>
                    <Image src='/images/lacres.svg' width={25} height={25}/>
                  </div>
                  <div className=''>
                    <p>Data para Limite</p>
                    <p className='text-end'>21 ago</p>
                  </div>
                </div>
                <div className='pl-8 pt-6 h-[408px] bg-[#efefef] border border-orange-500'>
                  <h1 className='text-lg font-medium pb-7'>Alunos que doaram</h1>
                  <div className='w-full overflow-y-auto h-[300px]'>
                    {/*nomes alunos */}
                    <p>Fulano Ciclano Silano Beltrano</p>
                    <p>Fulano Ciclano Silano Beltrano</p>
                  </div>
                </div>
                <div className='flex justify-between items-center py-4 px-4'>
                  <h2 className='font-semibold text-lg '>Total de Pontos</h2>
                  <p className='text-bold text-[#3ACF1F] font-medium'>00000</p>
                </div>
             </div>
          </div>
        </>
      )}
    </div>


  );
} 

