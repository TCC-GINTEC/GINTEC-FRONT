"use client";

import httpClient from "@/service/api";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [response, setResponse] = useState([]);
  const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
  const [pontuacaoExtraTotal, setPontuacaoExtraTotal] = useState(0);
  const [totaldias, setTotalDias] = useState([]);
  const [totalAlunos, setTotalAlunos] = useState(0);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSalas = await httpClient.get("Sala/ParticipacaoSalas");
        setResponse(responseSalas.data);

        const responsePontuacao = await httpClient.get("Atividade/ObterPontuacaoTotal");
        setPontuacaoTotal(responsePontuacao.data);

        const responseCalendario = await httpClient.get("Calendario");
        setTotalDias(responseCalendario.data);

        const responseAlunos = await httpClient.get("Usuario");
        setTotalAlunos(responseAlunos.data);

        const responseExtra = await httpClient.get("Atividade/ObterPontuacaoExtraTotal");
        setPontuacaoExtraTotal(responseExtra.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-semibold">Home</h1>

      <section className="bg-purple-100 py-6 mt-8 px-4 md:px-12 border rounded-2xl flex flex-col md:flex-row justify-between items-center md:max-h-72">
        <div className="ml-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Olá, seja Bem Vindo!</h2>
          <p className="text-base sm:text-lg font-semibold mt-3">Sinta-se à vontade para navegar pela nossa plataforma</p>
        </div>
        <img src="/images/imageHome1.png" className="h-20 sm:h-24 md:h-36 hidden sm:block" />
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-6 ">
        <section className="py-6 px-4 md:px-12 col-span-1 sm:col-span-2 md:col-span-4 flex flex-col gap-5 rounded-2xl">
          <h1 className="text-teal-700 font-semibold">Participação de cada sala</h1>
          <div className="w-full flex justify-around flex-wrap">
            {response.map((item, index) => (
              <div key={index} className="h-48 sm:h-60 flex flex-col items-center">
                <div className="h-full w-3 bg-gray-200 flex items-end">
                  <div style={{ height: `${item.pontuacao}%`, backgroundColor: getRandomColor() }} className="w-3"></div>
                </div>
                <h3 className="text-xs sm:text-xs mt-3">{item.salaNome}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 col-span-1 sm:col-span-2 md:col-span-1">
          <div className="bg-blue-50 p-4 sm:p-6 rounded-xl shadow-md text-center">
            <img src="images/iconTPontos.svg" className="mx-auto w-6 sm:w-8 h-6 sm:h-8" alt="Total de Pontos Icon" />
            <h2 className="text-blue-500 font-semibold mt-2">Total de Pontos</h2>
            <p className="font-bold text-lg">{pontuacaoTotal}</p>
          </div>
          <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow-md text-center">
            <img src="images/iconMPontos.svg" className="mx-auto w-6 sm:w-8 h-6 sm:h-8" alt="Média Diária Icon" />
            <h2 className="text-purple-500 font-semibold mt-2">Média Diária</h2>
            <p className="font-bold text-lg">{pontuacaoTotal && totaldias.length ? (pontuacaoTotal / totaldias.length).toFixed(2) : 0}</p>
          </div>
          <div className="bg-yellow-50 p-4 sm:p-6 rounded-xl shadow-md text-center">
            <img src="images/iconEPontos.svg" className="mx-auto w-6 sm:w-8 h-6 sm:h-8" alt="Pontos Extras Icon" />
            <h2 className="text-yellow-500 font-semibold mt-2">Pontos Extras</h2>
            <p className="font-bold text-lg">{pontuacaoExtraTotal}</p>
          </div>
        </section>


        <section className="py-4 sm:py-6 px-4 md:px-12 col-span-1 sm:col-span-2 md:col-span-2 flex flex-col gap-5 shadow-xl rounded-2xl h-40 sm:h-52 mb-24 sm:mb-48">
          <div className="flex items-center">
            <img src="images/IconAlunosAtv.svg" className="w-12 sm:w-16 h-8 sm:h-12 object-cover" />
            <h2 className="text-red-500 font-medium ml-2">Alunos Ativos</h2>
          </div>
          <div className="flex gap-4">
            <p className="font-bold text-2xl sm:text-3xl">{totalAlunos.length}</p>
            <p className="font-bold text-xs sm:text-sm text-slate-400">Média data de cada dia</p>
          </div>
        </section>

        <section className="py-4 sm:py-6 px-4 md:px-12 col-span-1 sm:col-span-2 md:col-span-2 flex flex-col gap-5 shadow-xl rounded-2xl h-40 sm:h-52 mb-24 sm:mb-48">
          <h2 className="text-teal-950 font-medium">Calendário</h2>
          <div className="flex gap-2 sm:gap-4">
            {totaldias.map((dia, index) => {
              const date = new Date(dia.dataGincana);
              return (
                <div key={index} className="bg-teal-700 p-3 sm:p-5 rounded-xl">
                  <h1 className="text-white text-2xl sm:text-3xl">{date.getDate()}</h1>
                </div>
              );
            })}
          </div>
        </section>


      </div>
    </div>

  );
}
