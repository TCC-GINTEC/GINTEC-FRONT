export default function ContainerCampeonatoQuadra({children,alert,classe}){
  return(
    <div className={`mx-auto relative flex flex-col items-center justify-center max-w-[525px] p-x-4 pt-11 pb-4 border bg-white border-[#DADADA] rounded-3xl shadow-xl  ${classe}`}>
    <h1 className='text-lg z-50'>{alert}</h1>
    {children}
    </div>
  )
}