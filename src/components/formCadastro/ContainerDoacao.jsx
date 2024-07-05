export default function ContainerDoacao({children,alert,classe}) {
    return(
      <div className={`mx-auto relative flex flex-col items-center justify-center max-w-[525px] px-4 pt-11 pb-4 bg-white border border-[#DADADA] rounded-3xl shadow-xl ${classe}`}>
        <h1 className='text-lg z-50'>{alert}</h1>
        {children}
      </div>
      )
}