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
      <div className='md:w-[100%]'>
        <div className='w-full border bg-[#005261] rounded-l-lg rounded-r-lg overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='text-white text-center'>
                <th className='p-3 min-w-[150px]'>Alunos</th>
                <th className='p-3 min-w-[100px]'>QDP</th>
                <th className='p-3 min-w-[100px]'>DATA</th>
                <th className='p-3 min-w-[100px]'>TOTAL GERAL</th>
                <th className='p-3 rounded-r-lg'>Menção</th>
              </tr>
            </thead>
            <tbody>
              {retornoApi.map((aluno) => (
                <tr key={aluno.id} className='text-center'>
                  <td className='border border-gray-200 min-w-[150px]'>{aluno.nome}</td>
                  <td className='border border-gray-200 min-w-[100px]'>{aluno.qdp}</td>
                  <td className='border border-gray-200 min-w-[100px]'>{aluno.dia}</td>
                  <td className='border border-gray-200 min-w-[100px]'>{aluno.totalPontos}</td>
                  <td className={`border border-gray-200 ${getColorClass(aluno.mencao)}`}>{aluno.mencao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      )}

      {moveBar === 'doacoes' && (
      <div className='md:w-[70%]'>
        <div className='overflow-x-auto rounded-tl-lg'>
            <div className='flex'>
              <div className='w-[200px]'>
                <div className='p-3 font-bold'>Alunos</div>
                <div className='p-3'>Richard dos Santos</div>
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
        <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] border bg-[#005261] rounded-l-lg rounded-r-lg overflow-x-auto'>
           <div className='shrink-0 '>
              <div className='text-center p-2'>esporte</div>
              <div className='text-sm	 bg-white'>
              Alice Giuly Borges Moreno
              </div>
              <div className='text-sm	 bg-white'>
              Alice Giuly Borges Moreno
              </div>
            </div>
            <div className='shrink-0 '>
              <div className='text-center p-2'>esporte</div>
              <div className='text-sm bg-white	'>
                Henrique Douglas Magnun
              </div>
            </div>
            <div className='shrink-0 '>
              <div className='text-center p-2'>esporte</div>
              <div className='text-sm	 bg-white'>
                Peterson Wilhans Santos 
              </div>
            </div>
            <div className='shrink-0 '>
              <div className='text-center p-2'>esporte</div>
              <div className='text-sm bg-white'>
                Kethelin Melo
              </div>
            </div>
          </div>
        </div> 
      )}
  </>
  );
}
