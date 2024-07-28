"use client"

import { useRef, useEffect, useState } from 'react';
import Calendar from "@/components/Calendar/Calendar"
import { Icon } from '@iconify/react';
import Image from 'next/image'
import Modal from '@/components/formCadastro/modal'
import ContainerDoacao from '@/components/formCadastro/ContainerDoacao';

export default function Recados(){
  const [modalSucessoOpen, setModalSucessoOpen] = useState(false);


  const [mostrarCalendario, setMostrarCalendario] = useState(false)
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [opcaoForm, setOpcaoForm] = useState(0);
  
  const [todosRecadosFiltro, setTodosRecadosFiltro] = useState(false);
  const [periodoFiltro, setPeriodoFiltro] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false) 
  const [mostrarModalOpcoes, setMostrarModalOpcoes] = useState(false);

  function handleMostrarModal() {
    setMostrarModalOpcoes(prevShow => !prevShow); // Alternativa mais concisa para alternar entre true/false
  }
  const paletaCores = [
    { name: 'Prazos',  background: 'bg-[#FF4CA2]', img: 'img-prazo.svg' },
    { name: 'Organização de Sala', background: 'bg-[#005261]', img: 'organizacao-sala-icon.svg', coloricon:'text-white' },
    { name: 'Cadastros', background: 'bg-[#A0C340]', img: 'cadastros-icon.svg', coloricon:'text-white' },
    { name: 'Campeonato de Quadra', background: 'bg-[#8A29E6]', img: 'img-futsal.svg' },
    { name: 'Doações', background: 'bg-[#FFC24C]',img:'img-doacao.svg' },
    { name: 'Oficinas', background: 'bg-[#00C1CF]',img:'img-oficina.svg' },
    { name: 'Campeonato de Pátio', background: 'bg-[#FF4C4D]',img:'img-domino.svg' }
  ];
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    let tituloRecado = target.titulo.value;
    let visualizacao = target.visualizacao.value;
    let data = target.diaMarcado.value;
    let horario = target.horarioRecado.value;
    let recado =  target.recado.value;
    console.log(tituloRecado,visualizacao, data, horario,recado)
    
    setTimeout(() => {
      setMostrarModal(false)
      setModalSucessoOpen(true);      
    }, 4000);
  }

  const closeModal = () => {
    setMostrarFormulario(false)
    setModalSucessoOpen(false);
  }
  
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
      <div className={`mx-auto max-w-full ${largura < 800?'w-[430px] sm:mr-6':'w-[930px] sm:ml-10 md:ml-20 sm:mr-20'}  `}>
       
        <div>
          <div className='w-full flex justify-between'>
            <h1 className='pl-3 text-3xl'>Recados</h1>
            <div className={`${largura < 630 ? 'block' : 'hidden'}  w-[100px] flex justify-center mr-3`}>
             <button className='w-[50px] h-[50px] bg-[#005261] grid place-content-center  rounded-2xl hover:scale-110 duration-150 transition-all' onClick={() => setMostrarCalendario(!mostrarCalendario)}>
                 <Image src={'/images/img-calendario.svg'} className="text-white" width={25} height={24}/>
             </button>
            </div>
          </div>
          {/* filtros */}
          <div className={`flex ${largura < 700   && largura >= 624?'md:flex-col justify-center':'sm:flex-row items-center'} border border-orange-500 mt-[50px] ml-4 mb-[50px] w-full`}>
            {/* filtro 1 */}
            <div className='relative flex justify-center'>
              <div
                onClick={() => setTodosRecadosFiltro(!todosRecadosFiltro)}
                className={` w-[179px] shadow-xl bg-white p-1 rounded-3xl border-[3px] border-[#005261] my-4 cursor-pointer flex items-center`}
              >
                <p className='w-full p-1'>Todos os Recados</p>
                <Icon
                  width={30}
                  icon="solar:alt-arrow-down-line-duotone"
                  className={`text-black duration-300 transform ${todosRecadosFiltro ? 'rotate-180' : 'rotate-0'}`}
                />
              </div>
              {todosRecadosFiltro && (
                <>
                  <div className="fixed inset-0 bg-black bg-opacity-20 z-50" onClick={() => setTodosRecadosFiltro(false)}></div>
                  <div className="absolute bg-white shadow-md rounded-lg mt-20 ml-20 w-48 py-2 z-50">
                    <ul>
                      <li onClick={() => setTodosRecadosFiltro(!todosRecadosFiltro)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">Todos os recados</li>
                      <li onClick={() => setTodosRecadosFiltro(!todosRecadosFiltro)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">Organização de sala</li>
                      <li onClick={() => setTodosRecadosFiltro(!todosRecadosFiltro)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">Prazos</li>
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
                      <li onClick={() => setPeriodoFiltro(!periodoFiltro)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">Todos</li>
                      <li onClick={() => setPeriodoFiltro(!periodoFiltro)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">7 dias</li>
                      <li onClick={() => setPeriodoFiltro(!periodoFiltro)} className="cursor-pointer hover:bg-gray-100 py-1 px-3">15 dias</li>
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
        ` ${largura < 639 ? `${mostrarCalendario?'block z-50 fixed right-0 top-8 ':'hidden'} ` : 'block'} ${largura < 1086 ? 'w-[350px] ' : larguraJanela < 916 ? ' pr-8' : 'w-[520px]'} 
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
          <button onClick={() => setMostrarModal(!mostrarModal)} className='mx-auto max-w-full w-[310px] h-[90px] rounded-2xl flex justify-center items-center gap-4 bg-white mt-10'>
            <div className="w-[45px] h-[45px] rounded-lg bg-[#005261] grid place-content-center p-6">
              <Icon width={15} icon="el:plus" className="text-white" />
            </div>
            <p className='text-[#005261] font-medium'>Adicione um novo recado</p>
          </button>
        </div>
      </div>
         {modalSucessoOpen && (
            <>
                 <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div> {/* Fundo preto translúcido */}
                 <div className="fixed -top-8 inset-0 flex items-center justify-center z-50">
                   <div className="mx-auto  w-[290px] h-[220] sm:w-[390px] sm:h-[330px] bg-white p-6 rounded-lg shadow-lg relative z-50">
                      <image src=".././images/sucess-form.png" className='absolute -top-[43px] left-[53px] sm:-top-[43px] sm:left-20 h-[154px] w-[200px] sm:h-[159px] sm:w-[217px]' alt="" />
                      <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={closeModal}>
                        ✕
                      </button>
                      <div className='mt-28 text-center'>
                        <h3 className="font-bold text-2xl">Sucesso!</h3>
                        <p className="py-4 text-2xl">a</p>
                      </div>
                  </div>
                  </div>
            </>
          )}
      {mostrarModal && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div> {/* Fundo preto translúcido */}
            <div className="fixed -top-8 inset-0 flex items-center justify-center z-50">
              <div className={`${mostrarFormulario? 'hidden': 'block'} flex flex-col gap-4 z-50 bg-white items-center w-[350px] max-w-full sm:w-[525px] p-10 m-auto shadow-lg mt-10 text-[#666666] rounded-xl relative`}>
                <div className='absolute left-4 top-2 cursor-pointer' onClick={() => setMostrarModal(!mostrarModal)}>
                   <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
                </div>
                <div 
                  onClick={handleMostrarModal}
                  className='flex items-center justify-between w-full sm:w-3/4 h-[60px] px-6 text-lg rounded-full bg-[#E6EFF0] cursor-pointer transition-colors duration-300 z-60'> {/* Cabeçalho do modal */}
                  Tipo de cadastro
                  <Icon icon="iconamoon:arrow-down-2-duotone" width={40} style={{ color: "#005261" }} />
                </div>
                <div className={`sm:w-3/4 bg-[#E6EFF0] rounded-3xl overflow-hidden transition-all duration-500 z-60 ${mostrarModalOpcoes ? 'max-h-[400px] duration-300 p-6' : 'max-h-0 p-0'}`}>
                  {/* Opções dentro do modal */}
                  <ul className='space-y-4'>
                    <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer'  onClick={() =>{ setMostrarFormulario(!mostrarFormulario);  setOpcaoForm(1)}}>Organização de Sala</li>
                    <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer'  onClick={() => {setMostrarFormulario(!mostrarFormulario); setOpcaoForm(2)}}>Campeonato de Pátio</li>
                    <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer'  onClick={() => {setMostrarFormulario(!mostrarFormulario); setOpcaoForm(3)}}>Campeonato de Quadra</li>
                    <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer' onClick={() => { setMostrarFormulario(!mostrarFormulario);  setOpcaoForm(4)}}>Prazos</li>
                    <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer'  onClick={() => {setMostrarFormulario(!mostrarFormulario); setOpcaoForm(5)}}>Doações</li>
                    <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer'  onClick={() => {setMostrarFormulario(!mostrarFormulario); setOpcaoForm(6)}}>Oficinas</li>
                  </ul>
                </div>
              </div>
                {mostrarFormulario && (
                   <div className={`foverflow-y-auto flex flex-col gap-4 z-50 bg-white items-center w-[350px] max-w-full sm:w-[525px] p-10 m-auto shadow-lg mt-10 text-[#666666] rounded-xl relative`}>
                      <div className='absolute left-4 top-2 cursor-pointer' onClick={() => setMostrarModal(!mostrarModal), () => setMostrarFormulario(!mostrarFormulario)}>
                        <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
                      </div>
                      <form  onSubmit={(e) => handleFormSubmit(e)} className=' space-y-8 sm:w-3/4 h-[700px] flex items-center flex-col z-50 bg-white '>
                       <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                           Tipo de Recado
                          {opcaoForm == 1 ?(  
                            <input type="text" name="organizacaoSala" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui' value={'Organização de Sala'}/>
                            ):opcaoForm == 2?(
                              <input type="text" name="campeonatoPatio" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui' value={'Campeonato de Pátio'}/>
                            ):opcaoForm == 3?(
                              <input type="text" name="campeonatoQuadra" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui' value={'Campeonato de Quadra'}/>
                            ):opcaoForm == 4?(
                            <input type="text" name="prazo" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui' value={'Prazos'}/>
                            ):opcaoForm == 5?(
                            <input type="text" name="doacao" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui' value={'Doações'}/>
                           ):(
                            <input type="text" name="oficina" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui' value={'Oficinas'}/>
                           )
                          }
                        </label>

                        <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                          Titulo 
                          <input type="text" name="titulo" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui'/>
                        </label>
                   
                        <label className=' gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                           <input type="radio" name="visualizacao" className='bg-[#E6EFF0] text-[#005261]  text-lg' value="representante"/> Representantes <br/>
                          <input type="radio" name="visualizacao" className='bg-[#E6EFF0] text-[#005261] text-lg' value="aluno"/> Todos os Alunos
                        </label>
                        <label className=' gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                         <input type="date" name="diaMarcado" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui'/>
                        </label>
                        <label className=' gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                         <input type="time" name="horarioRecado" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui'/>
                        </label>
                        <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                          Recado 
                          <textarea name="recado" className='bg-[#E6EFF0] w-full text-[#005261] font-medium text-lg' placeholder='Digite aqui'/>
                        </label>
                        <div className='flex sm:flex-row justify-evenly w-full gap-2'>
                          <button type='submit' className='w-1/2  rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Salvar</button>
                          <button type='button' className='w-1/2  rounded-2xl self-start bg-[#005261] text-white font-medium p-4' onClick={() => setMostrarModal(!mostrarModal), () => setMostrarFormulario(!mostrarFormulario)}>
                            Cancelar
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
            </div>
          </>
        )}
    </div>
  );
}
