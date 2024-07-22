import { useEffect, useState } from "react";
import SideBarContainerItensMobile from "@/components/SidebarMobile/SideBarContainerItensMobile";
import SideBarItemMobile from "@/components/SidebarMobile/SideBarItemMobile";
import SideBarContainerMobile from "@/components/SidebarMobile/SideBarContainerMobile";
import SideBarHeadMobile from "@/components/SidebarMobile/SideBarHeadMobile";
import SideBarSectionMobile from "@/components/SidebarMobile/SideBarSectionMobile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function SideBar({ className,exibirSidebar,exibirSidebarMobile}) {
  const [active, setActive] = useState(false);
  const [Itens, setItens] = useState([]);
  const pathname = usePathname();

  console.log('clicou poha'+exibirSidebarMobile)
  console.log(exibirSidebar)
  
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
        text: "Prazos",
        img: "./images/prazos-icon.svg",
        link: "/prazos",
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
    <SideBarContainerMobile active={active} className={className} exibirSidebar={exibirSidebar}>
      <SideBarSectionMobile>
        <SideBarHeadMobile Action={toggleSidebar} active={active}  exibirSidebarMobile={exibirSidebarMobile} />
        <SideBarContainerItensMobile url={pathname} active={active}>
          {Itens.map((item, index) => (
            <Link
              className="w-full text-[#005261] flex justify-between"
              key={index}
              href={item.link}
            >
              <SideBarItemMobile
                index={index}
                active={active}
                url={pathname}
                link={item.link}
                text={item.text}
                src={item.img}
              />
            </Link>
          ))}
        </SideBarContainerItensMobile>
      </SideBarSectionMobile>
      <div className="w-full flex justify-start pl-10 pb-20 text-[#005261]">
        <Link className="flex flex-row gap-2 items-center" href="">
          <Image src="./images/sair-icon.svg" alt="" width={20} height={20} />
          {active ? "sair" : ""}
        </Link>
      </div>
    </SideBarContainerMobile>
  );
}
