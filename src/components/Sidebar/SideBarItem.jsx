export default function SideBarItem({ active, src, text, url}) {
   
    
    return (
        <button className={`w-full flex items-center p-2`}
       >
            <img className="h-5 w-5" src={src} />
            <span className={`
            ml-3
            ${active ? 'block' : 'hidden'}
          `}>{text}</span>
        </button>
    )
}