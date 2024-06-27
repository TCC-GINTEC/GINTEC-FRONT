export default function SideBarItem({ active, src, text, url, link }) {
    return (
        <button className={`w-full flex items-center p-2  ${ url === link?"bg-[url('/images/retangulo-bg.svg')] bg-no-repeat bg-right":""}`}
        >
            <img className="h-5 w-5" src={src} />
            <span className={`
            ml-3
            ${active ? 'block' : 'hidden'}
          `}>{text}</span>
        </button>
    )
}