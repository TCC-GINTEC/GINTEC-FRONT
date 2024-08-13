export default function Cadastros() {
    return (
        <div>
            <h1 className="text-[32px] font-[500]">Cadastros</h1>
            <div className="flex gap-4 p-2 flex-wrap">
                <div className="w-60 h-40 flex justify-center relative items-center p-6 gap-4 ">
                    <img src="/images/bgJogosPatios.png" className="absolute z-0 rounded-3xl h-full w-full" />
                    <h2 className="z-10 text-white font-[500]">Jogos de Pátio</h2>
                </div>
                <div className="w-60 h-40 flex justify-center relative items-center p-6 gap-4 ">
                    <img src="/images/bgCampeonatosQuadra.png" className="absolute z-0 rounded-3xl h-full w-full" />
                    <h2 className="z-10 text-white font-[500]">Campeonatos <br/>de quadra</h2>
                </div>
                <div className="w-60 h-40 flex justify-center relative items-center p-6 gap-4 ">
                    <img src="/images/bgCampeonatosPatio.svg" className="absolute z-0 rounded-3xl h-full w-full" />
                    <h2 className="z-10 text-white font-[500]">Campeonatos <br/>de pátio</h2>
                </div>
                <div className="w-60 h-40 flex justify-center relative items-center p-6 gap-4 ">
                    <img src="/images/bgDoacoes.svg" className="absolute z-0 rounded-3xl h-full w-full" />
                    <h2 className="z-10 text-white font-[500]">Doações</h2>
                </div>
                <div className="w-60 h-40 flex justify-center relative items-center p-6 gap-4 ">
                    <img src="/images/bgCalendario.svg" className="absolute z-0 rounded-3xl h-full w-full" />
                    <h2 className="z-10 text-white font-[500]">Calendário</h2>
                </div>
                <div className="w-60 h-40 flex justify-center relative items-center p-6 gap-4 ">
                    <img src="/images/bgRepresentantes.svg" className="absolute z-0 rounded-3xl h-full w-full" />
                    <h2 className="z-10 text-white font-[500]">Representantes</h2>
                </div>
                <div className="w-60 h-40 flex justify-center relative items-center p-6 gap-4 ">
                    <img src="/images/bgAtividades.svg" className="absolute z-0 rounded-3xl h-full w-full" />
                    <h2 className="z-10 text-white font-[500]">Atividades</h2>
                </div>
                <div className="w-60 h-40 flex justify-center relative items-center p-6 gap-4 ">
                    <img src="/images/bgOficinas.svg" className="absolute z-0 rounded-3xl h-full w-full" />
                    <h2 className="z-10 text-white font-[500]">Oficinas</h2>
                </div>
                <div className="w-60 h-40 flex justify-center relative items-center p-6 gap-4 ">
                    <img src="/images/bgAjudantes.svg" className="absolute z-0 rounded-3xl h-full w-full" />
                    <h2 className="z-10 text-white font-[500]">Ajudantes</h2>
                </div>
            </div>
        </div>
    )
}