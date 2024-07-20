export default function SideBarHead({ active, Action }) {
    return (
        <div className="flex items-center justify-between">
            <img className={`
            ${active ? 'block' : 'hidden'}
            mt-4 ml-3
            `}
            src="/images/logo.svg" width={130} />


            <button className={`p-3 rounded-xl hover:bg-light-green ${active ? 'block relative right-[-25px] rotate-180' : 'block relative right-[-36px]'} transition-all delay-100`} onClick={Action}>
                <img className={`h-8 w-8 `}  src="./images/seta.svg"/>
            </button>
        </div>
    )
}