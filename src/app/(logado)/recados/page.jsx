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
  
  const [mostrarFormulario2, setMostrarFormulario2] = useState(false)
 
  const [todosRecadosFiltro, setTodosRecadosFiltro] = useState(false);
  const [periodoFiltro, setPeriodoFiltro] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false) 
  const [mostrarModalOpcoes, setMostrarModalOpcoes] = useState(false);
  
  const [retornoApiAddRecado, setRetornoApiAddRecado] = useState([]);

  function handleMostrarModal() {
    setMostrarModalOpcoes(prevShow => !prevShow); // Alternativa mais concisa para alternar entre true/false
  }
  const paletaCores = [
    { titulo: 'Prazos',  background: 'bg-[#FF4CA2]', img: 'img-prazo.svg' },
    { titulo: 'Organização de Sala', background: 'bg-[#005261]', img: 'organizacao-sala-icon.svg', coloricon:'text-white' },
    { titulo: 'Cadastros', background: 'bg-[#A0C340]', img: 'cadastros-icon.svg', coloricon:'text-white' },
    { titulo: 'Campeonato de Quadra', background: 'bg-[#8A29E6]', img: 'img-futsal.svg' },
    { titulo: 'Doações', background: 'bg-[#FFC24C]',img:'img-doacao.svg' },
    { titulo: 'Oficinas', background: 'bg-[#00C1CF]',img:'img-oficina.svg' },
    { titulo: 'Campeonato de Pátio', background: 'bg-[#FF4C4D]',img:'img-domino.svg' }
  ];
 
  {/*quando a pessoa cria um novo recado */}

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const tipoRecado = target.tipoRecado.value;
    const tituloRecado = target.titulo.value;
    const visualizacaoRecado = target.visualizacao.value;
    const dataRecado = target.diaMarcado.value;
    const horarioRecado = target.horarioRecado.value;
    const mensagem = target.recado.value;

    setRetornoApiAddRecado(prevState => [
      ...prevState,
      {
        id: prevState.length + 1, // Adicione um ID único para cada recado
        tipo : tipoRecado,
        titulo: tituloRecado,
        visualizacao: visualizacaoRecado,
        data: dataRecado,
        horario: horarioRecado,
        recado: mensagem
      }
    ]);

    setMostrarModal(false)
  };

  const closeModal = () => {
    setMostrarFormulario(false)
    setModalSucessoOpen(false);
  }

 {/*os dados vem da api e quando a pessoa clica no recado a pessoa pode vizualizar as informações ou editar elas */}

  const [idObjetoSelecionado, setIdObjetoSelecionado] = useState(null);

  const [tipo, setTipo] = useState('');
  const [visualizacao, setVisualizacao] = useState('');
  const [titulo, setTitulo] = useState('');
  const [dia, setDia] = useState('');
  const [horario, setHorario] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleShowForm = (recado) => {
    setMostrarFormulario2(true);
    setIdObjetoSelecionado(recado.id);
    setTipo(recado.tipo);
    setVisualizacao(recado.visualizacao);
    setTitulo(recado.titulo);
    setDia(recado.data);
    setHorario(recado.horario);
    setMensagem(recado.recado);
  };
  
  const handleCloseForm = () => {
    setMostrarFormulario2(false);
    setIdObjetoSelecionado(null);
    setTipo('');
    setTitulo('');
    setDia('');
    setHorario('');
    setMensagem('');;
  };
  
  const handleFormSubmit2 = (e) => {
    e.preventDefault();
    
    const tipoRecado = tipo;
    const visualizacaoRecado = visualizacao;
    const tituloRecado= titulo;
    const diaRecado = dia;
    const horarioRecado = horario;
    const mensagemRecado= mensagem;
    
    const posicao = retornoApiAddRecado.findIndex((elemento) => elemento.id === idObjetoSelecionado);
  
    const novosDados = [...retornoApiAddRecado];
    novosDados[posicao] = {
      id: idObjetoSelecionado,
      tipo: tipoRecado,
      visualizacao: visualizacaoRecado,
      tipo: tituloRecado ,
      dia: diaRecado,
      horario: horarioRecado,
      mensagem: mensagemRecado,
    };

    setRetornoApiAddRecado(novosDados);

    handleCloseForm();
  };

  {/*funções daqui pra baixo para ser possível aplicar responsividade */}
  
  const [larguraJanela, setLarguraJanela] = useState(0);

  useEffect(() => {
      const handleResize = () => {
          setLarguraJanela(window.innerWidth);
      };
      handleResize();
      window.addEventListener('resize', handleResize);

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
          <div className={`flex ${largura < 700   && largura >= 624?'md:flex-col justify-center':'sm:flex-row items-center'} mt-[50px] ml-4 mb-[50px] w-full`}>
            {/* filtro 1 Todos os Recados */}
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
            
            {/* filtro 2 Periodo */}
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
          
          {/* seção de recados adicionados do formulario */}
          <section className='flex flex-col gap-4 ml-4'>
            {retornoApiAddRecado.map((recado) => {
              const item = paletaCores.find((item) => item.titulo === recado.tipo);

              if (!item) return null; // Verifique se o item existe na paleta de cores

              return (
                <div key={recado.id} className='p-1 pb-4 pl-4 pr-4 border-b-2 border-[#E6E6E6]' onClick={() => handleShowForm(recado)}>
                  {/* Ícone */}
                  <div className={`float-left w-[50px] h-[50px] rounded-lg ${item.background} grid place-content-center mr-4`}>
                    <Image src={`/images/${item.img}`} alt="imagem recado" width={30} height={30} />
                  </div>
                  <div className='float-left'>
                    {/* Título */}
                    <span className='block text-lg font-semibold mb-1'>{item.titulo}</span>
                    {/* Data */}
                    <span className='block text-sm text-gray-400'>{recado.data} às {recado.horario}</span>
                  </div>
                  <Icon width={40} icon="iconamoon:arrow-right-2-bold" className={`text-[#005261] float-right`} />
                  <div className='clear-both'></div>
                </div>
              );
            })}
          </section>
        </div>   
      </div>
           
      {/*mostrar formulario 2 qunado clicar no recado */}
          {mostrarFormulario2 && (
             <>
              <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div> {/* Fundo preto translúcido */}
              <div className="fixed -top-8 inset-0 flex items-center justify-center z-50  ">
                <div className=" flex flex-col gap-4 z-50 bg-white items-center w-[350px] max-w-full sm:w-[525px] p-10 m-auto shadow-lg mt-10 text-[#666666] rounded-xl relative max-h-screen h-[700px] overflow-y-auto ">
                  <div className='absolute left-4 top-2 cursor-pointer' onClick={() => setMostrarFormulario2(!mostrarFormulario2)}>
                    <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
                  </div>
                  <form onSubmit={handleFormSubmit2} className='overflow-y-auto space-y-8 sm:w-3/4 h-full flex items-center flex-col z-50 bg-white'>
                    <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                      Tipo de Recado  
                      <input type="text" value={tipo} name="tipoRecado" onChange={(e) => setTipo(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui'/>
                    </label>
                    <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                      Titulo 
                      <input type="text" value={titulo} name="titulo" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui'/>
                    </label>
                    <label className='gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                      <input type="radio" name="visualizacao" className='bg-[#E6EFF0] text-[#005261] text-lg' value="representante" checked={visualizacao === 'representante'} /> Representantes <br/>
                      <input type="radio" name="visualizacao" className='bg-[#E6EFF0] text-[#005261] text-lg' value="aluno" checked={visualizacao === 'aluno'} /> Todos os Alunos
                    </label>
                    <label className='gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                      <input type="date" name="diaMarcado" value={dia} onChange={(e) => setDia(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-medium text-lg'/>
                    </label>
                    <label className='gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                      <input type="time" value={horario} name="horarioRecado" onChange={(e) => setHorario(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui'/>
                    </label>
                    <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                      Recado 
                      <textarea name="recado" value={mensagem} onChange={(e) => setMensagem(e.target.value)} className='bg-[#E6EFF0] w-full text-[#005261] font-medium text-lg' placeholder='Digite aqui'/>
                    </label>
                    <div className='flex sm:flex-row justify-evenly w-full gap-2'>
                      <button type='submit' className='w-1/2 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Publicar</button>
                      <button type='button' className='w-1/2 rounded-2xl self-start bg-[#005261] text-white font-medium p-4' onClick={handleCloseForm}>
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
            </div>

             </>
            )
          }

      {/* div da direita */}
      <div className={
        ` ${largura < 639 ? `${mostrarCalendario?'block z-50 fixed right-0 top-8 ':'hidden'} ` : `block`} ${mostrarModal ?'hidden':'block'}  ${largura < 1086 ? 'w-[350px] ' : larguraJanela < 916 ? ' pr-8' : 'w-[520px]'} 
        h-[690px] rounded-l-lg bg-[#efeeee]  `}>
        <Image src={'/images/fechar-menu.svg'} className={`relative -left-1 -top-3 ${largura>625?'hidden':'block'}`} width={40} height={30} onClick={() =>setMostrarCalendario(!mostrarCalendario)}/>
        
        <div className='max-w-full w-[410px] mx-auto'>
          <section className='border p-4'>
              <Calendar />
          </section>
          <section>
            {/* notificacao */}
            <p className='text-[#999999] text-center sm:pt-[56px] sm:pb-[50px]'>Escolha uma data e veja qual prazo está marcado ser entregue nela</p>
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
        
      {/*quando a pessoa clica no botão de acionar um nobo recado*/}

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
                   <div className={`foverflow-y-auto flex flex-col gap-4 z-50 bg-white items-center w-[350px] max-w-full sm:w-[525px] p-10 m-auto shadow-lg mt-10 text-[#666666] rounded-xl relative  max-h-screen h-[700px] overflow-y-auto `}>
                      <div className='absolute left-4 top-2 cursor-pointer' onClick={() => setMostrarModal(!mostrarModal), () => setMostrarFormulario(!mostrarFormulario)}>
                        <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
                      </div>
                      <form onSubmit={handleFormSubmit}  className=' space-y-8 sm:w-3/4 h-[700px] flex items-center flex-col z-50 bg-white '>
                       <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                           Tipo de Recado
                          {opcaoForm == 1 ?(  
                            <input type="text" name="tipoRecado" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui' value={'Organização de Sala'}/>
                            ):opcaoForm == 2?(
                              <input type="text" name="tipoRecado" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui' value={'Campeonato de Pátio'}/>
                            ):opcaoForm == 3?(
                              <input type="text" name="tipoRecado" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui' value={'Campeonato de Quadra'}/>
                            ):opcaoForm == 4?(
                            <input type="text" name="tipoRecado" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui' value={'Prazos'}/>
                            ):opcaoForm == 5?(
                            <input type="text" name="tipoRecado" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui' value={'Doações'}/>
                           ):(
                            <input type="text" name="tipoRecado" className='bg-[#E6EFF0] text-[#005261] font-medium text-lg' placeholder='Digite aqui' value={'Oficinas'}/>
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
                          <button type='submit' className='w-1/2  rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Publicar</button>
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
