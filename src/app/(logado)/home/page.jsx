"use client"

import Head from 'next/head';
import TableData from "@/components/table/table"
import Column from "@/components/table/column"

export default function Home() {
  var data = [
    {
      nome: "João Silva",
      email: "joao.silva@example.com",
      senha: "123456",
      RM: "123456"
    },
    {
      nome: "Maria Santos",
      email: "maria.santos@example.com",
      senha: "abcdef",
      RM: "654321"
    },
    {
      nome: "Pedro Oliveira",
      email: "pedro.oliveira@example.com",
      senha: "qwerty",
      RM: "987654"
    },
    {
      nome: "Ana Souza",
      email: "ana.souza@example.com",
      senha: "password",
      RM: "456123"
    },
    {
      nome: "Lucas Pereira",
      email: "lucas.pereira@example.com",
      senha: "letmein",
      RM: "789456"
    },
    {
      nome: "Carla Lima",
      email: "carla.lima@example.com",
      senha: "football",
      RM: "321654"
    },
    {
      nome: "Rodrigo Almeida",
      email: "rodrigo.almeida@example.com",
      senha: "baseball",
      RM: "987123"
    },
    {
      nome: "Mariana Costa",
      email: "mariana.costa@example.com",
      senha: "soccer",
      RM: "654789"
    },
    {
      nome: "Gustavo Fernandes",
      email: "gustavo.fernandes@example.com",
      senha: "hockey",
      RM: "321987"
    },
    {
      nome: "Amanda Martins",
      email: "amanda.martins@example.com",
      senha: "tennis",
      RM: "789321"
    },
    {
      nome: "Rafaela Santos",
      email: "rafaela.santos@example.com",
      senha: "golf",
      RM: "456789"
    },
    {
      nome: "Diego Silva",
      email: "diego.silva@example.com",
      senha: "basketball",
      RM: "123789"
    },
    {
      nome: "Fernanda Oliveira",
      email: "fernanda.oliveira@example.com",
      senha: "volleyball",
      RM: "987456"
    },
    {
      nome: "Marcelo Pereira",
      email: "marcelo.pereira@example.com",
      senha: "cricket",
      RM: "654987"
    },
    {
      nome: "Patrícia Lima",
      email: "patricia.lima@example.com",
      senha: "rugby",
      RM: "321456"
    },
    {
      nome: "Juliana Almeida",
      email: "juliana.almeida@example.com",
      senha: "swimming",
      RM: "789654"
    },
    {
      nome: "Ricardo Costa",
      email: "ricardo.costa@example.com",
      senha: "surfing",
      RM: "456321"
    },
    {
      nome: "Camila Fernandes",
      email: "camila.fernandes@example.com",
      senha: "skiing",
      RM: "123654"
    },
    {
      nome: "Henrique Martins",
      email: "henrique.martins@example.com",
      senha: "snowboarding",
      RM: "987321"
    },
    {
      nome: "Vanessa Santos",
      email: "vanessa.santos@example.com",
      senha: "skateboarding",
      RM: "654123"
    },
    {
      nome: "Luciana Silva",
      email: "luciana.silva@example.com",
      senha: "cycling",
      RM: "321789"
    },
    {
      nome: "Bruno Oliveira",
      email: "bruno.oliveira@example.com",
      senha: "running",
      RM: "789123"
    },
    {
      nome: "Aline Costa",
      email: "aline.costa@example.com",
      senha: "jogging",
      RM: "456987"
    },
    {
      nome: "Felipe Fernandes",
      email: "felipe.fernandes@example.com",
      senha: "walking",
      RM: "123456"
    },
    {
      nome: "Tatiane Almeida",
      email: "tatiane.almeida@example.com",
      senha: "climbing",
      RM: "987654"
    },
    {
      nome: "Renato Martins",
      email: "renato.martins@example.com",
      senha: "hiking",
      RM: "654321"
    },
    {
      nome: "Isabela Santos",
      email: "isabela.santos@example.com",
      senha: "running",
      RM: "321654"
    },
    {
      nome: "Anderson Silva",
      email: "anderson.silva@example.com",
      senha: "swimming",
      RM: "789321"
    },
    {
      nome: "Débora Oliveira",
      email: "debora.oliveira@example.com",
      senha: "cycling",
      RM: "456987"
    },
    {
      nome: "Leonardo Costa",
      email: "leonardo.costa@example.com",
      senha: "jogging",
      RM: "123456"
    },
    {
      nome: "Fabiana Fernandes",
      email: "fabiana.fernandes@example.com",
      senha: "climbing",
      RM: "987654"
    },
    {
      nome: "Roberto Almeida",
      email: "roberto.almeida@example.com",
      senha: "hiking",
      RM: "654321"
    },
    {
      nome: "Priscila Santos",
      email: "priscila.santos@example.com",
      senha: "hiking",
      RM: "321654"
    },
    {
      nome: "Vinícius Oliveira",
      email: "vinicius.oliveira@example.com",
      senha: "running",
      RM: "789321"
    },
    {
      nome: "Carolina Costa",
      email: "carolina.costa@example.com",
      senha: "swimming",
      RM: "456987"
    },
    {
      nome: "Renata Fernandes",
      email: "renata.fernandes@example.com",
      senha: "cycling",
      RM: "123456"
    },
    {
      nome: "André Almeida",
      email: "andre.almeida@example.com",
      senha: "jogging",
      RM: "987654"
    },
    {
      nome: "Thiago Santos",
      email: "thiago.santos@example.com",
      senha: "climbing",
      RM: "654321"
    },
    {
      nome: "Juliana Oliveira",
      email: "juliana.oliveira@example.com",
      senha: "hiking",
      RM: "321654"
    },
    {
      nome: "Lucas Costa",
      email: "lucas.costa@example.com",
      senha: "running",
      RM: "789321"
    },
    {
      nome: "Patrícia Fernandes",
      email: "patricia.fernandes@example.com",
      senha: "swimming",
      RM: "456987"
    },
    {
      nome: "Daniel Almeida",
      email: "daniel.almeida@example.com",
      senha: "cycling",
      RM: "123456"
    }
  ]

  return (
    <>
      <Head>
        <title>Home - Gintec</title>
        <link rel="icon" href="/images/icon.svg" />
      </Head>

      <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
        Alunos da sala
      </h1>
      <TableData data={data} pageNumberItens={15}>
        <Column field="nome" header="Nome do Aluno" />
        <Column field="email" header="E-mail" />
        <Column field="senha" header="Senha" />
        <Column field="RM" header="RM" />
      </TableData>

    </>
  )
}
