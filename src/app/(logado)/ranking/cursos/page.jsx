"use client"

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link'

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
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showFilterOptions2, setShowFilterOptions2] = useState(false);
  const [sortedData, setSortedData] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showColocado, setShowColocado] =  useState();

  //define a ordem do curso pela pontuacao
  useEffect(() => {
    const courseSums = Object.keys(data).map((curso) => ({
      curso,
      total: data[curso].reduce((acc, aluno) => acc + aluno.pontuacao, 0),
    }));

    courseSums.sort((a, b) => b.total - a.total);
    setSortedData(courseSums);
  }, []);

  //define o estado da cor e se aquele colocado é exibido ou não
  const handlePodiumClick = (curso) => {
    setSelectedCourse(selectedCourse === curso ? null : curso);
  };


  return (
    <>
     <div className='w-full pl-8'>
            <h1 className='text-3xl mb-3'>Pontuação geral</h1>
            <p className='text-[#DADADA]'>Todas as Salas</p>
       </div>
      {/* Filtro */}
      <div className='flex justify-evenly sm:justify-end sm:pr-20 gap-8 w-full relative'>
            {/* Opções filtro 1 */}
            <div className='flex flex-col relative'>
              <div
                onClick={() => setShowFilterOptions(!showFilterOptions)}
                className="w-[170px] bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center"
              >
                <Icon icon="mynaui:filter" className="mr-2 h-6 w-6" />Data
              </div>
              {showFilterOptions && (
                <>
                  <div className="fixed inset-0 bg-black bg-opacity-20 z-50"></div>
                  <div className='absolute top-12 w-[170px] flex items-center flex-col z-50'>
                    <div className="mt-10 bg-white shadow-md rounded-lg sm:w-[192px] py-2">
                      <ul>
                        <li onClick={() => setShowFilterOptions(!showFilterOptions)} className="flex items-center justify-evenly cursor-pointer hover:bg-gray-100 py-1 px-3">
                          data 1
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* Opções filtro 2 */}
            <div className='mt-4 flex items-end flex-col relative'>
              <div 
                onClick={() => setShowFilterOptions2(!showFilterOptions2)} 
                className='h-[44px] z-60 w-[44px] shadow-xl border-[3px] rounded-xl border-[#005261] flex items-center justify-center'
              >
                <Icon icon="solar:alt-arrow-down-line-duotone" width={20} />
              </div>
              {showFilterOptions2 && (
                <>
                  <div className="fixed inset-0 bg-black bg-opacity-20 z-50"></div>
                  <div className='z-50 absolute top-12'>
                    <div className="bg-white shadow-md rounded-lg mt-3 sm:w-[192px] py-2">
                      <ul>
                        <li onClick={() => setShowFilterOptions2(!showFilterOptions2)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">
                          <Link href="/ranking/cursos">
                            <p className='flex items-center justify-evenly text-[#a8a8a8] '>
                              Todas as Salas
                              <Icon icon="solar:alt-arrow-down-line-duotone" width={20} />
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white shadow-md rounded-lg mt-5 sm:w-[192px] py-2">
                      <ul>
                        <li onClick={() => setShowFilterOptions2(!showFilterOptions2)} className=" pl-6 sm:pl-0 cursor-pointer hover:bg-gray-100 py-1 px-3">
                          <Link href="/ranking">
                            <p className='flex items-center justify-evenly'>
                              Melhores Alunos
                            </p>
                          </Link>
                        </li>
                        <li onClick={() => setShowFilterOptions2(!showFilterOptions2)} className="pl-6 cursor-pointer hover:bg-gray-100 py-1 px-3">
                          <Link href="/ranking/padrinhos">
                            <p className='flex items-center justify-evenly'>
                              Melhores Padrinhos
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div> 
         </div>
      <div className='relative inline justify-center mb-10'>
        {/* Pódio do 1º, 2º, 3º lugares */}
        <div className='grid gap-8 md:grid-cols-3 md:grid-rows-1 sm:grid-cols-1 md:justify-items-center md:items-end sm:max-w-[900px] h-[280px] rounded-3xl mx-auto' style={{ backgroundImage: `url('/images/bg-ranking.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          {sortedData.slice(0, 3).map((course, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 justify-items-center md:flex md:flex-col items-center justify-center bg-[#4C8690] rounded-t-lg ${
                index === 0 ? 'col-span-1 row-start-1 md:row-start-1 md:col-start-2 md:w-[196px] md:h-[280px]' : index === 1 ? 'col-span-1 row-start-2 md:col-start-1 md:row-start-1 md:w-[196px] md:h-[220px]' : 'col-span-1 md:col-start-3 row-start-3 md:row-start-1 md:w-[180px] md:h-[190px]'
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
                <div className='w-full  sm:flex grid-cols-1 grid-rows-2'>
                  <div
                    className={`w-full xl:w-1/2  mt-2 flex justify-center sm:justify-start sm:items-center gap-2 sm:gap-2 xl:gap-3 sm:pl-6 bg-[#005261] ${
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
                        className={`w-full  flex items-center sm:text-base md:text-xl xl:text-2xl ${
                          selectedCourse === course.curso ? 'text-white' : 'text-[#005261]'
                        }`}
                      >
                        {course.curso}
                      </h2>
                    </div>
                  </div>

                  <div
                    className={`sm:w-1/2  mt-2  flex justify-end   ${
                      selectedCourse === course.curso ? 'bg-[#005261]' : 'bg-white'
                    }`}
                  >
                    <div
                      className={`w-full  border-r-4 sm:border-x-4 ${
                        selectedCourse === course.curso ? 'bg-[#005261] border-white' : 'bg-white border-[#DADADA]'
                      }`}
                    >
                      <p className={`${selectedCourse === course.curso ? 'text-white border-white' : 'text-[#005261]'} text-center`}>
                        Diferença pro 1º lugar
                      </p>
                      <p className={`pb-2 ${selectedCourse === course.curso ? 'text-[#FFC24C] bg-[#005261]' : 'text-[#005261]'} text-center`}>
                          {index < 3 ? sortedData[0].total - course.total : '---'}
                      </p>
                    </div>
                    <div  
                      className={`w-full ${
                        selectedCourse === course.curso ? 'bg-[#005261]' : 'bg-white'
                      }`}
                    >
                      <p className={`${selectedCourse === course.curso ? 'text-white' : 'text-[#005261]'} text-center`}>
                        Pontuação Final
                      </p>
                      <p className={`pb-4 ${selectedCourse === course.curso ? 'text-[#FFC24C] bg-[#005261]' : 'text-[#005261]'} text-center`}>
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
                  <div className='-z-10 mt-5 flex-col bg-white border-t-4 border-[#005261] flex pb-3  w-full rounded-xl shadow-lg'>
                    <div className='grid grid-cols-4 md:grid-cols-7 w-full -mt-1 sm:text-lg md:text-xl flex-wrap sm:flex-nowrap'>
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
                    className={`w-full xl:w-1/2 flex justify-center sm:justify-start sm:items-center gap-2 sm:gap-2 xl:gap-3 sm:pl-6 bg-[#005261] ${
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
                    className={`sm:w-1/2 flex justify-end  ${
                      selectedCourse === course.curso ? 'bg-[#005261]' : 'bg-white'
                    }`}
                  >
                    <div
                      className={`w-full mt-2  border-r-4 sm:border-x-4 ${
                        selectedCourse === course.curso ? 'bg-[#005261] border-white' : 'bg-white border-[#DADADA]'
                      }`}
                    >
                      <p className={`${selectedCourse === course.curso ? 'text-white border-white' : 'text-[#005261]'} text-center`}>
                        Diferença pro 1º lugar
                      </p>
                      <p className={`pb-2   ${selectedCourse === course.curso ? 'text-[#FFC24C] bg-[#005261]' : 'text-[#005261]'} text-center`}>
                          {index >= 3 ? sortedData[0].total - course.total : '---'}
                      </p>
                    </div>
                    <div
                      className={`w-full mt-2 ${
                        selectedCourse === course.curso ? 'bg-[#005261]' : 'bg-white'
                      }`}
                    >
                      <p className={`  ${selectedCourse === course.curso ? 'text-white' : 'text-[#005261]'} text-center`}>
                        Pontuação Final
                      </p>
                      <p className={`pb-4 ${selectedCourse === course.curso ? 'text-[#FFC24C] bg-[#005261]' : 'text-[#005261]'} text-center`}>
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
                  <div className='-z-10 mt-5 flex-col bg-white border-2 border-[#005261] flex pb-3  w-full rounded-xl shadow-lg'>
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