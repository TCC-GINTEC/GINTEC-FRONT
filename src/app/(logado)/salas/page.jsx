"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';

export default function Salas() {
  const [linhas, setLinhas] = useState([]);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const router = useRouter();

  const [retornoApi, setRetornoApi] = useState([
    {
      id: 1,
      curso: 'informatica',
      serie: 3,
      alunos: [],
      pda: [],
      data: [],
    },
    {
      id: 2,
      curso: 'informatica',
      serie: 2,
      alunos: [],
      pda: [],
      data: [],
    },
    {
      id: 3,
      curso: 'informatica',
      serie: 1,
      alunos: [],
      pda: [],
      data: [],
    },
    {
      id: 4,
      curso: 'recursos humanos',
      serie: 1,
      alunos: [],
      pda: [],
      data: [],
    },
    {
      id: 6,
      curso: 'administração',
      serie: 3,
      alunos: [],
      pda: [],
      data: [],
    },
    {
      id: 8,
      curso: 'administração',
      serie: 2,
      alunos: [],
      pda: [],
      data: [],
    },
    {
      id: 9,
      curso: 'administração',
      serie: 1,
      alunos: [],
      pda: [],
      data: [],
    }
  ]);

  function handleFiltroCursos(e) {
    const filtroCurso = retornoApi.filter(element => element.curso === e.target.value);
    setLinhas(filtroCurso);
    setShowFilterOptions(false);
  }

  const uniqueCursos = [...new Set(retornoApi.map(data => data.curso))];
  
  return (
    <div className='pl-[90px]'>
      <div className="flex justify-end m-auto max-w-[920px] relative">
        <div
          onClick={() => setShowFilterOptions(!showFilterOptions)}
          className="w-[170px] bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center"
        >
          <Icon icon="mynaui:filter" className="mr-2 h-6 w-6" />filtrar
        </div>
        {showFilterOptions && (
          <>
            <div  className="fixed inset-0 bg-black bg-opacity-20 z-50 "></div>
            <div className="absolute bg-white shadow-md rounded-lg mt-20 right-0  w-48 py-2 z-50">
              <ul>
                <li className="cursor-pointer hover:bg-gray-100 py-1 px-3" onClick={() => handleFiltroCursos({ target: { value: '' } })}>
                  Todos os cursos
                </li>
                {uniqueCursos.map((curso, index) => (
                  <li key={index} className="cursor-pointer hover:bg-gray-100 py-1 px-3" onClick={() => handleFiltroCursos({ target: { value: curso } })}>
                    {curso}
                  </li>
                ))}
                </ul>
              </div>
            </>
         )}
       </div>

      <div className="max-w-[920px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto text-sm md:text-base">
        {linhas.length > 0 ? (
          linhas.map((data, index) => (
            <div key={index} className="w-full">
              <button 
                className="h-[100px] w-full rounded-xl shadow-md flex justify-evenly items-center gap-4 p-4 md:p-9"
                onClick={() => router.push(`/salas/sala?curso=${data.curso}&serie=${data.serie}`)}
              >
                <div className='flex justify-start'>
                  <div className="w-12 h-12 bg-gray-500 rounded-full flex justify-center items-center">
                    {/* Conteúdo dentro do círculo */}
                  </div>
                </div>
                <h1 className={`${data.curso === 'recursos humanos' ? '' : ''}`}>
                  {data.serie}º {data.curso}
                </h1>
              </button>
            </div>
          ))
        ) : (
          retornoApi.map((data, index) => (
            <div key={index} className="w-full">
              <button 
                onClick={() => router.push(`/salas/sala?curso=${data.curso}&serie=${data.serie}`)}
                className="h-[100px] w-full rounded-xl shadow-md flex justify-evenly items-center gap-4 p-4 md:p-9"
              >
                <div className='flex justify-center border border-red-500 w-1/3'>
                  <div className="w-12 h-12 bg-gray-500 rounded-full flex justify-center items-center">
                    {/* Conteúdo dentro do círculo */}
                  </div>
                </div>
                <h1 className={`${data.curso === 'recursos humanos' ? '' : ''}`}>
                  {data.serie}º {data.curso}
                </h1>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
