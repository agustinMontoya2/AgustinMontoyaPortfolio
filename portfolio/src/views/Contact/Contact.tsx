function Contact() {
  return (
    <div className="h-screen w-full bg-[#FFFFFF] flex items-center flex-col dark:bg-[#121212]">
        <h2 className="text-[44px] font-extrabold text-[#121212] font-montserrat text-center mt-24 dark:text-[#FFFFFF]">Contactate conmigo</h2>
      <div className="w-4/6 h-4/6 bg-[#E0E0E0] rounded-3xl mt-12 dark:bg-[#343434] flex flex-col justify-center">
      <div className="">
      <p className="text-[#FFB800] font-montserrat font-medium text-[20px] text-center">Siempre estoy dispuesto a nuevos desafíos.</p>
      <p className="text-[#FFB800] font-montserrat font-medium text-[20px] text-center"> 
      Si tienes una idea o proyecto en el que crees que puedo aportar, no dudes en escribirme.</p>
      <p className="text-[#FFB800] font-montserrat font-medium text-[20px] text-center mb-8">¡Será un placer colaborar!</p>
</div>
<div className="flex flex-col items-center">
  <div className="w-[60%]">
  <p className="text-[#121212] font-montserrat font-semibold text-[20px] text-center dark:text-[#FFFFFF]">¿Como te llamas?</p>
      <input 
        type="text" 
        className="bg-[#F5F5F5] border-[#FFB800] border-[1px] py-2 px-4 rounded-md mt-2 mb-4 w-[100%] text-white dark:bg-[#1a1a1a]"
      />
  </div>
  <div className="w-[60%]">
  <p className="text-[#121212] font-montserrat font-semibold text-[20px] text-center dark:text-[#FFFFFF]">¿Cual es tu correo?</p>
      <input 
        type="text" 
        className="bg-[#F5F5F5] border-[#FFB800] border-[1px] py-2 px-4 rounded-md mt-2 mb-4 w-[100%] text-white dark:bg-[#1a1a1a]"
      />
  </div>
  <div className="w-[60%]">
  <p className="text-[#121212] font-montserrat font-semibold text-[20px] text-center dark:text-[#FFFFFF]">¿Cual es tu mensaje?</p>
      
      <textarea 
  className="resize-none bg-[#f5f5f5] border border-[#FFB800] text-white p-2 rounded-md mt-2 w-[100%] h-32 dark:bg-[#1a1a1a]" 
></textarea>
  </div>
  <button 
      type="submit" 
      className="bg-[#FFB800] text-[#121212] py-1 px-6 rounded-md mt-4 w-[30%]"
    >
      Enviar
    </button>
</div>
      </div>
    </div>
  )
}

export default Contact