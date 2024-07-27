import { useEffect, useState } from "react";
import SideBarContainerItens from "@/components/SidebarWeb/SideBarContainerItens";
import SideBarItem from "@/components/SidebarWeb/SideBarItem";
import SideBarContainer from "@/components/SidebarWeb/SideBarContainer";
import SideBarHead from "@/components/SidebarWeb/SideBarHead";
import SideBarSection from "@/components/SidebarWeb/SideBarSection";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function SideBar({ className, showSidebarMobile }) {
  const [active, setActive] = useState(true);
  const [Itens, setItens] = useState([]);
  const pathname = usePathname();

  function toggleSidebar() {
    setActive(!active);
  }

  useEffect(() => {
    setActive(active);
    handleGetItens();
  }, []);

  function handleGetItens() {
    const lst = [
      {
        text: "Home",
        img: "./images/home-icon.svg",
        link: "/home",
      },
      {
        text: "Organização das salas",
        img: "./images/organizacao-sala-icon.svg",
        link: "/salas",
      },
      {
        text: "Cadastros",
        img: "./images/cadastros-icon.svg",
        link: "/cadastros",
      },
      {
        text: "Campeonatos",
        img: "./images/campeonato-icon.svg",
        link: "/campeonatos",
      },
      {
        text: "Pontuação geral",
        img: "./images/pontuacao-geral-icon.svg",
        link: "/ranking",
      },
      {
        text: "Notificação",
        img: "./images/notificacao-icon.svg",
        link: "/notificacao",
      },
    ];

    setItens(lst);
  }

  return (
    <SideBarContainer active={active} className={className} showSidebarMobile={showSidebarMobile}>
      <SideBarSection>
        <SideBarHead Action={toggleSidebar} active={active} />
        <SideBarContainerItens url={pathname} active={active}>
          {Itens.map((item, index) => (
            <Link
              className="w-full text-[#005261] flex justify-between"
              key={index}
              href={item.link}
            >
              <SideBarItem
                index={index}
                active={active}
                url={pathname}
                link={item.link}
                text={item.text}
                src={item.img}
              />
            </Link>
          ))}
        </SideBarContainerItens>
      </SideBarSection>
      <div className="w-full flex justify-start pl-10 pb absolute bottom-20 text-[#005261]">
        <Link className="flex flex-row gap-2 items-center" href="">
          <Image src="./images/sair-icon.svg" alt="" width={20} height={20} />
          {active ? "sair" : ""}
        </Link>
      </div>
    </SideBarContainer>
  );
}
