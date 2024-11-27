import Link from "next/link";

export default function Cadastros() {
    return (
        <div className="w-">
            <h1 className="text-[32px] font-[500]">Cadastros</h1>
            <div className="flex gap-4 py-2 flex-wrap">
                <Link href={"/jogos"}>
                    <div className=" md:w-52 h-32 flex justify-center relative items-center p-6 gap-4">
                        <img src="/images/bgJogosPatios.png" className="absolute z-0 rounded-3xl h-full w-full" />
                        <h2 className="z-10 text-white font-[500]">Jogos de Pátio</h2>
                    </div>
                </Link>
                <Link href={"/campeonatoQuadra"}>
                    <div className="w-52 h-32 flex justify-center relative items-center p-6 gap-4 ">
                        <img src="/images/bgCampeonatosQuadra.png" className="absolute z-0 rounded-3xl h-full w-full" />
                        <h2 className="z-10 text-white font-[500]">Campeonatos <br />de quadra</h2>
                    </div>
                </Link>
                <Link href={"/campeonatoPatio"}>
                    <div className="w-52 h-32 flex justify-center relative items-center p-6 gap-4 ">
                        <img src="/images/bgCampeonatosPatio.svg" className="absolute z-0 rounded-3xl h-full w-full" />
                        <h2 className="z-10 text-white font-[500]">Campeonatos <br />de pátio</h2>
                    </div>
                </Link>
                <Link href={"/Doacao"}>
                    <div className="w-52 h-32 flex justify-center relative items-center p-6 gap-4 ">
                        <img src="/images/bgDoacoes.svg" className="absolute z-0 rounded-3xl h-full w-full" />
                        <h2 className="z-10 text-white font-[500]">Doações</h2>
                    </div>
                </Link>
                
                <div className="w-52 h-32 flex justify-center relative items-center p-6 gap-4 ">
                    <img src="/images/bgCalendario.svg" className="absolute z-0 rounded-3xl h-full w-full" />
                    <h2 className="z-10 text-white font-[500]">Calendário</h2>
                </div>                
                <div className="w-52 h-32 flex justify-center relative items-center p-6 gap-4 ">
                    <img src="/images/bgOficinas.svg" className="absolute z-0 rounded-3xl h-full w-full" />
                    <h2 className="z-10 text-white font-[500]">Oficinas</h2>
                </div>                
            </div>
        </div>
    )
}