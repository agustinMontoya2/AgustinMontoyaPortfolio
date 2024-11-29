import aboutMe from "../../helpers/AboutMe.json"
import downArrow from "../../assets/down-arrow.png"
import downArrowLight from "../../assets/down-arrowLight.png"
function AboutMe() {
  return (

    <div className="h-screen w-full bg-[#E0E0E0] flex items-center flex-col dark:bg-[#343434]">
        <h2 className="text-[44px] font-extrabold text-[#121212] font-montserrat mt-24 dark:text-[#FFFFFF]">Un poco sobre mi</h2>
        <div className="w-4/6 flex flex-col justify-center h-4/6">
            {
            aboutMe.map( (item, index) => (
                <div key={index}>
                    <p className="text-[#FFB800] font-montserrat font-bold text-[20px] mt-12">{item.titulo}</p>
                    <p className="text-[#606060] font-roboto font-bold text-[18px] mt-2 dark:text-[#e0e0e0] animate-slide-right-to-left">{item.contenido}</p>
                </div>
            ))
            }
        </div>
        <div className="mt-[7%]">
        
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

export default AboutMe


