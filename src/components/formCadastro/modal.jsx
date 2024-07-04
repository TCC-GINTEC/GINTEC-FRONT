export default function Modal({closeModal}) {
  return(
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="w-[390px] h-[330px] bg-white p-6 rounded-lg shadow-lg relative">
          <img src="../../../images/sucess-form.png" className='absolute -top-[43px] left-20' alt="" />
          <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={closeModal}>
           ✕
          </button>
          <div className='mt-28 text-center'>
            <h3 className="font-bold text-lg">Sucesso!</h3>
            <p className="py-4 text-xl">Campeonato de pátio foi cadastrado com sucesso.</p>
          </div>
        </div>
    </div>
  )
}