import { useEffect, useState } from 'react'
import Search from '@/components/Sidebar/Search'
import SideBarContainerItens from '@/components/Sidebar/SideBarContainerItens'
import SideBarItem from '@/components/Sidebar/SideBarItem'
import SideBarContainer from '@/components/Sidebar/SideBarContainer'
import SideBarHead from '@/components/Sidebar/SideBarHead'
import SideBarSection from '@/components/Sidebar/SideBarSection'
import SideBarProfile from '@/components/Sidebar/SideBarProfile'
import Link from 'next/link'

export default function SideBar({ className }) {
  const [active, setActive] = useState(false)
  const [Itens, setItens] = useState([])

  function toggleSidebar() {
    setActive(!active)
  }
  useEffect(() => {
    handleGetItens();
  }, [])
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
        link: "/prazos"
      },
      {
        text: "Cadastros",
        img: "./images/cadastros-icon.svg",
        link: "/organizacao-sala"
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
    ]

    setItens(lst)
  }
  return (
    <SideBarContainer active={active} className={className}>
      <SideBarSection>
        <SideBarHead Action={toggleSidebar} active={active} />
        <Search Action={toggleSidebar} active={active} />
        <SideBarContainerItens>
          {Itens.map((item, index) => <Link class="lign-middle" key={index} href={item.link}><SideBarItem active={active} text={item.text} src={item.img} /> </Link>)}
        </SideBarContainerItens>
      </SideBarSection>
      <div className='w-full pl-10 pb-20 '>
        <Link class='flex flex-row gap-2 items-center' href=''><img src="./images/sair-icon.svg" alt />sair</Link>
      </div>

      {/* <SideBarProfile active={active} src={"/images/icon.svg"} username={"Nathan Silva"} /> */}
    </SideBarContainer>
  )
}