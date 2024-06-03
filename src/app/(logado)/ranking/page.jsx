"use client";

import Placed from '@/components/Ranking/Placed';
import Scores from "@/components/Ranking/Scores"
import { useState, useEffect } from "react";
import httpClient from "@/service/api"
import { toast } from 'sonner';

export default function Ranking() {
  const [selectRanking, setSelectRanking] = useState("");
  const [seachDate, setSeachDate] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    handleGetPlayers();
  },[])

  const handleGetPlayers = async () => {
    try {
      httpClient.get("/Usuario/ObterPontuacaoGeral").then((response) => {
        setData(response.data)
      })
    }
    catch (error) {
      toast.error("Algo deu errado!")
    }
  }
  return (
    <>
      <div className='flex sm:justify-between flex-col sm:flex-row gap-4 w-3/4 p-4'>
        <input className="bg-slate-200 sm:w-1/2 w-full rounded-lg p-2" value={seachDate} onChange={(evt) => { setSeachDate(evt.target.value) }} placeholder="ranking por data..." />
        <select className="bg-slate-200 sm:w-1/2 w-full rounded-lg p-2" value={selectRanking} onChange={(evt) => { setSelectRanking(evt.target.value) }}>
          <option value="melhores padrinhos">todos jogadores</option>
          <option value="melhores jogadores">Melhores jogadores</option>
          <option value="melhores padrinhos">Melhores padrinhos</option>
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
