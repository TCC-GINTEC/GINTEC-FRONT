
export default function Scores({ users }) {
  return (
    users.map((user, index) => {
      return (
        <div className='container-score mb-4 p-4 border rounded-2xl bg-gray-100 flex flex-col gap-3' key={index}>
          <div className='container-score-l'>
            <span className='lugar'>{index + 1}</span>
            <img alt="Imagem" src={user.foto ? user.foto : "https://cdn-icons-png.flaticon.com/512/3106/3106921.png"}/>
            <span className='text'>{user.descricao}</span>
          </div>

          <div className='container-score-r'>
            {index != 0 ?
              <div>
                <h3 className='font-bold mb-2'>Diferença pro {index}º lugar</h3>
                <span>{users[index - 1].pontuacao - user.pontuacao == 1 ?
                  `${users[index - 1].pontuacao - user.pontuacao} ponto`
                  :
                  `${users[index - 1].pontuacao - user.pontuacao} pontos`}</span>
              </div>
              :
              ""
            }

            <div className='flex flex-col gap-3'>
              <div className='flexx flex gap-3'>
                <h3 className='font-bold'>Pontuação final</h3>
                <span>{user.pontuacao}</span>
              </div>
            </div>
          </div>
        </div>
      )
    })
  )
}
