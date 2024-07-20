export default function SideBarProfile({active, src, username}) {
    return (
        <div className="flex items-center justify-between w-full h-16 px-3 py-2 bg-light-green">
            <div className={`
            w-full space-x-3
            ${active ? 'flex' : 'hidden'}
          `}>
                <img className="h-11 w-11 rounded-xl" src={src} />
                <div className="flex flex-col items-left justify-center">
                    <span className="text-sm">{username}</span>
                </div>
            </div>

            <button className="p-3 rounded-xl hover:bg-green">
                <img className="h-6 w-6" src="/images/icon.svg" />
            </button>
        </div>
    )
}