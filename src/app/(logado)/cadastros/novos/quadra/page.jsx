"use client"

import Link from 'next/link'
import { Icon } from '@iconify/react';
export default function Quadra(params) {
  return (
    
    <div className='mx-auto relative flex flex-col  items-center justify-center max-w-[525px] p-4 border border-black '>
      <Link href='/novos' className='absolute left-0 top-0'>
        <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
      </Link>
      <div
          className='flex flex-col w-3/4 h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
          <div className='flex text-sm text-[#666666]'>
            <p className='flex-1'>Tipo de cadastro</p>
            <Icon icon="iconamoon:arrow-down-2-duotone" className='' width={30} style={{ color: "#005261"}} />
          </div>
          <p className='text-[#005261] font-semibold'>Campeonato de Quadra</p>
      </div>
      <form  className='space-y-8 mt-10  w-3/4 flex items-center flex-col'>
        <label  className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
        Nome campeonato
          <input type="text" name="" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
        </label>
        <label  className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
          Pontuação do campeonato
          <input type="text" name="" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
        </label>
        <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
          Quantidade de fases
          <input type="number" name="" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
        </label>
        <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
        Data
          <input type="date" name="" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
        </label>
        <button type='submit' className='w-1/3 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
      </form>
    </div>
  )
}