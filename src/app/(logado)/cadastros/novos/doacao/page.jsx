"use client"

import Link from 'next/link'
import { Icon } from '@iconify/react';
export default function Quadra(params) {
  return (
  <>
     <div className='sm:ml-[5%] flex flex-col gap-4'>
        <Link href='/cadastros'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
        </Link>
        <h1 className='text-2xl font-medium'>Novo Cadastro</h1>
      </div>
    <div className='mx-auto relative flex flex-col  items-center justify-center max-w-[525px] p-x-4 pt-11 pb-4	 border border-[#DADADA] rounded-3xl shadow-xl '>
      <Link href='/cadastros/novos' className='absolute left-4 top-3'>
        <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
      </Link>
      <div
          className='flex flex-col w-3/4 h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
          <div className='flex text-sm text-[#666666] pt-1'>
            <p className='flex-1'>Tipo de cadastro</p>
            <Icon icon="iconamoon:arrow-down-2-duotone"  width={30} style={{ color: "#005261"}} />
          </div>
          <p className='text-[#005261] font-semibold'>Doação</p>
      </div>
      <form  className='space-y-8 mt-10  w-3/4 flex items-center flex-col'>
        <label  className='flex flex-col gap-3 w-full px-9 pt-3 pb-4 rounded-2xl bg-[#E6EFF0]'>
        Nome da Doação
          <input type="text" name="" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg mb-4' />
        </label>
        <label  className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
          Pontuação da Doação
          <input type="number" name="" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
        </label>
        <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
        Data para Doar
          <input type="date" name="" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
        </label>
        <button type='submit' className='w-1/3 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
      </form>
    </div>
    </>
  )
}