"use client"
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
      nome: 'Richard dos Santos PAIVA',
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
      <h1 className='text-2xl font-semibold mb-10'>
        {urlSerie} º {urlCurso}
      </h1>
      <div className='md:w-3/4 flex md:gap-20 mb-4 border-b-4 border-b-[#DADADA] relative'>
        <div onClick={() => setMoveBar('principal')} className='flex items-center gap-2 sm:text-xl cursor-pointer'>
          <img src='../images/home-icon.svg' alt='' />
          Principal
        </div>
        <div onClick={() => setMoveBar('doacoes')} className='flex text-[#DADADA] font-semibold cursor-pointer'>
          Doações
        </div>
        <div onClick={() => setMoveBar('campeonato')} className='text-[#DADADA] font-semibold cursor-pointer'>
          Campeonatos
        </div>
        <div
          className={`h-[4px] w-[100px] md:w-[124px] bg-[#005261] ${transition ? 'duration-700 delay-100' : ''} 
              ${moveBar === 'principal' ? 'left-0' : ''} 
              ${moveBar === 'doacoes' ? 'md:left-40 left-30' : ''} 
              ${moveBar === 'campeonato' ? 'md:left-80' : ''} 
              absolute -bottom-1 font-bold`}
        ></div>
      </div>

      {moveBar === 'principal' && (
        <div className='md:w-[70%]'>
          <div className='overflow-x-auto rounded-tl-lg'>
            <div className='flex'>
              <div className='w-[200px]'>
                <div className='p-3 font-bold'>Nome Aluno</div>
                {retornoApi.map((aluno) => (
                  <div key={aluno.id} className='p-3'>{aluno.nome}</div>
                ))}
              </div>
              <div className='w-3/4 flex overflow-x-auto'>
                <div className='min-w-[200px]'>
                  <div className='p-3 font-bold'>PDA</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className='p-3'>{aluno.qda}</div>
                  ))}
                </div>
                <div className='min-w-[200px]'>
                  <div className='p-3 font-bold'>QDP</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className='p-3'>{aluno.qdp}</div>
                  ))}
                </div>
                <div className='min-w-[200px]'>
                  <div className='p-3 font-bold'>DATA</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className='p-3'>{aluno.dia}</div>
                  ))}
                </div>
                <div className='min-w-[200px]'>
                  <div className='p-3 font-bold'>TOTAL GERAL</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className='p-3'>{aluno.totalPontos}</div>
                  ))}
                </div>
                <div className='min-w-[200px]'>
                  <div className='p-3 font-bold'>MENÇÕES</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className={`p-3 ${getColorClass(aluno.mencao)}`}>{aluno.mencao}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {moveBar === 'doacoes' && (
        <div className='md:w-[70%]'>
          <div className='overflow-x-auto rounded-tl-lg'>
            <div className='flex'>
              <div className='w-[200px]'>
                <div className='p-3 font-bold'>Alunos</div>
                {retornoApi.map((aluno) => (
                  <div key={aluno.id} className='p-3'>{aluno.nome}</div>
                ))}
                {/* Adicione mais alunos conforme necessário */}
              </div>
              <div className='w-3/4 flex overflow-x-auto'>
                {[...retornoApi].map((_, i) => (
                  <div key={i} className='min-w-[200px]'>
                    <div className='p-3 font-bold'>Cadastrar Doação</div>
                    <div className='p-3'>Pontos alunos</div>
                    {/* Adicione mais informações conforme necessário */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {moveBar === 'campeonato' && (
        <div className='md:w-[70%]'>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 border bg-[#005261] rounded-l-lg rounded-r-lg overflow-x-auto'>
            {retornoApi.map((aluno) => (
              <div key={aluno.id} className='flex flex-col justify-center items-center p-4 bg-white'>
                <div className='text-center p-2'>Esporte</div>
                <div className='text-sm bg-white'>{aluno.nome}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
