"use client";
import Image from 'next/image';
import Placed from '@/components/Ranking/Placed';
import Scores from "@/components/Ranking/Scores"
import { useState, useEffect } from "react";

export default function Ranking() {
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
    },
  ]

  data.sort((a, b) => {
    return a.pontos > b.pontos ? -1 : 1;
  });

  return (
    <>
      <div className="bg-slate-100 rounded-xl w-3/4 mb-5 p-3 flex flex-col items-center gap-5">

        {/* os 3 pontuadores */}
        <Placed users={data.slice(0, 3)} />
      </div>
      <div className={`overflow-y-scroll border w-full  `}>{/* sm-max-2xl:w-3/5 h-[430px] flex flex-col */}
        {/* pontuadores em geral -1 div de base feita*/}
        <Scores users={data} />
      </div>
    </>
  )
}
