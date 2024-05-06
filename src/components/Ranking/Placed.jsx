import Image from 'next/image';

export default function Placed({ users }) {

  return (
    <>
      {
        users.map((user, index) => {
          return (
            <div key={index} className="flex flex-col gap-5 items-center">
              <h2>{index + 1}º Lugar </h2>
              <Image alt="" src={user.img} height={50} width={50}></Image>
              <p className='w-4/5'>{user.nome} do curso {user.sala} : {user.pontos} pontos</p>
            </div>
          )
        })
      }
    </>
  )
}