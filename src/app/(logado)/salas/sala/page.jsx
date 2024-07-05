"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from 'next/link'

export default function Sala() {
  const [moveBar, setMoveBar] = useState("principal");
  const [transition, setTransition] = useState(false); // Estado para controlar a transição
  const searchParams = useSearchParams();
  const urlCurso = searchParams.get("curso");
  const urlSerie = searchParams.get("serie");

  const [retornoApi, setRetornoApi] = useState([
    {
      id: 1,
      nome: "Victoria Laurinda Camargo",
      qda: 25,
      qdp: 18.436,
      dia: 1,
      totalPontos: 60.7,
      mencao: "MB",
    },
    {
      id: 2,
      nome: "joao",
      qda: 13,
      qdp: 9.896,
      dia: 1,
      totalPontos: 25.76,
      mencao: "R",
    },
    {
      id: 3,
      nome: "beltrano",
      qda: 19,
      qdp: 18.436,
      dia: 1,
      totalPontos: 48.367,
      mencao: "B",
    },
    {
      id: 4,
      nome: "ciclano",
      qda: 25,
      qdp: 1200,
      dia: 1,
      totalPontos: 0,
      mencao: "I",
    },
  ]);

  function getColorClass(mencao) {
    switch (mencao) {
      case "MB":
        return "bg-[#3ACF1F]"; // Verde para MB
      case "B":
        return "bg-[#A0C340]"; // Verde-claro para B
      case "I":
        return "bg-[#D32719]"; // Vermelho para I
      case "R":
        return "bg-[#FFC24C]"; // Laranja para R
      default:
        return "bg-gray-200"; // Cor padrão para outras menções
    }
  }

  useEffect(() => {
    setTransition(true); // Ativa a transição após o componente ser montado
  }, []);

  const esportes = [
    ["Basquete", "Volei", "Queimada"],
    ["Futsal-Masc", "Futsal-Fem", "Handebol"],
  ];

  return (
    <div className='pl-[90px]'>
      <div className='mx-auto pl-5 md:pl-20 flex flex-col gap-20 m-5'>
        <button className=''>
          <Link href={'/salas'}>
            <img src="../images/sair-navegacao.svg"></img>
          </Link>
        </button>
        <h1 className="text-2xl font-semibold mb-10 ">
          {urlSerie} º {urlCurso}
        </h1>
      </div>
      <div className="md:w-3/4 flex gap-7 md:gap-20 mx-auto mb-4 border-b-4 border-b-[#DADADA] relative">
        <div
          onClick={() => setMoveBar("principal")}
          className={`flex items-center gap-2 sm:text-xl cursor-pointer ${moveBar === "principal" ? "text-[#005261]" : "text-[#DADADA]"}`}
        >
          <img src="../images/home-icon.svg" alt="" />
          Principal
        </div>
        <div
          onClick={() => setMoveBar("doacoes")}
          className={`flex font-semibold cursor-pointer ${moveBar === "doacoes" ? "text-[#005261]" : "text-[#DADADA]"}`}
        >
          Doações
        </div>
        <div
          onClick={() => setMoveBar("campeonato")}
          className={`font-semibold cursor-pointer ${moveBar === "campeonato" ? "text-[#005261]" : "text-[#DADADA]"}`}
        >
          Campeonatos
        </div>
        <div
          className={`hidden sm:block h-[4px] w-[100px] md:w-[124px] bg-[#005261]  ${
            transition ? "duration-700 delay-100" : ""
          } 
              ${moveBar === "principal" ? "left-0" : ""} 
              ${moveBar === "doacoes" ? "md:left-40 left-30" : ""} 
              ${moveBar === "campeonato" ? "md:left-80" : ""} 
              absolute -bottom-1 font-bold`}
        ></div>
      </div>

      {moveBar === "principal" && (
        <div className="md:w-[85%] mx-auto">
          <div className="overflow-x-auto rounded-lg bg-[#005261]">
            <div className="flex">
              <div className="w-[300px]">
                <div className="p-3 font-semibold border border-white border-r-2 text-white">Alunos</div>
                {retornoApi.map((aluno) => (
                  <div key={aluno.id} className="pt-[10px] pl-[4px] Right-to-left bg-white border border-[#DADADA]">
                    {aluno.nome}
                  </div>
                ))}
              </div>
              <div className="w-3/4 flex overflow-x-auto">
                <div className="min-w-[200px]">
                  <div className="p-3 font-bold border border-white border-r-2 text-white text-center">QDA</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className="pt-[10px] pl-4 Right-to-left bg-white border border-[#DADADA]">
                      {aluno.qda}
                    </div>
                  ))}
                </div>
                <div className="min-w-[200px]">
                  <div className="p-3 font-bold border border-white border-r-2 text-white text-center">QDP</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className="pt-[10px] pl-4 Right-to-left bg-white border border-[#DADADA]">
                      {aluno.qdp}
                    </div>
                  ))}
                </div>
                <div className="min-w-[200px]">
                  <div className="p-3 font-bold border border-white border-r-2 text-white text-center">DATA</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className="pt-[10px] Right-to-left bg-white border border-[#DADADA]">
                      {aluno.dia}
                    </div>
                  ))}
                </div>
                <div className="min-w-[200px]">
                  <div className="p-3 font-bold border border-white border-r-2 text-white text-center">Total Geral</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className="pt-[10px] pl-4 Right-to-left bg-white border border-[#DADADA]">
                      {aluno.totalPontos}
                    </div>
                  ))}
                </div>
                <div className="min-w-[200px] border border-[#DADADA] border-l-2">
                  <div className="p-3 font-bold text-white text-center">MENÇÕES</div>
                  {retornoApi.map((aluno) => (
                    <div key={aluno.id} className={`pt-[10px] Right-to-left border border-[#DADADA] ${getColorClass(aluno.mencao)}`}>
                      {aluno.mencao}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {moveBar === "doacoes" && (
        <div className="md:w-[80%] mx-auto">
          <div className="overflow-x-auto rounded-lg bg-[#005261]">
            <div className="flex">
              <div className="w-[300px]">
                <div className="p-3 font-semibold border border-white border-r-2 text-white">Alunos</div>
                {retornoApi.map((aluno) => (
                  <div key={aluno.id} className="pt-[10px] pl-[4px] Right-to-left bg-white border border-[#DADADA]">
                    {aluno.nome}
                  </div>
                ))}
              </div>
              <div className="w-3/4 flex overflow-x-auto">
                {[...Array(retornoApi.length)].map((_, i) => (
                  <div key={i} className="min-w-[200px]">
                    <div className="p-3 font-bold border border-white border-r-2 text-white text-center">Doação {i + 1}</div>
                    {retornoApi.map((aluno) => (
                      <div key={aluno.id} className="pt-[10px] pl-4 Right-to-left bg-white border border-[#DADADA]">
                        Pontos doados
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {moveBar === "campeonato" && (
        <div className="md:w-[90%] mx-auto">
          {esportes.map((esporteGroup, index) => (
            <div
              key={index}
              className="border bg-[#005261] rounded-l-lg rounded-r-lg overflow-x-auto mb-4"
            >
              <table className="w-full">
                <thead>
                  <tr className="text-white text-center">
                    {esporteGroup.map((esporte, idx) => (
                      <th key={idx} className="p-3 min-w-[150px] border border-white">
                        {esporte}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {retornoApi.map((aluno) => (
                    <tr key={aluno.id} className="text-center border">
                      {esporteGroup.map((_, idx) => (
                        <td key={idx} className="border bg-white border-gray-200 min-w-[150px]">
                          {aluno.nome}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
