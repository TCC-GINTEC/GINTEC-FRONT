export default function DoacaoForm({handleFormSubmit,handleCloseForm}) {
  return(
  <form onSubmit={handleFormSubmit} className='space-y-8 mt-10 w-3/4 flex items-center flex-col'>
      <label className='flex flex-col gap-2 w-full px-9 pt-3  rounded-2xl bg-[#E6EFF0]'>
          Nome da Doação
         <input type="text" name="nomeDoacao" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg mb-2' />
      </label>
      <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
         Pontuação da Doação
         <input type="number" name="pontoDoacao" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
      </label>
      <label className='flex flex-col gap-3 w-full px-9 pt-3 pb-2 rounded-2xl bg-[#E6EFF0]'>
        Data para Doar
        <input type="date" name="dataDoacao" className='bg-[#E6EFF0] text-[#005261] font-semibold text-lg' />
      </label>
      <div className='flex sm:flex-row sm:justify-evenly w-full'>
          <button type='submit' className='w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>Cadastrar</button>
          <button onClick={() => handleCloseForm()} type='button' className='w-1/3 sm:mt-10 rounded-2xl self-start bg-[#005261] text-white font-medium p-4'>
            cancelar
          </button>
      </div>
  </form>
  )
}