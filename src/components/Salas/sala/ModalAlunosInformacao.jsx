import Image from 'next/image'
import { Icon } from '@iconify/react';
import { useRef, useEffect, useState } from 'react';

export default function ModalAlunosInformacao({moveBar2,setMoveBar2, transition2,exibirModalAlunoInformacao,children }){
  return (
         <>
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
              <div className="fixed inset-0 flex items-center justify-center z-50">  
               <div className='max-w-full w-[720px] bg-white p-8 rounded-3xl '>
                  <div className='max-w-full w-[667px] flex flex-col gap-4'>
                    {/*cabeçalho */}
                    <div className='flex'>
                      <div className='w-1/2'>
                        <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} onClick={exibirModalAlunoInformacao}/>
                      </div>
                      <div className='w-full'>
                        <h1 className='text-[#005261] text-lg font-semibold'>Quantidade de Pontos</h1>
                      </div>
                      {/*filtrar por dia */}
                      <div
                          className="w-[113px] shadow-xl bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center relative" // Adicione 'relative' para posicionar elementos filhos
                        >
                          <Icon icon="mynaui:filter" className="ml-2 h-6 w-6" />
                          Data
                        </div>
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
                        className={`hidden sm:block h-[4px] w-[165px] bg-[#005261] ${transition2 ? "duration-700 delay-100" : ""}
                          ${moveBar2 === "Jogos de Pátio" ? "left-0" : ""}
                          ${moveBar2 === "Campeonatos de Quadra" ? "left-[180px]" : ""}
                          ${moveBar2 === "Campeonatos de Pátio" ? "left-[380px]" : ""}
                          ${moveBar2 === "Oficinas" ? "left-[500px]" : ""}
                          absolute -bottom-1 font-bold`}
                      ></div>
                    </div>
                  </div>
                  {/*conteudo */}
                  {children}
               </div>
              </div>
          </>
  )
}