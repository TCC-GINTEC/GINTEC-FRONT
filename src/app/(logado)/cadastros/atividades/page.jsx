"use client"

import Link from 'next/link'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Modal from '@/components/formCadastro/modal';
import ContainerCampeonatoQuadra from '@/components/formCadastro/ContainerCampeonatoQuadra';

export default function Quadra() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  const [cursoEtec, setCursoEtec] = useState('');
  const[form1_Atv1_Dia1,setForm1Atv1Dia1] = useState('');
  const[form1_Atv2_Dia2,setForm1Atv2Dia2] = useState('');
  const[form1_Atv3_Dia3,setForm1Atv3Dia3] = useState('');
  
  const[form2_Atv1_Dia1,setForm2Atv1Dia1] = useState('');
  const[form2_Atv2_Dia2,setForm2Atv2Dia2] = useState('');
  const[form2_Atv3_Dia3,setForm2Atv3Dia3] = useState('');

  const[form3_Atv1_Dia1,setForm3Atv1Dia1] = useState('');
  const[form3_Atv2_Dia2,setForm3Atv2Dia2] = useState('');
  const[form3_Atv3_Dia3,setForm3Atv3Dia3] = useState('');
  //const[form2Atv1Dia2,setForm1Atv1Dia1] =useState('');
  //const[form3Atv13Dia3,setForm1Atv1Dia1]= useState('');

  const [pontoCampeonato, setPontoCampeonato] = useState('');
  const [dataCampeonato, setDataCampeonato] = useState('');
  const [faseCampeonato, setFaseCampeonato] = useState('');
  const [idObjetoSelecionado, setIdObjetoSelecionado] = useState(null);

  const [retornoApi, setRetornoApi] = useState([
    {
      id: 1,
      curso:'1 informatica',
      form1Atv1Dia1:'labiriton 3D',
      form1Atv2Dia2:'labiriton 3D',
      form1Atv3Dia3:'labiriton 3D',
      fase:1,
      data: new Date('2024-08-01'),
    },
    {
      id: 2,
      curso:'2 informatica',
      form1Atv1Dia1:'labiriton 3D',
      form1Atv2Dia2:'labiriton 3D',
      form1Atv3Dia3:'labiriton 3D',
      fase: 3,
      data: new Date('2024-07-20'),
    },
    {
      id: 3,
      curso:'3 informatica',
      form1Atv1Dia1:'labiriton 3D',
      form1Atv2Dia2:'labiriton 3D',
      form1Atv3Dia3:'labiriton 3D',
      fase: 3,
      data: new Date('2024-07-15'),
    },
    {
      id: 4,
      curso:'1 admnistração',
      form1Atv1Dia1:'labiriton 3D',
      form1Atv2Dia2:'labiriton 3D',
      form1Atv3Dia3:'labiriton 3D',
      fase: 3,
      data: new Date('2024-07-25'),
    },
  ]);



  const formatDateToBR = (date) => {
    return date ? date.toLocaleDateString('pt-BR') : '';
  };

  const parseDateFromBR = (dateStr) => {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  };

  const handleShowForm = (cursosEtec) => {
    setShowForm(true);
    setIdObjetoSelecionado(cursosEtec.id);
    setCursoEtec(cursosEtec.curso);
    
    setForm1Atv1Dia1(cursosEtec.form1Atv1Dia1)
    setForm1Atv2Dia2(cursosEtec.form1Atv2Dia2)
    setForm1Atv3Dia3(cursosEtec.form1Atv3Dia3)
    
    setForm2Atv1Dia1(cursosEtec.form2Atv1Dia1)
    setForm2Atv2Dia2(cursosEtec.form2Atv2Dia2)
    setForm2Atv3Dia3(cursosEtec.form2Atv3Dia3)
    
    setForm3Atv1Dia1(cursosEtec.form3Atv1Dia1)
    setForm3Atv2Dia2(cursosEtec.form3Atv2Dia2)
    setForm3Atv3Dia3(cursosEtec.form3Atv3Dia3)


    setFaseCampeonato(cursosEtec.fase);
    setDataCampeonato(formatDateToBR(cursosEtec.data));
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setIdObjetoSelecionado(null);
    setCursoEtec('');

    setForm1Atv1Dia1("")
    setForm1Atv2Dia2("")
    setForm1Atv3Dia3("")
    setForm2Atv1Dia1("")
    setForm2Atv2Dia2("")
    setForm2Atv3Dia3("")
    setForm3Atv1Dia1("")
    setForm3Atv2Dia2("")
    setForm3Atv3Dia3("")

    setPontoCampeonato('');
    setFaseCampeonato('');
    setDataCampeonato('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const curso = cursoEtec;
    const atv1Dia1 = form1_Atv1_Dia1 ;
    const atv2Dia2 = form1_Atv2_Dia2;
    const atv3Dia3 = form1_Atv3_Dia3;
    //const ponto = Number(pontoCampeonato);
    //const fase = Number(faseCampeonato);
    const data = parseDateFromBR(dataCampeonato);

    const posicao = retornoApi.findIndex(
      (elemento) => elemento.id === idObjetoSelecionado
    );

    const novosDados = [...retornoApi];
    novosDados[posicao] = {
      id: idObjetoSelecionado,
      curso: curso,
      form1Atv1Dia1:atv1Dia1,
      form1Atv2Dia2:atv2Dia2,
      form1Atv3Dia3:atv3Dia3,
      data: data,
    };

    setRetornoApi(novosDados);

    setTimeout(() => {
      handleCloseForm();
      setModalOpen(true);
    }, 4000);
  };


  const closeModal = () => {
    setModalOpen(false);
  };

  {/*daqui pra baixo atividades*/}

  const [moveBar, setMoveBar] = useState("28");
  const [transition, setTransition] = useState(false); // Estado para controlar a transição

  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const items = [
    { id: 1, label: '1º Informatica' },
    { id: 2, label: '2º Informatica' },
    { id: 3, label: '3º Informatica' },
    { id: 4, label: '1º Contabilidade ' },
    { id: 5, label: '2º Contabilidade' },
    { id: 6, label: '3º Contabilidade' },
    { id: 7, label: '1º Recursos Humanos  ' },
    { id: 8, label: '2º Recursos Humanos' },
    { id: 9, label: '3º Recursos Humanos' },
    { id: 10, label: '1º Administração  ' },
    { id: 11, label: '2º Administração  ' },
    { id: 12, label: '3º Administração  ' },
  ];
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(prevShow => !prevShow); 
  }

  const [faseForm1, setFaseForm1] = useState("");
  const [faseForm2, setFaseForm2] = useState("");
  const [faseForm3, setFaseForm3] = useState("");

  const handleForm1Submit = (e) => {
    e.preventDefault();
    const target = e.target;
    const atv1 = target.atv1.value;
    const atv2 = target.atv2.value;
    const atv3 = target.atv3.value;
    const fase = target.fasesForm1.value;
    const dia = target.dia1Form1.value;
    console.log("formulario 1"+atv1,atv2,atv3,fase,dia)
    
    setTimeout(() => {
      setModalOpen(true);
    }, 4000);
  };

  const handleForm2Submit = (e) => {
    e.preventDefault();
    const target = e.target;
    const atv1 = target.atv1.value;
    const atv2 = target.atv2.value;
    const atv3 = target.atv3.value;
    const fase = target.fasesForm2.value;
    const dia = target.dia2Form2.value;
    console.log("formulario 2"+atv1,atv2,atv3,fase,dia)

    setTimeout(() => {
      setModalOpen(true);
    }, 4000);
  };

  const handleForm3Submit = (e) => {
    e.preventDefault();
    const target = e.target;
    const atv1 = target.atv1.value;
    const atv2 = target.atv2.value;
    const atv3 = target.atv3.value;
    const fase = target.fasesForm3.value;
    const dia = target.dia3Form3.value;
    console.log("formulario 3"+atv1,atv2,atv3,fase,dia)


    setTimeout(() => {
      setModalOpen(true);
    }, 4000);
  };


 
  const [valueForm1, setValueForm1] = useState('');
  const [suggestionsForm1, setSuggestionsForm1] = useState([]);

  const [valueForm2, setValueForm2] = useState('');
  const [suggestionsForm2, setSuggestionsForm2] = useState([]);

  const [valueForm3, setValueForm3] = useState('');
  const [suggestionsForm3, setSuggestionsForm3] = useState([]);

  const atvItems = [
    { id: 1, label: 'quadra' },
    { id: 2, label: 'ping pong' },
    { id: 3, label: 'pembolim' },
    {id:4, label:'xadrez'}
  ];

  

  const handleSerieForm1 = (e) => {
    const query = e.target.value;
    setValueForm1(query);

    if (query.length > 0) {
      const filteredItems = items.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestionsForm1(filteredItems);
    } else {
      setSuggestionsForm1([]);
    }
  };
  const handleSelectForm1 = (item) => {
    setValueForm1(item.label);
    setSuggestionsForm1([]);
  };

  const handleSerieForm2 = (e) => {
    const query = e.target.value;
    setValueForm2(query);

    if (query.length > 0) {
      const filteredItems = items.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestionsForm2(filteredItems);
    } else {
      setSuggestionsForm2([]);
    }
  };
  const handleSelectForm2 = (item) => {
    setValueForm2(item.label);
    setSuggestionsForm2([]);
  };

  const handleSerieForm3 = (e) => {
    const query = e.target.value;
    setValueForm3(query);

    if (query.length > 0) {
      const filteredItems = items.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestionsForm3(filteredItems);
    } else {
      setSuggestionsForm3([]);
    }
  };
  const handleSelectForm3 = (item) => {
    setValueForm3(item.label);
    setSuggestionsForm3([]);
  };

 
  function handleOpcaoFaseForm1(fase) {
    if (fase == 1) {
      setFaseForm1(1)
    }else if(fase == 2){
      setFaseForm1(2)
    }

    setShow(!show)
  }

  function handleOpcaoFaseForm2(fase) {
    if (fase == 1) {
      setFaseForm2(1)
    }else if(fase == 2){
      setFaseForm2(2)
    }
    setShow(!show)
  }

  function handleOpcaoFaseForm3(fase) {
    if (fase == 1) {
      setFaseForm3(1)
    }else if(fase == 2){
      setFaseForm3(2)
    }
    setShow(!show)
  }

  return (
    <>
      <div className='sm:ml-[5%] flex flex-col gap-8 '>
        <Link href='/cadastros'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
        </Link>
        <h1 className='text-2xl font-medium'>Atividades </h1>
      </div>

      <div className='gap-4 flex justify-center border border-red-500 w-1/2 mx-auto text-wrap'>
        {retornoApi.map((cursosEtec) => (
          <div key={cursosEtec.id} onClick={() => handleShowForm(cursosEtec)} className='border-[3px] border-blue-500 text-blue-500 pt-2 pb-2 pl-4 pr-4 rounded-xl font-semibold'>
             {cursosEtec.curso}
           </div>
        ))}
      </div>
      {showForm && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 "></div>
          <ContainerCampeonatoQuadra alert={'Caso deseje editar algo, aperte do campo desejado e edite'} classe={'sm:m-auto -top-24 fixed inset-0 bg-white flex items-center justify-center z-50 p-4'}>
            <Link href='/cadastros/novos' className='absolute left-4 top-3'>
               <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
            </Link>
            <div className="max-w-[500px] flex gap-3 justify-evenly md:gap-20 mx-auto mb-4 border-b-4 border-b-[#DADADA] relative">
              <div
                onClick={() => setMoveBar("28")}
                className={ `sm:font-semibold text-xl flex items-center gap-2  cursor-pointer ${moveBar === "28" ? "text-[#005261]" : "text-[#DADADA]"}`}
              >
                <img src="../images/home-icon.svg" alt=""  className='sm:block hidden'/>
                28 Agos
              </div>
              <div
                onClick={() => setMoveBar("29")}
                className={`sm:font-semibold ml-2 text-xl flex cursor-pointer ${moveBar === "29" ? "text-[#005261]" : "text-[#DADADA]"}`}
              >
                29 Agos
              </div>
              <div
                onClick={() => setMoveBar("30")}
                className={`sm:font-semibold text-xl cursor-pointer ${moveBar === "30" ? "text-[#005261]" : "text-[#DADADA]"}`}
              >
              30 Agos
              </div>
              <div
                className={`hidden sm:block h-[4px] w-[100px] md:w-[124px] bg-[#005261] ${transition ? "duration-1000 delay-700" : ""} 
                  ${moveBar === "28" ? "left-0" : ""} 
                  ${moveBar === "29" ? "md:left-[190px] left-30" : ""} 
                  ${moveBar === "30" ? "md:left-[380px]" : ""} 
                  absolute -bottom-1 font-bold transition-all`}
              ></div>
          </div>

           {moveBar === "28" && (
            <>
             
              <div className='flex flex-col w-3/4 sm:h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
                <div className='flex text-sm text-[#666666] pt-1'>
                  <p className='flex-1'>Tipo de cadastro</p>
                  <Icon icon="iconamoon:arrow-down-2-duotone" width={30} style={{ color: "#005261" }} />
                </div>
                <p className='text-[#005261] font-semibold'>Atividades</p>
              </div>
              <form onSubmit={(e) => handleForm1Submit(e)} className="space-y-8 mt-10 w-3/4 flex items-center flex-col">
              <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                Fases
                <input
                  type="text"
                  name="fasesForm1"
                  onClick={handleShow}
                  className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg"
                  value={`${faseForm1} º fase`}
                  readOnly
                />
              </label>
              
              <div className={`w-full bg-[#E6EFF0] rounded-3xl overflow-hidden transition-all duration-500 ${show ? 'block max-h-[400px] duration-300 p-6' : 'hidden max-h-0 p-0'}`}>
                <ul className="space-y-4">
                  <li className="hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer" onClick={() => handleOpcaoFaseForm1(1)}>fase 1</li>
                  <li className="hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer" onClick={() => handleOpcaoFaseForm1(2)}>fase 2</li>
                </ul>
              </div>
              
              <label style={{ padding: '20px' }} className="flex flex-col w-full px-9 rounded-2xl bg-[#E6EFF0]">
                Série
                <input
                  type="text"
                  value={cursoEtec}
                  className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full"
                  onChange={(e) => handleSerieForm1(e)}
                  style={{ padding: '10px' }}
                  placeholder="Digite aqui..."
                />
              </label>
              
              <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                Atividade 1
                <input
                  type="text"
                  name="atv1"
                  value={form1_Atv1_Dia1}
                  className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full"
                  style={{ padding: '10px'}}
                  placeholder="Digite Aqui..."
                />
              </label>
              
              <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                Atividade 2
                <input
                  type="text"
                  name="atv2"
                  value={form1_Atv2_Dia2}
                  className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full"
                  style={{ padding: '10px'}}
                  placeholder="Digite Aqui..."
                />
              </label>
              
              <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                Atividade 3
                <input
                  type="text"
                  name="atv3"
                  value={form1_Atv3_Dia3}
                  className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-ful"
                  style={{ padding: '10px'}}
                  placeholder="Digite Aqui..."
                />
              </label>
              
              <div className="flex sm:flex-row justify-evenly w-full">
                <button type="submit" className="sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4">Cadastrar</button>
                <button onClick={() => setShowForm(!showForm)} type="button" className="sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4">Cancelar</button>
              </div>
              
              <input type="text" name="dia1Form1" className="hidden" value={"28"} />
            </form>
            </>
          )}
          {moveBar == "29" && (
            <>
              <form onSubmit={(e) => handleForm2Submit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
                  
                  <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                     Fases
                    <input type="text" name="fasesForm2" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'  onClick={handleShow} value={`${faseForm2} º fase`} />
                  </label>
                  <div className={`w-full bg-[#E6EFF0] rounded-3xl overflow-hidden transition-all duration-500 ${show ? 'block max-h-[400px] duration-300 p-6' : 'hidden max-h-0 p-0'}`}>
                      <ul className='space-y-4'>
                        <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer' onClick={(e) => handleOpcaoFaseForm2(1)}>fase 1</li>
                        <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer'onClick={(e) => handleOpcaoFaseForm2(2)}>fase 2</li>
                      </ul>
                   </div>
                   
                <label style={{ padding: '20px' }} className='flex flex-col w-full px-9  rounded-2xl bg-[#E6EFF0]'>
                  Série
                  <input
                    type="text"
                    value={cursoEtec}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    onChange={(e) => handleSerieForm2(e)}
                    style={{ padding: '10px' }}
                    placeholder="Digite aqui..."
                  />
                </label>
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                   Atividade 1
                  <input
                    type="text"
                    name="atv1"
                    value={form2_Atv1_Dia1}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />
                </label>
                
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Atividade 2
                  <input
                    type="text"
                    name="atv2"
                    value={form2_Atv1_Dia1}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />
                </label>   
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Atividade 3
                  <input
                    type="text"
                    name="atv3"
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />
                  
                </label>
                
                <div className='flex sm:flex-row justify-evenly w-full'>
                    <button type='submit' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
                    <button onClick={() => setShowForm(!showForm)} type='button' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                      cancelar
                    </button>
                </div>
                <input type="text" name="dia2Form2" className='hidden' value={"29"} />
              </form>
            </>
          )}
          {
            moveBar == "30" && (
              <>
                   <form onSubmit={(e) => handleForm3Submit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
                  <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                      Fases
                    <input type="text" name="fasesForm3" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'  onClick={handleShow} value={`${faseForm3} º fase`} />
                  </label>
                  <div className={`w-full bg-[#E6EFF0] rounded-3xl overflow-hidden transition-all duration-500 ${show ? 'block max-h-[400px] duration-300 p-6' : 'hidden max-h-0 p-0'}`}>
                      <ul className='space-y-4'>
                        <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer' onClick={(e) => handleOpcaoFaseForm3(1)}>fase 1</li>
                        <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer'onClick={(e) => handleOpcaoFaseForm3(2)}>fase 2</li>
                      </ul>
                   </div>
               <label style={{ padding: '20px' }} className='flex flex-col w-full px-9  rounded-2xl bg-[#E6EFF0]'>
                  Série
                  <input
                    type="text"
                    value={cursoEtec}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    onChange={(e) => handleSerieForm3(e)}
                    style={{ padding: '10px'}}
                    placeholder="Digite aqui ..."
                  />
                </label>
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                   Atividade 1
                  <input
                    type="text"
                    name="atv1"
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />
                  
                </label>
                
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Atividade 2
                  <input
                    type="text"
                    name="atv2"
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />           
                </label>
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Atividade 3
                  <input
                    type="text"
                    name="atv3"
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />
                 
                </label>
                <div className='flex sm:flex-row justify-evenly w-full'>
                    <button type='submit' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
                    <button onClick={() => setShowForm(!showForm)} type='button' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                      cancelar
                    </button>
                </div>
                <input type="text" name="dia3Form3" className='hidden' value={"30"} />
              </form>
              </>
            )
          }
          </ContainerCampeonatoQuadra>
        </>
      )}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <Modal closeModal={closeModal} texto='Essa atividade foi editada com sucesso.' />
        </>
      )}
    </>
  );
}


         {/* <form onSubmit={handleFormSubmit} className='space-y-8 mt-10 w-3/4 flex items-center flex-col bg-white'>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0] '>
                Fases
                <input type="text" name="fases" value={fases} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Série
                <input type="date" name="dia1" value={dia1} onChange={(e) => setDia1(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                Atividade 1 
                <input type="date" name="dia2" value={dia2} onChange={(e) => setDia2(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
              Atividade 2 
                <input type="date" name="dia3" value={dia3} onChange={(e) => setDia3(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
              Atividade 3
                <input type="date" name="dia3" value={dia3} onChange={(e) => setDia3(e.target.value)} className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
              </label>
              <div className='flex sm:flex-row justify-evenly gap-2 w-full mt-20'>
                <button type='submit' className='w-1/2 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Salvar</button>
                <button onClick={handleCloseForm} type='button' className='w-1/2 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cancelar</button>
              </div>
            </form> */}
{/*
  
  
  
  
  
  
  "use client";

import { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import {useRouter} from 'next/navigation'
import ContainerCampeonatoQuadra from '@/components/formCadastro/ContainerCampeonatoQuadra'
import Modal from '@/components/formCadastro/modal'

export default function Quadra() {
  const [moveBar, setMoveBar] = useState("28");
  const [transition, setTransition] = useState(false); // Estado para controlar a transição

  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter(); // Get the router object for navigation

      
  const handleBackPageNovos = () => {
    router.push('/cadastros/novos')
  }
 
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const items = [
    { id: 1, label: '1º Informatica' },
    { id: 2, label: '2º Informatica' },
    { id: 3, label: '3º Informatica' },
    { id: 4, label: '1º Contabilidade ' },
    { id: 5, label: '2º Contabilidade' },
    { id: 6, label: '3º Contabilidade' },
    { id: 7, label: '1º Recursos Humanos  ' },
    { id: 8, label: '2º Recursos Humanos' },
    { id: 9, label: '3º Recursos Humanos' },
    { id: 10, label: '1º Administração  ' },
    { id: 11, label: '2º Administração  ' },
    { id: 12, label: '3º Administração  ' },
  ];
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(prevShow => !prevShow); 
  }

  const [faseForm1, setFaseForm1] = useState("");
  const [faseForm2, setFaseForm2] = useState("");
  const [faseForm3, setFaseForm3] = useState("");

  const handleForm1Submit = (e) => {
    e.preventDefault();
    const target = e.target;
    const atv1 = target.atv1.value;
    const atv2 = target.atv2.value;
    const atv3 = target.atv3.value;
    const fase = target.fasesForm1.value;
    const dia = target.dia1Form1.value;
    console.log("formulario 1"+atv1,atv2,atv3,fase,dia)
    
    setTimeout(() => {
      setModalOpen(true);
    }, 4000);
  };

  const handleForm2Submit = (e) => {
    e.preventDefault();
    const target = e.target;
    const atv1 = target.atv1.value;
    const atv2 = target.atv2.value;
    const atv3 = target.atv3.value;
    const fase = target.fasesForm2.value;
    const dia = target.dia2Form2.value;
    console.log("formulario 2"+atv1,atv2,atv3,fase,dia)

    setTimeout(() => {
      setModalOpen(true);
    }, 4000);
  };

  const handleForm3Submit = (e) => {
    e.preventDefault();
    const target = e.target;
    const atv1 = target.atv1.value;
    const atv2 = target.atv2.value;
    const atv3 = target.atv3.value;
    const fase = target.fasesForm3.value;
    const dia = target.dia3Form3.value;
    console.log("formulario 3"+atv1,atv2,atv3,fase,dia)


    setTimeout(() => {
      setModalOpen(true);
    }, 4000);
  };


  const closeModal = () => {
    setModalOpen(false);
  };
  const [valueForm1, setValueForm1] = useState('');
  const [suggestionsForm1, setSuggestionsForm1] = useState([]);

  const [valueForm2, setValueForm2] = useState('');
  const [suggestionsForm2, setSuggestionsForm2] = useState([]);

  const [valueForm3, setValueForm3] = useState('');
  const [suggestionsForm3, setSuggestionsForm3] = useState([]);

  const atvItems = [
    { id: 1, label: 'quadra' },
    { id: 2, label: 'ping pong' },
    { id: 3, label: 'pembolim' },
    {id:4, label:'xadrez'}
  ];

  

  const handleSerieForm1 = (e) => {
    const query = e.target.value;
    setValueForm1(query);

    if (query.length > 0) {
      const filteredItems = items.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestionsForm1(filteredItems);
    } else {
      setSuggestionsForm1([]);
    }
  };
  const handleSelectForm1 = (item) => {
    setValueForm1(item.label);
    setSuggestionsForm1([]);
  };

  const handleSerieForm2 = (e) => {
    const query = e.target.value;
    setValueForm2(query);

    if (query.length > 0) {
      const filteredItems = items.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestionsForm2(filteredItems);
    } else {
      setSuggestionsForm2([]);
    }
  };
  const handleSelectForm2 = (item) => {
    setValueForm2(item.label);
    setSuggestionsForm2([]);
  };

  const handleSerieForm3 = (e) => {
    const query = e.target.value;
    setValueForm3(query);

    if (query.length > 0) {
      const filteredItems = items.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestionsForm3(filteredItems);
    } else {
      setSuggestionsForm3([]);
    }
  };
  const handleSelectForm3 = (item) => {
    setValueForm3(item.label);
    setSuggestionsForm3([]);
  };

 
  function handleOpcaoFaseForm1(fase) {
    if (fase == 1) {
      setFaseForm1(1)
    }else if(fase == 2){
      setFaseForm1(2)
    }

    setShow(!show)
  }

  function handleOpcaoFaseForm2(fase) {
    if (fase == 1) {
      setFaseForm2(1)
    }else if(fase == 2){
      setFaseForm2(2)
    }
    setShow(!show)
  }

  function handleOpcaoFaseForm3(fase) {
    if (fase == 1) {
      setFaseForm3(1)
    }else if(fase == 2){
      setFaseForm3(2)
    }
    setShow(!show)
  }


  return (
    <>
      <div className='sm:ml-[5%] flex flex-col gap-4'>
        <Link href='/cadastros'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
        </Link>
        <h1 className='text-2xl font-medium'>Novo Cadastro</h1>
      </div>
      
         
          <div className="max-w-[500px] flex gap-3 justify-evenly md:gap-20 mx-auto mb-4 border-b-4 border-b-[#DADADA] relative">
            <div
              onClick={() => setMoveBar("28")}
              className={ `sm:font-semibold text-xl flex items-center gap-2  cursor-pointer ${moveBar === "28" ? "text-[#005261]" : "text-[#DADADA]"}`}
            >
              <img src="../images/home-icon.svg" alt=""  className='sm:block hidden'/>
              28 Agos
            </div>
            <div
              onClick={() => setMoveBar("29")}
              className={`sm:font-semibold ml-2 text-xl flex cursor-pointer ${moveBar === "29" ? "text-[#005261]" : "text-[#DADADA]"}`}
            >
              29 Agos
            </div>
            <div
              onClick={() => setMoveBar("30")}
              className={`sm:font-semibold text-xl cursor-pointer ${moveBar === "30" ? "text-[#005261]" : "text-[#DADADA]"}`}
            >
             30 Agos
            </div>
            <div
              className={`hidden sm:block h-[4px] w-[100px] md:w-[124px] bg-[#005261] ${transition ? "duration-1000 delay-700" : ""} 
                ${moveBar === "28" ? "left-0" : ""} 
                ${moveBar === "29" ? "md:left-[190px] left-30" : ""} 
                ${moveBar === "30" ? "md:left-[380px]" : ""} 
                absolute -bottom-1 font-bold transition-all`}
            ></div>
          </div>

         {moveBar === "28" && (
          
          <ContainerCampeonatoQuadra>
              <Link href='/cadastros/novos' className='absolute left-4 top-3'>
                <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
              </Link>
              <div className='flex flex-col w-3/4 sm:h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
                <div className='flex text-sm text-[#666666] pt-1'>
                  <p className='flex-1'>Tipo de cadastro</p>
                  <Icon icon="iconamoon:arrow-down-2-duotone" width={30} style={{ color: "#005261" }} />
                </div>
                <p className='text-[#005261] font-semibold'>Atividades</p>
              </div>
              <form onSubmit={(e) => handleForm1Submit(e)} className="space-y-8 mt-10 w-3/4 flex items-center flex-col">
              <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                Fases
                <input
                  type="text"
                  name="fasesForm1"
                  onClick={handleShow}
                  className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg"
                  value={`${faseForm1} º fase`}
                  readOnly
                />
              </label>
              
              <div className={`w-full bg-[#E6EFF0] rounded-3xl overflow-hidden transition-all duration-500 ${show ? 'block max-h-[400px] duration-300 p-6' : 'hidden max-h-0 p-0'}`}>
                <ul className="space-y-4">
                  <li className="hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer" onClick={() => handleOpcaoFaseForm1(1)}>fase 1</li>
                  <li className="hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer" onClick={() => handleOpcaoFaseForm1(2)}>fase 2</li>
                </ul>
              </div>
              
              <label style={{ padding: '20px' }} className="flex flex-col w-full px-9 rounded-2xl bg-[#E6EFF0]">
                Série
                <input
                  type="text"
                  value={valueForm1}
                  className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full"
                  onChange={(e) => handleSerieForm1(e)}
                  style={{ padding: '10px' }}
                  placeholder="Digite aqui..."
                />
                {suggestionsForm1.length > 0 && (
                  <ul style={{ border: '1px solid #ccc', marginTop: '5px', width: '300px', listStyle: 'none', padding: 0 }}>
                    {suggestionsForm1.map(item => (
                      <li
                        key={item.id}
                        onClick={() => handleSelectForm1(item)}
                        className="bg-[#fff] text-[#005261] font-semibold text-lg"
                        style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #ccc' }}
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>
                )}
              </label>
              
              <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                Atividade 1
                <input
                  type="text"
                  name="atv1"
                  className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full"
                  style={{ padding: '10px'}}
                  placeholder="Digite Aqui..."
                />
              </label>
              
              <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                Atividade 2
                <input
                  type="text"
                  name="atv2"
                  className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full"
                  style={{ padding: '10px'}}
                  placeholder="Digite Aqui..."
                />
              </label>
              
              <label className="flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]">
                Atividade 3
                <input
                  type="text"
                  name="atv3"
                  className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-ful"
                  style={{ padding: '10px'}}
                  placeholder="Digite Aqui..."
                />
              </label>
              
              <div className="flex sm:flex-row justify-evenly w-full">
                <button type="submit" className="sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4">Cadastrar</button>
                <button onClick={() => handleBackPageNovos()} type="button" className="sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4">Cancelar</button>
              </div>
              
              <input type="text" name="dia1Form1" className="hidden" value={"28"} />
            </form>

           </ContainerCampeonatoQuadra>
          )
         }

         {moveBar === "29" && (
                      
          <ContainerCampeonatoQuadra>
              <Link href='/cadastros/novos' className='absolute left-4 top-3'>
                <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
              </Link>
              <div className='flex flex-col w-3/4 sm:h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
                <div className='flex text-sm text-[#666666] pt-1'>
                  <p className='flex-1'>Tipo de cadastro</p>
                  <Icon icon="iconamoon:arrow-down-2-duotone" width={30} style={{ color: "#005261" }} />
                </div>
                <p className='text-[#005261] font-semibold'>Atividades</p>
              </div>
              <form onSubmit={(e) => handleForm2Submit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
                  
                  <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                     Fases
                    <input type="text" name="fasesForm2" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'  onClick={handleShow} value={`${faseForm2} º fase`} />
                  </label>
                  <div className={`w-full bg-[#E6EFF0] rounded-3xl overflow-hidden transition-all duration-500 ${show ? 'block max-h-[400px] duration-300 p-6' : 'hidden max-h-0 p-0'}`}>
                      <ul className='space-y-4'>
                        <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer' onClick={(e) => handleOpcaoFaseForm2(1)}>fase 1</li>
                        <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer'onClick={(e) => handleOpcaoFaseForm2(2)}>fase 2</li>
                      </ul>
                   </div>
                   
                <label style={{ padding: '20px' }} className='flex flex-col w-full px-9  rounded-2xl bg-[#E6EFF0]'>
                  Série
                  <input
                    type="text"
                    value={valueForm2}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    onChange={(e) => handleSerieForm2(e)}
                    style={{ padding: '10px' }}
                    placeholder="Digite aqui..."
                  />
                  {suggestionsForm2.length > 0 && (
                    <select
                      size={suggestionsForm2.length}
                      style={{ border: '1px solid #ccc', marginTop: '5px', width: '300px' }}
                      onChange={(e) => handleSelectForm2(suggestionsForm2[e.target.selectedIndex])}
                    
                    >
                      {suggestionsForm2.map(item => (
                        <option
                          key={item.id}
                          value={item.label}
                          className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg"
                          style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#fff' }}

                        >
                          {item.label}
                        </option>
                      ))}
                    </select>
                  )}
                </label>
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                   Atividade 1
                  <input
                    type="text"
                    name="atv1"
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />
                </label>
                
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Atividade 2
                  <input
                    type="text"
                    name="atv2"
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />
                </label>   
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Atividade 3
                  <input
                    type="text"
                    name="atv3"
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />
                  
                </label>
                
                <div className='flex sm:flex-row justify-evenly w-full'>
                    <button type='submit' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
                    <button onClick={() => handleBackPageNovos()} type='button' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                      cancelar
                    </button>
                </div>
                <input type="text" name="dia2Form2" className='hidden' value={"29"} />
              </form>
           </ContainerCampeonatoQuadra>
          )
         }
      
          {moveBar === "30" && (
                      
          <ContainerCampeonatoQuadra>
              <Link href='/cadastros/novos' className='absolute left-4 top-3'>
                <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={40} />
              </Link>
              <div className='flex flex-col w-3/4 sm:h-[70px] px-6 pt-2 text-lg rounded-2xl bg-[#E6EFF0]'>
                <div className='flex text-sm text-[#666666] pt-1'>
                  <p className='flex-1'>Tipo de cadastro</p>
                  <Icon icon="iconamoon:arrow-down-2-duotone" width={30} style={{ color: "#005261" }} />
                </div>
                <p className='text-[#005261] font-semibold'>Atividades</p>
              </div>
              <form onSubmit={(e) => handleForm3Submit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
                  <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                      Fases
                    <input type="text" name="fasesForm3" id="" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'  onClick={handleShow} value={`${faseForm3} º fase`} />
                  </label>
                  <div className={`w-full bg-[#E6EFF0] rounded-3xl overflow-hidden transition-all duration-500 ${show ? 'block max-h-[400px] duration-300 p-6' : 'hidden max-h-0 p-0'}`}>
                      <ul className='space-y-4'>
                        <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer' onClick={(e) => handleOpcaoFaseForm3(1)}>fase 1</li>
                        <li className='hover:bg-[#005261] rounded-xl p-3 hover:text-white hover:cursor-pointer'onClick={(e) => handleOpcaoFaseForm3(2)}>fase 2</li>
                      </ul>
                   </div>
               <label style={{ padding: '20px' }} className='flex flex-col w-full px-9  rounded-2xl bg-[#E6EFF0]'>
                  Série
                  <input
                    type="text"
                    value={valueForm3}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    onChange={(e) => handleSerieForm3(e)}
                    style={{ padding: '10px'}}
                    placeholder="Digite aqui ..."
                  />
                  {suggestionsForm3.length > 0 && (
                    <select
                      size={suggestionsForm3.length}
                      style={{ border: '1px solid #ccc', marginTop: '5px', width: '300px' }}
                      onChange={(e) => handleSelectForm3(suggestionsForm3[e.target.selectedIndex])}
                    
                    >
                      {suggestionsForm3.map(item => (
                        <option
                          key={item.id}
                          value={item.label}
                          className="bg-[#E6EFF0] text-[#005261] font-semibold text-lg"
                          style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#fff' }}

                        >
                          {item.label}
                        </option>
                      ))}
                    </select>
                  )}
                </label>
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                   Atividade 1
                  <input
                    type="text"
                    name="atv1"
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />
                  
                </label>
                
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Atividade 2
                  <input
                    type="text"
                    name="atv2"
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />           
                </label>
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Atividade 3
                  <input
                    type="text"
                    name="atv3"
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg w-full'
                    style={{ padding: '10px' }}
                    placeholder="Digite Aqui..."
                  />
                 
                </label>
                <div className='flex sm:flex-row justify-evenly w-full'>
                    <button type='submit' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
                    <button onClick={() => handleBackPageNovos()} type='button' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                      cancelar
                    </button>
                </div>
                <input type="text" name="dia3Form3" className='hidden' value={"30"} />
              </form>
           </ContainerCampeonatoQuadra>
          )
         }
                        
        {isModalOpen && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>

            <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="mx-auto  w-[290px] h-[220] sm:w-[390px] sm:h-[330px] bg-white p-6 rounded-lg shadow-lg relative">
                    <img src="../../../images/sucess-form.png" className='absolute -top-[43px] left-[53px] sm:-top-[43px] sm:left-20 h-[154px] w-[200px] sm:h-[159px] sm:w-[217px]' alt="" />
                    <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={closeModal}>
                    <Link href="/cadastros/novos/atividade">✕</Link>
                    </button>
                    <div className='mt-28 text-center'>
                      <h3 className="font-bold text-2xl">Sucesso!</h3>
                      <p className="py-4 text-2xl">Atividade para turma cadastrado com sucesso.</p>
                    </div>
                  </div>
              </div>
          </>
         )}

    </>
  );
}

  
  
  
  
  
  
  
  
  
  */}