"use client";

import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useSearchParams } from "next/navigation";
import Image from 'next/image'
import Modal from '@/components/formCadastro/modal';

export default function TabelaCampeonatos() {
  const searchParams = useSearchParams();
  const urlCampeonato = searchParams.get("campeonato");

  const [mostrarEdicaoSucesso, setMostrarEdicaoSucesso] = useState(false);

  const [tabelaTimesContra, setTabelaTimesContra] = useState(false);
  const [sorteiosRestantes, setSorteiosRestantes] = useState(1);
  const [mensagem, setMensagem] = useState(false);
  const [mostrarMensagemTemporaria, setMostrarMensagemTemporaria] = useState(false);

  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [faseFilter, setFaseFilter] = useState("1 º Fase");
  const [moveBar, setMoveBar] = useState(1);
  const [transition, setTransition] = useState(false);

  const [alertShowFase, setAlertShowFase] = useState(false);
  const [alertShowDia, setAlertShowDia] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [originalFormData, setOriginalFormData] = useState({
    horarios: ["", "", "", "", "", ""],
    jogos: ["J1", "J2", "J3", "J4", "J5", "J6"],
    timeA: ["1ºADM", "2ºCONT", "1ºINFO", "2ºRH", "2ºRH", "3ºADM"],
    timeB: ["3ºADM", "1ºADM", "2ºRH", "2ºRH", "2ºINFO", "resp"],
  });

  
  const [formData, setFormData] = useState({ ...originalFormData });

  useEffect(() => {
    setTransition(true);
  }, []);


  function handleFase(fase) {
    setShowFilterOptions(false);
    if (fase === 1) {
      setFaseFilter("1 º Fase");
    } else if (fase === 2) {
      setAlertShowFase(true);
      setFaseFilter("2 º Fase");
    }
    setShowFilterOptions(false);
  }

  const handleCloseAlertFase = () => {
    setAlertShowFase(false);
  };

  {/*funções para mostrar time contra funcionalidade de edição, salvar,cancelar */}

  const mostrarTabelaTimesContra = (exibir) => {
    setTabelaTimesContra(exibir);
  };

// Função para embaralhar times
function shuffleArray(array) {
  let shuffledArray = array.slice(); // Copia o array original
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Função de Sorteio
const handleSortearTimes = () => {
  if (sorteiosRestantes > 0) {
    const shuffledTimesA = shuffleArray(formData.timeA);
    const shuffledTimesB = shuffleArray(formData.timeB);

    // Atualize o estado com os times sorteados
    setFormData(prevState => ({
      ...prevState,
      timeA: shuffledTimesA,
      timeB: shuffledTimesB,
    }));

    setSorteiosRestantes(prevCount => prevCount - 1);
  }
};


  const handleEditClick = () => {
    setIsEditing(true);
    // Save the current form data to allow reverting
    setOriginalFormData({ ...formData });
  };

  const handleSaveClick = () => {
    console.log("Dados Submetidos:", formData);
    setIsEditing(false);
    setTimeout(() => {
      setMostrarEdicaoSucesso(true)
    }, 200);
  };

  const closeModal = () => {
    setMostrarEdicaoSucesso(false);
  };

  const handleCancelClick = () => {
    // Revert to original data and exit editing mode
    setFormData({ ...originalFormData });
    setIsEditing(false);
  };

  const handleInputChange = (index, field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: prevState[field].map((item, i) => (i === index ? value : item))
    }));
  };

  {/*largura */}

  return (
    <>
      <div className='ml-[5%] mt-8 mb-8 flex flex-row sm:flex-col gap-4'>
          <button>
              <Link href={'/campeonatos'}>
                <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
              </Link>
          </button>
          <div className='flex flex-col gap-4 sm:flex-row justify-between items-center w-full pr-7'>
            <h1 className='text-2xl font-bold'>{urlCampeonato}</h1>
            <div className={`${isEditing?'block':'hidden'} relative flex items-center`}>
              <Image
                src="/images/img-fundo-edicao.svg"
                alt="Imagem de fundo"
                className="absolute w-[256px] h-[43px]"
                width={256}
                height={43}
              />
              <p className='relative z-10 text-center w-[256px] text-white'>Modo de Edição</p>
            </div>
          </div>
      </div>
      <div className='w-[920px] max-w-full mx-auto'>
        {/*texto que exibe na tela da NANE */}
        <p className=' text-center mb-4 text-[#666666]'>Para editar, clique no botão 'Editar' e faça as alterações necessárias. Para visualizar os times que vão disputar clique em uma das células da coluna Jogos </p>
        {/*texto que exibe na tela do representante */}
        <p className=' text-center mb-4 text-[#666666] hidden'>Para editar, clique no botão 'Editar' e faça as alterações necessárias. Para visualizar os times que vão disputar clique em uma das células da coluna Jogos </p>
        {tabelaTimesContra && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50 -top-72">
              <div className="mx-auto flex flex-col items-center justify-center w-[450px] sm:w-[800px] max-w-full rounded-3xl bg-white border pt-4 pb-4">
                <div className="flex w-full pl-16">
                  <div className="w-1/3">
                    <Icon
                      icon="solar:arrow-left-linear"
                      style={{ color: "#005261" }}
                      width={30}
                      onClick={() => mostrarTabelaTimesContra(false)}
                    />
                  </div>
                  <div className="w-full pl-10 sm:pl-24">
                    <h1 className="text-[#005261] text-xl font-semibold">Jogos J1</h1>
                  </div>
                </div>
                <div className="bg-[#005261] w-[400px] sm:w-[700px] sm:max-w-full rounded-lg">
                  <div className="w-full flex flex-col sm:flex-row">
                    <div className="w-full flex flex-col">
                      <div className="h-[51px] flex items-center justify-center text-center text-white border-r-4 border-white">
                        Horário
                      </div>
                      <div className="sm:border-r-4 sm:border-[#005261]">
                        <div className="flex flex-row">
                          <div className="flex justify-center items-center bg-white border border-gray-300 w-[89px] h-[50px] max-w-full text-center">1</div>
                          <div className= "flex items-center bg-white border border-gray-300 w-full h-[50px] pl-1">Joao Cleber da Silva Pereira Nunes Ambraga Jorge Macedonia</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col">
                      <div className="h-[51px] flex items-center justify-center text-white">
                        Horário
                      </div>
                      <div>
                        <div className="flex flex-row">
                          <div className="flex justify-center items-center bg-white border border-gray-300 w-[89px] h-[50px] max-w-full text-center">1</div>
                          <div className="flex items-center bg-white border border-gray-300 w-full h-[50px] pl-1 max-w-full text-start ">Joao Cleber da Silva Pereira Nunes Ambraga Jorge Macedonia</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="mx-auto flex justify-center md:justify-start w-[400px] sm:w-[600px] md:w-[800px] sm:max-w-full gap-4 md:gap-20 mb-4 border-b-4 border-b-[#DADADA] relative">
          <div
            onClick={() => setMoveBar(1)}
            className={`sm:font-semibold text-nowrap text-base md:text-xl flex items-center gap-2 cursor-pointer ${moveBar === 1 ? "text-[#005261]" : "text-[#DADADA]"}`}
          >
            1 º Fase 
          </div>
          <div
            onClick={() => setMoveBar(2)}
            className={`sm:font-semibold ml-2  text-nowrap text-base md:text-xl flex cursor-pointer ${moveBar === 2 ? "text-[#005261]" : "text-[#DADADA]"}`}
          >
            2 º Fase 
          </div>
          <div
            onClick={() => setMoveBar(3)}
            className={`sm:font-semibold text-nowrap text-base md:text-xl cursor-pointer ${moveBar === 3 ? "text-[#005261]" : "text-[#DADADA]"}`}
          >
            3 º Fase 
          </div>
          <div
            onClick={() => setMoveBar(4)}
            className={`sm:font-semibold text-nowrap text-base md:text-xl cursor-pointer ${moveBar === 4 ? "text-[#005261]" : "text-[#DADADA]"}`}
          >
            Fase Final
          </div>
          <div
            className={`hidden sm:block h-[4px] md:w-[120px]  ${transition ? "duration-700 delay-100" : ""} 
              ${moveBar === 1 ? "left-0" : ""} 
              ${moveBar === 2 ? "md:left-32 " : ""} 
              ${moveBar === 3 ? "md:left-[290px]" : ""} 
              ${moveBar === 4 ? "md:left-[445px]" : ""} 
              absolute -bottom-1 font-bold`}
          ></div>
        </div>
        <div className="mx-auto w-[425px] sm:w-[600px] md:w-[900px] sm:max-w-full ">
          <div className="relative overflow-x-auto md:overflow-x-hidden rounded-3xl">
            <div className="min-w-[920px]">
              {moveBar === 1 && (
                <>
                <table className="w-full table-auto border-collapse border border-gray-300">
                  <thead className="bg-[#005261] text-white">
                    <tr>
                      <th className="w-[200px] h-[51px] border-r-4 border-white sticky left-0 bg-[#005261] z-20">Horário</th>
                      <th className="w-[200px] h-[51px] border-r-4 border-white">Jogos</th>
                      <th className="w-[200px] h-[51px] border-r-4 border-white">Time A</th>
                      <th className="w-[200px] h-[51px]">Time B</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.jogos.map((jogo, index) => (
                      <tr key={index} className="border-b">
                        <td className="w-[200px] h-[50px] border-r border-gray-300 p-1 text-center sticky left-0 bg-white z-10">
                          {isEditing ? (
                            <input
                              type="time"
                              value={formData.horarios[index]}
                              onChange={(e) => handleInputChange(index, 'horarios', e.target.value)}
                            />
                          ) : (
                            formData.horarios[index]
                          )}
                        </td>
                        <td className="w-[200px] h-[50px] border-r border-gray-300 p-1 text-center" onClick={() => mostrarTabelaTimesContra(!tabelaTimesContra)}>
                          {jogo}
                        </td>
                        <td className="w-[200px] h-[50px] border-r border-gray-300 p-1 text-center">
                          {isEditing ? (
                            <input
                              type="text"
                              value={formData.timeA[index]}
                              onChange={(e) => handleInputChange(index, 'timeA', e.target.value)}
                            />
                          ) : (
                            formData.timeA[index]
                          )}
                        </td>
                        <td className="w-[200px] h-[50px] p-1 text-center">
                          {isEditing ? (
                            <input
                              type="text"
                              value={formData.timeB[index]}
                              onChange={(e) => handleInputChange(index, 'timeB', e.target.value)}
                            />
                          ) : (
                            formData.timeB[index]
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </>
              )}
            </div>
          </div>
        </div>
        <button 
            className={`block mx-auto w-[425px] sm:w-[600px] md:w-[900px] sm:max-w-full text-center ${sorteiosRestantes === 0 ? 'bg-[#DADADA] text-gray-400 disabled' : 'bg-[#F5EDFD] text-purple-500'} font-semibold pt-4 pb-4 rounded-b-lg`} 
            onClick={handleSortearTimes}
            disabled={sorteiosRestantes === 0}
         >
           Sortear time
        </button>
        <div className="flex sm:justify-between items-center flex-col sm:flex-row gap-4 mt-4 pl-8 sm:pl-4">
          {isEditing ? (
            <>
              <button onClick={handleSaveClick} className="w-[180px] h-[60px] rounded-xl bg-[#005261] text-white px-4 py-2 ">
                Salvar
              </button>
              <button onClick={handleCancelClick} className="w-[180px] h-[60px] rounded-xl bg-[#E6EFF0] text-[#005261] px-4 py-2">
                Cancelar
              </button>
            </>
          ) : (
            <button onClick={handleEditClick} className="w-[180px] h-[60px] rounded-xl bg-[#005261] text-white px-4 py-2 ">
              Editar
            </button>
          )}
          {/*botao de proximo */}
           <button onClick={handleEditClick} className="hidden w-[180px] h-[60px] rounded-xl bg-[#005261] text-white px-4 py-2 ">
              Editar
            </button>
          <div className='w-[400px]  text-justify border border-[#005261] p-2'>
            OBS: utilize as abreviações : <span className="font-bold">3ºINFO</span>, <span className="font-bold">2ºINFO</span>, <span className="font-bold">1ºINFO</span>,
             <span className="font-bold">3ºADM</span>,  <span className="font-bold">2ºADM</span>, <span className="font-bold">1ºADM</span>, <span className="font-bold">1ºRH</span>, <span className="font-bold">2ºRH</span>, <span className="font-bold">1ºRH</span>, 
             <span className='font-bold'>3ºCONT</span>, <span className="font-bold">2ºCONT</span>, <span className="font-bold">1ºCONT</span>. Utilize <span className="font-bold">resp</span> para caso de repescagem
          </div>
        </div>
      </div>
          
      
      {mostrarEdicaoSucesso && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <Modal edicao={"edicao"} closeModal={closeModal} texto='Esse cronograma de campeonato foi editado com sucesso' />
        </>
      )}
    </>
    
  );
}
