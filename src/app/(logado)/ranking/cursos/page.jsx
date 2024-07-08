"use client"

import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { toast } from 'sonner';

export default function Ranking() {
  const [data, setData] = useState({
    informatica: [
      { nome: "Richard dos Santos Paiva", curso: "informatica", serie: "3º", pontuacao: 17902 },
      { nome: "Diana", curso: "informatica", serie: "3º", pontuacao: 17437 },
      { nome: "Alice", curso: "informatica", serie: "2º", pontuacao: 16234 },
      { nome: "Bruno", curso: "informatica", serie: "1º", pontuacao: 0 },
      { nome: "Carlos", curso: "informatica", serie: "2º", pontuacao: 0 },
      { nome: "Eva", curso: "informatica", serie: "1º", pontuacao: 14987 },
      { nome: "Felipe", curso: "informatica", serie: "2º", pontuacao: 14321 },
      { nome: "Gustavo", curso: "informatica", serie: "3º", pontuacao: 13987 }
    ],
    administracao: [
      { nome: "André", curso: "administracao", serie: "3º", pontuacao: 17512 },
      { nome: "Paula", curso: "administracao", serie: "3º", pontuacao: 13236 },
      { nome: "Beatriz", curso: "administracao", serie: "2º", pontuacao: 12765 },
      { nome: "Henrique", curso: "administracao", serie: "1º", pontuacao: 12234 },
      { nome: "Isabela", curso: "administracao", serie: "2º", pontuacao: 11765 },
      { nome: "João", curso: "administracao", serie: "1º", pontuacao: 11345 },
      { nome: "Mariana", curso: "administracao", serie: "3º", pontuacao: 10876 },
      { nome: "Pedro", curso: "administracao", serie: "2º", pontuacao: 10345 }
    ],
    recursosHumanos: [
      { nome: "Fernanda", curso: "recursos humanos", serie: "3º", pontuacao: 11297 },
      { nome: "Juliana", curso: "recursos humanos", serie: "3º", pontuacao: 11034 },
      { nome: "Lucas", curso: "recursos humanos", serie: "2º", pontuacao: 10678 },
      { nome: "Natalia", curso: "recursos humanos", serie: "1º", pontuacao: 10456 },
      { nome: "Otávio", curso: "recursos humanos", serie: "2º", pontuacao: 10123 },
      { nome: "Patricia", curso: "recursos humanos", serie: "1º", pontuacao: 9876 },
      { nome: "Rafael", curso: "recursos humanos", serie: "3º", pontuacao: 0 },
      { nome: "Silvia", curso: "recursos humanos", serie: "2º", pontuacao: 0 }
    ],
    contabilidade: [
      { nome: "Felipe", curso: "contabilidade", serie: "3º", pontuacao: 13656 },
      { nome: "Amanda", curso: "contabilidade", serie: "3º", pontuacao: 0 },
      { nome: "Bruna", curso: "contabilidade", serie: "2º", pontuacao: 12987 },
      { nome: "César", curso: "contabilidade", serie: "1º", pontuacao: 12567 },
      { nome: "Daniela", curso: "contabilidade", serie: "2º", pontuacao: 12234 },
      { nome: "Eduardo", curso: "contabilidade", serie: "1º", pontuacao: 11987 },
      { nome: "Fernanda", curso: "contabilidade", serie: "3º", pontuacao: 11456 },
      { nome: "Gabriel", curso: "contabilidade", serie: "2º", pontuacao: 11012 }
    ]
  });

  const [selectedPodium, setSelectedPodium] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Ordenar os dados de cada curso pela pontuação
    const sortedData = {};
    for (const curso in data) {
      sortedData[curso] = data[curso].sort((a, b) => b.pontuacao - a.pontuacao);
    }
    setData(sortedData);
  }, []);

  const handlePodiumClick = (index) => {
    setSelectedPodium(selectedPodium === index ? null : index);
  };

  const handleToggleOtherInfo = (curso) => {
    setSelectedCourse(selectedCourse === curso ? null : curso);
  };

  return (
    <>
      <div className='relative inline justify-center mb-10'>
        {/* Pódio do 1º, 2º, 3º lugares */}
        <div className='grid gap-8 md:grid-cols-3 md:grid-rows-1 sm:grid-cols-1 md:justify-items-center md:items-end sm:max-w-[900px] h-[280px] rounded-3xl mx-auto' style={{ backgroundImage: `url('/images/bg-ranking.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          {Object.keys(data).map((curso, index) => (
            <div key={index}
              className={`grid grid-cols-3  justify-items-center md:flex md:flex-col items-center justify-center bg-[#4C8690] rounded-t-lg ${
                index === 0 ? 'col-span-1 row-start-1 md:row-start-1 md:col-start-2 md:w-[196px] md:h-[280px]' :
                  index === 1 ? 'col-span-1 row-start-2 md:col-start-1 md:row-start-1 md:w-[180px] md:h-[190px]' :
                  'col-span-1 md:col-start-3 row-start-3  md:row-start-1  md:w-[196px] md:h-[220px] '}`}
              onClick={() => handlePodiumClick(index)}
            >
              <p className='flex items-center md:gap-4 font-bold'>
                {index + 1} º lugar
                <Icon
                  width={30}
                  icon="solar:alt-arrow-down-line-duotone"
                  className={`text-black duration-300 transform ${selectedPodium === index ? 'rotate-180' : 'rotate-0'}`}
                />
              </p>
              <img src="/images/bolinha.png" alt="" width={index === 0 ? 69 : index === 1 ? 52 : 49} />
              <p className='font-medium text-center'>{curso}</p>
              <p className='text-[#FFC24C] font-semibold'>{data[curso][0].pontuacao}</p>
            </div>
          ))}
        </div>
      </div>
  
      <div className="bg-slate-100 rounded-xl mb-5 sm:p-3 flex-col flex items-center ">
        {Object.keys(data).map((curso, index) => (
          <div key={index} className='w-full flex flex-col  mt-2  rounded-xl shadow-lg'>
            <div className={`w-full  sm:flex z-30   ${selectedCourse === curso ? 'w-full flex-col bg-[#005261]' : 'bg-white'} transition-all delay-300 py-4 sm:pl-2 md:pl-2 md:pr-4 xl:px-8 rounded-xl`}>
              <div className='w-full sm:flex grid-cols-1 grid-rows-2 '>
              <div className={`w-full xl:w-1/2 flex justify-center sm:justify-start sm:items-center gap-2 sm:gap-2 xl:gap-3 sm:pl-6 bg-[#005261] border border-orange-500 ${selectedCourse === curso ? 'bg-[#005261]' : 'bg-white'}`}>
                  <div className={`w-[40px] p-2 h-[65px] sm:p-2 rounded-xl ${selectedCourse === curso ? 'text-[#005261] bg-white' : 'text-[#005261] bg-[#E6EFF0]'} text-4xl`}>
                    1
                  </div>
                  <div className="flex sm:items-center sm:gap-4 sm:justify-center">
                    <img src="images/bolinha.png" className="hidden sm:block" alt="" />
                    <h2 className={`w-full sm:w-3/4 flex items-center sm:text-base md:text-xl xl:text-2xl ${selectedCourse === curso ? 'text-white' : 'text-[#005261]'}`}>
                      {curso}
                    </h2>
                  </div>
                </div>

                <div className={`sm:w-1/2 flex justify-end border border-yellow-500 ${selectedCourse === curso ? 'bg-[#005261]' : 'bg-white'}`}>
                  <div className={`w-full border-r-4 sm:border-x-4 ${selectedCourse === curso ? 'bg-[#005261] border-white' : 'bg-white border-[#DADADA]'}`}>
                    <p className={`${selectedCourse === curso ? 'text-white border-white' : 'text-[#005261]'} text-center`}>diferença pro 1º lugar</p>
                    <p className={`${selectedCourse === curso ? 'text-[#FFC24C] bg-[#005261]' : 'text-[#005261]'} text-center`}>000000</p>
                  </div>
                  <div className={`w-full ${selectedCourse === curso ? 'bg-[#005261]' : 'bg-white'}`}>
                    <p className={`${selectedCourse === curso ? 'text-white' : 'text-[#005261]'} text-center`}><span>Pontuação</span><span>Final</span></p>
                    <p className={`${selectedCourse === curso ? 'text-[#FFC24C] bg-[#005261]' : 'text-[#005261]'} text-center`}>000000</p>
                  </div>
                  <div className={`${selectedCourse === curso ? 'text-white bg-[#005261]' : 'text-[#005261]'} text-center`}>
                    <Icon icon="solar:alt-arrow-down-line-duotone" className={`${selectedCourse === curso ? 'text-white rotate-180 duration-300' : 'text-[#005261] rotate-0 duration-300'}`} width={40} onClick={() => handleToggleOtherInfo(curso)} />
                  </div>
                </div>

              </div>
              {/* Informações abaixo das informações */}
              {selectedCourse === curso && (
                <div className='-z-10 flex-col bg-white border-2 border-[#005261] flex  pt-8 pb-3 -mt-6 w-full rounded-xl shadow-lg'>
                    <div className="grid grid-cols-4 md:grid-cols-7 w-full -mt-2 sm:text-lg md:text-xl flex-wrap sm:flex-nowrap">
                        {[
                          { label: 'Soma das Fichas', value: '0' },
                          { label: 'Alunos ativos', value: '0' },
                          { label: 'Faltas', value: '0' },
                          { label: 'Fantasmas', value: '0', extraClass: 'sm:border-r-4' },
                          { label: 'Média Individual', value: '0' },
                          { label: 'Atividades Extras', value: '0' },
                          { label: 'Data', value: '0', icon: true, colSpan: 'col-span-2 sm:col-span-1' }
                        ].map((item, index) => (
                          <div key={index} className={`w-full text-center ${item.colSpan || ''} ${index < 6 ? 'border-r-4 border-[#005261]' : ''} ${item.extraClass || ''}`}>
                            <div className={`h-[60px] bg-[#E6EFF0] ${item.icon ? 'flex justify-evenly' : ''} border-b-4 border-[#005261]`}>
                              {item.label} {item.icon && <Icon icon="solar:alt-arrow-down-line-duotone" className="text-[#005261]" width={30} />}
                            </div>
                            <div className={`h-[60px] ${item.icon ? 'h-[70px]' : ''} bg-white`}>
                              {item.value}
                            </div>
                          </div>
                        ))}
                      </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* <div className={`w-full xl:w-1/2 flex  justify-center sm:justify-start sm:items-center gap-2 sm:gap-2 xl:gap-3 sm:pl-6  bg-[#005261]  border border-orange-500 ${showOtherInfo?'bg-[#005261]': ' bg-white'}`}>
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
 */

                         /*
                         
                         
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
                         */

                          
         {/* 
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
        */}
     