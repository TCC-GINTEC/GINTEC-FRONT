export default function SideBarContainer({ children, active, className }) {
    return (
        <div className=''>
            <aside className={`
        transition-all duration-300
        flex flex-col items-center justify-between bg-[#E6EFF0] h-full z-50
        ${active ? 'w-64' : 'w-20'} ${className} sm:static fixed 
      `}>
                {children}
            </aside>            
        </div>

    )
}