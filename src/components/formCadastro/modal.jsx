import Link from 'next/link'

export default function Modal({edicao,closeModal,texto}) {
  return(
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="mx-auto  w-[290px] h-[220] sm:w-[390px] sm:h-[330px] bg-white p-6 rounded-lg shadow-lg relative">
          <img src="../../../images/sucess-form.png" className='absolute -top-[43px] left-[53px] sm:-top-[43px] sm:left-20 h-[154px] w-[200px] sm:h-[159px] sm:w-[217px]' alt="" />
          <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={closeModal}>
          {edicao?(
            <>
             ✕
            </>
          ):(
            <Link href="/cadastros">✕</Link>
          )}
          </button>
          <div className='mt-28 text-center'>
            <h3 className="font-bold text-2xl">Sucesso!</h3>
            <p className="py-4 text-2xl">{texto}</p>
          </div>
        </div>
    </div>
  )
}