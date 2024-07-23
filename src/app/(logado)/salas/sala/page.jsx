"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image'


export default function Sala() {

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
              <button className=''>
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
        <div className="md:w-[80%] mx-auto">
          <form className="overflow-x-auto rounded-lg bg-[#005261]" onSubmit={handleFormularioPontos}>
          <button type='submit' className='mx-auto block w-[400px] bg-red-500 z-50'>Enviar Dados</button>
          <div className="flex">
              <div className="w-[300px]">
                <div className="p-3 font-semibold border border-white border-r-2 text-white">Alunos</div>
                {retornoApi.map((aluno) => (
                  <div key={aluno.id} className="h-[55px] pt-[10px] pl-[4px] right-to-left bg-white border border-[#DADADA]">
                    {aluno.nome}
                  </div>
                ))}
              </div>
              <div className="w-3/4 flex overflow-x-auto">
                {doacoesInseridas.map((doacao, index) => (
                  <div key={index} className="min-w-[200px]">
                    <div className="p-3 font-bold border border-white border-r-2 text-white">
                      {doacao}
                    </div>
                    {retornoApi.map((aluno) => {
                      const doacaoValue = aluno.doacao.reduce((acc, current) => {
                        const key = Object.keys(current)[0];
                        if (key === doacao) {
                          acc = current[key];
                        }
                        return acc;
                      }, 0);

                      return (
                        <input 
                          key={aluno.id} 
                          name={doacao} 
                          type='number'
                          value={formData[aluno.id]?.[doacao] || ''}    
                          onChange={(e) => handleChange(aluno.id, doacao, e.target.value)} 
                          className="h-[55px] pt-[10px] pl-4 right-to-left bg-white border border-[#DADADA]"/>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      )}
      {moveBar === "campeonato" && (
        <div className="md:w-[90%] mx-auto">
            {esportes.map((esporteGroup, index) => (
              <div key={index} className="border bg-[#005261] rounded-l-lg rounded-r-lg overflow-x-auto mb-4">
                <table className="w-full">
                  <thead>
                    <tr className="text-white text-center">
                      {esporteGroup.map((esporte, idx) => (
                        <th key={idx} className="p-3 min-w-[150px] border border-white">
                          {esporte}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                     {/* Renderizar até 12 linhas para cada esporte */}
                     {retornoApi.map((aluno, alunoIndex) => (
                    <tr key={aluno.id} className="text-center border">
                      {esporteGroup.map((esporte, idx) => {
                        const alunoNoEsporte = aluno.time && aluno.time.find(item => item.esporte === esporte);
                        return (
                          <td key={idx} className="border bg-white border-gray-200 min-w-[150px]">
                            {alunoNoEsporte ? aluno.nome : ''}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            ))}
        </div>
      )}
    </div>
  );
} 

