"use client"

import { toast } from "sonner";

export default function SideBarProfile({active, src, username}) {        
    return (
        <div className="flex items-center justify-between w-full h-16 px-3 py-2 bg-light-green">
            <div className={`
            w-full space-x-3 flex items-center
            ${active ? 'flex' : 'hidden'}
          `}>
                <img className="h-11 w-11 rounded-xl" src={src ? src : "https://cdn-icons-png.flaticon.com/512/3106/3106921.png"} />
                <div className="flex flex-col items-left justify-center">
                    <span className="text-sm">{username}</span>
                </div>                
            </div>

            <button className="p-3 rounded-xl hover:bg-green">
                <img className={`h-6 w-6  ${active ? 'hidden' : 'block'}`} src={src ? src : "https://cdn-icons-png.flaticon.com/512/3106/3106921.png"} />
            </button>
        </div>
    )
}