export default function SideBarContainer({ children, active, className }) {
    return (
        <div className='mr-20'>
            <aside className={`
        transition-all duration-300 rounded-r-3xl bg-[#E6EFF0]
        flex flex-col items-center justify-between bg-green fixed  h-full
        ${active ? 'w-64' : 'w-20'} ${className}
      `}>
                {children}
            </aside>
        </div>
    )
}