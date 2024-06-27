export default function SideBarItem({ active, src, text }) {
    return (
        <button className="flex items-center w-full p-3 rounded-xl hover:bg-light-green text-[#005261]">
            <img className="h-5 w-5" src={src} />
            <span className={`
            ml-3
            ${active ? 'block' : 'hidden'}
          `}>{text}</span>
        </button>
    )
}