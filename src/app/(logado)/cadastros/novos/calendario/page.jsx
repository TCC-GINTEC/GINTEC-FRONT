"use client"
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Novo() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(prevShow => !prevShow); // Alternativa mais concisa para alternar entre true/false
  }

  return (
    <>
      <div className='sm:ml-[5%] flex flex-col gap-8 '>
        <Link href='/cadastros'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
        </Link>
        <h1 className='text-2xl font-medium'>Novo Cadastro</h1>
      </div>
      <div className='flex flex-col gap-4 items-center w-full  sm:w-[525px] p-10 m-auto shadow-lg mt-10 text-[#666666] rounded-xl'>
        <div onClick={handleShow} 
          className='flex items-center justify-between w-full sm:w-3/4 h-[60px] px-6 text-lg rounded-full bg-[#E6EFF0] cursor-pointer transition-colors duration-300 '>
          Calendário
          <Icon icon="iconamoon:arrow-down-2-duotone" width={40} style={{ color: "#005261" }} />
        </div>
        <div className={`w-3/4 bg-[#E6EFF0] rounded-3xl overflow-hidden transition-all duration-500 ${show ? 'max-h-[400px] duration-300 p-6' : 'max-h-0 p-0'}`}>
          <ul className='space-y-4'>
            <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer'><Link href='/cadastros/novos/calendario/fases?fase=1'>fase 1</Link></li>
            <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer'><Link href='/cadastros/novos/calendario/fases?fase=2'>fase 2</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}


