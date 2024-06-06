"use client";

import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import "./globals.css";

export default function Home() {
  return (
    <div className='pb-20'>
      <header className="flex justify-center items-center gap-8 p-8">
        <Image alt="Icon" width={100} height={100} src="/images/icon.svg" />
        <h2 className="roboto-bold text-4xl">Gintec</h2>
        <Link href={"/login"}>
          <button
            className="bg-[#005C6D] absolute right-20 w-[200px] text-xl font-semibold text-white
          sm:flex justify-center items-center gap-2 p-4 rounded-full hidden "
          >
            <Icon
              icon="ic:baseline-login"
              className="text-white w-[30px] h-[30px]"
            />
            Login
          </button>
        </Link>

        <Link href={"/login"}>
          <button className="bg-[#005C6D] sm:hidden absolute right-0 p-4 rounded-2xl text-center">
            <Icon
              icon="ic:baseline-login"
              className="text-white w-[30px] h-[30px]"
            />
          </button>
        </Link>
      </header>
      <main>
        <div className="w-3/4 mx-auto">
          <div className="flex items-center md:justify-evenly">
            <div className="md:w-2/4 shadow-2xl p-14 rounded-2xl  translate-y-12 border border-[#005C6D]">
              <h2 className="roboto-bold text-2xl uppercase text-[#005C6D] ">
                O que é a Gincana ?
              </h2>
              <h3 className="roboto-bold text-4xl ">Diversão X Competividade</h3>
              <p className="mt-4">
                A gincana é um projeto escolar da ETEC Antônio Furlan que
                incentiva os alunos a coletividade e trabalho em equipe em
                campeonatos e jogos elaborados pelos próprios alunos, além de
                desenvolver suas habilidades interpessoais e intrapessoais.
              </p>
            </div>
            <div>
              <img
                src="/images/etec.jpg"
                className="max-w-[350px] hidden sm:block rounded-xl -translate-y-3"
              />
            </div>
          </div>
        </div>
        <h1 className="text-center text-4xl mt-8 font-bold p-24 text-[#005C6D]">
          Porém, porque não automatizar?
        </h1>
        <div className=" w-3/4 mx-auto mb-4">
          <div className="flex items-center">
            <div>
              <img
                src="/images/bola.png"
                className="min-w-[150px] max-w-[500px] hidden sm:block"
              />
            </div>
            <div className="shadow-2xl p-14 rounded-2xl border border-[#005C6D]">
              <h2 className="roboto-bold text-2xl uppercase text-[#005C6D]">Gintec</h2>
              <h3 className="roboto-bold text-4xl">TECNOLOGIA X GINCANA</h3>
              <p className="mt-4">
              Para proporcionar o melhor que a tecnologia pode oferecer, desenvolvemos um avançado sistema de
               gerenciamento web e um aplicativo mobile. Este sistema permite que os alunos verifiquem suas 
               pontuações e chequem os avisos em tempo real, substituindo as antigas planilhas e fichas manuais
                de pontos.Através da tecnologia, estamos transformando a forma como a gincana é organizada , 
                trazendo praticidade e inovação para todos os envolvidos.
              </p>
            </div>
          </div>
        </div>
        <div className="  p-4 m-auto gap-8 md:gap-2 min-w-3/4 flex flex-col md:flex-row items-center justify-evenly">
          <div className="flex flex-col sm:flex-row items-center ">
            <div className="shadow-2xl p-4 flex items-center justify-center gap-7 w-full rounded-2xl border border-[#005C6D]">
              <img src="/images/ficha.png" className="min-w-[120px] max-w-[100px]" />
              <img src="/images/excel.png" className=" min-w-[120px] max-w-[100px]" />
            </div>
          </div>
          <img
            src="/images/seta-direita.png"
            className="max-w-[90px] rotate-90 md:rotate-0 w-full"
          />
          <div className="flex flex-col sm:flex-row items-center">
            <div className="shadow-2xl p-4 flex items-center justify-center gap-7  rounded-3xl border border-[#005C6D]">
              <img
                src="/images/pc.png"
                className="min-w-[120px] max-w-[100px]"
              />
              <img
                src="/images/celular.png"
                className="min-w-[120px] max-w-[100px]"
              />
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col gap-20 mx-auto w-3/4">
          <div>
            <div className="w-full shadow-2xl p-4 flex flex-col md:flex-row justify-between gap-7  rounded-3xl border border-[#005C6D]">
              <img
                src="/images/pc.png"
                className="min-w-[300px] max-w-[100px] mx-auto"
              />
              <div>
                <h3 className='roboto-bold text-center text-3xl uppercase text-[#005C6D]'>Sistema Web</h3>
                <p className='md:w-2/4 mx-auto mt-4'>
                Para garantir uma experiência integrada e eficiente, fornecemos um sistema completo de gerenciamento de atividades.
                Ele é projetado para facilitar a administração de todas as etapas, desde a criação de atividades até o acompanhamento 
                do desempenho dos participantes,  tudo em uma interface amigável e intuitiva.
                Sendo assim temos como principais funcionabilidades:
                </p>
                <p className='roboto-bold md:w-2/4 mx-auto mt-4'>Criação de Atividades e Jogos,
                 Gerenciamento de Notificações e
                 Ranking dos Jogadores.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full shadow-2xl p-4 flex flex-col md:flex-row justify-between gap-7  rounded-3xl border border-[#005C6D]">
              <img
                src="/images/celular.png"
                className="min-w-[300px] max-w-[100px] mx-auto"
              />
              <div>
                <h3 className="font-bold text-center text-3xl uppercase text-[#005C6D]">Mobile</h3>
                <p className="md:w-2/4 mx-auto mt-4">
                   Nosso sistema de gerenciamento de atividades inclui uma versão mobile especialmente desenvolvida para os alunos.
                    Através dessa plataforma, os alunos podem facilmente acessar e interagir 
                   com diversas funcionalidades projetadas para aprimorar sua experiência e participação nas atividades escolares.
                   Tendo como principais funcionabilidades :
    
                </p>
                <p className='roboto-bold md:w-2/4 mx-auto mt-4'>Qr code , Validação de atividades e fornecimento de informações 
                sobre oficinas , campeonatos e jogos . 
                
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
