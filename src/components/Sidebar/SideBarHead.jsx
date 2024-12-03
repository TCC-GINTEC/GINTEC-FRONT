export default function SideBarHead({ active, Action }) {
    return (
        <div className="flex items-center justify-between z-[60]">
            <img className={`ml-3
            ${active ? 'block' : 'hidden'}
          `}
                src="/images/icon.png" width={100} />

            <img className={`w-full h-full object-cover ${active ? 'hidden' : 'block'}`} src="/images/IconMini.svg" onClick={Action} />
            <img className={`h-8 w-8 relative z-[60] delay-200 transition ${active ? 'left-8' : ' rotate-180'}`} src="/images/setaesquerda.svg" onClick={Action} />
        </div>
    )
}