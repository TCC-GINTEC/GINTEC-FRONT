"use client"

import httpClient from "@/service/api";
import { useEffect, useRef, useState } from "react";

export default function Doacao() {
    const [doacao, setDoacao] = useState([]);
    const [item, setItem] = useState({});

    useEffect(() => {
        handleGetdoacao();
    }, [])

    const modalRef = useRef(null);


    const openModal = (item) => {
        if (modalRef.current) {
            setItem(item);
            modalRef.current.classList.remove("hidden");
            modalRef.current.classList.add("flex");
        }
    };

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.classList.add("hidden");
            modalRef.current.classList.remove("flex");
        }
    };

    const handleGetdoacao = async () => {
        httpClient.get("Doacao/ObterDoacao").then((response) => {
            setDoacao(response?.data ?? []);
        })
    }


    const handleUpdateActivity = () => {
        httpClient.put("/AtualizarDoacao/" + item.codigo, {
            Nome: item.nome,
            DataLimite: item.dateLimite,
            Pontuacao: item.pontuacao
        }).then((response) => {
            handleGetdoacao();
            closeModal();
        })
    }
    const handleDeleteActivity = () => {
        httpClient.delete("/DeletarDoacao/" + item.codigo).then((response) => {
            handleGetGames();
            closeModal();
        })
    }
    const openModal2 = (item) => {
        if (modalRef.current) {
            modalRef2.current.classList.remove("hidden");
            modalRef2.current.classList.add("flex");
        }
    };
    return (

        <div>
            <h1 className="text-[32px] font-[500]">Doações</h1>
            <div className="w-full flex justify-end pr-32 gap-4">
                <button className="text-[30px] bg-gray-300 px-8 rounded-lg my-4" onClick={openModal2}>+</button>
            </div>
            <div
                id="default-modal"
                ref={modalRef}
                tabIndex="-1"
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">

                            </h3>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <div>
                                <div className="relative z-0 my-5">
                                    <input onChange={(e) => { setItem({ ...item, nome: e.target.value }) }} value={item.nome} name="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" " />
                                    <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Nome
                                    </label>
                                </div>
                                <div className="relative z-0 my-5">

                                    <input
                                        type="date"
                                        onChange={(e) => { setItem({ ...item, dateLimite: e.target.value }) }}
                                        value={item.dateLimite ? item.dateLimite.split('T')[0] : ''} // Formatar a data para 'YYYY-MM-DD'
                                        name="datelimite"
                                        autoComplete="datelimite"
                                        id="datelimite"
                                        className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer"
                                        placeholder=" "
                                    />
                                    <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Data Limite
                                    </label>
                                </div>
                                <div className="relative z-0 my-5">
                                    <input type="number" onChange={(e) => { setItem({ ...item, pontuacao: e.target.value }) }} value={item.pontuacao} name="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" " />
                                    <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Pontuacao
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                                data-modal-hide="default-modal"
                                type="button"
                                onClick={handleUpdateActivity}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Atualizar
                            </button>
                            <button
                                data-modal-hide="default-modal"
                                type="button"
                                onClick={closeModal}
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Voltar
                            </button>
                            <button
                                data-modal-hide="default-modal"
                                type="button"
                                onClick={handleDeleteActivity}
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Deletar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 flex-wrap">
                {doacao.map((item, index) => {
                    return (
                        <div className="border-2 border-[#8A29E6] h-16 w-52 flex items-center justify-center rounded-md" key={index} onClick={() => { openModal(item) }}>
                            <h2 className="break-keep text-[#8A29E6] font-[600]">{item.nome}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}


