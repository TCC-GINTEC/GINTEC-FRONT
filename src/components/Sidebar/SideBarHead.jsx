export default function SideBarHead({ active, Action }) {
    return (
        <div className="flex items-center justify-between">
            <img className={`
            ${active ? 'block' : 'hidden'}
          `}
                src="/images/icon.svg" width={100} />
            <button className="p-3 rounded-xl hover:bg-light-green" onClick={Action}>
                <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png"/>
            </button>
        </div>
    )
}