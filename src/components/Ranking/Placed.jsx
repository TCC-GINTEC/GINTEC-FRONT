import './style.css'

export default function Placed({ users }) {
  return (
    <div className='container-placed text-xs'>
      {users.map((user, index) => {
          return (
            <div key={index} className="placed">
              <h2>{index + 1}º Lugar </h2>
              <img src={user.foto ? user.foto : "https://cdn-icons-png.flaticon.com/512/3106/3106921.png"} alt='Imagem' />
              <p>{user.descricao}</p>
              <span>{user.pontuacao} pontos</span>
            </div>
          )
        })
      }
    </div>
  )
}

