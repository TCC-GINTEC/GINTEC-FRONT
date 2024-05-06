"use client";
import Image from 'next/image';
import Placed from '@/components/Ranking/Placed';
import Scores from "@/components/Ranking/Scores"
import { useState, useEffect } from "react";

export default function Ranking() {
  const [selectRanking, setSelectRanking] = useState("");  
  const [seachDate, setSeachDate] = useState("");  

  const data = [
    {
      nome: "João Silva",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 10000
    },
    {
      nome: "Jose Alameida",
      serie: "2º INFO",
      img: "images/icon.svg",
      pontos: 2000
    },
    {
      nome: "Carlos",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6001
    },
    {
      nome: "Ana",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6000
    },
    {
      nome: "Ana",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6000
    },
    {
      nome: "Ana",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6000
    },
    {
      nome: "Ana",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6000
    },
    {
      nome: "Ana",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6000
    }, {
      nome: "Ana",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6000
    }, {
      nome: "Ana",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6000
    }, {
      nome: "Ana",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6000
    }, {
      nome: "Ana",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6000
    }, {
      nome: "Ana",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6000
    }, {
      nome: "Ana",
      curso: "INFO",
      img: "images/icon.svg",
      pontos: 6000
    }, {
      nome: "Ana",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6000
    }, {
      nome: "Ana",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6000
    }, {
      nome: "Ana",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6000
    }, {
      nome: "Ana",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6000
    }, {
      nome: "Ana",
      sala: "3º INFO",
      img: "images/icon.svg",
      pontos: 6000
    }
  ]

  
  data.sort((a, b) => {
    return a.pontos > b.pontos ? -1 : 1;
  });

  return (
    <>
      <div className='flex sm:justify-between flex-col sm:flex-row gap-4 w-3/4 p-4'>
        <input  className="bg-slate-200 sm:w-1/2 w-full rounded-lg p-2"  value={seachDate} onChange={(evt) => {setSeachDate(evt.target.value)}} placeholder="ranking por data..."/>
        <select className="bg-slate-200 sm:w-1/2 w-full rounded-lg p-2" value={selectRanking} onChange={(evt) => {setSelectRanking(evt.target.value)}}>
            <option value="melhores padrinhos">todos jogadores</option>
            <option value="melhores jogadores">Melhores jogadores</option>
            <option value="melhores padrinhos">Melhores padrinhos</option>
        </select>
      </div>
      <div className="bg-slate-100 rounded-xl sm:w-3/4 mb-5 p-3 flex items-center gap-5 flex-col sm:flex-row">
        {/* os 3 pontuadores */}
        <Placed users={data.slice(0, 3)} />
      </div>
      <div className={`overflow-y-scroll border w-full h-[430px] `}>
        {/* pontuadores em geral -1 div de base feita*/}
        <Scores users={data} />
      </div>
    </>
  )
}
