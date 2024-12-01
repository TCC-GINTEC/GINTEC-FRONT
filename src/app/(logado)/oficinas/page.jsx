"use client"

import httpClient from "@/service/api";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function Oficinas() {
    const [oficinas, setOficinas] = useState([]);
    const [calendarios, setCalendarios] = useState([]);
    const [salas, setSalas] = useState([]);
    const [item, setItem] = useState({});

    useEffect(() => {
        handleGetoficinas();
        handleGetCalendarios();
        handleGetClassrooms();
    }, [])

    const modalRef = useRef(null);
    const modalRef2 = useRef(null);


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
            setItem({})
        }
    };
    const closeModal2 = () => {
        if (modalRef2.current) {
            modalRef2.current.classList.add("hidden");
            modalRef2.current.classList.remove("flex");
        }
    };

    const handleGetoficinas = async () => {
        httpClient.get("Oficina").then((response) => {
            setOficinas(response?.data ?? []);
        })
    }
    const handleGetClassrooms = async () => {
        try {
            const response = await httpClient.get("/Sala");
            setSalas(response.data);
        } catch (error) {
            console.error("Error fetching classrooms:", error);
        }
    };


    const handleUpdateActivity = () => {
        if (!item.descricao) {
            toast.warning("Preencha o nome da Doação.")
            return;
        }
        httpClient.put("/Oficina/" + item.codigo, {
            descricao: item.descricao,
            salaCodigo: item.salaCodigo,
            calendarioCodigo: item.calendarioCodigo
        }).then((response) => {
            if (response.status == 200) {

                toast.success("Oficina atualizada com sucesso!")
                handleGetoficinas();
            }
            else {
                toast.success("Algo deu errado!");
            }
            closeModal();
        })
    }
    const handleAddActivity = () => {
        if (!item.descricao) {
            toast.warning("Preencha o nome da Oficina.")
        }
        httpClient.post("/Oficina", {
            descricao: item.descricao,
            salaCodigo: item.salaCodigo,
            calendarioCodigo: item.calendarioCodigo
        }).then((response) => {
            toast.success("Oficina adicionada com sucesso!")
            handleGetoficinas();
            closeModal();
        })
    }
    const handleDeleteActivity = () => {
        httpClient.delete("/Oficina/" + item.codigo).then((response) => {
            if(response.status == 204){
                toast.success("Oficina deletada com sucesso!")
            }
            handleGetoficinas();
            closeModal();
        })
    }
    const openModal2 = (item) => {
        setItem({})
        if (modalRef2.current) {
            modalRef2.current.classList.remove("hidden");
            modalRef2.current.classList.add("flex");
        }
    };

    const handleGetCalendarios = async () => {
        try {
            const response = await httpClient.get("/Calendario");
            setCalendarios(response.data);
        } catch (error) {
            console.error("Error fetching calendars:", error);
        }
    };
    return (

        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-[32px] font-[500]">Oficinas</h1>
                <span className="flex flex-col items-center gap-1" onClick={() => { window.history.back() }}>
                    <img className={`h-10 w-10 `} src="/images/voltarpagina.svg" />
                    <p className={`text-sm text-[#005261] font-semibold sm-w-full`}>página anterior</p>
                </span>
            </div>
            <div className="w-full flex justify-end pr-32 gap-4">
                <button className="text-[30px] bg-gray-300 px-8 rounded-lg my-4" onClick={() => {
                    openModal2()
                    setItem({})
                }}>+</button>
            </div>
            <div
                id="default-modal"
                ref={modalRef2}
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
                                onClick={closeModal2}
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
                                    <input onChange={(e) => { setItem({ ...item, descricao: e.target.value }) }} value={item.descricao} name="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" " />
                                    <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Nome
                                    </label>
                                </div>
                                <div className="relative z-0 my-5">
                                    <select onChange={(e) => { setItem({ ...item, salaCodigo: e.target.value }) }} value={item.salaCodigo} name="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" ">
                                        {salas.map((sala, index) => {
                                            return (<option key={index} aria-checked={index == 0} value={sala.codigo}>{sala.serie}° {sala.descricao}</option>)
                                        })}
                                    </select>
                                    <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Sala
                                    </label>
                                </div>
                                <div className="relative z-0 my-5">
                                    <select onChange={(e) => { setItem({ ...item, calendarioCodigo: e.target.value }) }} value={item.calendarioCodigo} name="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" ">
                                        {calendarios.map((calendario, index) => {
                                            const date = new Date(calendario.dataGincana);
                                            return (<option key={index} value={calendario.codigo}>{`${date.getDate().toString().padStart(2, "0")}/${((date.getMonth() + 1).toString().padStart(2, "0"))}`}</option>)
                                        })}
                                    </select>
                                    <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Dia Gincana
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                                data-modal-hide="default-modal"
                                type="button"
                                onClick={handleAddActivity}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Adicionar
                            </button>
                            <button
                                data-modal-hide="default-modal"
                                type="button"
                                onClick={closeModal2}
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Voltar
                            </button>
                        </div>
                    </div>
                </div>
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
                                    <input onChange={(e) => { setItem({ ...item, descricao: e.target.value }) }} value={item.descricao} name="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" " />
                                    <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Nome
                                    </label>
                                </div>
                                <div className="relative z-0 my-5">
                                    <select onChange={(e) => { setItem({ ...item, salaCodigo: e.target.value }) }} value={item.salaCodigo} name="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" ">
                                        {salas.map((sala, index) => {
                                            return (<option key={index} value={sala.codigo}>{sala.serie}° {sala.descricao}</option>)
                                        })}
                                    </select>
                                    <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Sala
                                    </label>
                                </div>
                                <div className="relative z-0 my-5">
                                    <select onChange={(e) => { setItem({ ...item, calendarioCodigo: e.target.value }) }} value={item.calendarioCodigo} name="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" ">
                                        {calendarios.map((calendario, index) => {
                                            const date = new Date(calendario.dataGincana);
                                            return (<option key={index} value={calendario.codigo}>{`${date.getDate().toString().padStart(2, "0")}/${((date.getMonth() + 1).toString().padStart(2, "0"))}`}</option>)
                                        })}
                                    </select>
                                    <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Dia Gincana
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
                {oficinas.map((item, index) => {
                    return (
                        <div className="border-2 border-[#00C1CF] h-16 w-52 flex items-center justify-center rounded-md" key={index} onClick={() => { openModal(item) }}>
                            <h2 className="break-keep text-[#00C1CF] font-[600]">{item.descricao}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}


