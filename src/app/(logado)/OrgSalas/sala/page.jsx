"use client"

import httpClient from "@/service/api"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import TableData from "@/components/table/table"
import Column from "@/components/table/column"

export default function Sala() {
  const [classroom, setClassroom] = useState({});
  const [studants, setStudants] = useState([]);

  const searchParams = useSearchParams()

  const search = searchParams.get('id')

  useEffect(() => {
    handleGetClassRoom();
    handleGetStudants();
  }, [])

  const handleGetClassRoom = async () => {
    httpClient.get("/Sala/" + search).then((response) => {
      setClassroom(response.data)
    })
  }
  const handleGetStudants = async () => {
    httpClient.get("/Usuario/Sala/" + search).then((response) => {
      console.log(response.data)
      setStudants(response.data)
    })
  }
  return (
    <div>
      <h1 className="text-[32px] font-[500]">{classroom.descricao}</h1>
      <p className="text-[#666666]">1° Fase</p>
      <div className="flex gap-3 border-b-4 pb-2">
        <div className="flex mt-4 gap-2 items-center">
          <img src="/images/Home.png" />
          <h2 className="text-[#005261]">Principal</h2>
        </div>
        <div className="flex mt-4 gap-2 items-center">
          <img src="/images/Home.png" />
          <h2 className="text-[#005261]">Doações</h2>
        </div>
        <div className="flex mt-4 gap-2 items-center">
          <img src="/images/Home.png" />
          <h2 className="text-[#005261]">Campeonatos</h2>
        </div>
      </div>
      <TableData data={studants} pageNumberItens={15}>
        <Column field="nome" header="Nome do Aluno" />        
        <Column field="email" header="Nome do Aluno" />        
        <Column field="senha" header="Nome do Aluno" />        
        <Column field="nome" header="Nome do Aluno" />        
      </TableData>
    </div>
  )
}