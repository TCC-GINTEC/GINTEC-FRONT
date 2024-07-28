"use client"

import { useRef, useEffect, useState } from 'react';
import Calendar from "@/components/Calendar/Calendar"
import { Icon } from '@iconify/react';
import Image from 'next/image'

export default function Recados(){
  const [mostrarCalendario, setMostrarCalendario] = useState(false)
  const [periodoFiltro, setPeriodoFiltro] = useState(false);

  const paletaCores = [
    { name: 'Prazos',  background: 'bg-[#FF4CA2]', img: 'img-prazo.svg' },
    { name: 'Organização de Sala', background: 'bg-[#005261]', img: 'organizacao-sala-icon.svg', coloricon:'text-white' },
    { name: 'Cadastros', background: 'bg-[#A0C340]', img: 'cadastros-icon.svg', coloricon:'text-white' },
    { name: 'Campeonato de Quadra', background: 'bg-[#8A29E6]', img: 'img-futsal.svg' },
    { name: 'Doações', background: 'bg-[#FFC24C]',img:'img-doacao.svg' },
    { name: 'Oficinas', background: 'bg-[#00C1CF]',img:'img-oficina.svg' },
    { name: 'Campeonato de Pátio', background: 'bg-[#FF4C4D]',img:'img-domino.svg' }
  ];

  const [larguraJanela, setLarguraJanela] = useState(0);

  useEffect(() => {
      // Função para atualizar a largura da janela
      const handleResize = () => {
          setLarguraJanela(window.innerWidth);
      };

      // Configura a largura inicial
      handleResize();

      // Adiciona o listener para o evento resize
      window.addEventListener('resize', handleResize);

      // Cleanup: remove o listener quando o componente é desmontado
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);
  
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

  function mostrarSecaoCalendario() {
    setMostrarCalendario(true)
  }
  
  return (
    <div ref={divRef} className={`flex ${largura <= 1280 ? 'justify-end' : 'justify-end'} justify-center mt-8 relative`}>
    {/* div da esquerda */}
      <div className={`mx-auto max-w-full ${largura < 800?'w-[400px] sm:mr-6':'w-[930px] sm:ml-10 md:ml-20 sm:mr-20'}  `}>
        <div>
          <h1 className='pl-3 text-3xl'>Recados</h1>
          {/* filtros */}
          <div className={`flex ${largura < 700   && largura >= 624?'md:flex-col justify-center':'sm:flex-row items-center'} border border-orange-500 mt-[50px] ml-4 mb-[50px] w-full`}>
            {/* filtro 1 */}
            <div className='relative flex justify-center'>
              <div
                onClick={() => setPeriodoFiltro(!periodoFiltro)}
                className={` w-[179px] shadow-xl bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center`}
              >
                <p className='w-full p-1'>Todos os Recados</p>
                <Icon
                  width={30}
                  icon="solar:alt-arrow-down-line-duotone"
                  className={`text-black duration-300 transform ${periodoFiltro ? 'rotate-180' : 'rotate-0'}`}
                />
              </div>
              {periodoFiltro && (
                <>
                  <div className="fixed inset-0 bg-black bg-opacity-20 z-50" onClick={() => setPeriodoFiltro(false)}></div>
                  <div className="absolute bg-white shadow-md rounded-lg mt-20 ml-20 w-48 py-2 z-50">
                    <ul>
                      <li onClick={() => setPeriodoFiltro(!periodoFiltro)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">1ª fase</li>
                      <li onClick={() => setPeriodoFiltro(!periodoFiltro)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">2ª fase</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
            
            {/* filtro 2 */}
            <div className={`ml-[5%] relative flex flex-col sm:flex-row sm:justify-center`}>
              <div
                onClick={() => setPeriodoFiltro(!periodoFiltro)}
                className={`${largura < 688 && largura >= 629?'w-[179px]':'w-[120px]'} max-w-full w-[120px] shadow-xl bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex justify-center items-center`}
              >
                Período
                <Icon
                  width={30}
                  icon="solar:alt-arrow-down-line-duotone"
                  className={`text-black duration-300 transform ${periodoFiltro ? 'rotate-180' : 'rotate-0'}`}
                />
              </div>
              {periodoFiltro && (
                <>
                  <div className="fixed inset-0 bg-black bg-opacity-20 z-50" onClick={() => setPeriodoFiltro(false)}></div>
                  <div className="absolute bg-white shadow-md rounded-lg mt-20 ml-20 w-48 py-2 z-50">
                    <ul>
                      <li onClick={() => setPeriodoFiltro(!periodoFiltro)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">1ª fase</li>
                      <li onClick={() => setPeriodoFiltro(!periodoFiltro)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">2ª fase</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* seção de recados */}
          <section className=' flex flex-col gap-4 ml-4 '>
            <div className='p-1 pb-4 pl-4 pr-4 border-b-2 border-[#E6E6E6]'>
              {/* Ícone */}
              <div className='float-left w-[50px] h-[50px] rounded-lg bg-[#8A29E6] grid place-content-center mr-4'>
                <Image src="/images/img-futsal.svg" alt="imagem recado" width={30} height={30} />
              </div>
              <div className='float-left'>
                {/* Título */}
                <span className='block text-lg font-semibold mb-1'>Titulo</span>
                {/* Data */}
                <span className='block text-sm text-gray-400'>24 ago às 08:42</span>
              </div>
              <Icon width={40} icon="iconamoon:arrow-right-2-bold" className={`text-[#005261] float-right`} />
              <div className='clear-both'></div>
            </div>
          </section>
        </div>
      </div>
      {/* div da direita */}
      <div className={
        ` ${largura < 639 ? `${mostrarCalendario?'block z-50 fixed right-0 top-8 ':'hidden'} ` : 'block'} ${largura < 1086 ? 'w-[320px] ' : larguraJanela < 916 ? ' pr-8' : 'w-[520px]'} 
        h-[690px] rounded-l-lg bg-[#efeeee] border border-green-500 `}>
        <Image src={'/images/fechar-menu.svg'} className={`relative -left-1 -top-3 ${largura>625?'hidden':'block'}`} width={40} height={30} onClick={() =>setMostrarCalendario(!mostrarCalendario)}/>
        
        <div className='max-w-full w-[410px] border border-orange-500 mx-auto'>
          <section className='border p-4 border-red-500'>
              <Calendar />
          </section>
          <section>
            {/* notificacao */}
            <p className='text-[#999999] text-center pt-[56px] pb-[50px]'>Escolha uma data e veja qual prazo está marcado ser entregue nela</p>
            <hr className='border-[#005261] border-b-2'/>
          </section>
          {/* botao */}
          <button className='mx-auto max-w-full w-[310px] h-[90px] rounded-2xl flex justify-center items-center gap-4 bg-white mt-10'>
            <div className="w-[45px] h-[45px] rounded-lg bg-[#005261] grid place-content-center p-6">
              <Icon width={15} icon="el:plus" className="text-white" />
            </div>
            <p className='text-[#005261] font-medium'>Adicione um novo recado</p>
          </button>
        </div>
      </div>

      <div className={`${largura < 630 ? 'block' : 'hidden'}  w-[100px] flex justify-center `}>
          <button className='w-[50px] h-[50px] bg-[#005261] grid place-content-center  rounded-2xl hover:scale-110 duration-150 transition-all' onClick={() => setMostrarCalendario(!mostrarCalendario)}>
              <Image src={'/images/img-calendario.svg'} className="text-white" width={25} height={24}/>
          </button>
      </div>

    </div>
  );
}
