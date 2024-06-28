import { useEffect, useState } from 'react';
import SideBarContainerItens from '@/components/Sidebar/SideBarContainerItens';
import SideBarItem from '@/components/Sidebar/SideBarItem';
import SideBarContainer from '@/components/Sidebar/SideBarContainer';
import SideBarHead from '@/components/Sidebar/SideBarHead';
import SideBarSection from '@/components/Sidebar/SideBarSection';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideBar({ className }) {
    const [active, setActive] = useState(false);
    const [Itens, setItens] = useState([]);
    const pathname = usePathname();

    function toggleSidebar() {
        setActive(!active);
       
    }

    
    useEffect(() => {
        handleGetItens();
    }, []);

    function handleGetItens() {
        const lst = [
            {
                text: "Home",
                img: "./images/home-icon.svg",
                link: "/home"
            },
            {
                text: "Organização das salas",
                img: "./images/organizacao-sala-icon.svg",
                link: "/sala"
            },
            {
                text: "Cadastros",
                img: "./images/cadastros-icon.svg",
                link: "/cadastros"
            },
            {
                text: "Prazos",
                img: "./images/prazos-icon.svg",
                link: "/prazos"
            },
            {
                text: "Pontuacao geral",
                img: "./images/pontuacao-geral-icon.svg",
                link: "/ranking"
            },
            {
                text: "Notificação",
                img: "./images/notificacao-icon.svg",
                link: "/notificacao"
            },
            {
                text: "Configuração",
                img: "./images/configuracao-icon.svg",
                link: "/configuracao"
            },
        ];

        setItens(lst);
    }

    return (
        <SideBarContainer active={active} className={className}>
            <SideBarSection>
                <SideBarHead Action={toggleSidebar} active={active} />
                <SideBarContainerItens url={pathname} active={active}>
                    {Itens.map((item, index) => (
                        <Link className="w-full text-[#005261] flex justify-between" key={index} href={item.link}>
                            <SideBarItem index={index} active={active} url={pathname} link={item.link} text={item.text} src={item.img} />
                        </Link>
                    ))}
                </SideBarContainerItens>
            </SideBarSection>
            <div className='w-full flex justify-start pl-10 pb-20 text-[#005261]'>
                <Link className="flex flex-row gap-2 items-center" href=''>
                    <img src="./images/sair-icon.svg" alt="" />
                    {active ? 'sair' : ''}
                </Link>
            </div>
        </SideBarContainer>
    );
}
