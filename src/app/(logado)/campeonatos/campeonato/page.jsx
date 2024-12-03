"use client";

import httpClient from "@/service/api";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import TableData from "@/components/table/table";
import Column from "@/components/table/column";
import { toast } from "sonner";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Campeonato() {
    const [activeTab, setActiveTab] = useState('1° Fase');
    const [phase, setPhase] = useState(0);
    const [championship, setChampionship] = useState({});
    const [championshipEdit, setChampionshipEdit] = useState({});
    const [jogos, setJogos] = useState([]);
    const [salas, setSalas] = useState([]);
    const [calendarios, setCalendarios] = useState([]);

    const [startChampion, setStarChampion] = useState(false);
    const [dataInicio, setDataInicio] = useState("");

    const searchParams = useSearchParams();
    const search = searchParams.get('id');

    const modalRef = useRef(null);

    const openModal = (item) => {
        if (modalRef.current) {
            setStarChampion(false);
            modalRef.current.classList.remove("hidden");
            modalRef.current.classList.add("flex");
        }
    };

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.classList.add("hidden");
            modalRef.current.classList.remove("flex");
        }
    };

    useEffect(() => {
        handleGetChampion();
        handleGetSalas();
        handleGetCalendarios();
    }, []);
    useEffect(() => {
    }, [phase]);

    const handleGetSalas = () => {
        httpClient.get("Sala").then((response) => {
            setSalas(response.data)
        })
    }
    const handleGetCalendarios = async () => {
        try {
            const response = await httpClient.get("/Calendario");
            setCalendarios(response.data);
        } catch (error) {
            console.error("Error fetching calendars:", error);
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab.descricao);
        handleGetGames(tab.codigo); // Usa o valor diretamente
    };

    const handleGetChampion = () => {
        httpClient.get("Campeonato/" + search).then((response) => {
            setChampionship(response.data);
            setChampionshipEdit(response.data);
            if (response.data?.fases?.length > 0) {
                const firstPhase = response.data.fases[0].codigo;
                setPhase(firstPhase);
                handleGetGames(firstPhase);
            }
        });
    };

    const handleGetGames = (codigo) => {
        httpClient.get("Campeonato/jogos/" + codigo).then((response) => {
            setJogos(response.data);
        });
    };

    const handleDefineWinner = (timecode) => {
        httpClient.post("Campeonato/Vencedor/" + timecode.time + "/" + timecode.phase).then((response) => {
            if (response.status === 204) {
                toast.success("Vencedor definido com sucesso!");
            } else {
                if (response.data.mensagem === "scored has marked")
                    toast.warning("Já foi definido um vencedor para este jogo.");
                else if (response.data.mensagem === "champshion end")
                    toast.warning("Campeonato já acabou.");
            }
            handleGetGames(timecode.phase);
        });
    };
    const handleAtualizarCampeonato = () => {
        if (!championshipEdit.descricao) {
            toast.warning("Preencha o nome do Campeonato!")
            return;
        }
        httpClient.put("Campeonato/" + search, {
            descricao: championshipEdit.descricao,
            salaCodigo: championshipEdit.salaCodigo,
            calendarioCodigo: championshipEdit.calendarioCodigo,
            isQuadra: championshipEdit.isQuadra
        }).then((response) => {
            if (response.status == 200) {
                handleGetChampion();
                toast.success("Campeonato atualizado com sucesso!")
                closeModal();
            }
            else
                toast.warning("Algo deu errado.")
        })
    }
    const handleDeleteCampeonato = () => {
        httpClient.delete("Campeonato/" + search).then((response) => {
            if (response.status == 204) {
                window.history.back();
                toast.success("Campeonato deletado com sucesso!")
            }
            else {
                toast.warning("Algo deu errado.")
            }
        })
    }
    const handleStart = () => {
        httpClient.post("Campeonato/Iniciar", {
            campeonatoCodigo: Number(search),
            DataInicio: dataInicio
        }).then((response) => {
            if (response.status == 204) {
                toast.success("Campeonato iniciado com sucesso!")
                closeModal();
            }
            else {
                toast.warning("Algo deu errado.")
            }
        })
    }

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
                    <div className="relative bg-gray-50 rounded-lg shadow dark:bg-gray-700">
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
                            {startChampion ?
                                <div>
                                    <div className="relative z-0 my-5">

                                        <input
                                            type="datetime-local"
                                            onChange={(e) => { setDataInicio(e.target.value) }}
                                            value={dataInicio ? dataInicio.split('T')[0] + 'T' + dataInicio.split('T')[1].slice(0, 5) : ''}
                                            name="datelimite"
                                            autoComplete="datelimite"
                                            id="datelimite"
                                            className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer"
                                            placeholder=" "
                                        />
                                        <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                            Data e hora de início
                                        </label>
                                        <button className="px-4 py-2 w-full bg-[#005261] text-white rounded-md" onClick={handleStart}>
                                            Iniciar
                                        </button>
                                    </div>
                                </div>
                                :
                                <div>
                                    <div className="relative z-0 my-5">
                                        <input
                                            type="text"
                                            value={championshipEdit?.descricao || ''}
                                            onChange={(e) => setChampionshipEdit({ ...championshipEdit, descricao: e.target.value })}
                                            name="descricao"
                                            id="descricao"
                                            className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer"
                                            placeholder=" "
                                        />
                                        <label htmlFor="nome" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Nome do Campeonato
                                        </label>
                                    </div>

                                    <div className="relative z-0 my-5">
                                        <select onChange={(e) => { setChampionshipEdit({ ...championshipEdit, calendarioCodigo: e.target.value }) }} value={championshipEdit.calendarioCodigo} name="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" ">
                                            {calendarios.map((calendario, index) => {
                                                const date = new Date(calendario.dataGincana);
                                                return (<option key={index} value={calendario.codigo}>{`${date.getDate().toString().padStart(2, "0")}/${((date.getMonth() + 1).toString().padStart(2, "0"))}`}</option>)
                                            })}
                                        </select>
                                        <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                            Dia Gincana
                                        </label>
                                    </div>
                                    <div className="relative z-0 my-5">
                                        <select onChange={(e) => setChampionshipEdit({ ...championshipEdit, salaCodigo: e.target.value })} value={championshipEdit?.salaCodigo || ''} className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" ">
                                            {salas.map((sala, index) => {
                                                return (<option key={index} value={sala.codigo}>{sala.serie}° {sala.descricao}</option>)
                                            })}
                                        </select>
                                        <label htmlFor="salaCodigo" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Sala Responsável
                                        </label>
                                    </div>
                                    <div className="relative z-0 my-5 flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">É um jogo de quadra?</span>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={championshipEdit?.isQuadra || false}
                                                onChange={(e) => setChampionshipEdit({ ...championshipEdit, isQuadra: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#b7b7b7] dark:bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#005261]"></div>
                                        </label>
                                    </div>
                                    {!(championship.fases?.length ?? []) > 0 &&
                                        <button className="px-4 py-2 w-full bg-[#005261] text-white rounded-md" onClick={() => { setStarChampion(true) }}>
                                            Iniciar Campeonato
                                        </button>
                                    }
                                </div>
                            }
                        </div>



                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                                data-modal-hide="default-modal"
                                type="button"
                                onClick={handleAtualizarCampeonato}
                                className="text-white bg-[#005261]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#005261] dark:focus:ring-blue-800"
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
                                onClick={handleDeleteCampeonato}
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Deletar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="text-[32px] font-[500]">{championship.descricao}</h1>
                    <Icon icon={"pepicons-pencil:pen"} onClick={openModal} />
                </div>
                <span className="flex flex-col items-center gap-1" onClick={() => { window.history.back() }}>
                    <img className={`h-10 w-10 `} src="/images/voltarpagina.svg" />
                    <p className={`text-sm text-[#005261] font-semibold sm-w-full`}>página anterior</p>
                </span>
            </div>
            <p className="text-[#666666]">
                Para editar, clique no botão Editar e faça as alterações necessárias.
                Para visualizar os times que vão disputar o jogo, selecione a opção desejada.
            </p>

            {/* Abas para alternar entre telas */}
            <div className="flex gap-3 border-b-4 pb-2">
                {championship?.fases?.map((fase) => (
                    <div
                        key={fase.codigo}
                        className={`flex mt-4 gap-2 items-center cursor-pointer ${activeTab === fase.descricao ? 'text-[#005261]' : 'text-[#666666]'
                            }`}
                        onClick={() => {
                            setPhase(fase.codigo); // Atualiza o estado
                            handleTabChange(fase)
                        }
                        }
                    >
                        <h2>{fase.descricao}</h2>
                    </div>
                ))}
            </div>

            <div>
                {jogos && jogos.length > 0 ? (
                    <TableData
                        data={jogos.map((x) => {
                            const sala1 = x.nome1 ?? "Desconhecido";
                            const sala2 = x.nome2 ?? "Desconhecido";
                            const date = new Date(x.dataJogo);
                            return {
                                definirvencedor1: { time: x.timeCodigo1, phase: x.faseCodigo },
                                definirvencedor2: { time: x.timeCodigo1, phase: x.faseCodigo },
                                dataJogo: `${date.getDate().toString().padStart(2, "0")}/${(
                                    date.getMonth() + 1
                                )
                                    .toString()
                                    .padStart(2, "0")}`,
                                sala1,
                                sala2,
                                status: x.vencedor ? "Finalizado" : "Em Andamento",
                                vencedor: x.vencedor ?? "",
                            };
                        })}
                        pageNumberItens={15}
                    >
                        <Column field="dataJogo" header="Data" />
                        <Column field="sala1" header="Sala 1" />
                        <Column
                            field={"definirvencedor1"}
                            textFixed={"X"}
                            header="Definir Vencedor"
                            OnPress={(e) => {
                                handleDefineWinner(e);
                            }}
                        />
                        <Column field="sala2" header="Sala 2" />
                        <Column
                            field={"definirvencedor2"}
                            textFixed={"X"}
                            header="Definir Vencedor"
                            OnPress={(e) => {
                                handleDefineWinner(e, phase);
                            }}
                        />
                        <Column field="status" header="Status" />
                        <Column field="vencedor" header="Vencedor" />
                    </TableData>
                ) : (
                    <h2>Campeonato não iniciado</h2>
                )}
            </div>
        </div>
    );
}
