import Image from 'next/image'

export default function SideBarItemMobile({ active, src, text, url}) {
     return (
        <button className={`w-full flex items-center p-2`}
       >
            <Image src={src} width={20} height={20} />
            <span className={`
            ml-3
            block 
          `}>{text}</span>
        </button>
    )
}