import Image from 'next/image'

export default function SideBarHeadMobile({ active, Action, exibirSidebarMobile}) {
    return (
        <div className="flex items-center justify-between">
            <Image className={`
            block 
            mt-4 ml-3
            `}
            src="/images/logo.svg" width={130} height={130}/>


            <button onClick={() => exibirSidebarMobile()} className={`p-3 rounded-xl hover:bg-light-green ${active ? 'block relative right-[-25px] rotate-180' : 'block relative right-[-36px]'} transition-all delay-100`}>
                <Image className={`h-8 w-8 `}  src="./images/seta.svg" width={50} height={50}/>AAA
            </button>
        </div>
    )
}