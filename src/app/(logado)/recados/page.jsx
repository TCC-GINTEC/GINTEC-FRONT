"use client"
import { useEffect } from "react";
import { useState } from "react"
import httpClient from '../../../service/api'
import { toast } from "sonner";
import { Icon } from "@iconify/react";

export default function Recados() {
    const [notification, setNotification] = useState([]);
    const [newNotification, setNewNotification] = useState({ titulo: '', descricao: '', color: '' });

    useEffect(() => {
        handleGetNotification();
    }, [])

    const handleAddNotification = () => {
        if (!newNotification.titulo || !newNotification.descricao || !newNotification.color) {
            toast.warning("Por favor, preencha todos os campos.");
            return;
        }

        httpClient.post("Notificacao", newNotification).then(() => {
            handleGetNotification();
            setNewNotification({ titulo: '', descricao: '', color: '' });
        }).catch(error => {
            console.error("Erro ao adicionar notificação", error);
        });
    };


    const handleGetNotification = () => {
        httpClient.get("Notificacao").then((response) => {
            setNotification(response.data)
        })
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-[32px] font-[500]">Recados</h1>                
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 flex gap-4 flex-wrap">
                    {notification.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                margin: "10px 5px",
                                padding: "10px",
                                borderRadius: "8px",
                                display: "flex",
                                flexDirection: "row",
                                backgroundColor: "#ffffff",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                height: "87px",
                                width: "100%"
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: item.color,
                                    height: "100%",
                                    width: "8px",
                                    marginRight: "6px",
                                    borderTopLeftRadius: "10px",
                                    borderBottomLeftRadius: "10px",
                                }}
                            ></div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    marginLeft: "10px",
                                    width: "100%"
                                }}
                            >
                                <span style={{ fontWeight: "bold" }}>{item.titulo}</span>
                                <span className="flex justify-between w-full">
                                    <span>{item.descricao}</span> <Icon icon="mdi:trash" onClick={() => {
                                        httpClient.delete("Notificacao/" + item.codigo).then((response) => {
                                            if (response.status == 204) {
                                                toast.success("Notificação deletada com sucesso!")
                                                handleGetNotification();
                                            }
                                            else {
                                                toast.warning("Algo deu errado!")
                                                handleGetNotification();
                                            }
                                        })
                                    }} />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <div className="p-6 mt-4 bg-gray-100 rounded-xl">
                        <h2 className="text-lg font-semibold mb-4">Adicionar Notificação</h2>
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Título"
                                value={newNotification.titulo}
                                onChange={(e) => setNewNotification({ ...newNotification, titulo: e.target.value })}
                                className="border border-gray-300 p-2 rounded bg-white"
                            />
                            <textarea
                                placeholder="Descrição"
                                value={newNotification.descricao}
                                onChange={(e) => setNewNotification({ ...newNotification, descricao: e.target.value })}
                                className="border border-gray-300 p-2 rounded bg-white"
                            />
                            <input
                                type="color"
                                value={newNotification.color}
                                onChange={(e) => setNewNotification({ ...newNotification, color: e.target.value })}
                                className="border border-gray-300 px-2 py-1 rounded w-full bg-white"
                            />
                            <button
                                onClick={handleAddNotification}
                                className="bg-[#005261] text-white py-2 px-4 rounded"
                            >
                                Adicionar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}