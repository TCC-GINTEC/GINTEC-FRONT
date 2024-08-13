export default function SideBarHead({ active, Action }) {
    return (
        <div className="flex items-center justify-between">
            <img className={`ml-3
            ${active ? 'block' : 'hidden'}
          `}
                src="/images/icon.png" width={100} />
            <img className={`h-8 w-8 relative ${active ? 'left-8' : 'left-12'}`} src="/images/setaesquerda.png" onClick={Action} />
        </div>
    )
}