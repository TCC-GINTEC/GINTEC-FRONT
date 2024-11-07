"use client"

import httpClient from "@/service/api"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import TableData from "@/components/table/table"
import Column from "@/components/table/column"
import Link from "next/link"

export default function Sala() {
  const [classroom, setClassroom] = useState({});
  const [championships, setChampionships] = useState([]);
  const [studants, setStudants] = useState([]);
  const [activeTab, setActiveTab] = useState('principal');

  const searchParams = useSearchParams()
  const search = searchParams.get('id')

  useEffect(() => {
    handleGetClassRoom();
    handleGetStudants();
    handleGetChampionship();
  }, [])

  const handleGetClassRoom = async () => {
    httpClient.get("/Sala/" + search).then((response) => {
      setClassroom(response.data)
    })
  }
  const handleGetChampionship = async () => {
    httpClient.get("/Campeonato").then((response) => {      
      setChampionships(response.data.filter(x => x.salaCodigo == search))
    })
  }
  const handleGetStudants = async () => {
    httpClient.get("/Usuario/Sala/" + search).then((response) => {
      setStudants(response.data)
    })
  }

  // Função para trocar de aba
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div>
      <h1 className="text-[32px] font-[500]">{classroom.descricao}</h1>
      <p className="text-[#666666]">1° Fase</p>

      {/* Abas para alternar entre telas */}
      <div className="flex gap-3 border-b-4 pb-2">
        <div
          className={`flex mt-4 gap-2 items-center cursor-pointer ${activeTab === 'principal' ? 'text-[#005261]' : 'text-[#666666]'}`}
          onClick={() => handleTabChange('principal')}
        >
          <img src="/images/Home.png" />
          <h2>Principal</h2>
        </div>
        <div
          className={`flex mt-4 gap-2 items-center cursor-pointer ${activeTab === 'doacoes' ? 'text-[#005261]' : 'text-[#666666]'}`}
          onClick={() => handleTabChange('doacoes')}
        >
          <img src="/images/Home.png" />
          <h2>Doações</h2>
        </div>
        <div
          className={`flex mt-4 gap-2 items-center cursor-pointer ${activeTab === 'campeonatos' ? 'text-[#005261]' : 'text-[#666666]'}`}
          onClick={() => handleTabChange('campeonatos')}
        >
          <img src="/images/Home.png" />
          <h2>Campeonatos</h2>
        </div>
      </div>

      {/* Renderizando conteúdo com base na aba ativa */}
      {activeTab === 'principal' && (
        <div>
          <TableData data={studants} pageNumberItens={15}>
            <Column field="rm" header="RM do Aluno" />
            <Column field="nome" header="Nome do Aluno" />
            <Column field="email" header="Email" />
            <Column field="senha" header="Senha" />
            <Column field="senha" header="Senha" OnPress={(e) => { console.log(e.target.parentElement.parentElement.QuerySelector("")[0]) }} />
          </TableData>
        </div>
      )}
      {activeTab === 'campeonatos' && (
        <div>
          {championships.length > 0 ?
            <div className="flex gap-4 p-2 flex-wrap">

              {championships.map((item, index) => {
                return (
                  <Link href={"/campeonatos/campeonato?id=" + item.codigo} className="shadow-md flex w-60 items-center p-6 gap-4" key={index}>
                    {item.fotoSala ?

                      <img src={item.fotoSala} width={50} height={50} className="rounded-full" />
                      :
                      <div className="rounded-full bg-[#005261] w-[50px] h-[50px]"></div>
                    }
                    <h2>{item.descricao}</h2>
                  </Link>
                )
              })}
            </div>
            :
            <p>Não tem campeonatos</p>
          }
        </div>
      )}
      {activeTab === 'doacoes' && (
        <div>
          <h3>Lista de Doações</h3>
        </div>
      )}
    </div>
  )
}
