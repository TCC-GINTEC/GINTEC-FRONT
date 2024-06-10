export default function Placed({ users }) {

  return (
    <>
      {
        users.map((user, index) => {
          return (
            <div key={index} className="flex flex-col gap-5 items-center">
              <h2>{index + 1}º Lugar </h2>
              <img alt="" src={user.img ? user.img : "https://cdn-icons-png.flaticon.com/512/3106/3106921.png"} height={50} width={50}/>
              <p className='w-4/5'>{user.nome} do curso {user.turma} : {user.pontos.pontuacaGeral} pontos</p>
            </div>
          )
        })
      }
    </>
  )
}