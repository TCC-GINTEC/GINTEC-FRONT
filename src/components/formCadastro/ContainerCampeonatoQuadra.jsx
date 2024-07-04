export default function ContainerCampeonatoPatio({children}){
  return(
    <div className='mx-auto relative flex flex-col items-center justify-center max-w-[525px] p-x-4 pt-11 pb-4 border border-[#DADADA] rounded-3xl shadow-xl'>
    <h1 className='text-lg'>{alert}</h1>
    {children}
    </div>
  )
}