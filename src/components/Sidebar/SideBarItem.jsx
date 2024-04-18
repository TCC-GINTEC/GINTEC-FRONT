export default function SideBarItem({ active, src, text }) {
    return (
        <button className="flex w-full p-3 rounded-xl hover:bg-light-green">
            <img className="h-6 w-6" src={src} />
            <span className={`
            ml-3
            ${active ? 'block' : 'hidden'}
          `}>{text}</span>
        </button>
    )
}