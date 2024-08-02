export default function ContainerOficina({children,classe,alert}){
  return(
    <div className={`mx-auto relative flex flex-col items-center justify-center sm:w-[525px] w-[400px] p-x-4 pt-11 pb-4 bg-white border border-[#DADADA] rounded-3xl shadow-xl ${classe}`}>
    <h1 className="text-lg z-50">{alert}</h1>
    {children}
    </div>
  )
}