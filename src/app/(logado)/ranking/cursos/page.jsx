"use client"

import { useRef, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link'
import Image from 'next/image'


export default function Ranking() {
  const [data, setData] = useState({
    '3 Informatica': [
      { nome: 'Richard dos santos paiva', pontuacao: 18902 },
      { nome: 'joao', pontuacao: 20002 },
      { nome: 'maria', pontuacao: 16902 },
    ],
    '2 Informatica': [
      { nome: 'vitor', pontuacao: 17902 },
      { nome: 'carlos', pontuacao: 16902 },
      { nome: 'jose', pontuacao: 10902 },
    ],
    '1 Informatica': [
      { nome: 'andre', pontuacao: 16902 },
      { nome: 'yasmin', pontuacao: 18030 },
      { nome: 'douglas', pontuacao: 1500 },
    ],
    '1 Administração': [
      { nome: 'andre', pontuacao: 16500, serie: 1 },
      { nome: 'yasmin', pontuacao: 14030, serie: 1 },
      { nome: 'douglas', pontuacao: 16000, serie: 1 },
    ],
    '2 Administração': [
      { nome: 'andre', pontuacao: 16902, serie: 2 },
      { nome: 'yasmin', pontuacao: 18030, serie: 2 },
      { nome: 'douglas', pontuacao: 1500, serie: 2 },
    ],
    '3 Administração': [
      { nome: 'andre', pontuacao: 20002, serie: 3 },
      { nome: 'yasmin', pontuacao: 18030, serie: 3 },
      { nome: 'douglas', pontuacao: 15400, serie: 3 },
    ],
    '3 Recursos Humanos': [
      { nome: 'andre', pontuacao: 17902, serie: 1 },
      { nome: 'yasmin', pontuacao: 17730, serie: 1 },
      { nome: 'douglas', pontuacao: 14000, serie: 1 },
    ],
  });
  const [alertShowDia, setAlertShowDia] = useState(false) 
  const [alertShowFase, setAlertShowFase] = useState(false) 
  
  const [showFilterDataOptions, setShowFilterDataOptions] = useState(false);
  const [showFilterDataOptions1, setShowFilterDataOptions1] = useState(false);
  const [showFilterDataOptions2, setShowFilterDataOptions2] = useState(false);
  
  
  const [showFilterFasesOptions,setShowFilterFasesOptions]= useState(false)
  const [showFilterOptionsRanking, setShowFilterOptionsRanking] = useState(false);

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

  //exibe o alerta quando a 2 fase não está disponivel
  function handleFase(fase) {
    if (fase === 2) {
      setAlertShowFase(true);
    }
    setShowFilterFasesOptions(false);
  }
 
  function handleData(diaSelecionado,qualFiltroData) {
    console.log(qualFiltroData)

    if(qualFiltroData == 1){
      setShowFilterDataOptions1(false);

      if (diaSelecionado === "29 ago" || diaSelecionado === "30 ago") {
        setAlertShowDia(true);
        setShowFilterDataOptions1(false);
      } else {
        setShowFilterDataOptions1(false);
      }
    }

    if(qualFiltroData == 2){
      setShowFilterDataOptions2(false);
      if (diaSelecionado === "29 ago" || diaSelecionado === "30 ago") {
        setAlertShowDia(true);
        setShowFilterDataOptions2(false);
      } else {
        setShowFilterDataOptions2(false);
      }
    }

  }


  const handleCloseAlertDia = () => {
    setAlertShowDia(false);
  };

  const handleCloseAlertFase = () => {
    setAlertShowFase(false);
  };

  {/*funções para permitir que o podio e a lista de participantes fique responsivo */}
 
  const divRef = useRef(null);
  const [largura, setLargura] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (divRef.current) {
        setLargura(divRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);
 

  const divRef3colocados = useRef(null);
  const [largura3colocados, setLargura3colocados] = useState(0);

  useEffect(() => {
    const updateWidth3colocado = () => {
      if (divRef3colocados.current) {
        setLargura3colocados(divRef3colocados.current.offsetWidth);
        console.log('Largura da div:', divRef3colocados.current.offsetWidth); // Log para depuração
      }
    };
    updateWidth3colocado();
    window.addEventListener('resize', updateWidth3colocado);

    return () => window.removeEventListener('resize', updateWidth3colocado);
  }, []);
  


  const divRefOutrosColocados = useRef(null);
  const [larguraOutrosColocados, setLarguraOutrosColocados] = useState(0);

  useEffect(() => {
    const updateWidthOutrosColocados = () => {
      if (divRefOutrosColocados.current) {
        setLargura3colocados(divRefOutrosColocados.current.offsetWidth);
        console.log('Largura da div:', divRefOutrosColocados.current.offsetWidth); // Log para depuração
      }
    };
    updateWidthOutrosColocados();
    window.addEventListener('resize', updateWidthOutrosColocados);

    return () => window.removeEventListener('resize', updateWidthOutrosColocados);
  }, []);
  

  return (
    <>
      {/*Exibe o alerta quando a 2 fase não está disponivel*/}

      {alertShowFase && (
           <>
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="mx-auto w-[290px] h-[360px] sm:w-[390px]  bg-white p-6 rounded-3xl shadow-lg relative">
                  <Image
                    width={200} height={154}
                    src="/images/alert-fase.png"
                    className="absolute -top-[43px] left-[40px] sm:-top-[48px] sm:left-[45px] h-[154px] w-[200px] sm:h-[179px] sm:w-[307px]"
                    alt="Sucesso"
                  />
                  <button
                    className="absolute top-4 right-6   hover:text-gray-400 "
                    onClick={handleCloseAlertFase}
                  >
                    ✕
                  </button>
                  <div className="mt-28 text-center">
                    <h3 className="font-bold text-2xl">Atenção!</h3>
                    <p className="py-4 pb-8 text-xl">
                      Esta fase não está disponível para visualização
                    </p>
                  </div>
                </div>
              </div>
           </>
        )}
          {alertShowDia && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="mx-auto w-[290px] h-[360px] sm:w-[390px]  bg-white p-6 rounded-3xl shadow-lg relative">
                <Image
                  width={200} height={154}
                  src="/images/alert-fase.png"
                  className="absolute -top-[43px] left-[40px] sm:-top-[48px] sm:left-[45px] h-[154px] w-[200px] sm:h-[179px] sm:w-[307px]"
                  alt="Sucesso"
                />
                <button
                  className="absolute top-4 right-6   hover:text-gray-400 "
                  onClick={handleCloseAlertDia}
                >
                  ✕
                </button>
                <div className="mt-28 text-center">
                  <h3 className="font-bold text-2xl">Atenção!</h3>
                  <p className="py-4 pb-8 text-xl">
                     Este dia não está disponível para visualização
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
       <div className='w-full text-center sm:text-left pl-8'>
         <h1 className='text-3xl mb-3'>Pontuação geral</h1>
         <p className='text-[#DADADA]'>Todas as Salas</p>
       </div>
      
      {/* Filtro */}
      <div className='flex justify-evenly sm:justify-end sm:items-center  w-full sm:gap-6 sm:pr-10'>
          {/* Filtro por fases */}
          <div className='relative flex justify-center '>
            <div
              onClick={() => setShowFilterFasesOptions(!showFilterFasesOptions)}
              className="w-[113px] shadow-xl bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center"
            >
              <Icon icon="mynaui:filter" className="mr-2 h-6 w-6" />
              Fases
            </div>
            {showFilterFasesOptions && (
              <>
                <div className="fixed inset-0 bg-black bg-opacity-20 z-50" onClick={() => setShowFilterFasesOptions(false)}></div>
                <div className="absolute bg-white shadow-md rounded-lg mt-20 ml-20 w-48 py-2 z-50">
                  <ul>
                    <li onClick={() => handleFase(1)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">1ª fase</li>
                    <li onClick={() => handleFase(2)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">2ª fase</li>
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* Filtro por data */}
          <div className='relative flex justify-center'>
            <div
              onClick={() => setShowFilterDataOptions(!showFilterDataOptions)}
              className="w-[113px] shadow-xl bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center"
            >
              <Icon icon="mynaui:filter" className="ml-2 h-6 w-6" />
              Data
            </div>
            {showFilterDataOptions && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-20 z-50"></div>
                    <div className="text-center absolute  bg-white shadow-md rounded-lg mt-20  right-0 w-48 py-2 z-50">
                        <ul>
                           <li 
                              onClick={() => handleData()}
                             className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                            >
                              28 ago 
                            </li>
                            <li 
                              onClick={() => handleData("29 ago")}
                              className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                            >
                              29 ago
                            </li>
                            <li 
                              onClick={() => handleData("30 ago")}
                              className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                            >
                             30 ago
                            </li>
                        </ul>
                     </div>
                 </>
              )}
          </div>

          {/* Filtro de categorias */}
          <div className='relative flex justify-center items-center'>
            <div
              onClick={() => setShowFilterOptionsRanking(!showFilterOptionsRanking)}
              className='h-[44px] w-[44px] shadow-xl border-[3px] rounded-xl border-[#005261] flex justify-center cursor-pointer items-center'
            >
              <Icon icon="solar:alt-arrow-down-line-duotone" width={20} />
            </div>
            {showFilterOptionsRanking && (
              <>
                <div className="fixed inset-0 bg-black bg-opacity-20 z-50" onClick={() => setShowFilterOptions2(false)}></div>
                <div className='z-50 absolute top-12'>
                    <div className="bg-white shadow-md rounded-lg mt-10 sm:mt-5 mr-40 sm:w-[192px] py-2">
                      <ul>
                        <li onClick={() => setShowFilterOptionsRanking(!showFilterOptionsRanking)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">
                          <Link href="/ranking">
                            <p className='flex items-center justify-evenly text-[#a8a8a8] '>
                              Melhores Alunos
                              <Icon icon="solar:alt-arrow-down-line-duotone" width={20} />
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white shadow-md rounded-lg mt-5  mr-40 w-[192px] py-2">
                      <ul>
                        <li onClick={() => setShowFilterOptionsRanking(!showFilterOptionsRanking)} className=" pl-6 sm:pl-0 cursor-pointer hover:bg-gray-100 py-1 px-3">
                          <Link href="/ranking/cursos">
                            <p className='flex items-center justify-evenly'>
                              Todas as Salas
                            </p>
                          </Link>
                        </li>
                        <li onClick={() => setShowFilterOptionsRanking(!showFilterOptionsRanking)} className="pl-6 cursor-pointer hover:bg-gray-100 py-1 px-3">
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
      <div className='relative inline justify-center mb-7'>
        {/* Pódio do 1º, 2º, 3º lugares */}
        <div ref={divRef}  className='relative inline justify-center mb-7 '>
          {/*pódio do 1 2 3 lugar */}
          <div className='relative flex  h-[306px]  justify-evenly md:items-end sm:max-w-[900px]  sm:h-[300px] rounded-3xl mx-auto' style={{ backgroundImage: `url('/images/bg-ranking.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              {sortedData.slice(0, 3).map((course, index) => (
                  <div  key={index}
                  className={`h-[93px] flex flex-col items-center justify-center bg-[#4C8690] rounded-t-lg ${
                    index === 0 ? ` absolute top-[25px] sm:top-5 w-[130px]  h-[281px] sm:h-[280px]  col-start-2 col-span-1  md:col-start-2 ${largura >= 300 && largura <=590?'md:w-[150px]  ':'md:w-[176px]'}` : index === 1 ? ` top-[115px]  h-[191px]  sm:top-20 sm:h-[221px] absolute  left-0 md:left-7 col-start-1 col-span-1 md:row-start-1 md:col-start-1 ${largura >= 300 &&  largura <=590  ? 'sm:left-0 w-[100px] md:w-[120px] col-start-3':'md:w-[176px]'}` : `top-[135px] sm:top-[110px] right-0 md:right-7  absolute  col-span-1 md:col-start-3  w-[110px]  ${largura >=300 && largura <590?'sm:right-0 md:w-[130px]':'md:w-[170px]'}   h-[170px] sm:h-[190px] `
                  }`}
                  >
                    <p className='flex items-center md:gap-4 font-bold text-center cursor-pointer' >
                      {index + 1} º lugar 
                      <Icon
                      width={30} 
                      onClick={() => handlePodiumClick(course.curso)}
                      icon="solar:alt-arrow-down-line-duotone"                  
                      className={`" text-black duration-300 transform ${selectedCourse === course.curso  ? 'rotate-180' : 'rotate-0'}`}   
                      />
                    </p>
                    <Image src='/images/bolinha.png' alt='' width={index === 0 ? 69 : index === 1 ?52 : 49} height={index === 0 ?69:index===1?52:49} />
                    <p className='font-medium text-center'  style={{ wordBreak: 'break-word', hyphens: 'auto' }}>{course.curso}</p>
                    <p className='text-[#FFC24C] font-semibold col-span-4'>{course.total}</p>
                  </div>
              ))}
          </div> 
        </div>
 
      </div>

      <div   className="bg-slate-100 rounded-xl mt-5 pt-4 mb-10 sm:p-3 flex-col flex items-center ">
      {/*exibe um ou outro dos 3 colocados */}
      {sortedData.map((course, index) => (
            index < 3 && selectedCourse === course.curso && (
  
            <div key={index}  ref={divRef3colocados} className='w-full flex flex-col mt-2 rounded-xl shadow-lg'>
              <div
                className={`w-full  ${ selectedCourse === course.curso ? 'w-full flex-col bg-[#005261]' : 'bg-white'} transition-all delay-300 py-4 sm:pl-2 md:pl-2 md:pr-4 xl:px-8 rounded-xl`}
              >
                <div className={`w-full flex flex-col sm:flex-row md:flex-row  ${largura3colocados < 700? 'sm:flex-col ': ''} `}>
                  <div   className={` w-full flex justify-center  md:justify-start sm:items-center gap-2 sm:gap-2 xl:gap-3 mt-2  sm:pl-6 bg-[#005261] ${ selectedCourse === course.curso ? 'bg-[#005261]' : 'bg-white'}`}>
                    <div  className={`w-[40px]  p-2 h-[65px] sm:p-2 rounded-xl ${selectedCourse === course.curso ? 'text-[#005261] bg-white' : 'text-[#005261] bg-[#E6EFF0]'} text-4xl`}>
                      {index + 1}
                    </div>
                    <div className={`flex ${largura3colocados < 800?' md:flex md:flex-row md:items-center md:justify-center  sm:gap-4': 'sm:gap-4'}`}>
                      <Image src='/images/bolinha.png' className={`hidden sm:block ${largura3colocados < 600?'hidden':'md:block'} `}width={80} height={80} alt='perfil' />
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
                    className={` mt-2  flex justify-end w-full $${largura3colocados < 600?'':'  '}  ${selectedCourse === course.curso ? 'bg-[#005261]' : 'bg-white'}`}
                  >
                    <div
                      className={`w-full  border-r-4 sm:border-x-4 ${ selectedCourse === course.curso ? 'bg-[#005261] border-white' : 'bg-white border-[#DADADA]'}`}
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
                    <div className={`${selectedCourse === course.curso ? 'text-white bg-[#005261]' : 'text-[#005261]'} text-center cursor-pointer`}>
                      <Icon
                        icon='solar:alt-arrow-down-line-duotone'
                        className={`${
                          selectedCourse === course.curso ? 'text-white rotate-180 duration-300' : 'text-[#005261] rotate-0 duration-300 '
                        }`}
                        width={40}
                        onClick={() => handlePodiumClick(course.curso)}
                      />
                    </div>
                  </div>
                </div>
                {selectedCourse === course.curso && (
                  <div className='z-10 mt-5 flex-col bg-white border-t-4 border-[#005261] flex pb-3  w-full rounded-xl shadow-lg'>
                    {/* { label: 'Data', value: '0', icon: true, colSpan: 'col-span-2 sm:col-span-1' }*/}
                    <div className={`grid grid-cols-4 w-full -mt-1 sm:text-lg md:text-xl ${largura3colocados < 600?'':'sm:flex'} flex-wrap sm:flex-nowrap`}>
                      {[
                        { label: 'Soma das Fichas', value: '0' },
                        { label: 'Alunos ativos', value: '0' },
                        { label: 'Faltas', value: '0' },
                        { label: 'Fantasmas', value: '0', extraClass: 'sm:border-r-4' },
                        { label: 'Média Individual', value: '0' },
                        { label: 'Atividades Extras', value: '0' },
                        { label: 'Data', value: '0', icon: true, colSpan: 'col-span-2 ' },
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
                              <>
                                <Icon
                                  icon='solar:alt-arrow-down-line-duotone'
                                  onClick={() => setShowFilterDataOptions2(!showFilterDataOptions2)}
                                  className='text-[#005261] cursor-pointer'
                                  width={30}
                                />
                              </>
                            )} 
                         
                          </div>
                          <div className={`h-[60px] ${item.icon ? 'h-[70px]' : ''} bg-white`}>
                            {item.value}
                            {item.label == 'Data' && showFilterDataOptions2 && (
                                  <>
                                      <div className="fixed inset-0 bg-black bg-opacity-20 z-50"></div>
                                      <div className="text-center absolute bg-white  rounded-lg mt-10  w-48 py-2 z-50">
                                          <ul>
                                            <li 
                                                onClick={() => handleData()}
                                              className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                                              >
                                                28 ago 
                                              </li>
                                              <li 
                                                onClick={() => handleData("29 ago", 2)}
                                                className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                                              >
                                                29 ago
                                              </li>
                                              <li 
                                                onClick={() => handleData("30 ago", 2)}
                                                className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                                              >
                                              30 ago
                                              </li>
                                          </ul>
                                      </div>
                                  </>
                                )} 
                          </div>
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
            <div ref={divRefOutrosColocados} key={index} className=' w-full flex flex-col mt-2 rounded-xl shadow-lg'>
              <div
                className={`w-full  ${  selectedCourse === course.curso ? 'w-full flex-col bg-[#005261]' : 'bg-white'} transition-all delay-300 py-4 sm:pl-2 md:pl-2 md:pr-4 xl:px-8 rounded-xl`}
              >
                <div className={`w-full flex flex-col sm:flex-row md:flex-row  ${largura3colocados < 700? 'sm:flex-col ': ''} `}>
                  <div className={`w-full  flex  justify-center  md:justify-start  sm:items-center gap-2 sm:gap-4 xl:gap-3 sm:pl-6 bg-[#005261] ${selectedCourse === course.curso ? 'bg-[#005261]' : 'bg-white'}`}>
                    <div
                      className={`w-[40px] p-2 h-[65px] sm:p-2 rounded-xl ${ selectedCourse === course.curso ? 'text-[#005261] bg-white' : 'text-[#005261] bg-[#E6EFF0]'} text-4xl`}
                    >
                      {index + 1}
                    </div>
                    <div className={`flex ${larguraOutrosColocados < 800?' md:flex md:flex-row md:items-center md:justify-center  sm:gap-4': 'sm:gap-4'}`}>
                      <Image src="/images/bolinha.png" className={`hidden sm:block ${larguraOutrosColocados < 600?'hidden':'md:block'} `}width={80} height={80} alt="" />
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
                    className={`w-full flex justify-end  ${
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
                        className={`cursor-pointer ${
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
                  <div className=' mt-5 flex-col bg-white border-2 border-[#005261] flex pb-3  w-full rounded-xl shadow-lg'>
                    <div className={`grid grid-cols-4 w-full -mt-1 sm:text-lg md:text-xl ${largura3colocados < 600?'':'sm:flex'} flex-wrap sm:flex-nowrap`}>
                      {[
                        { label: 'Soma das Fichas', value: '0' },
                        { label: 'Alunos ativos', value: '0' },
                        { label: 'Faltas', value: '0' },
                        { label: 'Fantasmas', value: '0', extraClass: 'sm:border-r-4' },
                        { label: 'Média Individual', value: '0' },
                        { label: 'Atividades Extras', value: '0' },
                        { label: 'Data', value: '0', icon: true, colSpan: 'col-span-2' },
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
                                onClick={() => setShowFilterDataOptions2(!showFilterDataOptions2)}
                                icon='solar:alt-arrow-down-line-duotone'
                                className='cursor-pointer text-[#005261]'
                                width={30}
                              />
                            )}
                          </div>
                          <div className={`h-[60px] ${item.icon ? 'h-[70px]' : ''} bg-white`} >
                            {item.value}
                            {item.label == 'Data' && showFilterDataOptions2 && (
                                  <>
                                      <div className="fixed inset-0 bg-black bg-opacity-20 z-50"></div>
                                      <div className="text-center absolute bg-white  rounded-lg mt-10  w-48 py-2 z-50">
                                          <ul>
                                            <li 
                                                onClick={() => handleData()}
                                              className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                                              >
                                                28 ago 
                                              </li>
                                              <li 
                                                onClick={() => handleData("29 ago", 2)}
                                                className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                                              >
                                                29 ago
                                              </li>
                                              <li 
                                                onClick={() => handleData("30 ago", 2)}
                                                className="cursor-pointer font-medium text-black hover:bg-gray-100 py-1 px-3"
                                              >
                                              30 ago
                                              </li>
                                          </ul>
                                      </div>
                                  </>
                                )}  
                          </div>
                        
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        ))}

      </div>
      
    </>
  );
}