"use client"
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Novo() {
  const [show, setShow] = useState(false);

  function handleShow() {
    if (show) {
      setShow(false);
    } else {

      setShow(true);
    }
  }

  return (
    <>
      <div className='sm:ml-[5%] flex flex-col gap-8 '>
        <Link href='/cadastros'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
        </Link>
        <h1 className='text-2xl font-medium'>Novo Cadastro</h1>
      </div>
      <div className='flex flex-col gap-4 justify-center w-[525px] p-10 m-auto shadow-lg mt-10 text-[#666666]'>
        <div onClick={handleShow} 
          className='flex items-center justify-between w-3/4 h-[60px] px-6 text-lg rounded-full bg-[#E6EFF0]'>
          Tipo de cadastro
          <Icon icon="iconamoon:arrow-down-2-duotone" width={40} style={{ color: "#005261" }} />
        </div>
        <div className='w-3/4 bg-[#E6EFF0] rounded-3xl' style={{ display: show ? 'block' : 'none' }}>
          <ul className='space-y-4 p-6'>
            <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white'><Link href='/cadastros/novos/patio'>Jogos de Pátio</Link></li>
            <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white'><Link href='/cadastros/novos/quadra'>Campeonatos de Quadra</Link></li>
            <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white'><Link href='/cadastros/novos/patio'>Campeonatos de Pátio</Link></li>
            <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white'><Link href='/cadastros/novos/doacao'>Doações</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
