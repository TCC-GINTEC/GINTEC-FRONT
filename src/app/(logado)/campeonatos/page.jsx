"use client";
import { Icon } from '@iconify/react';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Campeonatos() {
  const router = useRouter();

  const [showFilterFasesOptions, setShowFilterFasesOptions] = useState(false);
  const [alertShowFase, setAlertShowFase] = useState(false);
  const [itens, setItens] = useState([]);

  useEffect(() => {
    handleGetItens();
  }, []);

  function handleGetItens() {
    const listaCadastroCampeonatos = [
      { text: 'pembolim' },
      { text: 'basquete' },
      { text: 'futsal masculino' },
      { text: 'futsal feminino' },
      { text: 'queimada' },
      { text: 'damas' },
      { text: 'xadrez' },
      { text: 'volei' },
    ];

    setItens(listaCadastroCampeonatos);
  }

  function handleFase(fase) {
    if (fase === 2) {
      setAlertShowFase(true);
    }
    setShowFilterFasesOptions(false);
  }

  const handleCloseAlertFase = () => {
    setAlertShowFase(false);
  };

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

  return (
    <>
      {/* Exibe o alerta quando a 2 fase não está disponível */}
      {alertShowFase && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="mx-auto w-[290px] h-[360px] sm:w-[390px] bg-white p-6 rounded-3xl shadow-lg relative">
              <Image
                width={200}
                height={154}
                src="/images/alert-fase.png"
                className="absolute -top-[43px] left-[40px] sm:-top-[48px] sm:left-[45px] sm:h-[179px] sm:w-[307px]"
                alt="Sucesso"
              />
              <button
                className="absolute top-4 right-6 hover:text-gray-400"
                onClick={handleCloseAlertFase}
              >
                ✕
              </button>
              <div className="mt-28 text-center">
                <h3 className="font-bold text-2xl">Atenção!</h3>
                <p className="py-4 pb-8 text-xl">
                  Este fase não está disponível para visualização
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="sm:pr-20 relative flex items-center justify-between">
        <div className="w-full text-start  sm:pl-4">
          <h1 className="text-3xl">Campeonatos</h1>
        </div>
        <div
          onClick={() => setShowFilterFasesOptions(!showFilterFasesOptions)}
          className="relative w-[113px] shadow-xl bg-white p-1 rounded-3xl border-[2px] border-[#005261] my-4 cursor-pointer flex items-center"
        >
          <Icon icon="mynaui:filter" className="mr-2 h-6 w-6" />
          Fases
          {showFilterFasesOptions && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-20 z-50" onClick={() => setShowFilterFasesOptions(false)}></div>
            <div className="absolute top-10 right-1 bg-white shadow-md rounded-lg  w-48 py-2 z-50">
              <ul>
                <li onClick={() => handleFase(1)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">1ª fase</li>
                <li onClick={() => handleFase(2)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">2ª fase</li>
              </ul>
            </div>
          </>
        )}
        </div>
    
      </div>

      <div ref={divRef}  className="w-[920px] max-w-full mx-auto">
        <div className="flex flex-col items-center w-full sm:gap-6 sm:pr-10">
          <div className="w-full sm:w-[626px] h-[195px] flex justify-evenly items-center shadow-2xl rounded-lg mx-auto">
            <div className="w-[100px] sm:w-[118px] h-[138px] text-center flex flex-col justify-center rounded-lg bg-[#005261] text-[#FFFFFF]">
              <h2 className="text-3xl font-medium">28</h2>
              <p>Ago</p>
            </div>
            <div className="w-[100px] sm:w-[118px] h-[138px] text-center flex flex-col justify-center rounded-lg bg-[#F8F8F8] text-[#005261]">
              <h2 className="text-3xl font-medium">29</h2>
              <p>Ago</p>
            </div>
            <div className="w-[100px] sm:w-[118px] h-[138px] text-center flex flex-col justify-center rounded-lg bg-[#F8F8F8] text-[#005261]">
              <h2 className="text-3xl font-medium">30</h2>
              <p>Ago</p>
            </div>
          </div>
          <div className={`mt-10 grid ${largura < 800 ? 'sm:grid-cols-2':' sm:grid-cols-3'} gap-8`}>
              {itens.map((item, index) => {
                // Pegando o primeiro nome (ou palavra) do item
                const imageName = item.text.split(' ')[0].toLowerCase().replace(/\s+/g, '-');
                const encodedText = encodeURIComponent(item.text);

                return (
                  <div key={index} className="w-[257px] h-[119px] shadow-2xl rounded-lg flex items-center gap-4 pl-4" onClick={() => router.push(`/campeonatos/tabela?campeonato=${encodedText}`)}>
                    <div className="bg-[#9747FF] w-[49px] h-[51px] flex justify-center items-center rounded-lg">
                      <Image
                        src={`/images/img-${imageName}.svg`}
                        width={30}
                        height={30}
                        alt={item.text}
                      />
                    </div>
                    <p className="text-[#9747FF] font-semibold">{item.text}</p>
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    </>
  );
}
