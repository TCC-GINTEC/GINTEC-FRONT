export default function SideBarContainer({ children, active, className }) {
    return (
        <div className='mr-20'>
            <aside className={`
        transition-all duration-300
        flex flex-col items-center justify-between bg-green fixed h-full z-50
        ${active ? 'w-64' : 'w-20'} ${className}
      `}>
                {children}
            </aside>
        </div>
    )
}