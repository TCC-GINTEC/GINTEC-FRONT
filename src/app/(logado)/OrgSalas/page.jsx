"use client";
import httpClient from "@/service/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function OrgSalas() {
    const [classroom, setClassroom] = useState([]);

    useEffect(() => {
        handleGetClassRoom();
    }, []);

    const handleGetClassRoom = async () => {
        httpClient.get("/Sala").then((response) => {
            setClassroom(response?.data);
        });
    };

    return (
        <div className="py-4 md:py-8 w-full">
            <h1 className="text-2xl md:text-4xl font-semibold">Organização das salas</h1>
            <p className="text-gray-600">Todos os cursos</p>
            <div className="flex flex-wrap gap-4 py-2">
                {classroom.map((item, index) => {
                    return (
                        <Link href={"/OrgSalas/sala?id=" + item.codigo} key={index} className="shadow-md flex w-full md:w-60 items-center p-4 md:p-6 gap-4">
                            {item.fotoSala ? (
                                <img src={item.fotoSala} width={50} height={50} className="rounded-full" />
                            ) : (
                                <div className="rounded-full bg-yellow-400 w-12 h-12 md:w-14 md:h-14"></div>
                            )}
                            <h2 className="text-sm md:text-base">{item.serie}° {item.descricao}</h2>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
