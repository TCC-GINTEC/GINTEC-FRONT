export default function SideBarContainer({ children, active, className,Action }) {
    return (
        <div>
            <aside className={`
                hidden
                transition-all duration-300 rounded-r-3xl bg-[#E6EFF0]
                sm:flex flex-col items-center justify-between  fixed  h-full
                ${active ? 'w-64' : 'w-20'} ${className}
            `}>
                {children}
            </aside>
        </div>
    )
}