"use client"

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function Ranking() {
  const [data, setData] = useState({
    '3 informatica': [
      { nome: 'Richard dos santos paiva', pontuacao: 18902 },
      { nome: 'joao', pontuacao: 20002 },
      { nome: 'maria', pontuacao: 16902 },
    ],
    '2 informatica': [
      { nome: 'vitor', pontuacao: 17902 },
      { nome: 'carlos', pontuacao: 16902 },
      { nome: 'jose', pontuacao: 10902 },
    ],
    '1 informatica': [
      { nome: 'andre', pontuacao: 16902 },
      { nome: 'yasmin', pontuacao: 18030 },
      { nome: 'douglas', pontuacao: 1500 },
    ],
    '1 administração': [
      { nome: 'andre', pontuacao: 16500, serie: 1 },
      { nome: 'yasmin', pontuacao: 14030, serie: 1 },
      { nome: 'douglas', pontuacao: 16000, serie: 1 },
    ],
    '2 administração': [
      { nome: 'andre', pontuacao: 16902, serie: 2 },
      { nome: 'yasmin', pontuacao: 18030, serie: 2 },
      { nome: 'douglas', pontuacao: 1500, serie: 2 },
    ],
    '3 administração': [
      { nome: 'andre', pontuacao: 20002, serie: 3 },
      { nome: 'yasmin', pontuacao: 18030, serie: 3 },
      { nome: 'douglas', pontuacao: 15400, serie: 3 },
    ],
    '3 recursosHumanos': [
      { nome: 'andre', pontuacao: 17902, serie: 1 },
      { nome: 'yasmin', pontuacao: 17730, serie: 1 },
      { nome: 'douglas', pontuacao: 14000, serie: 1 },
    ],
  });

  const [sortedData, setSortedData] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showColocado, setShowColocado] =  useState();

  useEffect(() => {
    const courseSums = Object.keys(data).map((curso) => ({
      curso,
      total: data[curso].reduce((acc, aluno) => acc + aluno.pontuacao, 0),
    }));

    courseSums.sort((a, b) => b.total - a.total);
    setSortedData(courseSums);
  }, []);

  const handlePodiumClick = (curso) => {
    setSelectedCourse(selectedCourse === curso ? null : curso);
  };


  return (
    <>
      <div className='relative inline justify-center mb-10'>
        {/* Pódio do 1º, 2º, 3º lugares */}
        <div className='grid gap-8 md:grid-cols-3 md:grid-rows-1 sm:grid-cols-1 md:justify-items-center md:items-end sm:max-w-[900px] h-[280px] rounded-3xl mx-auto' style={{ backgroundImage: `url('/images/bg-ranking.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          {sortedData.slice(0, 3).map((course, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 justify-items-center md:flex md:flex-col items-center justify-center bg-[#4C8690] rounded-t-lg ${
                index === 0 ? 'col-span-1 row-start-1 md:row-start-1 md:col-start-2 md:w-[196px] md:h-[280px]' : index === 1 ? 'col-span-1 row-start-2 md:col-start-1 md:row-start-1 md:w-[180px] md:h-[190px]' : 'col-span-1 md:col-start-3 row-start-3 md:row-start-1 md:w-[196px] md:h-[220px] '
              }`}
            >
              <p className='flex items-center md:gap-4 font-bold'>
                {index + 1} º lugar
                <Icon
                  width={30}
                  onClick={() => handlePodiumClick(course.curso)}
                  icon='solar:alt-arrow-down-line-duotone'
                  className={`text-black duration-300 transform ${
                    selectedCourse === course.curso ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </p>
              <img src='/images/bolinha.png' alt='' width={index === 0 ? 69 : index === 1 ? 52 : 49} />
              <p className='font-medium text-center'>{course.curso}</p>
              <p className='text-[#FFC24C] font-semibold'>{course.total}</p>
              {/* Exibe a soma total de pontos */}
            </div>
          ))}
        </div>
      </div>
      {/*exibe um ou outro dos 3 colocados */}
      {sortedData.map((course, index) => (
            index < 3 && selectedCourse === course.curso && (
            <div key={index} className='w-full flex flex-col mt-2 rounded-xl shadow-lg'>
              <div
                className={`w-full sm:flex z-30 ${
                  selectedCourse === course.curso ? 'w-full flex-col bg-[#005261]' : 'bg-white'
                } transition-all delay-300 py-4 sm:pl-2 md:pl-2 md:pr-4 xl:px-8 rounded-xl`}
              >
                <div className='w-full sm:flex grid-cols-1 grid-rows-2'>
                  <div
                    className={`w-full xl:w-1/2 flex justify-center sm:justify-start sm:items-center gap-2 sm:gap-2 xl:gap-3 sm:pl-6 bg-[#005261] border border-orange-500 ${
                      selectedCourse === course.curso ? 'bg-[#005261]' : 'bg-white'
                    }`}
                  >
                    <div
                      className={`w-[40px] p-2 h-[65px] sm:p-2 rounded-xl ${
                        selectedCourse === course.curso ? 'text-[#005261] bg-white' : 'text-[#005261] bg-[#E6EFF0]'
                      } text-4xl`}
                    >
                      {index + 1}
                    </div>
                    <div className='flex sm:items-center sm:gap-4 sm:justify-center'>
                      <img src='images/bolinha.png' className='hidden sm:block' alt='' />
                      <h2
                        className={`w-full sm:w-3/4 flex items-center sm:text-base md:text-xl xl:text-2xl ${
                          selectedCourse === course.curso ? 'text-white' : 'text-[#005261]'
                        }`}
                      >
                        {course.curso}
                      </h2>
                    </div>
                  </div>

                  <div
                    className={`sm:w-1/2 flex justify-end border border-yellow-500 ${
                      selectedCourse === course.curso ? 'bg-[#005261]' : 'bg-white'
                    }`}
                  >
                    <div
                      className={`w-full border-r-4 sm:border-x-4 ${
                        selectedCourse === course.curso ? 'bg-[#005261] border-white' : 'bg-white border-[#DADADA]'
                      }`}
                    >
                      <p className={`${selectedCourse === course.curso ? 'text-white border-white' : 'text-[#005261]'} text-center`}>
                        Diferença pro 1º lugar
                      </p>
                      <p className={`${selectedCourse === course.curso ? 'text-[#FFC24C] bg-[#005261]' : 'text-[#005261]'} text-center`}>
                          {index < 3 ? sortedData[0].total - course.total : '---'}
                      </p>
                    </div>
                    <div
                      className={`w-full ${
                        selectedCourse === course.curso ? 'bg-[#005261]' : 'bg-white'
                      }`}
                    >
                      <p className={`${selectedCourse === course.curso ? 'text-white' : 'text-[#005261]'} text-center`}>
                        <span>Pontuação</span>
                        <span>Final</span>
                      </p>
                      <p className={`${selectedCourse === course.curso ? 'text-[#FFC24C] bg-[#005261]' : 'text-[#005261]'} text-center`}>
                        {course.total}
                      </p>
                    </div>
                    <div className={`${selectedCourse === course.curso ? 'text-white bg-[#005261]' : 'text-[#005261]'} text-center`}>
                      <Icon
                        icon='solar:alt-arrow-down-line-duotone'
                        className={`${
                          selectedCourse === course.curso ? 'text-white rotate-180 duration-300' : 'text-[#005261] rotate-0 duration-300'
                        }`}
                        width={40}
                        onClick={() => handlePodiumClick(course.curso)}
                      />
                    </div>
                  </div>
                </div>
                {/* Informações abaixo das informações */}
                {selectedCourse === course.curso && (
                  <div className='-z-10 flex-col bg-white border-2 border-[#005261] flex pt-8 pb-3 -mt-6 w-full rounded-xl shadow-lg'>
                    <div className='grid grid-cols-4 md:grid-cols-7 w-full -mt-2 sm:text-lg md:text-xl flex-wrap sm:flex-nowrap'>
                      {[
                        { label: 'Soma das Fichas', value: '0' },
                        { label: 'Alunos ativos', value: '0' },
                        { label: 'Faltas', value: '0' },
                        { label: 'Fantasmas', value: '0', extraClass: 'sm:border-r-4' },
                        { label: 'Média Individual', value: '0' },
                        { label: 'Atividades Extras', value: '0' },
                        { label: 'Data', value: '0', icon: true, colSpan: 'col-span-2 sm:col-span-1' },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`w-full text-center ${item.colSpan || ''} ${
                            index < 6 ? 'border-r-4 border-[#005261]' : ''
                          } ${item.extraClass || ''}`}
                        >
                          <div className={`h-[60px] bg-[#E6EFF0] ${item.icon ? 'flex justify-evenly' : ''} border-b-4 border-[#005261]`}>
                            {item.label}{' '}
                            {item.icon && (
                              <Icon
                                icon='solar:alt-arrow-down-line-duotone'
                                className='text-[#005261]'
                                width={30}
                              />
                            )}
                          </div>
                          <div className={`h-[60px] ${item.icon ? 'h-[70px]' : ''} bg-white`}>{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        ))}
      
      {/*Verifica se o curso não está entre os três primeiros colocados*/}
      {sortedData.map((course, index) => (
          !sortedData.slice(0, 3).find((podiumCourse) => podiumCourse.curso === course.curso) && (
            <div key={index} className='w-full flex flex-col mt-2 rounded-xl shadow-lg'>
              <div
                className={`w-full sm:flex z-30 ${
                  selectedCourse === course.curso ? 'w-full flex-col bg-[#005261]' : 'bg-white'
                } transition-all delay-300 py-4 sm:pl-2 md:pl-2 md:pr-4 xl:px-8 rounded-xl`}
              >
                <div className='w-full sm:flex grid-cols-1 grid-rows-2'>
                  <div
                    className={`w-full xl:w-1/2 flex justify-center sm:justify-start sm:items-center gap-2 sm:gap-2 xl:gap-3 sm:pl-6 bg-[#005261] border border-orange-500 ${
                      selectedCourse === course.curso ? 'bg-[#005261]' : 'bg-white'
                    }`}
                  >
                    <div
                      className={`w-[40px] p-2 h-[65px] sm:p-2 rounded-xl ${
                        selectedCourse === course.curso ? 'text-[#005261] bg-white' : 'text-[#005261] bg-[#E6EFF0]'
                      } text-4xl`}
                    >
                      {index + 1}
                    </div>
                    <div className='flex sm:items-center sm:gap-4 sm:justify-center'>
                      <img src='images/bolinha.png' className='hidden sm:block' alt='' />
                      <h2
                        className={`w-full flex items-center sm:text-base md:text-xl xl:text-2xl ${
                          selectedCourse === course.curso ? 'text-white' : 'text-[#005261]'
                        }`}
                      >
                        {course.curso}
                      </h2>
                    </div>
                  </div>

                  <div
                    className={`sm:w-1/2 flex justify-end border border-yellow-500 ${
                      selectedCourse === course.curso ? 'bg-[#005261]' : 'bg-white'
                    }`}
                  >
                    <div
                      className={`w-full border-r-4 sm:border-x-4 ${
                        selectedCourse === course.curso ? 'bg-[#005261] border-white' : 'bg-white border-[#DADADA]'
                      }`}
                    >
                      <p className={`${selectedCourse === course.curso ? 'text-white border-white' : 'text-[#005261]'} text-center`}>
                        Diferença pro 1º lugar
                      </p>
                      <p className={`${selectedCourse === course.curso ? 'text-[#FFC24C] bg-[#005261]' : 'text-[#005261]'} text-center`}>
                          {index >= 3 ? sortedData[0].total - course.total : '---'}
                      </p>
                    </div>
                    <div
                      className={`w-full ${
                        selectedCourse === course.curso ? 'bg-[#005261]' : 'bg-white'
                      }`}
                    >
                      <p className={`${selectedCourse === course.curso ? 'text-white' : 'text-[#005261]'} text-center`}>
                        <span>Pontuação</span>
                        <span>Final</span>
                      </p>
                      <p className={`${selectedCourse === course.curso ? 'text-[#FFC24C] bg-[#005261]' : 'text-[#005261]'} text-center`}>
                        {course.total}
                      </p>
                    </div>
                    <div className={`${selectedCourse === course.curso ? 'text-white bg-[#005261]' : 'text-[#005261]'} text-center`}>
                      <Icon
                        icon='solar:alt-arrow-down-line-duotone'
                        className={`${
                          selectedCourse === course.curso ? 'text-white rotate-180 duration-300' : 'text-[#005261] rotate-0 duration-300'
                        }`}
                        width={40}
                        onClick={() => handlePodiumClick(course.curso)}
                      />
                    </div>
                  </div>
                </div>
                {/* Informações abaixo das informações */}
                {selectedCourse === course.curso && (
                  <div className='-z-10 flex-col bg-white border-2 border-[#005261] flex pt-8 pb-3 -mt-6 w-full rounded-xl shadow-lg'>
                    <div className='grid grid-cols-4 md:grid-cols-7 w-full -mt-2 sm:text-lg md:text-xl flex-wrap sm:flex-nowrap'>
                      {[
                        { label: 'Soma das Fichas', value: '0' },
                        { label: 'Alunos ativos', value: '0' },
                        { label: 'Faltas', value: '0' },
                        { label: 'Fantasmas', value: '0', extraClass: 'sm:border-r-4' },
                        { label: 'Média Individual', value: '0' },
                        { label: 'Atividades Extras', value: '0' },
                        { label: 'Data', value: '0', icon: true, colSpan: 'col-span-2 sm:col-span-1' },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`w-full text-center ${item.colSpan || ''} ${
                            index < 6 ? 'border-r-4 border-[#005261]' : ''
                          } ${item.extraClass || ''}`}
                        >
                          <div className={`h-[60px] bg-[#E6EFF0] ${item.icon ? 'flex justify-evenly' : ''} border-b-4 border-[#005261]`}>
                            {item.label}{' '}
                            {item.icon && (
                              <Icon
                                icon='solar:alt-arrow-down-line-duotone'
                                className='text-[#005261]'
                                width={30}
                              />
                            )}
                          </div>
                          <div className={`h-[60px] ${item.icon ? 'h-[70px]' : ''} bg-white`}>{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        ))}

    </>
  );
}