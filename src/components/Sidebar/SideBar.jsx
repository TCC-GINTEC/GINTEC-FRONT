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
        img: "/images/Home.png",
        link: "/home"
      },
      {
        text: "Organização das salas",
        img: "/images/OrgSalas.png",
        link: "/OrgSalas"
      },
      {
        text: "Cadastro",
        img: "/images/Cadastro.png",
        link: "/cadastros"
      },
      {
        text: "Campeonatos",
        img: "/images/Campeonatos.png",
        link: "/campeonatos"
      },
      {
        text: "Pontuação Geral",
        img: "/images/PontuacaoGeral.png",
        link: "/ranking"
      },
      {
        text: "Recados",
        img: "/images/Recados.png",
        link: "/ranking"
      }      
    ]

    setItens(lst)
  }
  return (
    <SideBarContainer active={active} className={className}>
      <SideBarSection>
        <SideBarHead Action={toggleSidebar} active={active} />
        <SideBarContainerItens>
          {Itens.map((item, index) => <Link key={index} href={item.link}><SideBarItem active={active} text={item.text} src={item.img} /> </Link>)}
        </SideBarContainerItens>
      </SideBarSection>
      <SideBarProfile active={active} src={"/images/icon.png"} username={"Nathan Silva"} />
    </SideBarContainer>
  )
}