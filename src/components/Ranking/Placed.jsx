export default function Placed({ users }) {

  return (
    <>
      {
        users.map((user, index) => {
          return (
            <div key={index} className="flex flex-col gap-5 items-center">
              <h2>{index + 1}º Lugar </h2>
              <img className="rounded-full" alt="" src={user.foto ? user.foto : "https://cdn-icons-png.flaticon.com/512/3106/3106921.png"} height={150} width={150}/>
              <p className='w-4/5'>{user.descricao} : {user.pontuacao} pontos</p>
            </div>
          )
        })
      }
    </>
  )
}