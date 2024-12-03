"use client";

import { toast } from "sonner";
import { Icon } from "@iconify/react";

export default function SideBarProfile({ active, src, username }) {
    const handleLogout = () => {
        
        localStorage.clear();
        toast.success("Logout realizado com sucesso!");
        setTimeout(() => {
            window.location.href = "/";
        }, 500); 
    };

    return (
        <div className="flex items-center justify-between w-full h-16 px-3 py-2 bg-light-green">
            <div className={`
                w-full space-x-3 flex items-center
                ${active ? 'flex' : 'hidden'}
            `}>
                <img
                    className="h-11 w-11 rounded-full object-cover"
                    src={src ? src : "https://cdn-icons-png.flaticon.com/512/3106/3106921.png"}
                    alt="User avatar"
                />
                <div className="flex flex-col items-left justify-center">
                    <span className="text-sm">{username}</span>
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <button
                    className={`p-3 rounded-xl hover:bg-green ${active ? 'block' : 'hidden'}`}
                    onClick={handleLogout}
                    title="Logout"
                >
                    <Icon
                        icon="material-symbols:logout-rounded"
                        className="h-6 w-6 text-red-500"
                    />
                </button>

                <button className="p-3 rounded-xl hover:bg-green">
                    <img
                        className={`h-6 w-6 rounded-full object-cover ${active ? 'hidden' : 'block'}`}
                        src={src ? src : "https://cdn-icons-png.flaticon.com/512/3106/3106921.png"}
                        alt="User avatar"
                    />
                </button>
            </div>
        </div>
    );
}
