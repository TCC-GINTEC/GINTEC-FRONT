export default function ContainerJogosPatio({children}) {
  return(
    <div className='mx-auto relative flex flex-col items-center justify-center sm:w-[525px] w-[400px] p-9 border border-[#DADADA] rounded-3xl shadow-xl'>
      <h1 className='text-lg z-50'>{alert}</h1>
      {children}
    </div>
  )
}