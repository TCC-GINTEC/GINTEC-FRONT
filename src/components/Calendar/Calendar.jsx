import { useState, useEffect } from "react";

export default function Calendar() {
    const [mesSelecionado, setMesSelecionado] = useState(new Date().getMonth());
    const [anoSelecionado, setAnoSelecionado] = useState(new Date().getFullYear());

    const [primeiroDiaSemana, setPrimeiroDiaSemana] = useState(0);
    const [totalDiasMes, setTotalDiasMes] = useState(0);

    const [totalDiasMesAnterior, setTotalDiasMesAnterior] = useState(new Date(anoSelecionado, mesSelecionado, 0).getDate())

    useEffect(() => {
        const primeiroDia = new Date(anoSelecionado, mesSelecionado, 1);
        const mes = new Date(anoSelecionado, mesSelecionado + 1, 0);

        setPrimeiroDiaSemana(primeiroDia.getDay());
        setTotalDiasMes(mes.getDate());
        setTotalDiasMesAnterior(new Date(anoSelecionado, mesSelecionado, 0).getDate());
    }, [anoSelecionado, mesSelecionado]);

    const diasDoMes = [...Array(totalDiasMes).keys()].map((dia) => dia + 1);

    function renderDiasAnteriores() {
        if (primeiroDiaSemana === 0) return [];
        const diasAnteriores = [...Array(totalDiasMesAnterior).keys()].slice(-primeiroDiaSemana).map((i) => i + 1);
        return diasAnteriores;
    }

    function renderDiasProximos() {
        const ultimoDiaSemana = (primeiroDiaSemana + totalDiasMes) % 7;
        const diasProximos = [...Array(7 - ultimoDiaSemana).keys()].map((_, index) => index + 1);
        return diasProximos;
    }

    return (
        <>
            <select value={mesSelecionado} onChange={(e) => setMesSelecionado(e.target.value)}>
                <option value={0}>Janeiro</option>
                <option value={1}>Fevereiro</option>
                <option value={2}>Março</option>
                <option value={3}>Abril</option>
                <option value={4}>Maio</option>
                <option value={5}>Junho</option>
                <option value={6}>Julho</option>
                <option value={7}>Agosto</option>
                <option value={8}>Setembro</option>
                <option value={9}>Outubro</option>
                <option value={10}>Novembro</option>
                <option value={11}>Dezembro</option>
            </select>
            <input type="number" value={anoSelecionado} onChange={(e) => setAnoSelecionado(e.target.value)} />
            <div className="grid grid-cols-7 gap-8">
                {renderDiasAnteriores().map((dia, index) => (
                    <p key={index} className="text-gray-400">{dia}</p>
                ))}
                {diasDoMes.map((dia) => (
                    <p key={dia}>{dia}</p>
                ))}
                {renderDiasProximos().map((dia, index) => (
                    <p key={index} className="text-gray-400">{dia}</p>
                ))}
            </div>
        </>
    );
}

/*
new Date(2024, 0, 1) -> 2024 JANEIRO 1
new Date(2024, 1, 1) -> 2024 FEVEREIRO 1
*/