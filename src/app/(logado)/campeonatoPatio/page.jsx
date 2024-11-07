"use client"

import httpClient from "@/service/api";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Jogos() {
  const [games, setGames] = useState([]);
  const [item, setItem] = useState({});

  const modalRef = useRef(null); 

  useEffect(() => {
    handleGetGames();
  }, [])

  const handleGetGames = async () => {
    httpClient.get("/Campeonato").then((response) => {
      setGames(response?.data?.filter(x => !x.isQuadra) ?? []);
    })
  }
  
  return (

    <div>
      <h1 className="text-[32px] font-[500]">Campeonato de Pátio</h1>
      <div className="flex gap-4 flex-wrap">
        {games.map((game, index) => {
          return (
            <Link href={"/campeonatos/campeonato?id=" + game.codigo} key={index}>
            <div className="border-2 border-[#FF4C4D] h-16 w-52 flex items-center justify-center rounded-md" onClick={() => { openModal(game) }}>
              <h2 className="break-keep text-[#FF4C4D] font-[600]">{game.descricao}</h2>
            </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}   


