'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Sala() {
  const [moveBar, setMoveBar] = useState('principal');
  const [transition, setTransition] = useState(false); // Estado para controlar a transição
  const searchParams = useSearchParams();
  const urlCurso = searchParams.get('curso');
  const urlSerie = searchParams.get('serie');

  const [retornoApi, setRetornoApi] = useState([
    {
      id: 1,
      nome: 'fulano',
      qda: 25,
      qdp: 18.436,
      dia: 1,
      totalPontos: 60.7,
      mencao: 'MB',
    },
    {
      id: 2,
      nome: 'joao',
      qda: 13,
      qdp: 9.896,
      dia: 1,
      totalPontos: 25.76,
      mencao: 'R',
    },
    {
      id: 3,
      nome: 'beltrano',
      qda: 19,
      qdp: 18.436,
      dia: 1,
      totalPontos: 48.367,
      mencao: 'B',
    },
    {
      id: 4,
      nome: 'ciclano',
      qda: 25,
      qdp: 1200,
      dia: 1,
      totalPontos: 0,
      mencao: 'I',
    },
  ]);

  function getColorClass(mencao) {
    switch (mencao) {
      case 'MB':
        return 'bg-[#3ACF1F]'; // Verde para MB
      case 'B':
        return 'bg-[#A0C340]'; // Verde-claro para B
      case 'I':
        return 'bg-[#D32719]'; // Vermelho para I
      case 'R':
        return 'bg-[#FFC24C]'; // Laranja para R
      default:
        return 'bg-gray-200'; // Cor padrão para outras menções
    }
  }

  useEffect(() => {
    setTransition(true); // Ativa a transição após o componente ser montado
  }, []);

  return (
    <>
      <div className='w-3/4 min-w-[390px]'>
        <h1 className='text-2xl font-semibold mb-10'>
          {urlSerie} º {urlCurso}
        </h1>
        <div className='flex gap-20 mb-4 border-b-4 border-b-[#DADADA] relative'>
          <div onClick={() => setMoveBar('principal')} className='flex items-center gap-2 text-xl'>
            <img src='../images/home-icon.svg' alt='' />
            Principal
          </div>
          <div onClick={() => setMoveBar('doacoes')} className='flex text-[#DADADA] font-semibold'>
            Doações
          </div>
          <div onClick={() => setMoveBar('campeonatos')} className='text-[#DADADA] font-semibold'>
            Campeonatos
          </div>
          <div
            className={`h-[4px] w-[124px] bg-[#005261] ${transition ? 'duration-700 delay-100' : ''} 
              ${moveBar === 'principal' ? 'left-0' : ''} 
              ${moveBar === 'doacoes' ? 'left-40' : ''} 
              ${moveBar === 'campeonatos' ? 'left-80' : ''} 
              absolute -bottom-1 font-bold`}
          ></div>
        </div>
        <div className='border bg-[#005261] rounded-l-lg rounded-r-lg'>
          <div className='flex text-center justify-between'>
            <div className='bg-[#005261] text-white md:p-3 sm:p-1 flex-1 rounded-l-lg'>Alunos</div>
            <div className='bg-[#005261] text-white md:p-3 sm:p-1 flex-1'>QDP</div>
            <div className='bg-[#005261] text-white md:p-3 sm:p-1 flex-1'>DATA</div>
            <div className='bg-[#005261] text-white md:p-3 sm:p-1 flex-1'>TOTAL GERAL</div>
            <div className='bg-[#005261] text-white md:p-3 sm:p-1 flex-1 rounded-r-lg'>Menção</div>
          </div>
          <div className='flex flex-wrap text-center bg-white'>
            {retornoApi.map((aluno) => (
              <div key={aluno.id} className='w-full'>
                <div className='flex justify-between w-full'>
                  <div className='flex-1 border border-r-2 border-gray-200'>{aluno.nome}</div>
                  <div className='flex-1 border border-r-2 border-gray-200'>{aluno.qdp}</div>
                  <div className='flex-1 border border-r-2 border-gray-200'>{aluno.dia}</div>
                  <div className='flex-1 border border-r-2 border-gray-200'>{aluno.totalPontos}</div>
                  <div className={`flex-1 border border-gray-200 ${getColorClass(aluno.mencao)}`}>{aluno.mencao}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
