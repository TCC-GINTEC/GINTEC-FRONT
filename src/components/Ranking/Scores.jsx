export default function Scores({ users }) {
  return (
    users.slice(3).map((aluno, index) => (
      <div
        key={aluno.descricao}
        className={`flex flex-wrap md:flex-nowrap max-w-full overflow-hidden items-center justify-between gap-4 px-4 py-4 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
      >
        <div className="flex items-center gap-3 max-w-full overflow-hidden">
          <h1 className="font-bold text-[#005261] text-lg">{index + 3}</h1>
          {aluno.foto ? (
            <img
              src={aluno.foto}
              width={50}
              height={50}
              className="w-12 h-12 object-cover rounded-full"
              alt={`Foto de ${aluno.descricao}`}
            />
          ) : (
            <img
              src={"https://cdn-icons-png.flaticon.com/512/3106/3106921.png"}
              width={50}
              height={50}
              className="w-12 h-12 object-cover rounded-full"
              alt="Ícone padrão"
            />
          )}
          <div className="max-w-full">
            <h4 className="text-lg font-semibold md:w-56 text-[#005261]">
              {aluno.descricao}
            </h4>
          </div>
        </div>
        {aluno?.turma ?         
        <div className="md:text-center flex-grow">
          <h4 className="text-sm font-semibold text-[#005261]">Série</h4>
          <p className="text-sm text-[#005261]">{aluno.turma}</p>
        </div> :
        ""
      }
        <div className="text-center md:text-right">
          <p className="text-sm text-[#005261]">
            Diferença pro 1º lugar:
          </p>
          <p className="text-sm text-[#005261]">
            {users[0].pontuacao - aluno.pontuacao === 1
              ? `${users[0].pontuacao - aluno.pontuacao} ponto`
              : `${users[0].pontuacao - aluno.pontuacao} pontos`}
          </p>
        </div>
        <div className="text-center w-full lg:w-auto">
          <p className="text-lg font-bold text-[#005261]">
            {aluno.pontuacao} pontos
          </p>
        </div>
      </div>
    ))
  );
}
