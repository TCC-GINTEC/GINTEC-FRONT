"use client"
import Placed from '@/components/Ranking/Placed'
import Scores from "@/components/Ranking/Scores"
import { useState, useEffect } from "react"
import httpClient from "@/service/api"
import { toast } from 'sonner'

export default function Ranking() {
  const [selectRanking, setSelectRanking] = useState("Aluno")
  const [seachDate, setSeachDate] = useState("")
  const [data, setData] = useState([])

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
          break
        case 'Padrinho':
          httpClient.get("/Usuario/ObterPontuacaoGeral?id=Padrinho").then((response) => {
            setData((response.data?.filter(p => p.isPadrinho).map((item) => {
              return ({
                foto: item.fotoPerfil,
                descricao: item.nome,
                pontuacao: item.pontos.pontuacaGeral,
                turma: item.turma
              })
            }) ?? []).sort((a, b) => b.pontuacao - a.pontuacao))
          })
          break
        case 'Aluno':
          httpClient.get("/Usuario/ObterPontuacaoGeral").then((response) => {
            setData((response.data?.filter(p => !p.isPadrinho).map((item) => {
              return ({
                foto: item.fotoPerfil,
                descricao: item.nome,
                pontuacao: item.pontos.pontuacaGeral,
                turma: item.turma
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

  useEffect(() => {
    handleGetPlayers()
  }, [selectRanking])

  return (
    <div className='p-4 md:p-8 max-w-[80%]'>
      <h1 className="text-[32px] font-[600]">Pontuação Geral</h1>
      <p className="text-[#666666]">Ranking geral</p>
      <div className='flex sm:justify-end flex-col sm:flex-row gap-4 w-3/4 p-4'>
        <select className="bg-slate-200 sm:w-1/2 w-full rounded-lg p-2" value={selectRanking} onChange={(evt) => { setSelectRanking(evt.target.value) }}>
          <option value="Aluno">Melhores jogadores</option>
          <option value="Padrinho">Melhores padrinhos</option>
          <option value="Sala">Melhores Salas</option>
        </select>
      </div>
      {/* <div className="bg-[url('/images/fundoPontuacaoGeral.svg')] w-3/4 bg-cover rounded-xl sm:w-full mb-5 p-3 flex items-center gap-5 flex-col sm:flex-row"> */}
      {/* os 3 pontuadores */}
      <div className='w-full flex justify-center'>
      <Placed users={data.slice(0, 3)} />
      </div>
      {/* </div> */}
      <div className={`border w-full `}>
        {/* pontuadores em geral -1 div de base feita*/}
        <Scores users={data} />
      </div>
    </div>
  )
}
