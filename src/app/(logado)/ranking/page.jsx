"use client";

import Placed from '@/components/Ranking/Placed';
import Scores from "@/components/Ranking/Scores"
import { useState, useEffect } from "react";
import httpClient from "@/service/api"
import { Icon } from '@iconify/react';
import { toast } from 'sonner';

export default function Ranking() {
  const [selectRanking, setSelectRanking] = useState("");
  const [seachDate, setSeachDate] = useState("");
  
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showFilterOptions2, setShowFilterOptions2] = useState(false);

  const [showOtherInfo, setShowOtherInfo] = useState(false);

  const handleToggleOtherInfo = () => {
    setShowOtherInfo(!showOtherInfo);
  };

  const [data, setData] = useState([
    { "nome": "Richard dos Santos Paiva", "curso": "informatica", "serie": "3º", "pontuacao": 17902 },
    { "nome": "André", "curso": "administracao", "serie": "3º", "pontuacao": 17512 },
    { "nome": "Fernanda", "curso": "recursos humanos", "serie": "3º", "pontuacao": 11297 },
    { "nome": "Felipe", "curso": "contabilidade", "serie": "3º", "pontuacao": 13656 },
    { "nome": "Diana", "curso": "informatica", "serie": "3º", "pontuacao": 17437 },
    { "nome": "Paula", "curso": "administracao", "serie": "3º", "pontuacao": 13236 },
  ]);

  const [selectedPodium, setSelectedPodium] = useState(null);

  const handlePodiumClick = (index) => {
    // Se o mesmo pódio estiver selecionado, desselecione-o
    setSelectedPodium(selectedPodium === index ? null : index);
  };

  useEffect(() => { 
    setData(data.sort((a, b) => b.pontuacao - a.pontuacao)); // dados dos alunos organizados aqui
  }, []);

  //codigo do nathan
  // 
  //useEffect(() => {
  //   handleGetPlayers();
  // },[])
    //
  //
  // const handleGetPlayers = async () => {
  //   try {
  //     const response = await httpClient.get("/Usuario/ObterPontuacaoGeral");
  //     setData(response.data);
  //   } catch (error) {
  //     toast.error("Algo deu errado!");
  //   }
  // };

  return (
    <div className='pl-[79px] sm:pl-[100px]'>
      <div className='border border-red-500 flex justify-center flex-col'>
        <div className='flex flex-col sm:justify-between w-full border border-green-500 '>
          <div className='w-full pl-8'>
            <h1 className='text-3xl mb-3'>Pontuação geral</h1>
            <p className='text-[#DADADA]'>Todas as salas</p>
          </div>
          
           {/* filtro daqui pra baixo */}
           <div className='flex justify-evenly sm:justify-end sm:pr-20 gap-8 w-full border border-orange-500 relative'>
            {/* opções filtro */}
            <div className='flex flex-col relative'>
              <div
                onClick={() => setShowFilterOptions(!showFilterOptions)}
                className="w-[170px]  bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center"
              >
                <Icon icon="mynaui:filter" className="mr-2 h-6 w-6" />Data
              </div>
              {showFilterOptions && (
                <>
                  <div  className="fixed inset-0 bg-black bg-opacity-20 z-50 "></div>
                  <div className='absolute top-12 w-[170px] flex items-center flex-col z-50 '>
                    <div className="mt-10 bg-white shadow-md rounded-lg sm:w-[192px] py-2">
                      <ul>
                        <li onClick={() => setShowFilterOptions(!showFilterOptions)} className="flex items-center justify-evenly cursor-pointer hover:bg-gray-100 py-1 px-3">
                          data 1
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* opções filtro */}
            <div className='mt-4 flex items-end flex-col relative'>
              <div 
                onClick={() => setShowFilterOptions2(!showFilterOptions2)} 
                className=' h-[44px] z-60   w-[44px] shadow-xl border-[3px] rounded-xl border-[#005261] flex items-center justify-center'
              >
                <Icon icon="solar:alt-arrow-down-line-duotone" width={20} />
              </div>
              {showFilterOptions2 && (
                <>
                <div  className="fixed inset-0 bg-black bg-opacity-20 z-50 "></div>
                <div className='z-50 absolute top-12 '>
                  <div className="bg-white shadow-md rounded-lg mt-3 sm:w-[192px] py-2 z-50">
                    <ul>
                      <li onClick={() => setShowFilterOptions2(!showFilterOptions2)}  className="flex items-center justify-evenly cursor-pointer hover:bg-gray-100 py-1 px-3">
                        Todas as salas <Icon icon="solar:alt-arrow-down-line-duotone" width={20} />
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white shadow-md rounded-lg mt-5 sm:w-[192px] py-2">
                    <ul>
                      <li  onClick={() => setShowFilterOptions2(!showFilterOptions2)} className="pl-6 cursor-pointer hover:bg-gray-100 py-1 px-3">
                        Melhores Jogadores
                      </li>
                      <li   onClick={() => setShowFilterOptions2(!showFilterOptions2)} className="pl-6 cursor-pointer hover:bg-gray-100 py-1 px-3">
                        Melhores Padrinhos 
                      </li>
                    </ul>
                  </div>
                </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className='relative flex justify-center mb-10'>
          {/*pódio do 1 2 3 lugar */}
          <div className='relative inline-block '>
            <img src="images/bg-ranking.png" alt="" className='z-4 w-[800px]'/>
            {/* Renderização dinâmica dos pódios */}
            {data.slice(0, 3).map((aluno, index) => (
              <div key={index} className={`absolute bottom-0 ${index === 0 ? 'left-[40%] h-[280px]' : index === 1 ? 'left-[10%] sm:h-[190px]' : 'right-[10%]  sm:h-[220px]'} bg-[#4C8690] sm:w-[180px] rounded-t-lg p-2 flex flex-col items-center gap-1 justify-center`}>
                <p className='flex items-center gap-4 font-bold'>
                  {index + 1} º lugar 
                  <Icon
                  width={30} 
                   icon="solar:alt-arrow-down-line-duotone"                  
                   className={`" text-black duration-300 transform ${selectedPodium === index ? 'rotate-180' : 'rotate-0'}`}
                   onClick={() => handlePodiumClick(index)} 
                   />
                </p>
                <img src="images/bolinha.png" alt="" width={index === 0 ? 69 : index === 1 ?52 : 49} />
                <p className='font-medium text-center'>{aluno.nome} </p>
                <p className='text-center'>{aluno.serie} {aluno.curso}</p>
                <p className='text-[#FFC24C] font-semibold'>{aluno.pontuacao}</p>
              </div>
            ))}
          </div>
        </div>
 
        <div className="bg-slate-100 rounded-xl  mb-5 sm:p-3 flex-col flex items-center ">
          {/* Três primeiros lugares */}
          {selectedPodium !== null && (
            <div className='bg-[#005261] flex py-4 sm:pl-2 md:pl-2 md:pr-4 xl:px-8 w-full rounded-xl shadow-lg mb-2'>
              <div className='flex items-center gap-2 sm:gap-2 xl:gap-3 w-1/2 xl:w-1/2 border border-orange-500'>
                <div className='flex justify-center items-center w-[40px] h-[65px] sm:p-2 rounded-xl text-[#005261] bg-white text-4xl'>
                  {selectedPodium + 1}
                </div>
                <div className='flex sm:items-center sm:gap-4 sm:justify-center'>
                  <img src="images/bolinha.png" className='hidden sm:block' alt="" />
                  <h2 className='w-3/4 text-left sm:w-full sm:text-base md:text-xl xl:text-2xl text-white'>{data[selectedPodium].nome}</h2>
                </div>
              </div>
              <div className='flex justify-end w-1/2 border border-yellow-500'>
                <div className='w-full border-x-2 sm:border-x-4'>
                  <p className='text-white text-center'>Série</p>
                  <p className='text-[#FFC24C] text-center'>{data[selectedPodium].serie} {data[selectedPodium].curso}</p>
                </div>
                <div className='w-full'>
                  <p className='text-white text-center'>Diferença para o 1º lugar</p>
                  <p className='text-[#FFC24C] text-center'>{data[0].pontuacao - data[selectedPodium].pontuacao}</p>
                </div>
                <div className='w-full border-x-2 sm:border-x-4'>
                  <p className='text-white text-center'>Pontuação final</p>
                  <p className='text-[#FFC24C] text-center'>{data[selectedPodium].pontuacao}</p>
                </div>
              </div>
            </div>
          )}
          {/*Demais alunos*/}
          {data.slice(3).map((aluno, index) => (
            <div key={index + 3} className='bg-white flex py-4 sm:pl-2 md:pl-2 md:pr-4 xl:px-8 w-full rounded-xl shadow-lg mb-2'>
              <div className='flex items-center gap-2 sm:gap-2 xl:gap-3 w-1/2 xl:w-1/2 border border-orange-500'>
                <div className='w-[50px] flex justify-center items-center h-[65px] rounded-xl text-[#005261] bg-[#E6EFF0] text-4xl'>
                  {index + 4}
                </div>
                <div className='flex sm:items-center sm:gap-4 sm:justify-center'>
                  <img src="images/bolinha.png" className='hidden sm:block' alt="" />
                  <h2 className='w-3/4 text-left sm:w-full sm:text-base md:text-xl xl:text-2xl text-[#005261]'>{aluno.nome}</h2>
                </div>
              </div>
              <div className='flex justify-end w-1/2 border border-yellow-500'>
                <div className='w-full border-x-2 sm:border-x-4'>
                  <p className='text-[#005261] text-center'>serie</p>
                  <p className='text-[#FFC24C] text-center'>{aluno.serie} {aluno.curso}</p>
                </div>
                <div className='w-full '>
                  <p className='text-[#005261] text-center'>diferença pro 1º lugar</p>
                  <p className='text-[#FFC24C] text-center'>{data[0].pontuacao - aluno.pontuacao}</p>
                </div>
                <div className='w-full border-x-2 sm:border-x-4'>
                  <p className='text-[#005261] text-center'>Pontuação final</p>
                  <p className='text-[#FFC24C] text-center'>{aluno.pontuacao}</p>
                </div>
              </div>
            </div>
          ))}
          {/*div especial para os CURSOS */}
          <div className='flex flex-col  mt-2 w-full rounded-xl shadow-lg'>
             <div className={`w-full flex z-30   ${ showOtherInfo?'w-full flex-col bg-[#005261]':'bg-white' } transition-all  dealay-300 py-4 sm:pl-2 md:pl-2 md:pr-4 xl:px-8 rounded-xl`}>
                <div className='flex  w-full'>
                  <div className={`w-full flex sm:pl-6 items-center gap-2 sm:gap-2 xl:gap-3  bg-[#005261]xl:w-1/2 border border-orange-500 ${showOtherInfo?'bg-[#005261]': ' bg-white'}`}>
                    <div className={`w-[40px] p-2 h-[65px] sm:p-2 rounded-xl ${showOtherInfo?'text-[#005261] bg-white':'text-[#005261] bg-[#E6EFF0]'}  text-4xl`}>
                      1
                    </div>
                    <div className={`flex sm:items-center sm:gap-4 sm:justify-center`}>
                      <img src="images/bolinha.png" className='hidden sm:block' alt="" />
                      <h2 className={`w-3/4 sm:w-full text-left   sm:text-base md:text-xl xl:text-2xl ${showOtherInfo?'text-white':'text-[#005261]'}`}>2 º Informática</h2>
                    </div>
                  </div>
                  <div className={`flex justify-end w-1/2 border border-yellow-500 ${showOtherInfo?'bg-[#005261]': ' bg-white'}`}>
                    <div className={`w-full border-x-2 sm:border-x-4 ${showOtherInfo?'bg-[#005261]': ' bg-white'}`}>
                      <p className={` ${showOtherInfo?'text-white':'text-[#005261]'} text-center`}>diferença pro 1º lugar</p>
                      <p className='text-[#FFC24C] text-center'>000000</p>
                    </div>
                    <div className={`w-full `}>
                      <p className={ `${showOtherInfo?'text-white':'text-[#005261]'} text-center`}>Pontuação final</p>
                      <p className='text-[#FFC24C] text-center'>000000</p>
                    </div>
                    <div>
                     <Icon icon="solar:alt-arrow-down-line-duotone" className={`${showOtherInfo?'text-white rotate-180 duration-300':'text-[#005261] rotate-0 duration-300'}`} width={40} onClick={handleToggleOtherInfo}  />
                    </div>
                  </div>
                </div>
                {/*informações abaixo da informação */}
                {showOtherInfo &&(
                  <div className='-z-10 flex-col bg-white border-2 border-[#005261] flex  pt-8 pb-3 -mt-6 w-full rounded-xl shadow-lg'>
                    <div className='grid grid-cols-4 md:grid-cols-7 w-full -mt-2 sm:text-lg md:text-xl flex-wrap sm:flex-nowrap'>
                        <div className='w-full text-center border-r-4  border-[#005261]'>
                          <div className='h-[50px] bg-[#E6EFF0] border-b-4 border-[#005261]'>
                            Soma das Fichas
                          </div>
                          <div className='h-[70px] z-50 bg-white'>
                            0
                          </div>
                        </div>
                        <div className='w-full text-center border-r-4 border-[#005261]'>
                          <div className='h-[50px] bg-[#E6EFF0] border-b-4 border-[#005261]'>Alunos ativos</div>
                          <div className="h-[70px] bg-white">
                            0
                          </div>
                        </div>
                        <div className='w-full text-center border-r-4 border-[#005261]'>
                          <div className='h-[50px] bg-[#E6EFF0] border-b-4 border-[#005261]'>Faltas</div>
                          <div className="h-[70px]  bg-white">
                            0
                          </div>
                        </div>
                        <div className='w-full  text-center border-r-4 border-[#005261] '>
                        <div className='h-[50px] bg-[#E6EFF0] border-b-4 border-[#005261]'>Fantasmas</div>
                          <div className="h-[70px]  bg-white">
                            0
                          </div>
                        </div>
                        <div className='w-full text-center border-r-4 border-[#005261] '>
                          <div className='h-[50px] bg-[#E6EFF0] border-b-4 border-[#005261]'>Média Individual</div>
                          <div className="h-[70px]  bg-white">
                            0
                          </div>
                        </div>
                        <div className='w-full text-center border-r-4 border-[#005261]'>
                          <div className='h-[50px] bg-[#E6EFF0] border-b-4 border-[#005261]'>Atividades Extras</div>
                          <div className="h-[70px]  bg-white">
                            0
                          </div>
                        </div>
                        <div className='col-span-2 sm:col-span-1 w-full text-center '>
                          <div className='h-[50px] bg-[#E6EFF0] flex justify-evenly border-b-4 border-[#005261]'>
                            Data <Icon icon="solar:alt-arrow-down-line-duotone" className='text-[#005261]' width={30} />
                          </div>
                          <div className="h-[70px]  bg-white">
                            0
                          </div>
                        </div>
                     </div>
                  </div>    
                )}
             </div>
           </div>  
          </div> 
        </div>
     </div> 
);
}
