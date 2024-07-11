"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from 'next/link';
import { Icon } from '@iconify/react';


export default function Sala() {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showFilterDataOptions, setShowFilterDataOptions] = useState(false);
  const [moveBar, setMoveBar] = useState("principal");
  const [transition, setTransition] = useState(false); // Estado para controlar a transição
  const [fase, setFase] = useState(""); // Estado para armazenar a fase selecionada
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
    },
    {
      id: 2,
      nome: "Ana B Almeida SIlva ",
      qda: 13,
      qdp: 9.896,
      dia: 28,
      totalPontos: 25.76,
      mencao: "R",
    },
    {
      id: 3,
      nome: "Ana B Buzana Silva ",
      qda: 19,
      qdp: 18.436,
      dia: 28,
      totalPontos: 48.367,
      mencao: "B",
    },
    {
      id: 4,
      nome: "Ana J dos Santos Olidin ",
      qda: 25,
      qdp: 1200,
      dia: 28,
      totalPontos: 0,
      mencao: "I",
    },
    {
      id: 5,
      nome: "Andre L Scalise Albanese Junior  ",
      qda: 25,
      qdp: 18.436,
      dia: 28,
      totalPontos: 60.700,
      mencao: "MB",
    },
    {
      id: 6,
      nome: "Andre Victor Garcia de Jesus",
      qda: 19,
      qdp: 12.098,
      dia: 28,
      totalPontos: 48.367,
      mencao: "B",
    },
    {
      id: 7,
      nome: "Beatriz Barros de Morais",
      qda: 25,
      qdp: 18.436,
      dia: 28,
      totalPontos: 60.700,
      mencao: "MB",
    },
    {
      id: 8,
      nome: "Camila Marques ",
      qda: 25,
      qdp: 18.436,
      dia: 28,
      totalPontos: 60.700,
      mencao: "MB",
    },
    {
      id: 9,
      nome: "Carlos Daniel Lima de Abreu ",
      qda: 25,
      qdp: 18.436,
      dia: 28,
      totalPontos: 60.700,
      mencao: "MB",
    },
    {
      id: 10,
      nome: "Carlos Eduardo Da Silva Costa",
      qda: 25,
      qdp: 18.436,
      dia: 28,
      totalPontos: 60.700,
      mencao: "MB",
    },
    {
      id: 11,
      nome: "Eduardo Lima ",
      qda: 7,
      qdp: 3.765,
      dia: 28,
      totalPontos: 10.345,
      mencao: "I",
    },
    {
      id: 12,
      nome: "Erick henrique Monteiro Lima ",
      qda: 7,
      qdp: 3.765,
      dia: 28,
      totalPontos: 10.345,
      mencao: "I",
    },
    {
      id: 13,
      nome: "Evely Gusmão de Almeida ",
      qda: 25,
      qdp: 18.436,
      dia: 28,
      totalPontos: 60.700,
      mencao: "MB",
    },
    {
      id: 14,
      nome: "Eyshila  Neubert Basseto ",
      qda: 25,
      qdp: 18.436,
      dia: 28,
      totalPontos: 60.700,
      mencao: "MB",
    },
    {
      id: 15,
      nome: "Gabriela Silva de Araujo ",
      qda: 19,
      qdp: 12.098,
      dia: 28,
      totalPontos: 48.367,
      mencao: "B",
    },
  ]);

  function handleFase(fase) {
    setShowFilterOptions(false);
    if (fase === 1) {
      setFase("1 º Fase");
    } else if (fase === 2) {
      setFase("2 º Fase");
    }
  }

  function handleFilterData() {
    setShowFilterDataOptions(false)

  }

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

  useEffect(() => {
    setTransition(true); // Ativa a transição após o componente ser montado
  }, []);

  const esportes = [
    ["Basquete", "Volei", "Queimada"],
    ["Futsal-Masc", "Futsal-Fem", "Handebol"],
  ];

  return (
    <div className='pl-[90px]'>
       {/*comeco da <div> */}
       <div className='mx-auto pl-5 md:pl-20 flex flex-col gap-10 m-5'>
         <div className='max-w-[1198px]  flex flex-row justify-between'>
              <button className=''>
                <Link href={'/salas'}>
                  <img src="../images/sair-navegacao.svg" />
                </Link>
              </button>
              <div className='flex justify-center items-center relative '>
                <div
                  onClick={() => setShowFilterOptions(!showFilterOptions)}
                  className="w-[170px] bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center mr-4"
                >
                  <Icon icon="mynaui:filter" className="mr-2 h-6 w-6" />
                  filtrar
                
                </div>
                    {showFilterOptions && (
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
          <p className='-mt-5 text-[#DADADA]'>{fase}</p>
       </div>
       {/*fim da <div> */}
     
      <div className="md:w-3/4 flex gap-7 md:gap-20 mx-auto mb-4 border-b-4 border-b-[#DADADA] relative">
        <div
          onClick={() => setMoveBar("principal")}
          className={`flex items-center gap-2 sm:text-xl cursor-pointer ${moveBar === "principal" ? "text-[#005261]" : "text-[#DADADA]"}`}
        >
          <img src="../images/home-icon.svg" alt="" />
          Principal
        </div>
        <div
          onClick={() => setMoveBar("doacoes")}
          className={`flex font-semibold cursor-pointer ${moveBar === "doacoes" ? "text-[#005261]" : "text-[#DADADA]"}`}
        >
          Doações
        </div>
        <div
          onClick={() => setMoveBar("campeonato")}
          className={`font-semibold cursor-pointer ${moveBar === "campeonato" ? "text-[#005261]" : "text-[#DADADA]"}`}
        >
          Campeonatos
        </div>
        <div
          className={`hidden sm:block h-[4px] w-[100px] md:w-[124px] bg-[#005261] ${transition ? "duration-700 delay-100" : ""} 
            ${moveBar === "principal" ? "left-0" : ""} 
            ${moveBar === "doacoes" ? "md:left-40 left-30" : ""} 
            ${moveBar === "campeonato" ? "md:left-80" : ""} 
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
                  <div className="p-3 font-bold border border-white border-r-2 text-white text-center">QDA</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id}  className="text-center pt-[10px] h-[59px] pl-4 Right-to-left bg-white border border-[#DADADA]">
                      {aluno.qda}
                    </div>
                  ))}
                </div>
                <div className="min-w-[200px]">
                  <div className="p-3 font-bold border border-white border-r-2 text-white text-center">QDP</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className="text-center pt-[10px]  h-[59px]  pl-4 Right-to-left bg-white border border-[#DADADA]">
                      {aluno.qdp}
                    </div>
                  ))}
                </div>
                <div className="min-w-[200px]">
                  <div 
                  onClick={() => setShowFilterDataOptions(!showFilterDataOptions)}
                  className="p-3 font-bold border border-white border-r-2 text-white text-center relative">
                    <p className='flex justify-center items-center'>
                      DATA
                      <Icon icon="solar:alt-arrow-down-linear" width={20}/>
                    </p>
                    {showFilterDataOptions && (
                        <>
                          <div className="fixed inset-0 bg-black bg-opacity-20 z-50"></div>
                          <div className="absolute mt-7 bg-white shadow-md rounded-lg  right-0 w-48 py-2 z-50">
                            <ul>
                              <li 
                               
                                className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                              >
                                28 ago
                              </li>
                              <li 
                             
                                className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                              >
                                29 ago
                              </li>
                              <li 
                             
                                className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                              >
                                30 ago
                              </li>
                            </ul>
                          </div>
                        </>
                      )}
                  </div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className="text-center pt-[10px]  h-[59px]  Right-to-left bg-white border border-[#DADADA]">
                      {aluno.dia}
                    </div>
                  ))}
                </div>
                <div className="min-w-[200px]">
                  <div className="p-3 font-bold border border-white border-r-2 text-white text-center">Total Geral</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className="text-center pt-[10px] h-[59px] pl-4 Right-to-left bg-white border border-[#DADADA]">
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
          <div className="overflow-x-auto rounded-lg bg-[#005261]">
            <div className="flex">
              <div className="w-[300px]">
                <div className="p-3 font-semibold border border-white border-r-2 text-white">Alunos</div>
                {retornoApi.map((aluno) => (
                  <div key={aluno.id} className="pt-[10px] pl-[4px] Right-to-left bg-white border border-[#DADADA]">
                    {aluno.nome}
                  </div>
                ))}
              </div>
              <div className="w-3/4 flex overflow-x-auto">
                <div className="min-w-[200px]">
                  <div className="p-3 font-bold border border-white border-r-2 text-white text-center">Doação</div>
                  <div className="pt-[10px] pl-4 Right-to-left bg-white border border-[#DADADA]">
                    Pontos doados
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
  
      {moveBar === "campeonato" && (
        <div className="md:w-[90%] mx-auto">
          {esportes.map((esporteGroup, index) => (
            <div
              key={index}
              className="border bg-[#005261] rounded-l-lg rounded-r-lg overflow-x-auto mb-4"
            >
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
                  {retornoApi.map((aluno) => (
                    <tr key={aluno.id} className="text-center border">
                      {esporteGroup.map((_, idx) => (
                        <td key={idx} className="border bg-white border-gray-200 min-w-[150px]">
                          {aluno.nome}
                        </td>
                      ))}
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