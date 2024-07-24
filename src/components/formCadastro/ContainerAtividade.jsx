export default function ContainerAtividade({children,alert,classe}){
  return(
    <div className={`mx-auto relative flex flex-col items-center justify-center max-w-full sm:w-[525px] w-[400px] p-x-4 pt-11 pb-4 border bg-white border-[#DADADA] rounded-3xl shadow-xl  ${classe}`}>
    <h1 className='text-lg z-50 mt-10 mb-4'>{alert}</h1>
    {children}
    </div>
  )
}