import Image from 'next/image'

export default function SideBarHead({ active, Action }) {
    return (
        <div className="flex items-center justify-between">
            <Image className={`
            ${active ? 'block' : 'hidden'}
            mt-4 ml-3
            `}
            src="/images/logo.svg" width={130} height={130}/>


            <button className={`p-3 rounded-xl hover:bg-light-green ${active ? 'block relative right-[-25px] rotate-180' : 'block relative right-[-36px]'} transition-all delay-100`} onClick={Action}>
                <Image className={`h-8 w-8 `}  src="./images/seta.svg" width={50} height={50}/>
            </button>
        </div>
    )
}