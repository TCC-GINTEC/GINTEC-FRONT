"use client";

import Placed from '@/components/Ranking/Placed';
import Scores from "@/components/Ranking/Scores"
import { useState, useEffect } from "react";
import httpClient from "@/service/api"
import { toast } from 'sonner';

export default function Ranking() {
  const [selectRanking, setSelectRanking] = useState("Aluno");
  const [seachDate, setSeachDate] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    handleGetPlayers();
  }, [selectRanking])

  const handleGetPlayers = async () => {
    try {
      switch (selectRanking) {
        case 'Sala':
          httpClient.post("/Sala/Ranking").then((response) => {
            setData((response.data?.map((item) => {
              return {
                  foto: item.fotoSala,
                  descricao: item.descricao,
                  pontuacao: item.pontuacao
              }
          }) ?? []))
          })
          break;
        case 'Padrinho':
          httpClient.get("/Usuario/ObterPontuacaoGeral?id=Padrinho").then((response) => {
            setData((response.data?.filter(p => p.isPadrinho).map((item) => {
              return ({
                  foto: item.fotoPerfil,
                  descricao: item.nome,
                  pontuacao: item.pontos.pontuacaGeral
              })
          }) ?? []).sort((a, b) => b.pontuacao - a.pontuacao))
          })
          break;
        case 'Aluno':
          httpClient.get("/Usuario/ObterPontuacaoGeral").then((response) => {
            setData((response.data?.filter(p => !p.isPadrinho).map((item) => {
              return ({
                  foto: item.fotoPerfil,
                  descricao: item.nome,
                  pontuacao: item.pontos.pontuacaGeral
              })
          }) ?? []).sort((a, b) => b.pontuacao - a.pontuacao))
          })
          break
      }
    }
    catch (error) {
      toast.error("Algo deu errado!")
    }
  }
  return (
    <>
      <h1 className="text-[32px] font-[600]">Pontuação Geral</h1>
      <p className="text-[#666666]">Ranking geral</p>
      <div className='flex sm:justify-end flex-col sm:flex-row gap-4 w-3/4 p-4'>


        <select className="bg-slate-200 sm:w-1/2 w-full rounded-lg p-2" value={selectRanking} onChange={(evt) => { setSelectRanking(evt.target.value) }}>
          <option value="Aluno">Melhores jogadores</option>
          <option value="Padrinho">Melhores padrinhos</option>
          <option value="Sala">Melhores Salas</option>
        </select>
      </div>
      <div className="bg-slate-100 rounded-xl sm:w-3/4 mb-5 p-3 flex items-center gap-5 flex-col sm:flex-row">
        {/* os 3 pontuadores */}
        <Placed users={data.slice(0, 3)} />
      </div>
      <div className={`border w-full `}>
        {/* pontuadores em geral -1 div de base feita*/}
        <Scores users={data} />
      </div>
    </>
  )
}
