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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const atv1 = target.atv1.value;
    const atv2 = target.atv2.value;
    const atv3 = target.atv3.value;

    setTimeout(() => {
      setModalOpen(true);
    }, 4000);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const [valueAtv1, setValueAtv1] = useState('');
  const [suggestionsAtv1, setSuggestionsAtv1] = useState([]);

  const [valueAtv2, setValueAtv2] = useState('');
  const [suggestionsAtv2, setSuggestionsAtv2] = useState([]);

  const [valueAtv3, setValueAtv3] = useState('');
  const [suggestionsAtv3, setSuggestionsAtv3] = useState([]);

  const atvItems = [
    { id: 1, label: 'quadra' },
    { id: 2, label: 'ping pong' },
    { id: 3, label: 'pembolim' },
    { id: 3, label: 'queimada' },
  ];

  {/*cursos opções */}
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

  const handleChange = (e) => {
    const query = e.target.value;
    setValue(query);

    if (query.length > 0) {
      const filteredItems = items.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredItems);
    } else {
      setSuggestions([]);
    }
  };
  const handleSelect = (item) => {
    setValue(item.label);
    setSuggestions([]);
  };

  const handleChangeAtv1 = (e) => {
    const query = e.target.value;
    setValueAtv1(query);
  
    if (query.length > 0) {
      const filteredItems = atvItems.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestionsAtv1(filteredItems);
    } else {
      setSuggestionsAtv1([]);
    }
  };
  
  const handleSelectAtv1 = (item) => {
    setValueAtv1(item.label);
    setSuggestionsAtv1([]);
  };
  
  const handleChangeAtv2 = (e) => {
    const query = e.target.value;
    setValueAtv2(query);
  
    if (query.length > 0) {
      const filteredItems = atvItems.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestionsAtv2(filteredItems);
    } else {
      setSuggestionsAtv2([]);
    }
  };
  
  const handleSelectAtv2 = (item) => {
    setValueAtv2(item.label);
    setSuggestionsAtv2([]);
  };
  
  const handleChangeAtv3 = (e) => {
    const query = e.target.value;
    setValueAtv3(query);
  
    if (query.length > 0) {
      const filteredItems = atvItems.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestionsAtv3(filteredItems);
    } else {
      setSuggestionsAtv3([]);
    }
  };
  
  const handleSelectAtv3 = (item) => {
    setValueAtv3(item.label);
    setSuggestionsAtv3([]);
  };
  

  return (
    <>
      <div className='sm:ml-[5%] flex flex-col gap-4'>
        <Link href='/cadastros'>
          <Icon icon="solar:arrow-left-linear" style={{ color: "#005261" }} width={30} />
        </Link>
        <h1 className='text-2xl font-medium'>Novo Cadastro</h1>
      </div>
      
         
          <div className="md:w-3/4 flex gap-3 md:gap-20 mx-auto mb-4 border-b-4 border-b-[#DADADA] relative">
            <div
              onClick={() => setMoveBar("28")}
              className={ `sm:font-semibold text-base sm:text-xl flex items-center gap-2  cursor-pointer ${moveBar === "28" ? "text-[#005261]" : "text-[#DADADA]"}`}
            >
              <img src="../images/home-icon.svg" alt=""  className='sm:block hidden'/>
              28 Agos
            </div>
            <div
              onClick={() => setMoveBar("29")}
              className={`sm:font-semibold ml-2 text-base sm:text-xl flex cursor-pointer ${moveBar === "29" ? "text-[#005261]" : "text-[#DADADA]"}`}
            >
              29 Agos
            </div>
            <div
              onClick={() => setMoveBar("30")}
              className={`sm:font-semibold text-base sm:text-xl cursor-pointer ${moveBar === "30" ? "text-[#005261]" : "text-[#DADADA]"}`}
            >
             30 Agos
            </div>
            <div
              className={`hidden sm:block h-[4px] w-[100px] md:w-[124px] bg-[#005261] ${transition ? "duration-1000 delay-700" : ""} 
                ${moveBar === "28" ? "left-0" : ""} 
                ${moveBar === "29" ? "md:left-40 left-30" : ""} 
                ${moveBar === "30" ? "md:left-80" : ""} 
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
              <form onSubmit={(e) => handleFormSubmit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
                
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Fases
                  <input type="text" value={"2 º fase"} name="fases" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui'/>
                </label>
                <label style={{ padding: '20px' }} className='flex flex-col w-full px-9  rounded-2xl bg-[#E6EFF0]'>
                  Série
                  <input
                    type="text"
                    value={value}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'
                    onChange={handleChange}
                    style={{ padding: '10px', width: '300px' }}
                    placeholder="Type to search..."
                  />
                  {suggestions.length > 0 && (
                    <select
                      size={suggestions.length}
                      style={{ border: '1px solid #ccc', marginTop: '5px', width: '300px' }}
                      onChange={(e) => handleSelect(suggestions[e.target.selectedIndex])}
                    
                    >
                      {suggestions.map(item => (
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
                <label style={{ padding: '20px' }} className='flex flex-col w-full px-9  rounded-2xl bg-[#E6EFF0]'>
                  atividade 1 
                  <input
                    type="text"
                    value={valueAtv1}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'
                    onChange={handleChangeAtv1}
                    style={{ padding: '10px', width: '300px' }}
                    placeholder="Type to search..."
                  />
                  {suggestionsAtv1.length > 0 && (
                    <select
                      style={{ border: '1px solid #ccc', marginTop: '5px', width: '300px' }}
                      onChange={(e) => handleSelect(suggestionsAtv1[e.target.selectedIndex])}
                    
                    >
                      {suggestionsAtv1.map(item => (
                        <option
                          key={item.id}
                          value={item.label}
                          className={`bg-white text-[#005261] font-semibold`}
                          style={{ padding: '10px', width: '300px' }}

                        >
                          {item.label}
                        </option>
                      ))}
                    </select>
                  )}
                </label>
                
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Atividade 2
                  <input
                    type="text"
                    value={valueAtv2}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'
                    onChange={handleChangeAtv2}
                    style={{ padding: '10px', width: '300px' }}
                    placeholder="Type to search..."
                  />
                  {suggestionsAtv2.length > 0 && (
                    <select
                      size={suggestionsAtv2.length}
                      style={{ border: '1px solid #ccc', marginTop: '10px', width: '300px' }}
                      onChange={(e) => handleSelectAtv2(suggestionsAtv2[e.target.selectedIndex])}
                    >
                      {suggestionsAtv2.map(item => (
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
                  Atividade 3
                  <input
                    type="text"
                    value={valueAtv3}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'
                    onChange={handleChangeAtv3}
                    style={{ padding: '10px', width: '300px' }}
                    placeholder="Type to search..."
                  />
                  {suggestionsAtv3.length > 0 && (
                    <select
                      size={suggestionsAtv3.length}
                      style={{ border: '1px solid #ccc', marginTop: '5px', width: '300px' }}
                      onChange={(e) => handleSelectAtv3(suggestionsAtv3[e.target.selectedIndex])}
                    >
                      {suggestionsAtv3.map(item => (
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
                
                <div className='flex sm:flex-row justify-evenly w-full'>
                  <button type='submit' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
                  <button onClick={() => handleBackPageNovos()} type='button' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                    cancelar
                  </button>
                </div>''
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
              <form onSubmit={(e) => handleFormSubmit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
                <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Fases
                  <input type="text" value={"$2º fase"} name="fases" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui'/>
                </label>
                <label style={{ padding: '20px' }} className='flex flex-col w-full px-9  rounded-2xl bg-[#E6EFF0]'>
                  Série
                  <input
                    type="text"
                    value={value}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'
                    onChange={handleChange}
                    style={{ padding: '10px', width: '300px' }}
                    placeholder="Type to search..."
                  />
                  {suggestions.length > 0 && (
                    <select
                      size={suggestions.length}
                      style={{ border: '1px solid #ccc', marginTop: '5px', width: '300px' }}
                      onChange={(e) => handleSelect(suggestions[e.target.selectedIndex])}
                    
                    >
                      {suggestions.map(item => (
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
                    value={valueAtv1}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'
                    onChange={handleChangeAtv1}
                    style={{ padding: '10px', width: '300px' }}
                    placeholder="Type to search..."
                  />
                  {suggestionsAtv1.length > 0 && (
                    <select
                      size={suggestionsAtv1.length}
                      style={{ border: '1px solid #ccc', marginTop: '5px', width: '300px' }}
                      onChange={(e) => handleSelectAtv1(suggestionsAtv1[e.target.selectedIndex])}
                    >
                      {suggestionsAtv1.map(item => (
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
                  Atividade 2
                  <input
                    type="text"
                    value={valueAtv2}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'
                    onChange={handleChangeAtv2}
                    style={{ padding: '10px', width: '300px' }}
                    placeholder="Type to search..."
                  />
                  {suggestionsAtv2.length > 0 && (
                    <select
                      size={suggestionsAtv2.length}
                      style={{ border: '1px solid #ccc', marginTop: '5px', width: '300px' }}
                      onChange={(e) => handleSelectAtv2(suggestionsAtv2[e.target.selectedIndex])}
                    >
                      {suggestionsAtv2.map(item => (
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
                  Atividade 3
                  <input
                    type="text"
                    value={valueAtv3}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'
                    onChange={handleChangeAtv2}
                    style={{ padding: '10px', width: '300px' }}
                    placeholder="Type to search..."
                  />
                  {suggestionsAtv3.length > 0 && (
                    <select
                      size={suggestionsAtv3.length}
                      style={{ border: '1px solid #ccc', marginTop: '5px', width: '300px' }}
                      onChange={(e) => handleSelectAtv2(suggestionsAtv3[e.target.selectedIndex])}
                    >
                      {suggestionsAtv3.map(item => (
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
                
                <div className='flex sm:flex-row justify-evenly w-full'>
                    <button type='submit' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
                    <button onClick={() => handleBackPageNovos()} type='button' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                      cancelar
                    </button>
                </div>
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
              <form onSubmit={(e) => handleFormSubmit(e)} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
               <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
                  Fases
                  <input type="text" value={"1 º fase"} name="fases" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' placeholder='digite aqui'/>
                </label>
               <label style={{ padding: '20px' }} className='flex flex-col w-full px-9  rounded-2xl bg-[#E6EFF0]'>
                  Série
                  <input
                    type="text"
                    value={value}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'
                    onChange={handleChange}
                    style={{ padding: '10px', width: '300px' }}
                    placeholder="Type to search..."
                  />
                  {suggestions.length > 0 && (
                    <select
                      size={suggestions.length}
                      style={{ border: '1px solid #ccc', marginTop: '5px', width: '300px' }}
                      onChange={(e) => handleSelect(suggestions[e.target.selectedIndex])}
                    
                    >
                      {suggestions.map(item => (
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
                    value={valueAtv1}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'
                    onChange={handleChangeAtv1}
                    style={{ padding: '10px', width: '300px' }}
                    placeholder="Type to search..."
                  />
                  {suggestionsAtv1.length > 0 && (
                    <select
                      size={suggestionsAtv1.length}
                      style={{ border: '1px solid #ccc', marginTop: '5px', width: '300px' }}
                      onChange={(e) => handleSelectAtv1(suggestionsAtv1[e.target.selectedIndex])}
                    >
                      {suggestionsAtv1.map(item => (
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
                  Atividade 2
                  <input
                    type="text"
                    value={valueAtv2}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'
                    onChange={handleChangeAtv2}
                    style={{ padding: '10px', width: '300px' }}
                    placeholder="Type to search..."
                  />
                  {suggestionsAtv2.length > 0 && (
                    <select
                      size={suggestionsAtv2.length}
                      style={{ border: '1px solid #ccc', marginTop: '5px', width: '300px' }}
                      onChange={(e) => handleSelectAtv2(suggestionsAtv2[e.target.selectedIndex])}
                    >
                      {suggestionsAtv2.map(item => (
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
                  Atividade 3
                  <input
                    type="text"
                    value={valueAtv3}
                    className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg'
                    onChange={handleChangeAtv2}
                    style={{ padding: '10px', width: '300px' }}
                    placeholder="Type to search..."
                  />
                  {suggestionsAtv3.length > 0 && (
                    <select
                      size={suggestionsAtv3.length}
                      style={{ border: '1px solid #ccc', marginTop: '5px', width: '300px' }}
                      onChange={(e) => handleSelectAtv2(suggestionsAtv3[e.target.selectedIndex])}
                    >
                      {suggestionsAtv3.map(item => (
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
                <div className='flex sm:flex-row justify-evenly w-full'>
                    <button type='submit' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
                    <button onClick={() => handleBackPageNovos()} type='button' className='sm:w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
                      cancelar
                    </button>
                </div>
              </form>
           </ContainerCampeonatoQuadra>
          )
         }
                        
        {isModalOpen && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
            <Modal closeModal={closeModal} texto={'Campeonato de quadra cadastrado '}/>
          </>
         )}

    </>
  );
}