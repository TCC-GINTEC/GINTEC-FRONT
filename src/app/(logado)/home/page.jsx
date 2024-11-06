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
      <section className="py-6 px-4 md:px-12 border rounded-2xl flex flex-col md:flex-row justify-between items-center md:max-h-32">
        <div>
          <h2>Olá, seja Bem Vindo!</h2>
          <p>Sinta-se a vontade para navegar pela nossa plataforma</p>
        </div>
        <img src="/images/imageHome1.png" className="h-24 md:h-36 hidden md:block" />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-auto gap-4 mt-6">
        <section className="py-6 px-4 md:px-12 col-span-1 md:col-span-4 row-span-1 md:row-auto flex flex-col gap-5 shadow-md rounded-2xl">
          <h1 className="text-teal-700 font-medium">Participação de cada sala</h1>
          <div className="w-full flex justify-around flex-wrap">
            {response.map((item, index) => (
              <div key={index} className="h-60 flex flex-col items-center">
                <div className="h-full w-3 bg-gray-200 flex items-end">
                  <div style={{ height: `${item.pontuacao}%`, backgroundColor: getRandomColor() }} className="w-3"></div>
                </div>
                <h3>{item.salaNome}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="py-6 px-4 md:px-12 col-span-1 flex flex-col gap-5 shadow-md rounded-2xl">
          <img src="images/iconTPontos.svg" className="w-16" />
          <h2 className="text-blue-500 font-medium">Total de Pontos</h2>
          <p className="font-bold">{pontuacaoTotal}</p>
        </section>

        <section className="py-6 px-4 md:px-12 col-span-1 flex flex-col gap-5 shadow-md rounded-2xl">
          <img src="images/iconMPontos.svg" className="w-16" />
          <h2 className="text-purple-500 font-medium">Média diária</h2>
          <p className="font-bold">
            {pontuacaoTotal && totaldias.length ? (pontuacaoTotal / totaldias.length).toFixed(2) : 0}
          </p>
        </section>

        <section className="py-6 px-4 md:px-12 col-span-1 md:col-span-2 flex flex-col gap-5 shadow-md rounded-2xl">
          <div className="flex items-center">
            <img src="images/IconAlunosAtv.svg" className="w-16 h-12 object-cover" />
            <h2 className="text-red-500 font-medium">Alunos Ativos</h2>
          </div>
          <p className="font-bold">{totalAlunos.length}</p>
        </section>

        <section className="py-6 px-4 md:px-12 col-span-1 md:col-span-2 flex flex-col gap-5 shadow-md rounded-2xl">
          <h2 className="text-teal-700 font-medium">Calendário</h2>
          <div className="flex gap-4 flex-wrap">
            {totaldias.map((dia, index) => {
              let date = new Date(dia.dataGincana);
              return (
                <div key={index} className="bg-teal-700 p-5 rounded-xl">
                  <h1 className="text-white text-3xl">{`${date.getDate()}`}</h1>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-6 px-4 md:px-12 col-span-1 flex flex-col gap-5 shadow-md rounded-2xl">
          <img src="images/iconEPontos.svg" className="w-16" />
          <h2 className="text-yellow-500 font-medium">Pontos Extras</h2>
          <p className="font-bold">{pontuacaoExtraTotal}</p>
        </section>
      </div>
    </div>
  );
}
