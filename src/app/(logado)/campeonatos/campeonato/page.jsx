"use client";

import httpClient from "@/service/api";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import TableData from "@/components/table/table";
import Column from "@/components/table/column";
import { toast } from "sonner";

export default function Campeonato() {
    const [activeTab, setActiveTab] = useState('1° Fase');
    const [phase, setPhase] = useState(0);
    const [championship, setChampionship] = useState({});
    const [jogos, setJogos] = useState([]);

    const searchParams = useSearchParams();
    const search = searchParams.get('id');

    useEffect(() => {
        handleGetChampion();
    }, []);
    useEffect(() => {
    }, [phase]);

    const handleTabChange = (tab) => {
        setActiveTab(tab.descricao);
        handleGetGames(tab.codigo); // Usa o valor diretamente
    };

    const handleGetChampion = () => {
        httpClient.get("Campeonato/" + search).then((response) => {
            setChampionship(response.data);
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

    return (
        <div>
            <h1 className="text-[32px] font-[500]">{championship.descricao}</h1>
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
