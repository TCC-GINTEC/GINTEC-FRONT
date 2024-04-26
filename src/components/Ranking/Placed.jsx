import Image from 'next/image';

export default function Placed({ users }) {

  return (
    <>
      {
        users.map((user, index) => {
          return (
            <div className="flex flex-col gap-4 items-center ">
              <h2>{index + 1}º Lugar </h2>
              <Image alt="" src={user.img} height={50} width={50}></Image>
              <p>{user.nome} do curso {user.sala} - {user.pontos} pontos</p>
            </div>
          )
        })
      }
    </>
  )
}