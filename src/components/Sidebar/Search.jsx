import { SearchIcon } from '@heroicons/react/outline'

export default function Search({Action, active}) {
    return (
        <form className="flex items-center justify-center p-3 bg-light-green rounded-xl">
            <SearchIcon className={`h-6 w-6 ${active ? 'pointer-events-none' : 'cursor-pointer'}`} onClick={Action} />
            <input className={`
              w-full outline-none border-none ml-[0.5rem] bg-light-green
              ${active ? 'block' : 'hidden'} rounded-lg px-3
            `}
                placeholder="Buscar"></input>
        </form>
    )
}