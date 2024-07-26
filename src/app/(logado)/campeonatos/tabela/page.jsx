"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image'


export default function TabelaCampeonatos() {
  const [tabelaTimesContra,setTabelaTimesContra ] = useState(null);

  const [showFilterOptions, setShowFilterOptions] = useState(false);
  
  const [faseFilter, setFaseFilter] = useState("1 º Fase"); // Estado para armazenar a fase selecionada

  const [moveBar, setMoveBar] = useState(1);
  const [transition, setTransition] = useState(false); // Estado para controlar a transição

  const [alertShowFase, setAlertShowFase] = useState(false) 
  const [alertShowDia, setAlertShowDia] = useState(false)   
  
  useEffect(() => {
    setTransition(true); // Ativa a transição após o componente ser montado
  }, []);


  function handleFilterData() {
    setShowFilterDataOptions(false)

  }
  
  function handleFase(fase) {
    setShowFilterOptions(false);
    if (fase === 1) {
      setFaseFilter("1 º Fase");
    } else if (fase === 2) {
      setAlertShowFase(true);      
      setFaseFilter("2 º Fase");
    }
    setShowFilterFasesOptions(false);
  }

  const handleCloseAlertFase = () => {
    setAlertShowFase(false);
  };

  const handleCloseAlertDia = () => {
    setAlertShowDia(false);
  };

  
  // Função para obter e exibir o conteúdo
  const mostrarTabelaTimesContra = () => {
    const resultado = (
      <>
        <div className="fixed inset-0 bg-black bg-opacity-20 z-50"></div>
        
        <div className="z-50 fixed bg-white flex flex-col md:w-[700px] w-full rounded-lg">
          <h1 className="text-center mt-3 text-2xl font-semibold text-[#005261]">Jogos J1</h1>
          <div className="mx-auto flex flex-col sm:flex-row pt-4 pb-4">
            <div className="flex flex-col sm:rounded-l-lg sm:border-l-4 sm:border-[#DADADA]">
              <div className="bg-[#005261] w-full sm:border-r-4 text-white sm:border-white text-center pt-3">1º ADM</div>
              <div className="flex flex-row w-full justify-evenly sm:border-r-4 sm:border-[#005261]">
                <p className="flex justify-center items-center w-full sm:w-[89px] text-center border-b-4 border-[#DADADA]">1</p>
                <p className="w-full sm:w-[209px] pl-2 pt-1 pb-1 break-words border-b-4 border-[#DADADA]">Andre L Scalise Albanese Junior</p>
              </div>
              {[...Array(8)].map((_, i) => (
                <div className="flex flex-row w-full justify-evenly sm:border-r-4 sm:border-[#005261]" key={i}>
                  <p className="flex justify-center items-center w-full sm:w-[89px] text-center border-b-4 border-[#DADADA]">1</p>
                  <p className="w-full sm:w-[209px] pl-2 pt-1 pb-1 break-words border-b-4 border-[#DADADA]">Andre L Scalise Albanese Junior</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col w-full sm:rounded-r-lg sm:border-r-4 sm:border-[#DADADA]">
              <div className="bg-[#005261] w-full text-white text-center pt-3">3º ADM</div>
              <div className="flex flex-col sm:flex-row w-full justify-evenly">
                <p className="flex justify-center items-center w-full sm:w-[89px] text-center border-b-4 border-[#DADADA]">1</p>
                <p className="w-full sm:w-[209px] pl-2 pt-1 pb-1 break-words border-b-4 border-[#DADADA]">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
            </div>
          </div>
  </div>
      </>
    );
    setTabelaTimesContra(resultado);
  };

  return (
    <div className='w-[920px] max-w-full mx-auto pl-4 '>
      <button onClick={mostrarTabelaTimesContra} className="bg-blue-500 text-white p-2 rounded">
        Clica aqui
      </button>
  
      {tabelaTimesContra && (
        <div>
          {tabelaTimesContra}
        </div>
      )}
     
  
      <div className="flex justify-center md:justify-start w-[400px] sm:w-[600px] md:w-[800px] sm:max-w-full gap-4 md:gap-20 mb-4 border-b-4 border-b-[#DADADA] relative">
        <div
          onClick={() => setMoveBar(1)}
          className={`sm:font-semibold text-base md:text-xl flex items-center gap-2 cursor-pointer ${moveBar === "principal" ? "text-[#005261]" : "text-[#DADADA]"}`}
        >
          1 º Fase 
        </div>
        <div
          onClick={() => setMoveBar(2)}
          className={`sm:font-semibold ml-2 text-base md:text-xl flex cursor-pointer ${moveBar === "doacoes" ? "text-[#005261]" : "text-[#DADADA]"}`}
        >
          2 º Fase 
        </div>
        <div
          onClick={() => setMoveBar(3)}
          className={`sm:font-semibold text-base md:text-xl cursor-pointer ${moveBar === "campeonato" ? "text-[#005261]" : "text-[#DADADA]"}`}
        >
          3 º Fase 
        </div>
        <div
          onClick={() => setMoveBar(4)}
          className={`sm:font-semibold text-base md:text-xl cursor-pointer ${moveBar === "campeonato" ? "text-[#005261]" : "text-[#DADADA]"}`}
        >
          Fase Final
        </div>
        <div
          className={`hidden sm:block h-[4px] md:w-[120px] bg-[#005261] ${transition ? "duration-700 delay-100" : ""} 
            ${moveBar === 1 ? "left-0" : ""} 
            ${moveBar === 2 ? "md:left-32 " : ""} 
            ${moveBar === 3 ? "md:left-[290px]" : ""} 
            ${moveBar === 4 ? "md:left-[445px]" : ""} 
            absolute -bottom-1 font-bold`}
        ></div>
      </div>
      <div className='bg-[#005261] w-[400px] sm:w-[600px] md:w-[800px] sm:max-w-full flex rounded-lg rounded-b-lg overflow-x-auto'>
        <div className='w-[920px] flex'>
          {moveBar === 1 && (
            <>
              <div>
                <div className='w-[200px] h-[51px] flex justify-center items-center text-white border-r-4 border-white'>
                  Horário
                </div>
                <form action="" className='w-[200px]'>
                  <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"8h00"} />
                  <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"8h15"} />
                  <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"8h30"} />
                  <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"8h45"} />
                  <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"9h10"} />
                  <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"9h25"} />
                </form>
              </div>
              <div>
                <div className='w-[200px] h-[51px] flex justify-center items-center text-white border-r-4 border-white'>
                  Jogos
                </div>
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] sm:max-w-full bg-white text-center text-[#DADADA]' value={"J1"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full bg-white text-center text-[#DADADA]' value={"J2"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full bg-white text-center text-[#DADADA]' value={"J3"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full bg-white text-center text-[#DADADA]' value={"J4"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full bg-white text-center text-[#DADADA]' value={"J5"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full bg-white text-center text-[#DADADA]' value={"J6"} />
              </div>
              <div>
                <div className='w-[200px] h-[51px] flex justify-center items-center text-white border-r-4 border-white'>
                  Time A
                </div>
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"1°ADM"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"2°CONT"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"1°INFO"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"1°CONT"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"2°RH"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"3°ADM"} />
              </div>
              <div>
                <div className='w-[200px] h-[51px] flex justify-center items-center text-white border-r-4 border-white'>
                  Time B
                </div>
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"1°RH"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"3°INFO"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"3°RH"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"2°ADM"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"2°RH"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full text-center' value={"3°ADM"} />
              </div>
              <div>
                <div className='w-[200px] h-[51px] flex justify-center items-center text-white border-r-4 border-white'>
                  Rodada
                </div>
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full bg-white text-center text-[#DADADA]' value={"1"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full bg-white text-center text-[#DADADA]' value={"1"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full bg-white text-center text-[#DADADA]' value={"1"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full bg-white text-center text-[#DADADA]' value={"1"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full bg-white text-center text-[#DADADA]' value={"1"} />
                <input type="text" className='border border-gray-300 w-[200px] h-[42px] max-w-full bg-white text-center text-[#DADADA]' value={"1"} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
  