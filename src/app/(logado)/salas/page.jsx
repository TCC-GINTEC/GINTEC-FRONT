"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import Image from 'next/image'

export default function Salas() {

  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [linhas, setLinhas] = useState([]);
  const [ subtitulo, setSubtitulo]= useState('Todos os Cursos')
  const router = useRouter();
  const [alertShowFase, setAlertShowFase] = useState(false) 

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
    setSubtitulo(e.target.value)
  }

  console.log(subtitulo)

  const uniqueCursos = [...new Set(retornoApi.map(data => data.curso))];
  
  return (
    <>
      <div className="sm:pl-4 mt-10 flex flex-col justify-end m-auto max-w-[920px] relative">
        <div className='w-full block sm:hidden'>
          <h1 className=' text-3xl text-center '>Organização das Salas</h1>
          <p className=' text-center text-[#DADADA]'>{subtitulo}</p>
        </div>
       <div className='w-full flex flex-col items-center'>
              <div className='w-full sm:block hidden'>
                <h1 className=' text-3xl'>Organização das salas</h1>
                <p className='text-[#DADADA]'>{subtitulo}</p>
              </div>
          
              <div className='flex justify-center sm:justify-end w-full'>
                <div
                  onClick={() => setShowFilterOptions(!showFilterOptions)}
                  className=" relative w-[170px] bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center"
                >
                  <Icon icon="mynaui:filter" className="mr-2 h-6 w-6" />filtrar
                  {showFilterOptions && (
                    <>
                     <div  className="fixed inset-0 bg-black bg-opacity-20 z-50 "></div>
                     <div className="absolute flex flex-col items-center bg-white shadow-md rounded-lg mt-52 -right-4  w-52 py-2 z-50">
                      <ul>
                        <li className="cursor-pointer hover:bg-gray-100 py-1 px-3" onClick={() => handleFiltroCursos({ target: { value: 'Todos os Cursos' } })}>
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
              </div>
        </div>
       
       </div>

      <div className="sm:pl-4 max-w-[920px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto text-sm md:text-base">
        {linhas.length > 0 ? (
          linhas.map((data, index) => (
            <div key={index} className="w-full flex justify-center">
              <button 
                className="h-[120px] w-[270px] rounded-xl shadow-md flex justify-evenly items-center gap-4 p-4 md:p-9"
                onClick={() => router.push(`/salas/sala?curso=${data.curso}&serie=${data.serie}`)}
              >
                <div className='flex justify-start'>
                  <Image src="/images/bolinha2.png" width={50}  height={50} />
                </div>
                <h1 className={`${data.curso === 'recursos humanos' ? '' : ''}`}>
                  {data.serie}º {data.curso}
                </h1>
              </button>
            </div>
          ))
        ) : (
          retornoApi.map((data, index) => (
            <div key={index} className="w-full flex justify-center">
              <button 
                onClick={() => router.push(`/salas/sala?curso=${data.curso}&serie=${data.serie}`)}
                className="h-[120px] w-[270px] rounded-xl shadow-md flex justify-evenly items-center gap-4 p-4 md:p-9"
              >

                <div className='flex justify-center'>
                  <Image src="/images/bolinha2.png " width={50} height={50}/>
                </div>
                <h1 className={`${data.curso === 'recursos humanos' ? '' : ''}`}>
                  {data.serie}º {data.curso}
                </h1>
              </button>
            </div>
          ))
        )}
      </div>
  </>
  );
}
