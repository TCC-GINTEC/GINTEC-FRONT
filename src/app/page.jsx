"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import "./globals.css";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <header className="flex justify-between items-center w-full fixed top-0 left-0 p-8 z-50  bg-black text-white">
        <h2 className="text-4xl font-bold flex"><Image src={"/images/icon.svg"} width={65} height={65}/></h2>
        <Link href="/login">
          <button className="bg-white text-black px-6 py-2 rounded-full text-lg font-semibold flex items-center">
            <Icon icon="ic:baseline-login" className="mr-2" />
            Login
          </button>
        </Link>
      </header>

      <main className="text-center text-black mt-12">
        <section className="h-screen bg-[url('/images/fundoHome.jpg')] bg-cover flex items-center justify-around">
          <div>
            <h1 className="text-7xl font-bold text-black">Desafie seus limites, conquiste a vitória, e viva a experiência inesquecível da <span className="text-red-600">Gintec</span>!</h1>
            <div className="py-4 mx-3 rounded-md bg-slate-500 bg-opacity-60 mt-4">
              <h3 className="text-xl text-white">
                Explore novos horizontes com a Gintec: desafie seus limites, conquiste vitórias e mergulhe em uma experiência inesquecível. Seja parte dessa jornada extraordinária!
              </h3>
            </div>
          </div>
        </section>

        <section className="px-8 h-screen flex flex-col justify-center bg-gray-200 py-4">
          <h2 className="text-4xl font-bold mb-8 ">Por que Participar?</h2>
          <div className="flex flex-wrap justify-around gap-5">
            <div className="p-8 shadow-lg rounded-xl border flex flex-col items-center w-[600px] hover:bg-gray-300 transition-all duration-200">
              <Icon icon={"fluent:people-team-16-filled"} height={70} color="red" />
              <h3 className="text-2xl font-semibold mb-4">Benefícios do Trabalho em Equipe</h3>
              <p>
                Participar de uma gincana incentiva o espírito de equipe e a colaboração. Os alunos aprendem a trabalhar juntos
                para atingir objetivos comuns, desenvolvendo habilidades de comunicação, resolução de problemas e liderança.
              </p>
            </div>
            <div className="p-8 shadow-lg rounded-xl border flex flex-col items-center w-[600px] hover:bg-gray-300 transition-all duration-200">
              <Icon icon={"icon-park-solid:sport"} height={70} color="red" />
              <h3 className="text-2xl font-semibold mb-4">Movimentar o Corpo</h3>
              <p>
                As atividades físicas são uma parte crucial da gincana. Movimentar o corpo através de jogos e competições ajuda os
                alunos a manterem-se saudáveis, melhorando a coordenação, resistência e bem-estar geral.
              </p>
            </div>
            <div className="p-8 shadow-lg rounded-xl border flex flex-col items-center w-[600px] hover:bg-gray-300 transition-all duration-200">
              <Icon icon={"icon-park-solid:play-volleyball"} height={70} color="red" />
              <h3 className="text-2xl font-semibold mb-4">Atividades Extracurriculares</h3>
              <p>
                As atividades extracurriculares, como a gincana, são essenciais para uma educação completa. Elas oferecem oportunidades
                para que os alunos explorem novos interesses, desenvolvam talentos e construam amizades duradouras fora da sala de aula.
              </p>
            </div>
          </div>
        </section>

        <section className="my-20 px-8">
          <h2 className="text-4xl font-bold mb-8">Galeria de Fotos</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Image src="/images/gincana1.webp" alt="Foto 1" width={400} height={400} className="rounded-xl" />
            <Image src="/images/gincana2.webp" alt="Foto 2" width={400} height={400} className="rounded-xl" />
            <Image src="/images/gincana3.jpeg" alt="Foto 3" width={400} height={400} className="rounded-xl" />
            <Image src="/images/gincana4.jpeg" alt="Foto 4" width={400} height={400} className="rounded-xl" />
          </div>
        </section>

        <section className="py-20 px-8 bg-gray-200">
          <h2 className="text-4xl font-bold mb-8">Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 shadow-lg rounded-xl border">
              <div>
                <Image src={"/images/pessoa1.jpg"} width={200} height={200} className="rounded-full size-28 object-cover" />
              </div>
              <p className="italic">"A gincana foi uma experiência incrível! Aprendi a importância do trabalho em equipe e fiz muitos amigos." - João Silva</p>
            </div>
            <div className="p-8 shadow-lg rounded-xl border">
              <div>
                <Image src={"/images/pessoa2.jpg"} width={200} height={200} className="rounded-full size-28 object-cover" />
              </div>
              <p className="italic">"Participar das atividades físicas me ajudou a melhorar minha saúde e me sinto mais energizado." - Maria Oliveira</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center p-8 bg-black text-white">
        <p>2024 Gintec. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
