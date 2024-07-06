"use client";

import { useState } from "react";
import { Icon } from '@iconify/react';
import Link from 'next/link'

export default function Layout({ children }) {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showFilterOptions2, setShowFilterOptions2] = useState(false);
  
  return (
    <div className='pl-[79px] sm:pl-[100px]'>
      <div className='border border-red-500 flex justify-center flex-col'>
        <div className='flex flex-col sm:justify-between w-full border border-green-500 '>
          <div className='w-full pl-8'>
            <h1 className='text-3xl mb-3'>Pontuação geral</h1>
            <p className='text-[#DADADA]'>Todas as salas</p>
          </div>
          
          {/* Filtro */}
          <div className='flex justify-evenly sm:justify-end sm:pr-20 gap-8 w-full border border-orange-500 relative'>
            {/* Opções filtro 1 */}
            <div className='flex flex-col relative'>
              <div
                onClick={() => setShowFilterOptions(!showFilterOptions)}
                className="w-[170px] bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center"
              >
                <Icon icon="mynaui:filter" className="mr-2 h-6 w-6" />Data
              </div>
              {showFilterOptions && (
                <>
                  <div className="fixed inset-0 bg-black bg-opacity-20 z-50"></div>
                  <div className='absolute top-12 w-[170px] flex items-center flex-col z-50'>
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
            {/* Opções filtro 2 */}
            <div className='mt-4 flex items-end flex-col relative'>
              <div 
                onClick={() => setShowFilterOptions2(!showFilterOptions2)} 
                className='h-[44px] z-60 w-[44px] shadow-xl border-[3px] rounded-xl border-[#005261] flex items-center justify-center'
              >
                <Icon icon="solar:alt-arrow-down-line-duotone" width={20} />
              </div>
              {showFilterOptions2 && (
                <>
                  <div className="fixed inset-0 bg-black bg-opacity-20 z-50"></div>
                  <div className='z-50 absolute top-12'>
                    <div className="bg-white shadow-md rounded-lg mt-3 sm:w-[192px] py-2">
                      <ul>
                        <li onClick={() => setShowFilterOptions2(!showFilterOptions2)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">
                          <Link href="/ranking/cursos">
                            <p className='flex items-center justify-evenly'>
                              Todas as salas
                              <Icon icon="solar:alt-arrow-down-line-duotone" width={20} />
                            </p>
                           </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white shadow-md rounded-lg mt-5 sm:w-[192px] py-2">
                      <ul>
                        <li onClick={() => setShowFilterOptions2(!showFilterOptions2)} className="pl-6 cursor-pointer hover:bg-gray-100 py-1 px-3">
                           <Link href="/ranking">
                            <p className='flex items-center justify-evenly'>
                              Melhores Jogadores
                              <Icon icon="solar:alt-arrow-down-line-duotone" width={20} />
                            </p>
                           </Link>
                        </li>
                        <li onClick={() => setShowFilterOptions2(!showFilterOptions2)} className="pl-6 cursor-pointer hover:bg-gray-100 py-1 px-3">
                          <Link href="/ranking/padrinhos">
                            <p className='flex items-center justify-evenly'>
                              Melhores Padrinhos
                              <Icon icon="solar:alt-arrow-down-line-duotone" width={20} />
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
          {children}
          
        </div>
      </div>
    </div> 
  );
}
