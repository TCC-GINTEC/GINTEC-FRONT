"use client";
import { useState } from "react";

export default function Salas() {
  const [linhas, setLinhas] = useState([]);
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
  }

  const uniqueCursos = [...new Set(retornoApi.map(data => data.curso))];

  return (
    <>
      <select name="" id="" onChange={(e) => handleFiltroCursos(e)}>
        <option value="">todos os cursos</option>
        {uniqueCursos.map((curso, index) => (
          <option key={index} value={curso}>{curso}</option>
        ))}
      </select>

      <div className='grid grid-cols-3 gap-20'>
        {linhas.length > 0 ? (
          linhas.map((data, index) => (
            <div key={index} className='flex items-center rounded-xl gap-4 p-9 shadow-md'>
              <div className="w-4 bg-gray-500 rounded-full p-6"></div>
              <h1 className='text-xl'>{data.serie}º {data.curso}</h1>
            </div>
          ))
        ) : (
          retornoApi.map((data, index) => (
            <div key={index} className='flex items-center rounded-xl gap-4 p-9 shadow-md'>
              <div className="w-4 bg-gray-500 rounded-full p-6"></div>
              <span className='text-xl'>{data.serie}º {data.curso}</span>
            </div>
          ))
        )}
      </div>
    </>
  );
}
