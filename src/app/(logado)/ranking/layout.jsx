"use client";

import { useState } from "react";
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react';


export default function Layout({ children }) {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showFilterOptions2, setShowFilterOptions2] = useState(false);

  return (
    <div className=''>
      <div className='flex justify-center flex-col'>
        <div className='flex flex-col sm:justify-between w-full  '>
          {children}
        </div>
      </div>
    </div> 
  );
}


{/*
  
  
  
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
  */}