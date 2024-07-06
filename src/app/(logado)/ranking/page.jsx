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
  
  // const [showFilterOptions, setShowFilterOptions] = useState(false);
  // const [showFilterOptions2, setShowFilterOptions2] = useState(false);

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
      <>
        <div className='relative flex justify-center mb-10'>
          {/*pódio do 1 2 3 lugar */}
          <div className='relative inline-block '>
            <img src="images/bg-ranking.png" alt="" className='z-4 w-[800px]'/>
            {/* Renderização dinâmica dos pódios */}
            {data.slice(0, 3).map((aluno, index) => (
              <div key={index} className={`absolute bottom-0 ${index === 0 ? 'left-[40%] w-[196px] h-[280px]' : index === 1 ? 'left-[10%] h-[190px] w-[180px] ' : 'right-[10%] w-[120px] h-[220px]'} bg-[#4C8690] rounded-t-lg p-2 flex flex-col items-center gap-1 justify-center`}>
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
            <div className='bg-[#005261] grid grid-cols-1  grid-rows-2 sm:flex py-4 sm:pl-2 md:pl-2 md:pr-4 xl:px-8 w-full rounded-xl shadow-lg mb-2'>
              <div className=' w-full sm:w-1/2 xl:w-1/2 flex justify-center items-center sm:justify-start gap-2 sm:gap-2 xl:gap-3  border border-orange-500'>
                <div className='flex justify-center items-center w-[40px] h-[65px] sm:p-2 rounded-xl text-[#005261] bg-white text-4xl'>
                  {selectedPodium + 1}
                </div>
                <div className='flex sm:items-center sm:gap-4 smjustify-center'>
                  <img src="images/bolinha.png" className='hidden sm:block' alt="" />
                  <h2 className='w-full sm:3/4 md:w-full text-left sm:w-full sm:text-base md:text-xl xl:text-2xl text-white'>{data[selectedPodium].nome}</h2>
                </div>
              </div>
              <div className='row-start-2 w-full grid grid-cols-3 sm:w-1/2 sm:flex sm:justify-end border border-yellow-500'>
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
          {/*Demais alunos*/}
          {data.slice(3).map((aluno, index) => (
            <div key={index + 3} className='bg-white grid grid-cols-1  grid-rows-2 sm:flex py-4 sm:pl-2 md:pl-2 md:pr-4 xl:px-8 w-full rounded-xl shadow-lg mb-2'>
              <div className=' w-full sm:w-1/2 xl:w-1/2 flex justify-center items-center sm:justify-start gap-2 sm:gap-2 xl:gap-3  border border-orange-500'>
                <div className='w-[50px] flex justify-center items-center  h-[65px] rounded-xl text-[#005261] bg-[#E6EFF0] text-4xl'>
                  {index + 4}
                </div>
                <div className='flex sm:items-center sm:gap-4 smjustify-center'>
                  <img src="images/bolinha.png" className='hidden sm:block' alt="" />
                  <h2 className='w-3/4 text-left sm:w-full sm:text-base md:text-xl xl:text-2xl text-[#005261]'>{aluno.nome}</h2>
                </div>
              </div>
              <div className='row-start-2 w-full grid grid-cols-3 sm:w-1/2 sm:flex sm:justify-end border border-yellow-500'>
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
          {/*div especial para os CURSOS */}
          <div className='w-full flex flex-col  mt-2  rounded-xl shadow-lg'>
             <div className={`w-full  sm:flex z-30   ${ showOtherInfo?'w-full flex-col bg-[#005261]':'bg-white' } transition-all  dealay-300 py-4 sm:pl-2 md:pl-2 md:pr-4 xl:px-8 rounded-xl`}>
                <div className='w-full sm:flex grid-cols-1 grid-rows-2 '>
                  <div className={`w-full xl:w-1/2 flex  justify-center sm:justify-start sm:items-center gap-2 sm:gap-2 xl:gap-3 sm:pl-6  bg-[#005261]  border border-orange-500 ${showOtherInfo?'bg-[#005261]': ' bg-white'}`}>
                    <div className={`w-[40px] p-2 h-[65px] sm:p-2 rounded-xl ${showOtherInfo?'text-[#005261] bg-white':'text-[#005261] bg-[#E6EFF0]'}  text-4xl`}>
                      1
                    </div>
                    <div className={`flex sm:items-center sm:gap-4 sm:justify-center`}>
                      <img src="images/bolinha.png" className='hidden sm:block' alt="" />
                      <h2 className={` w-full sm:w-3/4  flex items-center sm:text-base md:text-xl xl:text-2xl ${showOtherInfo?'text-white':'text-[#005261]'}`}>2 informática</h2>
                    </div>
                  </div>
                  <div className={`sm:w-1/2 flex justify-end  border border-yellow-500 ${showOtherInfo?'bg-[#005261]': ' bg-white'}`}>
                    <div className={`w-full border-r-4 sm:border-x-4 ${showOtherInfo?'bg-[#005261] border-white': ' bg-white border-[#DADADA]'}`}>
                      <p className={`  ${showOtherInfo?'text-white border-white':'text-[#005261] '} text-center`}>diferença pro 1º lugar</p>
                      <p className={`${showOtherInfo?'text-[#FFC24C] bg-[#005261]':'text-[#005261]'} text-[#FFC24C] text-center`}>000000</p>
                    </div>
                    <div className={`w-full ${showOtherInfo?'bg-[#005261]': 'bg-white'}`}>
                    <p className={` ${showOtherInfo?'text-white':'text-[#005261]'} text-center`}><span>Pontuação</span><span>Final</span></p>
                    <p className={`${showOtherInfo?'text-[#FFC24C] bg-[#005261]':'text-[#005261]'} text-[#FFC24C] text-center`}>000000</p>
                    </div>
                    <div className={`${showOtherInfo?'text-white bg-[#005261]':'text-[#005261]'} text-[#FFC24C] text-center`}>
                     <Icon icon="solar:alt-arrow-down-line-duotone" className={`${showOtherInfo?'text-white rotate-180 duration-300':'text-[#005261] rotate-0 duration-300'}`} width={40} onClick={handleToggleOtherInfo}  />
                    </div>
                  </div>
                </div>
                {/*informações abaixo da informação */}
                {showOtherInfo &&(
                  <div className='-z-10 flex-col bg-white border-2 border-[#005261] flex  pt-8 pb-3 -mt-6 w-full rounded-xl shadow-lg'>
                    <div className='grid grid-cols-4 md:grid-cols-7 w-full -mt-2 sm:text-lg md:text-xl flex-wrap sm:flex-nowrap'>
                        <div className='w-full text-center border-r-4  border-[#005261]'>
                          <div className='h-[60px] bg-[#E6EFF0] border-b-4 border-[#005261]'>
                            Soma das Fichas
                          </div>
                          <div className='h-[60px] z-50 bg-white'>
                            0
                          </div>
                        </div>
                        <div className='w-full text-center border-r-4 border-[#005261]'>
                          <div className='h-[60px] bg-[#E6EFF0] border-b-4 border-[#005261]'>Alunos ativos</div>
                          <div className="h-[60px] bg-white ">
                            0
                          </div>
                        </div>
                        <div className='w-full text-center border-r-4 border-[#005261]'>
                          <div className='h-[60px] bg-[#E6EFF0] border-b-4 border-[#005261]'>Faltas</div>
                          <div className="h-[60px]  bg-white">
                            0
                          </div>
                        </div>
                        <div className='w-full  text-center sm:border-r-4 border-[#005261] '>
                        <div className='h-[60px] bg-[#E6EFF0] border-b-4 border-[#005261]'>Fantasmas</div>
                          <div className="h-[60px]  bg-white">
                            0
                          </div>
                        </div>
                        <div className='w-full text-center border-r-4 border-[#005261] '>
                          <div className='h-[60px] bg-[#E6EFF0] border-b-4 border-[#005261]'>Média Individual</div>
                          <div className="h-[60px]  bg-white">
                            0
                          </div>
                        </div>
                        <div className='w-full text-center border-r-4 border-[#005261]'>
                          <div className='h-[60px] bg-[#E6EFF0] border-b-4 border-[#005261] pb-10'>Atividades Extras</div>
                          <div className="h-[60px]  bg-white">
                            0
                          </div>
                        </div>
                        <div className='col-span-2 sm:col-span-1 w-full text-center '>
                          <div className='h-[60px] bg-[#E6EFF0] flex justify-evenly border-b-4 border-[#005261]'>
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
    </>
);
}
