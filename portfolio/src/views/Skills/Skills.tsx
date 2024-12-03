import skills from '../../helpers/skills.json'
import downArrow from '../../assets/down-arrow.png'
import downArrowLight from '../../assets/down-arrowLight.png'
function Skills() {
  return (
      <div className="h-screen w-full bg-[#E0E0E0] flex items-center flex-col dark:bg-[#343434]">
        <h2 className="text-[34px] sm:text-[44px] font-extrabold text-[#121212] font-montserrat mt-24 dark:text-[#FFFFFF]">Mis habilidades</h2>
        <div className="w-4/6 flex flex-row justify-between h-4/6 mt-24">
        <div className='w-[45%] flex flex-col justify-center'>
            {
            skills.softskills.map( (item, index) => (
                <div key={index} className=''>
                    <p className="text-[#FFB800] font-montserrat font-bold text-[20px] mb-2">{item.title}</p>
                    <p className="text-[#121212] font-roboto font-bold text-[17px] mb-8 dark:text-[#FFFFFF]">{item.description}</p>
                </div>
            ))
            }</div>
            <div className='bg-[#121212] rounded-3xl w-[50%] flex flex-col justify-center '>
              {
                skills.techskills.map( (item, index) => (
                  <div key={index} className='mb-5 text-center'>
                    <h3 className='font-inter font-black text-[17px] text-[#FFFFFF] mb-4'>{item.nombre}</h3>
                    <div className='grid grid-cols-5 gap-6 justify-items-center w-full'>
                      {
                        item.herramientas.map( (item, index) => (
                          <div key={index} className='flex flex-col items-center'>
                            <img src={item.imagen} alt="" className='w-auto h-10'/>
                            <p className="text-[#E0E0E0] font-roboto font-bold text-[15px] mt-2 text-center">{item.herramienta}</p>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
        <div className="mt-[2%]">
        <img
    src={downArrowLight} 
    alt="Flecha"
    className="h-7 w-7 animate-subir-bajar mb-[20%] dark:hidden"
  />
  <img
    src={downArrow}
    alt="Flecha"
    className="h-7 w-7 animate-subir-bajar mb-[20%] hidden dark:block"
  />
    </div>
    </div>
  )
}

export default Skills