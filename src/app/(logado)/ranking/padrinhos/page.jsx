"use client";

import Placed from '@/components/Ranking/Placed';
import Scores from "@/components/Ranking/Scores"
import { useState, useEffect } from "react";
import httpClient from "@/service/api"
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { toast } from 'sonner';

export default function Ranking() {
  const [data, setData] = useState([
    { "nome": "Debora", "curso": "informatica", "serie": "3º", "pontuacao": 17902 },
    { "nome": "Mikel", "curso": "administracao", "serie": "3º", "pontuacao": 17512 },
    { "nome": "Juliana", "curso": "recursos humanos", "serie": "2º", "pontuacao": 11297 },
    { "nome": "Pedro", "curso": "contabilidade", "serie": "3º", "pontuacao": 13656 },
    { "nome": "Jacques", "curso": "informatica", "serie": "1º", "pontuacao": 17437 },
    { "nome": "Admar", "curso": "administracao", "serie": "2º", "pontuacao": 13236 },
  ]);
  const [alertShowDia, setAlertShowDia] = useState(false) 
  const [alertShowFase, setAlertShowFase] = useState(false) 
  
  const [showFilterDataOptions, setShowFilterDataOptions] = useState(false);
  const [showFilterFasesOptions,setShowFilterFasesOptions]= useState(false)
  const [showFilterOptionsRanking, setShowFilterOptionsRanking] = useState(false);
 
  const [selectRanking, setSelectRanking] = useState("");
  const [seachDate, setSeachDate] = useState("");

  const [showOtherInfo, setShowOtherInfo] = useState(false);
  const [selectedPodium, setSelectedPodium] = useState(null);

  const handleToggleOtherInfo = () => {
    setShowOtherInfo(!showOtherInfo);
  };

 

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


  return (
     <>  
      {/*Exibe o alerta quando a 2 fase não está disponivel*/}
      {alertShowFase && (
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

        <div className='w-full text-center  sm:text-left pl-8'>
              <h1 className='text-3xl mb-3'>Pontuação geral</h1>
              <p className='text-[#DADADA]'>Melhores Padrinhos</p>
        </div>
       
        {/* Filtro */}
        <div className='flex justify-evenly sm:justify-end sm:items-center  w-full sm:gap-8 sm:px-20'>
            {/* Filtro por fases */}
            <div className='relative flex justify-center'>
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
                  <div className="fixed inset-0 bg-black bg-opacity-20 z-50" onClick={() => setShowFilterOptionsRanking(false)}></div>
                  <div className='z-50 absolute top-12'>
                      <div className="bg-white shadow-md rounded-lg mt-10 sm:mt-5 mr-40 sm:w-[192px] py-2">
                        <ul>
                          <li onClick={() => setShowFilterOptionsRanking(!showFilterOptionsRanking)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">
                            <Link href="/ranking/padrinhos">
                              <p className='flex items-center justify-evenly text-[#a8a8a8] '>
                                 Melhores Padrinhos
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
                            <Link href="/ranking">
                              <p className='flex items-center justify-evenly'>
                       
                                Melhores Alunos
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
        <div className='relative inline justify-center mb-8'>
          {/*pódio do 1 2 3 lugar */}
          <div className=' h-[306px] grid gap-8 md:grid-cols-3 md:grid-rows-1 sm:grid-cols-1 md:justify-items-center md:items-end sm:max-w-[900px] sm:h-[300px] rounded-3xl mx-auto' style={{backgroundImage: `url('/images/bg-ranking.svg')`,backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
              {data.slice(0, 3).map((padrinho, index) => (    
                  <div key={index} 
                  className={` h-[93px] grid grid-cols-3  justify-items-center md:flex md:flex-col items-center justify-center bg-[#4C8690] rounded-t-lg ${
                    index === 0 ? 'col-span-1 row-start-1 md:row-start-1 md:col-start-2 md:w-[196px] md:h-[280px]' : 
                    index === 1 ? 'col-span-1 row-start-2 md:col-start-1 md:row-start-1  md:w-[196px] md:h-[220px]  ' : 
                    'col-span-1 md:col-start-3 row-start-3  md:row-start-1  md:w-[180px] md:h-[190px]'}`}
                  >
                    <p className='flex items-center md:gap-4 font-bold text-center cursor-pointer'>
                      {index + 1} º lugar 
                      <Icon
                      width={30} 
                      icon="solar:alt-arrow-down-line-duotone"                  
                      className={`" text-black duration-300 transform ${selectedPodium === index ? 'rotate-180' : 'rotate-0'}`}
                      onClick={() => handlePodiumClick(index)} 
                      />
                    </p>
                    <img src="/images/bolinha.png" alt="" width={index === 0 ? 69 : index === 1 ?52 : 49} />
                    <p className='font-medium text-center'>{padrinho.nome} </p>
                    <p className='text-center'>{padrinho.serie} {padrinho.curso}</p>
                    <p className='text-[#FFC24C] font-semibold'>{padrinho.pontuacao}</p>
                  </div>
              ))}
          </div> 
        </div>
 
        <div className="bg-slate-100 rounded-xl  mt-5 pt-4 mb-5 sm:p-3 flex-col flex items-center ">
          {/* Três primeiros lugares */}
          {selectedPodium !== null && (
            <div className='bg-[#005261] grid grid-cols-1  grid-rows-2 sm:flex py-4 sm:pl-2 md:pl-2 md:pr-4 xl:px-8 w-full rounded-xl shadow-lg mb-2'>
              <div className=' w-full sm:w-1/2 xl:w-1/2 mb-4 flex justify-center items-center sm:justify-start gap-2 sm:gap-2 xl:gap-3'>
                <div className='flex justify-center items-center w-[40px] h-[65px] sm:p-2 rounded-xl text-[#005261] bg-white text-4xl'>
                  {selectedPodium + 1}
                </div>
                <div className='flex sm:items-center sm:gap-4 smjustify-center'>
                  <img src="/images/bolinha.png" className=' sm:block hidden w-[120px]' alt="" />
                  <h2 className='w-full sm:3/4 md:w-full text-left sm:w-full sm:text-base md:text-xl xl:text-2xl text-white'>{data[selectedPodium].nome}</h2>
                </div>
              </div>
              <div className='row-start-2 w-full grid grid-cols-3 sm:w-1/2 sm:flex sm:justify-end'>
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
          {data.slice(3).map((padrinho, index) => (
            <div key={index + 3} className='bg-white grid grid-cols-1  grid-rows-2 sm:flex py-4 sm:pl-2 md:pl-2 md:pr-4 xl:px-8 w-full rounded-xl shadow-lg mb-2'>
              <div className=' w-full sm:w-1/2 xl:w-1/2 mb-4 flex justify-center items-center sm:justify-start gap-2 sm:gap-2 xl:gap-3 '>
                <div className='w-[50px] flex justify-center items-center  h-[65px] rounded-xl text-[#005261] bg-[#E6EFF0] text-4xl'>
                  {index + 4}
                </div>
                <div className='flex sm:items-center sm:gap-4 smjustify-center'>
                  <img src="/images/bolinha.png" className='hidden sm:block w-[120px]' alt="" />
                  <h2 className='w-3/4 text-left sm:w-full sm:text-base md:text-xl xl:text-2xl text-[#005261]'>{padrinho.nome}</h2>
                </div>
              </div>
              <div className='row-start-2 w-full grid grid-cols-3 sm:w-1/2 sm:flex sm:justify-end '>
                <div className='w-full border-x-2 sm:border-x-4'>
                  <p className='text-[#005261] text-center'>serie</p>
                  <p className='text-[#FFC24C] text-center'>{padrinho.serie} {padrinho.curso}</p>
                </div>
                <div className='w-full '>
                  <p className='text-[#005261] text-center'>diferença pro 1º lugar</p>
                  <p className='text-[#FFC24C] text-center'>{data[0].pontuacao - padrinho.pontuacao}</p>
                </div>
                <div className='w-full border-x-2 sm:border-x-4'>
                  <p className='text-[#005261] text-center text-wrap'><span className='block sm:inline'>Pontuação </span><span className='block sm:inline'>Final</span></p>
                  <p className='text-[#FFC24C] text-center'>{padrinho.pontuacao}</p>
                </div>
              </div>
            </div>
          ))}
        </div> 
    </>
);
}

