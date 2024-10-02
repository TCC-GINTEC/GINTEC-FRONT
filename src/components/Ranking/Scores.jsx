
export default function Scores({ users }) {
  return (
    users.map((user, index) => {
      return (
        <>
          <div className='mb-4 p-4 border rounded-2xl bg-gray-100
              flex flex-col gap-3'>
            <div className='flex flex-col gap-4 items-center'>
              {<span className='text-white py-2 w-full text-center text-2xl font-semibold bg-slate-400 rounded-2xl'>
                {index + 1}º Lugar
              </span>
              }
              <img alt="" src={user.foto ? user.foto : "https://cdn-icons-png.flaticon.com/512/3106/3106921.png"} className='m-auto rounded-full' height={150} width={150} />
              <span className='text-2xl font-semibold'>{user.nome}</span>
            </div>
            <div className='flex flex-col gap-3'>
              {index != 0 ?
                <div>
                  <h3 className='font-bold uppercase mb-2'>Diferença pro {index}º lugar</h3>
                  <span>{users[index - 1].pontuacao - user.pontuacao == 1 ?
                    `${users[index - 1].pontuacao - user.pontuacao} ponto`
                    :
                    `${users[index - 1].pontuacao - user.pontuacao} pontos`}</span>
                </div>
                :
                ""
              }

              <div className='flex flex-col gap-3'>
                <div className='flex gap-3'>
                  <h3 className='font-bold uppercase'>Pontuação</h3>
                  <span>{user.pontuacao}</span>
                </div>
              </div>
            </div>
          </div>
        </>)
    })

  );
}
