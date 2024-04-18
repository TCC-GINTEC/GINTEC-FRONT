export default function SideBarContainer({ children, active, className }) {
    return (
        <aside className={`
        transition-all duration-300
        flex flex-col items-center justify-between bg-green
        ${active ? 'w-64' : 'w-20'} ${className}
      `}>
            {children}
        </aside>
    )
}