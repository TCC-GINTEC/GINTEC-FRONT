"use client"

import httpClient from "@/service/api";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function Jogos() {
  const [games, setGames] = useState([]);
  const [gamesfilter, setGamesfilter] = useState([]);
  const [salas, setSalas] = useState([]);
  const [salaCodigo, setSalaCodigo] = useState(0);
  const [calendarios, setCalendarios] = useState([]);
  const [calendariosCheck, setCalendariosCheck] = useState("");
  const [calendarioCodigo, setCalendarioCodigo] = useState(0);
  const [item, setItem] = useState({});
  const [item2, setItem2] = useState({ pontuacaoExtra: false });
  const [pontuacaoExtraItems, setPontuacaoExtraItems] = useState([]);
  const [extraInput, setExtraInput] = useState('');

  const handleAddExtra = () => {
    if (extraInput.trim() !== '') {
      setPontuacaoExtraItems([...pontuacaoExtraItems, extraInput]);
      setExtraInput('');
    }
  };
  const handleAddExtra2 = () => {
    if (extraInput.trim() !== '') {
      setPontuacaoExtraItems([...item.atividadePontuacaoExtra.map(x => x.pontuacao), extraInput]);
      setExtraInput('');
    }
  };

  const modalRef = useRef(null);
  const modalRef2 = useRef(null);

  useEffect(() => {
    handleGetGames();
    handleGetClassrooms();
    handleGetCalendarios();
  }, [])

  const handleGetClassrooms = async () => {
    httpClient.get("/Sala").then((response) => {
      setSalas(response.data)
      setSalaCodigo(response.data[0].codigo)
    })
  }
  const handleGetGames = async () => {
    httpClient.get("/Atividade").then((response) => {
      setGames(response?.data ?? []);
      setGamesfilter(response?.data ?? [])
    })
  }
  const handleGetCalendarios = async () => {
    httpClient.get("/Calendario").then((response) => {
      setCalendarios(response.data);
      setCalendarioCodigo(response.data[0].codigo)
    })
  }
  const openModal = (item) => {
    if (modalRef.current) {
      setItem({ ...item, pontuacaoExtra: item.atividadePontuacaoExtra > 0 });
      setSalaCodigo(item.salaCodigo);
      setCalendarioCodigo(item.calendarioCodigo);
      modalRef.current.classList.remove("hidden");
      modalRef.current.classList.add("flex");
    }
  };
  const openModal2 = (item) => {
    if (modalRef.current) {
      modalRef2.current.classList.remove("hidden");
      modalRef2.current.classList.add("flex");
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.add("hidden");
      modalRef.current.classList.remove("flex");
    }
  };
  const handleUpdateActivity = () => {
    console.log(item)
    httpClient.put("/Atividade/" + item.codigo, {
      Descricao: item.descricao,
      IsPontuacaoExtra: item.pontuacaoExtra,
      SalaCodigo: salaCodigo,
      CalendarioCodigo: calendarioCodigo
    }).then((response) => {
      handleGetGames();
      closeModal();
    })
  }
  const handleDeleteActivity = () => {
    console.log(item)
    httpClient.delete("/Atividade/" + item.codigo).then((response) => {
      handleGetGames();
      closeModal();
    })
  }
  const closeModal2 = () => {
    if (modalRef2.current) {
      modalRef2.current.classList.add("hidden");
      modalRef2.current.classList.remove("flex");
    }
  };

  const handleAddAticvity = () => {
    console.log(item2)
    if (!item2.descricao) {
      toast.warning("Por favor, defina um nome pra atividade.")
      return;
    }
    if (item2.pontuacaoExtra) {
      if (pontuacaoExtraItems.length <= 0) {
        toast.warning("Por favor, adicione pontuações extra pra atividade.")
        return;
      }
    }

    httpClient.post("/Atividade", {
      Descricao: item2.descricao,
      IsPontuacaoExtra: item2.pontuacaoExtra,
      SalaCodigo: salaCodigo,
      CalendarioCodigo: calendarioCodigo
    }).then((response) => {
      toast.success("Atividade cadastrada com sucesso!")
      handleGetGames();
      closeModal2()
    })
  }

  return (

    <div>

      <h1 className="text-[32px] font-[500]">Jogos de Pátio</h1>
      <div className="w-full flex justify-end pr-32 gap-4">
        <select className="text-[15px] bg-gray-300 px-8 rounded-lg my-4" value={calendariosCheck} onChange={(e) => {
          setCalendariosCheck(e.target.value)
          setGamesfilter(games.filter(x => x.calendarioCodigo == e.target.value))
        }}>
          {calendarios.map((calendario) => {
            var date = new Date(calendario.dataGincana)
            return (
              <option value={calendario.codigo}>{`${date.getDate()}/${date.getMonth() + 1}`}</option>
            )
          })}
        </select>
        <button className="text-[30px] bg-gray-300 px-8 rounded-lg my-4" onClick={openModal2}>+</button>
      </div>
      <div className="flex gap-4 flex-wrap">
        {gamesfilter.map((game, index) => {
          return (
            <div key={index} className="border-2 border-[#4C7EFF] h-16 w-52 flex items-center justify-center rounded-md" onClick={() => { openModal(game) }}>
              <h2 className="break-keep text-[#4C7EFF] font-[600]">{game.descricao}</h2>
            </div>
          )
        })}
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
                  <input onChange={(e) => { setItem2({ ...item2, descricao: e.target.value }) }} value={item.descricao} name="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" " />
                  <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    Atividade
                  </label>
                </div>
                <div className="relative z-0 my-5">
                  <select onChange={(e) => { setSalaCodigo(e.target.value) }} value={salaCodigo} name="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" ">
                    {salas.map((sala, index) => {
                      return (<option key={index} value={sala.codigo}>{sala.serie}° {sala.descricao}</option>)
                    })}
                  </select>
                  <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    Sala
                  </label>
                </div>
                <div className="relative z-0 my-5">
                  <select onChange={(e) => { setCalendarioCodigo(e.target.value) }} value={calendarioCodigo} name="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" ">
                    {calendarios.map((calendario) => {
                      return (<option value={calendario.codigo}>{calendario.dataGincana}</option>)
                    })}
                  </select>
                  <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    Dia Gincana
                  </label>
                </div>
              </div>
              <div className="relative z-0 my-5">
                <label className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca]">Atividade tem pontuação extra?</span>
                  <input
                    type="checkbox"
                    checked={item.pontuacaoExtra}
                    onChange={(e) => setItem2({ ...item2, pontuacaoExtra: e.target.checked })}
                    className="form-checkbox h-5 w-5 text-[#b7b7b7] focus:ring-0"
                  />
                </label>
              </div>

              {/* Tabela Condicional */}
              {item2.pontuacaoExtra && (
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <input
                      type="number"
                      value={extraInput}
                      onChange={(e) => setExtraInput(e.target.value)}
                      className="border-[#b7b7b7] block py-2 px-4 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-[#b7b7b7]"
                      placeholder="Insira um valor"
                    />
                    <button
                      onClick={handleAddExtra}
                      className="px-4 py-2 bg-[#b7b7b7] text-white text-sm rounded"
                    >
                      Adicionar
                    </button>
                  </div>

                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">Valores</th>
                        <th scope="col" className="px-6 py-3">Remover</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pontuacaoExtraItems.map((value, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" onClick={() => { setPontuacaoExtraItems(pontuacaoExtraItems.filter(x => x != value)) }}>
                          <td className="px-6 py-4">{value}</td>
                          <td className="px-6 py-4">X</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={handleAddAticvity}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Adicionar
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
                  <input onChange={(e) => { setItem({ ...item, descricao: e.target.value }) }} value={item.descricao} name="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" " />
                  <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    Atividade
                  </label>
                </div>
                <div className="relative z-0 my-5">
                  <select onChange={(e) => { setSalaCodigo(e.target.value) }} value={salaCodigo} name="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" ">
                    {salas.map((sala, index) => {
                      return (<option key={index} value={sala.codigo}>{sala.serie}° {sala.descricao}</option>)
                    })}
                  </select>
                  <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    Sala
                  </label>
                </div>
                <div className="relative z-0 my-5">
                  <select onChange={(e) => { setCalendarioCodigo(e.target.value) }} value={calendarioCodigo} name="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" ">
                    {calendarios.map((calendario) => {
                      return (<option value={calendario.codigo}>{calendario.dataGincana}</option>)
                    })}
                  </select>
                  <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    Dia Gincana
                  </label>
                </div>
              </div>
              <div className="relative z-0 my-5">
                <label className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca]">Atividade tem pontuação extra?</span>
                  <input
                    type="checkbox"
                    checked={item.pontuacaoExtra}
                    onChange={(e) => setItem({ ...item, pontuacaoExtra: e.target.checked })}
                    className="form-checkbox h-5 w-5 text-[#b7b7b7] focus:ring-0"
                  />
                </label>
              </div>

              {/* Tabela Condicional */}
              {item.pontuacaoExtra && (
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <input
                      type="number"
                      value={extraInput}
                      onChange={(e) => setExtraInput(e.target.value)}
                      className="border-[#b7b7b7] block py-2 px-4 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-[#b7b7b7]"
                      placeholder="Insira um valor"
                    />
                    <button
                      onClick={handleAddExtra2}
                      className="px-4 py-2 bg-[#b7b7b7] text-white text-sm rounded"
                    >
                      Adicionar
                    </button>
                  </div>

                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">Valores</th>
                        <th scope="col" className="px-6 py-3">Remover</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.atividadePontuacaoExtra.map(x => x.pontuacao).map((value, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" onClick={() => { setItem({ ...item, atividadePontuacaoExtra: item.atividadePontuacaoExtra.filter(x => x != value) }) }}>
                          <td className="px-6 py-4">{value}</td>
                          <td className="px-6 py-4">X</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={handleUpdateActivity}
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
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={handleDeleteActivity}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Deletar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}