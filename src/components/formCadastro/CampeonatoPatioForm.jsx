"use client";
import { useState } from 'react';


export default function QuadraForm({handleFormSubmit,handleCloseForm}){

  return(
    <form onSubmit={(e) => handleFormSubmit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
      <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
        Nome campeonato
        <input type="text" name="nomeCampeonato" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
      </label>
      <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
        Pontuação do campeonato
        <input type="number" name="pontoCampeonato" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
      </label>
      <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
        Quantidade de fases
        <input type="number" name="qntFases" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
      </label>
      <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
        Data
        <input type="date" name="dataCampeonato" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
      </label>
      <div className='flex sm:flex-row justify-evenly w-full'>
          <button type='submit' className=' w-1/3  sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
          <button onClick={() => handleCloseForm()} type='button' className=' w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
            cancelar
          </button>
      </div>
    </form>
  )
}