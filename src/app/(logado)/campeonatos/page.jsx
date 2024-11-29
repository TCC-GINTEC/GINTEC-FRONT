"use client"

import { useEffect, useState } from "react"
import httpClient from "@/service/api"
import Link from "next/link";

export default function Campeonatos() {
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        handleGetDates();
    }, [])
    const handleGetDates = async () => {
        httpClient.get("/Calendario").then((response) => {
            setDates(response?.data ?? [])
            setSelectedDate(response?.data[0]?.codigo ?? [])
        })
    }

    const handleDateClick = (index, codigo) => {
        setSelectedIndex(index);
        setSelectedDate(codigo);
    };
    return (
        <div className="w-full max-w-72 md:max-w-full">
            <h1 className="text-[32px] font-[500]">Campeonatos</h1>            
            <div className="flex gap-4 justify-center mt-6 flex-wrap">
                {dates.map((date, index) => {
                    const day = new Date(date.dataGincana).getDate();
                    const isSelected = index === selectedIndex;
                    return (
                        <div key={index}
                            className={`w-24 h-32 flex items-center justify-center rounded-md ${isSelected ? 'bg-[#005261]' : 'bg-[#E6EFF0]'
                                }`}
                            onClick={() => handleDateClick(index, date.codigo)}
                        >
                            <h2 className={`text-[32px] ${isSelected ? 'text-white' : ''}`}>
                                {day}
                            </h2>
                        </div>
                    );
                })}
            </div>
            <div className="flex mt-8 justify-center gap-4 flex-wrap">
                {dates.find(x => x.codigo == selectedDate)?.campeonatos.map((camp, index) => {
                    return (
                        <Link href={"/campeonatos/campeonato?id=" + camp.codigo} key={index}>
                            <div className="shadow-md flex w-60 items-center p-6 gap-4" >
                            <div className="rounded-full bg-[#005261] w-[50px] h-[50px]"></div>
                                <h2>{camp.descricao}</h2>
                            </div>
                        </Link>
                    )
                })}


            </div>
        </div>
    )
}