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
        text: "Alunos",
        img: "https://cdn-icons-png.flaticon.com/512/5956/5956845.png",
        link: "/alunos"
      },
      {
        text: "Prazos",
        img: "https://cdn-icons-png.flaticon.com/512/149/149322.png",
        link: "/prazos"
      },
      {
        text: "Ranking",
        img: "https://cdn-icons-png.flaticon.com/512/4425/4425124.png",
        link: "/ranking"
      }
    ]

    setItens(lst)
  }
  return (
    <SideBarContainer active={active} className={className}>
      <SideBarSection>
        <SideBarHead Action={toggleSidebar} active={active} />
        <Search Action={toggleSidebar} active={active} />
        <SideBarContainerItens>
          {Itens.map((item, index) => <Link key={index} href={item.link}><SideBarItem active={active} text={item.text} src={item.img} /> </Link>)}
        </SideBarContainerItens>
      </SideBarSection>
      <SideBarProfile active={active} src={"/images/icon.svg"} username={"Nathan Silva"} />
    </SideBarContainer>
  )
}