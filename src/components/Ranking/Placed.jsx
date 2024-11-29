export default function Placed({ users }) {
  const indexes = [1, 0, 2];
  return (
    <>
      <div className="bg-[#005261] rounded-lg px-6 flex flex-col lg:flex-row justify-center items-end mb-8 gap-4 w-[80%] pt-16">
        {users.length > 0  ? indexes.map((aluno, index) => (
          <div
            key={users[aluno].descricao}
            className={`text-center w-full lg:min-w-40 lg:w-auto lg:max-w-52 ${aluno === 2 ? "lg:h-full lg:py-6 bg-[#2A7F7F]" : ""} ${aluno === 1 ? "lg:h-[110%] lg:py-6 bg-[#2A7F7F]" : ""} ${aluno === 0 ? "text-white order-first lg:-order-none lg:h-[120%] lg:py-6 bg-[#2A7F7F]" : "text-gray-100"}`}
          >
            {users[aluno].foto ? (
              <img
                src={users[aluno].foto}
                alt={users[aluno].descricao}
                className={`w-24 h-24 rounded-full object-cover mb-2 mx-auto ${index === 1 ? "ring-4 ring-yellow-300" : ""
                  }`}
              />
            ) : (
              <img
                src={"https://cdn-icons-png.flaticon.com/512/3106/3106921.png"}
                alt={users[aluno].descricao}
                className={`w-24 h-24 rounded-full object-cover mb-2 mx-auto ${index === 1 ? "ring-4 ring-yellow-300" : ""
                  }`}
              />
            )}
            <h3 className="text-xl font-semibold">{users[aluno].descricao}</h3>
            <p className={`text-sm font-semibold ${aluno === 2 ? "text-[#CD7F32]" : aluno === 1 ? "text-[#C0C0C0]" : aluno === 0 ? "text-[#FFD700]" : "text-gray-100"}`}>{aluno + 1}° Lugar</p>
            <p className="text-lg font-bold">{users[aluno].pontuacao}</p>
          </div>
        )) : ""}
      </div>
    </>
  );
}
