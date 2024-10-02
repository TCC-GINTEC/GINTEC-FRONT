"use client"
import httpClient from "@/service/api"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"


export default function OrgSalas() {
    const [classroom, setClassroom] = useState([]);


    useEffect(() => {
        handleGetClassRoom();
    }, [])

    const handleGetClassRoom = async () => {
        httpClient.get("/Sala").then((response) => {
            setClassroom(response?.data)
        })
    }

    return (
        <div>
            <h1 className="text-[32px] font-[500]">Organização das salas</h1>
            <p className="text-[#666666]">Todos os cursos</p>
            <div className="flex gap-4 p-2 flex-wrap">
                {classroom.map((item, index) => {
                    return (
                        <Link href={"/OrgSalas/sala?id=" + item.codigo} key={index}>
                            <div className="shadow-md flex w-60 items-center p-6 gap-4" >
                                {item.fotoSala ? 
                                
                                <img src={item.fotoSala} width={50} height={50} className="rounded-full"/>
                                :
                                <div className="rounded-full bg-[#FFC24C] w-[50px] h-[50px]"></div>
                            }
                                
                                <h2>{item.serie}° {item.descricao}</h2>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}