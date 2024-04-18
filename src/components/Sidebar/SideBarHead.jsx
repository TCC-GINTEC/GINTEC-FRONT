import { MenuAlt1Icon } from '@heroicons/react/outline'

export default function SideBarHead({ active, Action }) {
    return (
        <div className="flex items-center justify-between">
            <img className={`
            ${active ? 'block' : 'hidden'}
          `}
                src="/images/icon.svg" width={100} />
            <button className="p-3 rounded-xl hover:bg-light-green" onClick={Action}>
                <MenuAlt1Icon className="h-6 w-6" />
            </button>
        </div>
    )
}