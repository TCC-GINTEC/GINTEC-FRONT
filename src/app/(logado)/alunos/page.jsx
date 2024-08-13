"use client"

import Head from 'next/head';
import TableData from "@/components/table/table"
import Column from "@/components/table/column"
import { useEffect, useState } from 'react';
import httpClient from '@/service/api';

export default function Home() {
  const [data, setData] = useState([]);

  const handleGetStudants = async () => {
    httpClient.get("/Usuario/Sala/1").then((response) => {
      console.log(response.data)
      setData(response.data)
    })
  }
  useEffect(() => {
    handleGetStudants();
  }, [])

  return (
    <>
      <Head>
        <title>Home - Gintec</title>
        <link rel="icon" href="/images/icon.svg" />
      </Head>

      <TableData data={data} pageNumberItens={15}>
        <Column field="nome" header="Nome do Aluno" />        
      </TableData>

    </>
  )
}
