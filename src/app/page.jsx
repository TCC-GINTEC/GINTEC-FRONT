"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import "./globals.css";

export default function Home() {
  return (
    <div className="bg-white">
      <header className="flex justify-between items-center w-full fixed top-0 left-0 p-8 z-50  bg-white text-white">
        <h2 className="text-4xl font-bold flex"><Image src={"/images/icon.svg"} width={140} height={35} /></h2>
        <Link href="/login">
          <button className="bg-[#005C6D] px-12 text-black px-6 py-2 rounded-full text-lg font-semibold flex items-center text-white">
            Fazer Login
          </button>
        </Link>
      </header>
      <section className="bg-white border-2 rounded-xl py-8 px-24 mt-32 mx-8 flex justify-evenly">
        <div className="">
          <h3 className="text-[32px] font-semibold">
            Gincana: Mais que <br />
            competição, um <span className="text-[#005C6D]">caminho</span><br />
            para o crescimento!
          </h3>
          <p className="opacity-[0.7] w-[75%]">Desenvolvimento, diversão e união em cada desafio. Agora, com uma ferramenta para deixar tudo mais dinâmico! Conheça nossa plataforma e veja como ela pode potencializar a diversão e o aprendizado!</p>
        </div>
        <div><Image src={"/images/bgindex.svg"} width={392} height={333} /></div>
      </section>
      <section className="bg-white  py-8 px-24 mt-12 mx-8 flex justify-evenly">
        <div><Image src={"/images/bgindex2.svg"} width={392} height={333} /></div>
        <div className="">
          <h3 className="text-[32px] font-semibold">
            O que é a Gincana?
          </h3>
          <p className="opacity-[0.7] w-[75%]">A gincana é mais do que uma simples competição entre turmas. Ela promove habilidades essenciais, como o trabalho em equipe, liderança, criatividade e a resolução de problemas. Participar de uma gincana escolar é uma forma de desenvolver competências que levamos para a vida.</p>
        </div>
      </section>
      <section className="bg-white  py-8 px-24 mt-12 text-center ">
        <h3 className="text-[32px] font-semibold">
          Descubra a importância da gincana
        </h3>
        <div className="flex justify-around flex-wrap">
          <article className="w-[350px] flex flex-col items-center gap-4">
            <Image src={"/images/colaboracao.svg"} height={114} width={114} />
            <h4 className="font-semibold">Colaboração</h4>
            <p>Trabalhar em equipe para atingir objetivos comuns.</p>
          </article>
          <article className="w-[350px] flex flex-col items-center gap-4">
            <Image src={"/images/desenvolvimentopessoal.svg"} height={114} width={114} />
            <h4 className="font-semibold">Desenvolvimento pessoal</h4>
            <p>Desafios que testam sua habilidade de pensar rápido e de forma criativa.</p>
          </article>
          <article className="w-[350px] flex flex-col items-center gap-4">
            <Image src={"/images/espirito.svg"} height={114} width={114} />
            <h4 className="font-semibold">Espírito de competição saudável</h4>
            <p>Superar desafios, mas também valorizar o esforço dos outros.</p>
          </article>
        </div>
      </section>
      <section className="bg-white  py-8 px-24 mt-12 mx-8 flex justify-evenly mb-24">
        <div className="">
          <h3 className="text-[32px] font-semibold">
          A Tecnologia a Favor da Gincana
          </h3>
          <p className="opacity-[0.7] w-[75%]">Para tornar a gincana ainda mais envolvente e organizada, criamos uma ferramenta digital que facilita a gestão e o acompanhamento das atividades. Nosso sistema permite que alunos, professores e organizadores possam interagir de forma dinâmica, <span className="text-[#005C6D]">acompanhar pontuações em tempo real, participar de forma mais integrada</span> e muito mais .</p>
        </div>
        <div><Image src={"/images/bgindex3.svg"} width={392} height={333} /></div>
      </section>

      <footer className="text-center p-8 bg-[#005C6D] text-white">
        <p>2024 Gintec. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
