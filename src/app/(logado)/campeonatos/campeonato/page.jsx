"use client";

import httpClient from "@/service/api";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import TableData from "@/components/table/table";
import Column from "@/components/table/column";

export default function Campeonato() {
    const [activeTab, setActiveTab] = useState('1° Fase');
    const [championship, setChampionship] = useState({});
    const [salas, setSalas] = useState([]);
    const [jogos, setJogos] = useState([]);

    const searchParams = useSearchParams();
    const search = searchParams.get('id');

    useEffect(() => {
        handleGetChampion();
        handleGetSalas();
    }, []);

    const handleGetSalas = () => {
        httpClient.get("Sala").then((response) => {
            setSalas(response.data);
        });
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab.descricao);
        handleGetGames(tab.codigo);
    };

    const handleGetChampion = () => {
        httpClient.get("Campeonato/" + search).then((response) => {
            setChampionship(response.data);
            if (response.data?.fases?.length > 0) {
                handleGetGames(response.data.fases[0].codigo);
            }
        });
    };

    const handleGetGames = (codigo) => {
        httpClient.get("Campeonato/jogos/" + codigo).then((response) => {
            setJogos(response.data);
        });
    };

    return (
        <div>
            <h1 className="text-[32px] font-[500]">{championship.descricao}</h1>
            <p className="text-[#666666]">
                Para editar, clique no botão 'Editar' e faça as alterações necessárias.
                Para visualizar os times que vão disputar o jogo, selecione a opção desejada.
            </p>

            {/* Abas para alternar entre telas */}
            <div className="flex gap-3 border-b-4 pb-2">
                {championship?.fases?.map((fase) => (
                    <div
                        key={fase.codigo} // Adiciona a key para evitar erros de renderização
                        className={`flex mt-4 gap-2 items-center cursor-pointer ${
                            activeTab === fase.descricao ? 'text-[#005261]' : 'text-[#666666]'
                        }`}
                        onClick={() => handleTabChange(fase)}
                    >
                        <h2>{fase.descricao}</h2>
                    </div>
                ))}
            </div>

            <div>
                {(jogos && jogos.length > 0) ? (
                    <TableData data={jogos.map((x) => {
                        const sala1Info = salas.find(i => i.codigo === x.sala1Codigo);
                        const sala2Info = salas.find(i => i.codigo === x.sala2Codigo);
                        const sala1 = sala1Info ? `${sala1Info.serie}° ${sala1Info.descricao}` : "Desconhecido";
                        const sala2 = sala2Info ? `${sala2Info.serie}° ${sala2Info.descricao}` : "Desconhecido";
                        return { dataJogo: x.dataJogo, sala1, sala2 };
                    })} pageNumberItens={15}>
                        <Column field="dataJogo" header="Data" />
                        <Column field="sala1" header="Sala 1" />
                        <Column field="sala2" header="Sala 2" />
                    </TableData>
                ) : (
                    <h2>Campeonato não iniciado</h2>
                )}
            </div>
        </div>
    );
}
