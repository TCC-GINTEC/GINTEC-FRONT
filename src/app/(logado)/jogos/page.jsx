"use client"

import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Cadastro() {

  const [tipoCadastro, setTipoCadastro] = useState(null);
  const [finalizar, setFinalizar] = useState(false);
  const [secaoAnterior, setSecaoAnterior] = useState(true);
  const [listaInformacoes, setListaInformacoes] = useState([]);

  const [nomeJogo, setNomeJogo] = useState("");
  const [nomeCampeonatoQuadra, setNomeCampeonatoQuadra] = useState("");
  const [nomeCampeonatoPatio,setNomeCampeonatoPatio] = useState("");

  const [data, setData] = useState(0);
  const [fase, setFase] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [pontucaoExtra, setPontuacaoExtra] = useState(0);
  const [qntJogos, setQntJogos] = useState(0);
  const [qntFases, setQntFases] = useState(0);
  const [qntJogadoresPorTime, setQntJogadoresPorTime] = useState(0);

  function voltarSecao() {
    setSecaoAnterior(true);
    setFinalizar(false);
  }

  function finalizarRegistro() {
    setFinalizar(true);
    setSecaoAnterior(false);
  }

 

   
  function gerarCards(tipo) {
    let novoCampeonato;

    if (tipo === "jogos") {
      novoCampeonato = {
        nomeJogo: nomeJogo,
        pontuacao: pontuacao,
        pontucaoExtra: pontucaoExtra,
        tipo:tipo
      };
    } else if (tipo === "campQuadra") {
       novoCampeonato = {
        nomeCampeonato: nomeCampeonatoQuadra,
        data: data,
        fase: fase,
        pontuacao: pontuacao,
        qntJogos: qntJogos,
        qntFases: qntFases,
        qntJogadoresPorTime: qntJogadoresPorTime,
        tipo:tipo
      };
    } else if (tipo === "campPatio") {
        novoCampeonato = {
        nomeCampeonato: nomeCampeonatoPatio,
        data: data,
        fase: fase,
        pontuacao: pontuacao,
        qntJogos: qntJogos,
        qntFases: qntFases,
        qntJogadoresPorTime: qntJogadoresPorTime,
        tipo:tipo
      };
    }

    setListaInformacoes([...listaInformacoes, novoCampeonato]);
  }
  console.log(listaInformacoes)
  function renderizarCards() {
    return listaInformacoes.map((campeonato, index) => (
      <div
        key={index}
        className="w-full sm:w-96 pt-4 px-11 pb-4 flex flex-col gap-2 bg-gray-300 rounded-2xl"
      >
        <div className="flex flex-row-reverse">
          <Icon icon="charm:menu-kebab" width={30} style={{ color: "#000000" }} />
        </div>
        <h2></h2>
        <h2 className="font-semibold">
          {campeonato.nomeCampeonato || campeonato.nomeJogo || campeonato.nomeCampeonatoPatio}
        </h2>
        <h2 className="font-semibold">{campeonato.pontuacao}</h2>
       { campeonato.data && <h2 className="font-semibold">{ campeonato.data}</h2>}
       { campeonato.pontucaoExtra && <h2 className="font-semibold">{ campeonato.pontucaoExtra}</h2>}
        <a href="#">Mais informações</a>
      </div>
    ));
  }

  console.log("tipoCadastro:", tipoCadastro);

  return (
    <div className="flex flex-col gap-5 pt-5">
      <div className="flex flex-row-reverse group">
        <button
          className="p-3 w-64 flex justify-center group-hover:bg-gray-300 bg-gray-200 rounded-2xl"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <Icon icon="charm:plus" width={30} style={{ color: "#A7A7A7" }} />
        </button>
      </div>

      <div>
        <div className="flex flex-col gap-4 border-red-500">{renderizarCards()}</div>
      </div>

      {/* modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box p-0 max-w-6xl">
          <div>
            {/* escolhendo cadastro */}
            <h2>Escolha o tipo de cadastro</h2>
            <select onChange={(e) => setTipoCadastro(e.target.value)}>
              <option value="campQuadra">Campeonato de quadra</option>
              <option value="campPatio">Campeonato de pátio</option>
              <option value="jogos">Jogos</option>
            </select>
          </div>

          <div className="w-full flex gap-5 p-5">
            <button onClick={voltarSecao} className="underline underline-offset-1">
              {tipoCadastro == "campQuadra" || tipoCadastro == "campPatio"?"dados do campeonato":"Dados do Jogo"   }
            </button>
            <button onClick={finalizarRegistro} className="underline underline-offset-1">
              Finalizar
            </button>
          </div>
          {/* exibindo modal de jogos */}
          {tipoCadastro === "jogos" && (
            <div className={`max-w-full flex justify-center bg-slate-300`}>
              {secaoAnterior && (
                <div className="m-auto sm:inline-grid md:grid-cols-2 md:justify-items-center">
                  <label className="p-3 rounded-2xl  flex flex-col ">
                    Nome do jogo
                    <input
                      className="p-3 rounded-2xl flex flex-col"
                      type="text"
                      placeholder="Digite o nome do jogo"
                      onChange={(e) => setNomeJogo(e.target.value)}
                    />
                  </label>
                  <label className="p-3 rounded-2xl flex flex-col ">
                    Pontuação
                    <input
                      className="p-3 rounded-2xl flex flex-col"
                      type="number"
                      onChange={(e) => setPontuacao(e.target.value)}
                    />
                  </label>
                  <label className="p-3 rounded-2xl flex flex-col">
                    Pontuação extra
                    <input
                      className="p-3 rounded-2xl flex flex-col"
                      type="text"
                      placeholder="Digite a pontuação extra"
                      onChange={(e) => setPontuacaoExtra(e.target.value)}
                    />
                  </label>
                </div>
              )}
              {finalizar && (
                <div>
                  <div className="flex gap-20 p-9">
                    <div>
                      <h2>Nome do jogo</h2>
                      <p>{nomeJogo}</p>
                    </div>
                    <div>
                      <h2>Pontuação</h2>
                      <p>{pontuacao}</p>
                    </div>
                    <div>
                      <h2>Pontuação Extra</h2>
                      <p>{pontucaoExtra}</p>
                    </div>
                  </div>
                  <button
                    className="p-4 m-auto block bg-green-200  hover:bg-green-400 rounded-xl"
                    onClick={() => gerarCards("jogos")}
                  >
                    Enviar
                  </button>
                </div>
              )}
            </div>
          )}

          {/* exibindo modal campeonato */}
          {tipoCadastro === "campQuadra" && (
            <div className={`p-5 sm:grid sm:grid-cols-5 sm:gap-7 sm:items-center sm:justify-center sm:max-w-full bg-slate-300`}>
              {secaoAnterior && (
                <>
                  <label className="flex flex-col col-span-2 gap-2 font-bold text-lg">
                    Nome do campeonato de Quadra
                    <input
                      className="p-3 rounded-2xl"
                      placeholder="Digite o nome"
                      onChange={(e) => setNomeCampeonatoQuadra(e.target.value)}
                    />
                  </label>
                  <label
                    className="flex flex-col gap-2 font-bold text-lg"
                    onChange={(e) => setData(e.target.value)}
                  >
                    Data
                    <input className="p-3 rounded-2xl " placeholder="Data" type="date" />
                  </label>
                  <label className="flex flex-col gap-2 font-bold text-lg">
                    Fase
                    <input
                      className="p-3 rounded-2xl"
                      min="1"
                      type="number"
                      placeholder="ex: 1 , 2, 3"
                      onChange={(e) => setFase(e.target.value)}
                    />
                  </label>
                  <label className="flex flex-col gap-2 font-bold text-lg">
                    Pontuação
                    <input
                      placeholder="exe: 500"
                      type="number"
                      className="p-3 rounded-2xl"
                      onChange={(e) => setPontuacao(e.target.value)}
                    />
                  </label>
                  <label className="flex flex-col gap-2 font-bold text-lg">
                    Quantidades de Jogos
                    <input
                      placeholder=" exe: 1, 2, 3..."
                      type="number"
                      className="p-3 rounded-2xl"
                      onChange={(e) => setQntJogos(e.target.value)}
                    />
                  </label>
                  <label className="flex flex-col col-span-1 gap-2 font-bold text-lg">
                    Quantidade de Fases
                    <input
                      className="p-3 rounded-2xl"
                      min="1"
                      max="5"
                      type="number"
                      placeholder="exe: 1, 2, 3..."
                      onChange={(e) => setQntFases(e.target.value)}
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-center font-bold text-lg">
                    Jogadores por time
                    <input
                      className="p-3 rounded-2xl"
                      min="10"
                      max="15"
                      type="number"
                      placeholder="exe: 10"
                      onChange={(e) => setQntJogadoresPorTime(e.target.value)}
                    />
                  </label>
                </>
              )}

              {finalizar && (
                <>
                  <div>
                    <h2>Nome do campeonato de quadra</h2>
                    <p>{ nomeCampeonatoQuadra}</p>
                  </div>
                  <div>
                    <h2>Data</h2>
                    <p>{data}</p>
                  </div>
                  <div>
                    <h2>Fase</h2>
                    <p>{fase}</p>
                  </div>
                  <div>
                    <h2>Pontuação</h2>
                    <p>{pontuacao}</p>
                  </div>
                  <div>
                    <h2>Quantidade de jogos</h2>
                    <p>{qntJogos}</p>
                  </div>
                  <div>
                    <h2>Quantidade de fases</h2>
                    <p>{qntFases}</p>
                  </div>
                  <div>
                    <h2>Quantidade jogadores por time</h2>
                    <p>{qntJogadoresPorTime}</p>
                  </div>
                  <button
                    className="p-4 bg-green-200  hover:bg-green-400 rounded-xl"
                    onClick={() => gerarCards("campQuadra")}
                  >
                    Enviar
                  </button>
                </>
              )}
            </div>
          )}

          {tipoCadastro === "campPatio" && (
            <div  className={`p-5 sm:grid sm:grid-cols-5 sm:gap-7 sm:items-center sm:justify-center sm:max-w-full bg-slate-300`}>
              {secaoAnterior && (
                <>
                  <label className="flex flex-col col-span-2 gap-2 font-bold text-lg">
                    Nome do campeonato de pátio
                    <input
                      className="p-3 rounded-2xl"
                      placeholder="Digite o nome"
                      onChange={(e) => setNomeCampeonatoPatio(e.target.value)}
                    />
                  </label>
                  <label
                    className="flex flex-col gap-2 font-bold text-lg"
                    onChange={(e) => setData(e.target.value)}
                  >
                    Data
                    <input className="p-3 rounded-2xl " placeholder="Data" type="date" />
                  </label>
                  <label className="flex flex-col gap-2 font-bold text-lg">
                    Fase
                    <input
                      className="p-3 rounded-2xl"
                      min="1"
                      type="number"
                      placeholder="ex: 1 , 2, 3"
                      onChange={(e) => setFase(e.target.value)}
                    />
                  </label>
                  <label className="flex flex-col gap-2 font-bold text-lg">
                    Pontuação
                    <input
                      placeholder="exe: 500"
                      type="number"
                      className="p-3 rounded-2xl"
                      onChange={(e) => setPontuacao(e.target.value)}
                    />
                  </label>
                  <label className="flex flex-col gap-2 font-bold text-lg">
                    Quantidades de Jogos
                    <input
                      placeholder=" exe: 1, 2, 3..."
                      type="number"
                      className="p-3 rounded-2xl"
                      onChange={(e) => setQntJogos(e.target.value)}
                    />
                  </label>
                  <label className="flex flex-col col-span-1 gap-2 font-bold text-lg">
                    Quantidade de Fases
                    <input
                      className="p-3 rounded-2xl"
                      min="1"
                      max="5"
                      type="number"
                      placeholder="exe: 1, 2, 3..."
                      onChange={(e) => setQntFases(e.target.value)}
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-center font-bold text-lg">
                    Jogadores por time
                    <input
                      className="p-3 rounded-2xl"
                      min="10"
                      max="15"
                      type="number"
                      placeholder="exe: 10"
                      onChange={(e) => setQntJogadoresPorTime(e.target.value)}
                    />
                  </label>
                </>
              )}

              {finalizar && (
                <>
                  <div>
                    <h2>Nome do campeonato de pátio</h2>
                    <p>{ nomeCampeonatoPatio}</p>
                  </div>
                  <div>
                    <h2>Data</h2>
                    <p>{data}</p>
                  </div>
                  <div>
                    <h2>Fase</h2>
                    <p>{fase}</p>
                  </div>
                  <div>
                    <h2>Pontuação</h2>
                    <p>{pontuacao}</p>
                  </div>
                  <div>
                    <h2>Quantidade de jogos</h2>
                    <p>{qntJogos}</p>
                  </div>
                  <div>
                    <h2>Quantidade de fases</h2>
                    <p>{qntFases}</p>
                  </div>
                  <div>
                    <h2>Quantidade jogadores por time</h2>
                    <p>{qntJogadoresPorTime}</p>
                  </div>
                  <button
                    className="p-4 bg-green-200  hover:bg-green-400 rounded-xl"
                    onClick={() => gerarCards("campQuadra")}
                  >
                    Enviar
                  </button>
                </>
              )}
            </div>
          )}


          {/* fehcar modal */}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button 
                className="p-4 w-64 hover:bg-red-400 hover:text-white text-gray-400 bg-red-200 rounded-xl" 
              >
                Fechar
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
