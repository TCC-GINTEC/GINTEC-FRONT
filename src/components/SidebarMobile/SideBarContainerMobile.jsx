export default function SideBarContainerMobile({ children, active, className,Action, exibirSidebar }) {
  
    return (
        <div>
            <aside className={`
            
               ${exibirSidebar ?'block w-64 ': 'hidden transition-all duration-700'}
                transition-all duration-300 rounded-r-3xl bg-[#E6EFF0]
                flex flex-col items-center justify-between  fixed left-0 top-0 h-full
                z-50
            `}>
                {children}
            </aside>
        </div>
    )
}