"use client";
import { useRef, useEffect, useState } from 'react';

import Placed from '@/components/Ranking/Placed';
import Image from 'next/image'
import Scores from "@/components/Ranking/Scores"
import httpClient from "@/service/api"
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { toast } from 'sonner';

export default function Ranking() {


  const [data, setData] = useState([
    { "nome": "Richard dos Santos Paiva", "curso": "informatica", "serie": "3º", "pontuacao": 17902 },
    { "nome": "André", "curso": "administracao", "serie": "3º", "pontuacao": 17512 },
    { "nome": "Fernanda", "curso": "recursos humanos", "serie": "3º", "pontuacao": 11297 },
    { "nome": "Felipe", "curso": "contabilidade", "serie": "3º", "pontuacao": 13656 },
    { "nome": "Diana", "curso": "informatica", "serie": "3º", "pontuacao": 17437 },
    { "nome": "Paula", "curso": "administracao", "serie": "3º", "pontuacao": 13236 },
  ]);


  const [alertShowDia, setAlertShowDia] = useState(false) 
  const [alertShowFase, setAlertShowFase] = useState(false) 
  
  const [showFilterDataOptions, setShowFilterDataOptions] = useState(false);
  const [showFilterFasesOptions,setShowFilterFasesOptions]= useState(false)
  const [showFilterOptionsRanking, setShowFilterOptionsRanking] = useState(false);
 
  const [selectRanking, setSelectRanking] = useState("");
  const [seachDate, setSeachDate] = useState("");
  const [showOtherInfo, setShowOtherInfo] = useState(false);

  function handleFase() {
    setShowFilterFasesOptions(false);
  }

  const handleToggleOtherInfo = () => {
    setShowOtherInfo(!showOtherInfo);
  };


  const [selectedPodium, setSelectedPodium] = useState(null);

  const handlePodiumClick = (index) => {
    // Se o mesmo pódio estiver selecionado, desselecione-o
    setSelectedPodium(selectedPodium === index ? null : index);
  };

  useEffect(() => { 
    setData(data.sort((a, b) => b.pontuacao - a.pontuacao)); // dados dos alunos organizados aqui
  }, []);

  //exibe o alerta quando a 2 fase não está disponivel
  function handleFase(fase) {
    if (fase === 2) {
      setAlertShowFase(true);
    }
    setShowFilterFasesOptions(false);
  }

  function handleData(diaSelecionado) {
    setShowFilterDataOptions(false);
    if (diaSelecionado === "29 ago" || diaSelecionado === "30 ago") {
      setAlertShowDia(true);
      setShowFilterDataOptions(false);
    } else {
      setShowFilterDataOptions(false);
    }
  }


  const handleCloseAlertDia = () => {
    setAlertShowDia(false);
  };

  const handleCloseAlertFase = () => {
    setAlertShowFase(false);
  };

  const divRef = useRef(null);
  const [largura, setLargura] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (divRef.current) {
        setLargura(divRef.current.offsetWidth);
      }
    };

    // Update width initially after the component mounts
    updateWidth();

    // Optionally, add a resize event listener to update width on window resize
    window.addEventListener('resize', updateWidth);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px', // Ajuste o espaçamento entre os itens conforme necessário
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
                      Este dia não está disponível para visualização
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
                  width={200} height={154}
                  src="/images/alert-fase.png"
                  className="absolute -top-[43px] left-[40px] sm:-top-[48px] sm:left-[45px] h-[154px] w-[200px] sm:h-[179px] sm:w-[307px]"
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
        <div className='w-full pl-4 text-center  sm:text-left sm:pl-8'>
            <h1 className='text-3xl mb-3'>Pontuação geral</h1>
            <p className='text-[#DADADA]'>Melhores alunos</p>
        </div>
       
        {/* Filtro */}
        <div className='flex justify-evenly sm:justify-end sm:items-center  w-full sm:gap-6 sm:pr-10'>
          {/* Filtro por fases */}
          <div className='relative flex justify-center '>
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

          {/* Filtro por data */}
          <div className='relative flex justify-center'>
            <div
              onClick={() => setShowFilterDataOptions(!showFilterDataOptions)}
              className="w-[113px] shadow-xl bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center"
            >
              <Icon icon="mynaui:filter" className="ml-2 h-6 w-6" />
              Data
            </div>
            {showFilterDataOptions && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-20 z-50"></div>
                    <div className="text-center absolute  bg-white shadow-md rounded-lg mt-20  right-0 w-48 py-2 z-50">
                        <ul>
                           <li 
                              onClick={() => handleData()}
                             className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                            >
                              28 ago 
                            </li>
                            <li 
                              onClick={() => handleData("29 ago")}
                              className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                            >
                              29 ago
                            </li>
                            <li 
                              onClick={() => handleData("30 ago")}
                              className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                            >
                             30 ago
                            </li>
                        </ul>
                     </div>
                 </>
              )}
          </div>

          {/* Filtro de categorias */}
          <div className='relative flex justify-center items-center'>
            <div
              onClick={() => setShowFilterOptionsRanking(!showFilterOptionsRanking)}
              className='h-[44px] w-[44px] shadow-xl border-[3px] rounded-xl border-[#005261] flex justify-center cursor-pointer items-center'
            >
              <Icon icon="solar:alt-arrow-down-line-duotone" width={20} />
            </div>
            {showFilterOptionsRanking && (
              <>
                <div className="fixed inset-0 bg-black bg-opacity-20 z-50" onClick={() => setShowFilterOptions2(false)}></div>
                <div className='z-50 absolute top-12'>
                    <div className="bg-white shadow-md rounded-lg mt-10 sm:mt-5 mr-40 sm:w-[192px] py-2">
                      <ul>
                        <li onClick={() => setShowFilterOptionsRanking(!showFilterOptionsRanking)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">
                          <Link href="/ranking">
                            <p className='flex items-center justify-evenly text-[#a8a8a8] '>
                              Melhores Alunos
                              <Icon icon="solar:alt-arrow-down-line-duotone" width={20} />
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white shadow-md rounded-lg mt-5  mr-40 w-[192px] py-2">
                      <ul>
                        <li onClick={() => setShowFilterOptionsRanking(!showFilterOptionsRanking)} className=" pl-6 sm:pl-0 cursor-pointer hover:bg-gray-100 py-1 px-3">
                          <Link href="/ranking/cursos">
                            <p className='flex items-center justify-evenly'>
                              Todas as Salas
                            </p>
                          </Link>
                        </li>
                        <li onClick={() => setShowFilterOptionsRanking(!showFilterOptionsRanking)} className="pl-6 cursor-pointer hover:bg-gray-100 py-1 px-3">
                          <Link href="/ranking/padrinhos">
                            <p className='flex items-center justify-evenly'>
                              Melhores Padrinhos
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
              </>
            )}
          </div>
      </div>
        <div ref={divRef}  className='relative inline justify-center mb-7 '>
          {/*pódio do 1 2 3 lugar */}
          <div  style={gridContainerStyle} className='relative flex  h-[306px]  justify-evenly md:items-end sm:max-w-[900px]  sm:h-[300px] rounded-3xl mx-auto' style={{ backgroundImage: `url('/images/bg-ranking.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              {data.slice(0, 3).map((aluno, index) => (
                  <div  key={index}
                  className={`h-[93px] flex flex-col items-center justify-center bg-[#4C8690] rounded-t-lg ${
                    index === 0 ? ` absolute top-[25px] sm:top-5 h-[281px] sm:h-[280px]  col-start-2 col-span-1  md:col-start-2 ${largura >= 300 && largura <=590?'w-[130px] md:w-[150px]  ':'md:w-[176px]'}` : index === 1 ? ` top-[115px]  h-[191px]  sm:top-20 sm:h-[221px] absolute  left-0 md:left-7 col-start-1 col-span-1 md:row-start-1 md:col-start-1 ${largura >= 300 &&  largura <=590  ? 'sm:left-0 w-[100px] md:w-[120px] col-start-3':'md:w-[176px]'}` : `top-[135px] sm:top-[110px] right-0 md:right-7  absolute  col-span-1 md:col-start-3  ${largura >=300 && largura <590?'sm:right-0 md:w-[130px]':'md:w-[170px]'}   h-[170px] sm:h-[190px] `
                  }`}
                  >
                    <p className='flex items-center md:gap-4 font-bold text-center cursor-pointer' >
                      {index + 1} º lugar 
                      <Icon
                      width={30} 
                      icon="solar:alt-arrow-down-line-duotone"                  
                      className={`" text-black duration-300 transform ${selectedPodium === index ? 'rotate-180' : 'rotate-0'}`}
                      onClick={() => handlePodiumClick(index)} 
                      />
                    </p>
                    <Image src="/images/bolinha.png" alt="" width={index === 0 ? 69 : index === 1 ?52 : 49} height={index === 0 ?69:index===1?52:49} />
                    <p className='font-medium text-center'>{aluno.nome} </p>
                    <p className='text-center text-wrap'>{aluno.serie} {aluno.curso}</p>
                    <p className='text-[#FFC24C] font-semibold'>{aluno.pontuacao}</p>
                  </div>
              ))}
          </div> 
        </div>
 
        <div className="bg-slate-100 rounded-xl mt-5 mb-10 pt-4 sm:p-3 flex-col flex items-center ">
          {/* Três primeiros lugares */}
          {selectedPodium !== null && (
            <div className='bg-[#005261] grid grid-cols-1  grid-rows-2 sm:flex py-4 sm:pl-2 md:pl-2 md:pr-4 xl:px-8 w-full rounded-xl shadow-lg mb-2'>
              <div className=' w-full sm:w-1/2 xl:w-1/2 flex justify-center items-center sm:justify-start gap-2 sm:gap-2 xl:gap-3 '>
                <div className='flex justify-center items-center w-[40px] h-[65px] sm:p-2 rounded-xl text-[#005261] bg-white text-4xl'>
                  {selectedPodium + 1}
                </div>
                <div className='flex sm:items-center sm:gap-4 smjustify-center'>
                  <Image src="/images/bolinha.png" className='hidden sm:block' width={120} height={120}  alt="perfil usuario" />
                  <h2 className='w-full sm:3/4 md:w-full text-left sm:w-full sm:text-base md:text-xl xl:text-2xl text-white'>{data[selectedPodium].nome}</h2>
                </div>
              </div>
              <div className='row-start-2 w-full grid grid-cols-3 sm:w-1/2 sm:flex sm:justify-end '>
                <div className='w-full border-x-2 sm:border-x-4'>
                  <p className='text-white text-center'>Série</p>
                  <p className='text-[#FFC24C] text-center'>{data[selectedPodium].serie} {data[selectedPodium].curso}</p>
                </div>
                <div className='w-full'>
                  <p className='text-white text-center'>Diferença para o 1º lugar</p>
                  <p className='text-[#FFC24C] text-center'>{data[0].pontuacao - data[selectedPodium].pontuacao}</p>
                </div>
                <div className='w-full border-x-2 sm:border-x-4'>
                  <p className='text-white  text-center text-wrap'><span className='block sm:inline'>Pontuação </span><span className='block sm:inline'>Final</span></p>
                  <p className='text-[#FFC24C] text-center'>{data[selectedPodium].pontuacao}</p>
                </div>
              </div>
            </div>
          )}
          {data.slice(3).map((aluno, index) => (
            <div key={index + 3} className='bg-white grid grid-cols-1  grid-rows-2 sm:flex py-4 sm:pl-2 md:pl-2 md:pr-4 xl:px-8 w-full rounded-xl shadow-lg mb-2'>
              <div className=' w-full sm:w-1/2 xl:w-1/2 flex justify-center items-center sm:justify-start gap-2 sm:gap-2 xl:gap-3 '>
                <div className='w-[50px] flex justify-center items-center  h-[65px] rounded-xl text-[#005261] bg-[#E6EFF0] text-4xl'>
                  {index + 4}
                </div>
                <div className='flex sm:items-center sm:gap-4 smjustify-center'>
                  <Image src="/images/bolinha.png" className='hidden sm:block ' width={120} height={120} alt="perfil usuario" />
                  <h2 className='w-3/4 text-left sm:w-full sm:text-base md:text-xl xl:text-2xl text-[#005261]'>{aluno.nome}</h2>
                </div>
              </div>
              <div className='row-start-2 w-full grid grid-cols-3 sm:w-1/2 sm:flex sm:justify-end '>
                <div className='w-full border-x-2 sm:border-x-4'>
                  <p className='text-[#005261] text-center'>serie</p>
                  <p className='text-[#FFC24C] text-center'>{aluno.serie} {aluno.curso}</p>
                </div>
                <div className='w-full '>
                  <p className='text-[#005261] text-center'>diferença pro 1º lugar</p>
                  <p className='text-[#FFC24C] text-center'>{data[0].pontuacao - aluno.pontuacao}</p>
                </div>
                <div className='w-full border-x-2 sm:border-x-4'>
                  <p className='text-[#005261] text-center text-wrap'><span className='block sm:inline'>Pontuação </span><span className='block sm:inline'>Final</span></p>
                  <p className='text-[#FFC24C] text-center'>{aluno.pontuacao}</p>
                </div>
              </div>
            </div>
          ))}
        </div> 
    </>
);
}



{/*
  "use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from 'next/link';
import { Icon } from '@iconify/react';


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
 
  
  useEffect(() => {
    setTransition(true); 
  }, []);

  function getColorClass(mencao) {
    switch (mencao) {
      case "MB":
        return "bg-[#3ACF1F]";
      case "B":
        return "bg-[#A0C340]";
      case "I":
        return "bg-[#D32719]"; 
      case "R":
        return "bg-[#FFC24C]";
      default:
        return "bg-gray-200";
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

 


  return (
    <div className='pl-[87px]'>

        {alertShowFase && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="mx-auto w-[290px]  h-[360px] sm:w-[390px] bg-white p-6 rounded-3xl shadow-lg relative">
                <img
                  src="../../../images/alert-fase.png"
                  className="absolute -top-[43px] left-[40px] sm:-top-[48px] sm:left-[45px] h-[154px] w-[200px] sm:h-[179px] sm:w-[307px]"
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
                <img
                  src="../../../images/alert-fase.png"
                  className="absolute -top-[43px] left-[40px] sm:-top-[48px] sm:left-[45px] h-[154px] w-[200px] sm:h-[179px] sm:w-[307px]"
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
                  <img src="../images/sair-navegacao.svg" />
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
     
      <div className="md:w-3/4 flex gap-3 md:gap-20 mx-auto mb-4 border-b-4 border-b-[#DADADA] relative">
        <div
          onClick={() => setMoveBar("principal")}
          className={` sm:font-semibold text-base sm:text-xl flex items-center gap-2  cursor-pointer ${moveBar === "principal" ? "text-[#005261]" : "text-[#DADADA]"}`}
        >
          <img src="../images/home-icon.svg" alt=""  className='sm:block hidden'/>
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
          <div className="overflow-x-auto rounded-lg bg-[#005261]">
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
                        <div key={aluno.id} className="h-[55px] pt-[10px] pl-4 right-to-left bg-white border border-[#DADADA]">
                          {doacaoValue}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
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


  
  */}