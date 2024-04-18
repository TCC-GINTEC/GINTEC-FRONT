import { MenuAlt1Icon, MenuIcon, SearchIcon, UserIcon, ViewGridIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import Search from '@/components/Sidebar/Search'
import SideBarContainerItens from '@/components/Sidebar/SideBarContainerItens'
import SideBarItem from '@/components/Sidebar/SideBarItem'
import SideBarContainer from '@/components/Sidebar/SideBarContainer'
import SideBarHead from '@/components/Sidebar/SideBarHead'
import SideBarSection from '@/components/Sidebar/SideBarSection'
import SideBarProfile from '@/components/Sidebar/SideBarProfile'

export default function SideBar({ className }) {
  const [active, setActive] = useState(false)

  function toggleSidebar() {
    setActive(!active)
  }

  return (
    <SideBarContainer active={active} className={className}>
      <SideBarSection>
        <SideBarHead Action={toggleSidebar} active={active}/>
        <Search Action={toggleSidebar} active={active} />
        <SideBarContainerItens>
          <SideBarItem active={active} text="Item 1" src="/images/icon.svg" />
          <SideBarItem active={active} text="Item 2" src="/images/icon.svg" />
          <SideBarItem active={active} text="Item 3" src="/images/icon.svg" />
          <SideBarItem active={active} text="Item 4" src="/images/icon.svg" />
          <SideBarItem active={active} text="Item 4" src="/images/icon.svg" />
          <SideBarItem active={active} text="Item 5" src="/images/icon.svg" />
        </SideBarContainerItens>
      </SideBarSection>
      <SideBarProfile active={active} src={"/images/icon.svg"} username={"Nathan Silva"}/>
    </SideBarContainer>
  )
}