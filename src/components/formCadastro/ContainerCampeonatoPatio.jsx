export default function ContainerCampeonatoPatio({children,classe,alert}){
  return(
    <div className={`mx-auto relative flex flex-col items-center justify-center max-w-[525px] p-x-4 pt-11 pb-4 bg-white border border-[#DADADA] rounded-3xl shadow-xl ${classe}`}>
    <h1>{alert}</h1>
    {children}
    </div>
  )
}