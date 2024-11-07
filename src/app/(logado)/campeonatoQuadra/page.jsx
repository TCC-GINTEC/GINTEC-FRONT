"use client"

import httpClient from "@/service/api";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Jogos() {
  const [games, setGames] = useState([]);
  const [item, setItem] = useState({});

  useEffect(() => {
    handleGetGames();
  }, [])

  const handleGetGames = async () => {
    httpClient.get("/Campeonato").then((response) => {
      setGames(response?.data?.filter(x => x.isQuadra) ?? []);
    })
  }
  return (

    <div>
      <h1 className="text-[32px] font-[500]">Campeonato de Quadra</h1>
      <div className="flex gap-4 flex-wrap">
        {games.map((game, index) => {
          return (
            <Link href={"/campeonatos/campeonato?id=" + game.codigo} key={index}>
              <div className="border-2 border-[#8A29E6] h-16 w-52 flex items-center justify-center rounded-md">
                <h2 className="break-keep text-[#8A29E6] font-[600]">{game.descricao}</h2>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}


