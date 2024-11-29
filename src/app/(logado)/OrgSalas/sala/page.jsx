"use client"

import httpClient from "@/service/api"
import { useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import TableData from "@/components/table/table"
import Column from "@/components/table/column"
import Link from "next/link"
import { toast } from "sonner"
import { twMerge } from 'tailwind-merge';
import { Icon } from "@iconify/react"

export default function Sala() {
  const [classroom, setClassroom] = useState({});
  const [championships, setChampionships] = useState([]);
  const [studants, setStudants] = useState([]);
  const [activeTab, setActiveTab] = useState('principal');
  const [userEdit, setUserEdit] = useState({});
  const [salas, setSalas] = useState([]);
  const [roles, setRoles] = useState([]);
  const [atividades, setAtividades] = useState([]);
  const [Campeonatos, setCampeonatos] = useState([]);
  const [campeonato, setCampeonato] = useState("");
  const [oficinas, setOficinas] = useState([]);
  const [isAjudante, setisAjudante] = useState(false);
  const [doacoes, setDoacoes] = useState([]);

  const [alunosDoacao, setAlunosDoacao] = useState([]);
  const [alunosDoacaoCodigo, setAlunosDoacaoCodigo] = useState([]);

  const searchParams = useSearchParams()
  const search = searchParams.get('id')

  const modalRef = useRef(null);
  const modalRef2 = useRef(null);



  const openModal = (item) => {
    if (modalRef.current) {

      modalRef.current.classList.remove("hidden");
      modalRef.current.classList.add("flex");
    }
  };
  const openModal2 = () => {
    if (modalRef.current) {
      modalRef2.current.classList.remove("hidden");
      modalRef2.current.classList.add("flex");
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.add("hidden");
      modalRef.current.classList.remove("flex");
      setisAjudante(false)
    }
  };
  const closeModal2 = () => {
    if (modalRef2.current) {
      modalRef2.current.classList.add("hidden");
      modalRef2.current.classList.remove("flex");
    }
  };
  useEffect(() => {
    handleGetClassRoom();
    handleGetStudants();
    handleGetChampionship();
    handleGetSalas();
    handleObterRoles();
    handleObterAtividades()
    handleObterCampeonato();
    handleObterOficina();
    handleGetDoacoes();
  }, [])


  const handleGetClassRoom = async () => {
    httpClient.get("/Sala/" + search).then((response) => {
      setClassroom(response.data)
    })
  }
  const handleGetChampionship = async () => {
    httpClient.get("/Campeonato").then((response) => {
      setChampionships(response.data)
    })
  }
  const handleGetStudants = async () => {
    httpClient.get("/Usuario/Sala/" + search).then((response) => {
      setStudants(response.data)
    })
  }
  const handleGetDoacoes = async () => {
    httpClient.get("/Doacao/ObterDoacao").then((response) => {
      setDoacoes(response.data)
    })
  }

  // Função para trocar de aba
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  const handleGetUserByRM = (rm) => {
    httpClient.get("Usuario/rm/" + rm).then((response) => {
      setUserEdit(response.data)
      setisAjudante(response.data.oficinacodigo ?? response.data.atividadeCodigo ?? response.data.campeonatoCodigo)
      openModal()
    })
  }

  const handleGetSalas = () => {
    httpClient.get("Sala").then((response) => {
      setSalas(response.data)
    })
  }
  const handleObterRoles = () => {
    httpClient.get("Usuario/ObterRoles").then((response) => {
      setRoles(response.data)
    })
  }
  const handleObterAtividades = () => {
    httpClient.get("Atividade").then((response) => {
      setAtividades(response.data)
    })
  }
  const handleObterCampeonato = () => {
    httpClient.get("Campeonato").then((response) => {
      setCampeonatos(response.data)
    })
  }
  const handleObterOficina = () => {
    httpClient.get("Oficina").then((response) => {
      setOficinas(response.data)
    })
  }


  const handleAtualizarUsuario = () => {
    try {
      const userRequest = {
        nome: userEdit.nome,
        rm: userEdit.rm,
        email: userEdit.email,
        status: userEdit.status,
        senha: userEdit.senha,
        salaCodigo: userEdit.salaCodigo,
        isPadrinho: userEdit.isPadrinho,
        atividadeCodigo: userEdit.atividadeCodigo || null,
        campeonatoCodigo: userEdit.campeonatocodigo || null,
        oficinacodigo: userEdit.oficinacodigo || null
      };

      httpClient.put("Usuario/" + userEdit.codigo, userRequest).then((response) => {
        handleGetStudants();
        toast.success("Jogador atualizado com sucesso!")
      });

      closeModal()
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  const appendUserByRM = async (doacao, rm) => {
    let usuario;

    try {
      const { data } = await httpClient.get("Usuario/rm/" + rm)
      usuario = data;
    } catch (e) {
      toast("Erro ao adicionar usuário!");
      return;
    }

    if (usuario.status === 400) return toast("Erro ao adicionar usuário!");

    try {
      await httpClient.post("Doacao/FazerDoacao", { usuarioCodigo: usuario.codigo, doacaoCodigo: doacao });
      setAlunosDoacao([...alunosDoacao, usuario]);
    } catch (e) {
    }
  };

  const handleObterUsuarios = async (codigo) => {
    const { data } = await httpClient.get("Doacao/ObterDoacaoPorCodigo/" + codigo);
    const ret = [];
    const cod = [];

    for (const doacao of data.doacaoAluno) {
      cod.push({ usuario: doacao.usuario.codigo, codigo: doacao.codigo });
      ret.push(doacao.usuario);
    }

    setAlunosDoacaoCodigo(cod);
    setAlunosDoacao(ret);
  };

  const removerUsuarioDoacao = async (usuario) => {
    const index = alunosDoacaoCodigo.findIndex((x) => x.usuario === usuario.codigo);
    
    if (index !== -1) {
        const codigo = alunosDoacaoCodigo[index].codigo;
        await httpClient.delete(`Doacao/DeletarDoacaoAluno/${codigo}`);

        // Remove only the first match
        setAlunosDoacao(alunosDoacao.filter((_, i) => i !== index));
    }
  };



  return (
    <div>
      <div
        id="default-modal"
        ref={modalRef}
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">

              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <div>
                <div className="relative z-0 my-5">
                  <input
                    type="text"
                    value={userEdit?.nome || ''}
                    onChange={(e) => setUserEdit({ ...userEdit, nome: e.target.value })}
                    name="nome"
                    id="nome"
                    className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer"
                    placeholder=" "
                  />
                  <label htmlFor="nome" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Nome
                  </label>
                </div>

                <div className="relative z-0 my-5">
                  <input
                    type="text"
                    value={userEdit?.rm || ''}
                    onChange={(e) => setUserEdit({ ...userEdit, rm: e.target.value })}
                    name="rm"
                    id="rm"
                    className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer"
                    placeholder=" "
                  />
                  <label htmlFor="rm" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    RM
                  </label>
                </div>

                <div className="relative z-0 my-5">
                  <input
                    type="email"
                    value={userEdit?.email || ''}
                    onChange={(e) => setUserEdit({ ...userEdit, email: e.target.value })}
                    name="email"
                    id="email"
                    className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email
                  </label>
                </div>
                <div className="relative z-0 my-5">
                  <input
                    type="text"
                    value={userEdit?.senha || ''}
                    onChange={(e) => setUserEdit({ ...userEdit, senha: e.target.value })}
                    name="senha"
                    id="senha"
                    className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Senha
                  </label>
                </div>

                <div className="relative z-0 my-5">
                  <select onChange={(e) => setUserEdit({ ...userEdit, salaCodigo: e.target.value })} value={userEdit?.salaCodigo || ''} className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" ">
                    {salas.map((sala, index) => {
                      return (<option key={index} value={sala.codigo}>{sala.serie}° {sala.descricao}</option>)
                    })}
                  </select>
                  <label htmlFor="salaCodigo" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Sala
                  </label>
                </div>

                <div className="relative z-0 my-5">
                  <select onChange={(e) => setUserEdit({ ...userEdit, status: e.target.value })} value={userEdit?.status || ''} className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" ">
                    {roles.map((role, index) => {
                      return (<option key={index} value={role.codigo}>{role.descricao}</option>)
                    })}
                  </select>
                  <label htmlFor="status" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Status
                  </label>
                </div>
              </div>
            </div>

            <div className="relative z-0 my-5">
              <label className="flex items-center space-x-3">
                <span className="text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca]">Tornar Padrinho?</span>
                <input
                  type="checkbox"
                  checked={userEdit.isPadrinho}
                  onChange={(e) => { setUserEdit({ ...userEdit, isPadrinho: e.target.checked }) }}
                  className="form-checkbox h-5 w-5 text-[#b7b7b7] focus:ring-0"
                />
              </label>
            </div>
            <div className="relative z-0 my-5">
              <label className="flex items-center space-x-3">
                <span className="text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca]">Tornar Ajudante?</span>
                <input
                  type="checkbox"
                  checked={isAjudante ?? userEdit.oficinacodigo ?? userEdit.atividadeCodigo ?? userEdit.campeonatoCodigo}
                  onChange={(e) => { setisAjudante(e.target.checked) }}
                  className="form-checkbox h-5 w-5 text-[#b7b7b7] focus:ring-0"
                />
              </label>
              {isAjudante ?? userEdit.oficinacodigo ?? userEdit.atividadeCodigo ?? userEdit.campeonatoCodigo ?
                <div>
                  <span className="text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca]">Selecione uma estação?</span>
                  <div className="relative z-0 my-5">
                    <select onChange={(e) => setUserEdit({ ...userEdit, atividadeCodigo: e.target.value, campeonatocodigo: null, oficinacodigo: null })} value={userEdit?.atividadeCodigo || ''} className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" ">
                      <option value={""}>Nenhuma Atividade</option>
                      {atividades.toSorted((a, b) => a.calendarioCodigo - b.calendarioCodigo).map((atividade, index) => {
                        return (<option key={index} value={atividade.codigo}>{atividade.descricao} - {atividade.calendarioCodigo}° dia</option>)
                      })}
                    </select>
                    <label htmlFor="status" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Atividades
                    </label>
                  </div><div className="relative z-0 my-5">
                    <select onChange={(e) => setUserEdit({ ...userEdit, campeonatoCodigo: e.target.value, oficinacodigo: null, atividadeCodigo: null })} value={userEdit?.campeonatoCodigo || ''} className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" ">
                      <option value={""}>Nenhum Campeonato</option>
                      {Campeonatos.map((campeonato, index) => {
                        return (<option key={index} value={campeonato.codigo}>{campeonato.descricao}</option>)
                      })}
                    </select>
                    <label htmlFor="status" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Campeonatos
                    </label>
                  </div><div className="relative z-0 my-5">
                    <select onChange={(e) => setUserEdit({ ...userEdit, oficinacodigo: e.target.value, atividadeCodigo: null, campeonatocodigo: null })} value={userEdit?.oficinacodigo || ''} className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" ">
                      <option value={""}>Nenhuma Oficina</option>
                      {oficinas.map((oficina, index) => {
                        return (<option key={index} value={oficina.codigo}>{oficina.descricao}</option>)
                      })}
                    </select>
                    <label htmlFor="status" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Status
                    </label>
                  </div>
                </div>
                :
                <></>
              }
            </div>

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={handleAtualizarUsuario}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Atualizar
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={closeModal}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <h1 className="text-[32px] font-[500]">{classroom.descricao}</h1>
            <span className="flex flex-col items-center gap-1" onClick={() => { window.history.back() }}>
                <img className={`h-10 w-10 `} src="/images/voltarpagina.svg" />
                <p className={`text-sm text-[#005261] font-semibold sm-w-full`}>página anterior</p>
             </span>
       </div>
      <p className="text-[#666666]">1° Fase</p>

      {/* Abas para alternar entre telas */}
      <div className="flex gap-3 border-b-4 pb-2">
        <div
          className={`flex mt-4 gap-2 items-center cursor-pointer ${activeTab === 'principal' ? 'text-[#005261]' : 'text-[#666666]'}`}
          onClick={() => handleTabChange('principal')}
        >
          <img src="/images/Home.png" />
          <h2>Principal</h2>
        </div>
        <div
          className={`flex mt-4 gap-2 items-center cursor-pointer ${activeTab === 'doacoes' ? 'text-[#005261]' : 'text-[#666666]'}`}
          onClick={() => handleTabChange('doacoes')}
        >
          <img src="/images/Home.png" />
          <h2>Doações</h2>
        </div>
        <div
          className={`flex mt-4 gap-2 items-center cursor-pointer ${activeTab === 'campeonatos' ? 'text-[#005261]' : 'text-[#666666]'}`}
          onClick={() => handleTabChange('campeonatos')}
        >
          <img src="/images/Home.png" />
          <h2>Campeonatos</h2>
        </div>
      </div>
      <div
        id="default-modal"
        ref={modalRef2}
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">

              </h3>
              <button
                type="button"
                onClick={closeModal2}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <div>
                <div className="relative z-0 my-5">
                  <input
                    type="text"
                    value={campeonato?.descricao || ''}
                    onChange={(e) => setUserEdit({ ...campeonato, campeonato: e.target.value })}
                    name="nome"
                    id="nome"
                    className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer"
                    placeholder=" "
                  />
                  <label htmlFor="nome" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Nome
                  </label>
                </div>
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="default-modal"
                    type="button"
                    onClick={handleAtualizarUsuario}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Atualizar
                  </button>
                  <button
                    data-modal-hide="default-modal"
                    type="button"
                    onClick={closeModal2}
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Voltar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-[32px] font-[500]">{classroom.serie}° {classroom.descricao}</h1>
          <div className="flex gap-3 border-b-4 pb-2">
            <div
              className={`flex mt-4 gap-2 items-center cursor-pointer ${activeTab === 'principal' ? 'text-[#005261]' : 'text-[#666666]'}`}
              onClick={() => handleTabChange('principal')}
            >
              <img src="/images/Home.png" />
              <h2>Principal</h2>
            </div>
            <div
              className={`flex mt-4 gap-2 items-center cursor-pointer ${activeTab === 'doacoes' ? 'text-[#005261]' : 'text-[#666666]'}`}
              onClick={() => handleTabChange('doacoes')}
            >
              <img src="/images/Home.png" />
              <h2>Doações</h2>
            </div>
            <div
              className={`flex mt-4 gap-2 items-center cursor-pointer ${activeTab === 'campeonatos' ? 'text-[#005261]' : 'text-[#666666]'}`}
              onClick={() => handleTabChange('campeonatos')}
            >
              <img src="/images/Home.png" />
              <h2>Campeonatos</h2>
            </div>
          </div>          
          {activeTab == 'principal' && (
            <div>
              <TableData data={studants} pageNumberItens={15}>
                <Column field="rm" header="RM do Aluno" />
                <Column field="nome" header="Nome do Aluno" />
                <Column field="email" header="Email" />
                <Column field="senha" header="Senha" />
                <Column textFixed={"Editar"} field={"rm"} filter={false} header="Editar" OnPress={(e) => {

                  handleGetUserByRM(e);
                }} />
              </TableData>
            </div>
          )}
          {activeTab == 'campeonatos' && (
            <div>
              {championships.length > 0 ?
                <div className="flex gap-4 p-2 flex-wrap">

                  {championships.map((item, index) => {
                    return (
                      <div className="shadow-md flex w-60 items-center p-6 gap-4" onClick={() => {
                        setCampeonato(item);
                        openModal2();
                      }} key={index}>
                        {item.fotoSala ?

                          <img src={item.fotoSala} width={50} height={50} className="rounded-full" />
                          :
                          <div className="rounded-full bg-[#005261] w-[50px] h-[50px]"></div>
                        }
                        <h2>{item.descricao}</h2>
                      </div>
                    )
                  })}
                </div>
                :
                <p>Não tem campeonatos</p>
              }
            </div>
          )}
          {activeTab == 'doacoes' && (
            <div>
              <h3>Lista de Doações</h3>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

