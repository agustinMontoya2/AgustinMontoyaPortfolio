import { useEffect, useState } from "react";
import proyects from "../../helpers/proyects.json"
import downArrow from "../../assets/down-arrow.png"
import downArrowLight from "../../assets/down-arrowLight.png"
import rightArrow from "../../assets/rightArrow.svg"
import leftArrow from "../../assets/leftArrow.svg"
function Proyects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % proyects.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? proyects.length - 1 : prevIndex - 1
      );
    };
    const handleDotClick = (index: number) => {
      setCurrentIndex(index);
    };

    useEffect(() => {
      const intervalId = setInterval(() => {
        handleNext();
      }, 17000); // 5000 milisegundos = 5 segundos
  
      // Limpiar el intervalo cuando el componente se desmonte
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="h-screen w-full bg-[#FFFFFF] flex items-center justify-center flex-col dark:bg-[#121212]">
        <h2 className="text-[34px] sm:text-[44px] font-extrabold text-[#121212] font-montserrat mt-12 dark:text-[#FFFFFF]">
          Mis proyectos
        </h2>
        <div className="px-8 w-5/6 sm:w-4/6 h-5/6 bg-[#E0E0E0] mt-32 rounded-3xl flex flex-row items-center justify-center dark:bg-[#343434]">

          <button
              onClick={handlePrev}
              className=""
            >
              <img src={leftArrow} alt="" className="w-36"/>
            </button>
            <a href={proyects[currentIndex].link} target="_blank">
          <div key={proyects[currentIndex].id} className="flex items-center justify-evenly flex-col-reverse w-full ">
            <div className="flex flex-col items-center w-full ms:w-1/3">
              <p className="font-inter font-extrabold text-[16px] text-[#606060] dark:text-[#E0E0E0]">
                {proyects[currentIndex].titulo}
              </p>
              <p className="font-inter font-extrabold text-[16px] text-[#707070] mt-3 dark:text-[#B0B0B0]">
                {proyects[currentIndex].fecha}
              </p>
              <p className="font-inter font-extrabold text-[16px] text-[#121212] mt-3 text-center dark:text-[#FFFFFF]">
                {proyects[currentIndex].descripcion}
              </p>
  
              <div className="flex flex-wrap mt-6 space-x-1 sm:space-x-6">
                {proyects[currentIndex].tecnologias.map((item, index) => (
                  <img src={item.icono} alt="" className="h-10 w-10" key={index} />
                ))}
              </div>
            </div>
            <img
              src={proyects[currentIndex].imagen}
              alt={proyects[currentIndex].titulo}
              className="h-40 w-80 rounded-xl hidden sm:block"
            />
          </div>
  </a>
          {/* Controles del carrusel */}
            
            <button
              onClick={handleNext}
              className=""
            >
              <img src={rightArrow} alt="" className="w-20"/>
            </button>
            
          </div>
          <div className="flex justify-center mt-4 mb-4">
  {proyects.map((_, index) => (
    <div
      key={index}
      className={`h-3 w-3 rounded-full mx-2 cursor-pointer transition-all ${
        index === currentIndex ? 'bg-[#FFB800]' : 'bg-[#606060]'
      }`}
      onClick={() => handleDotClick(index)} // Permite cambiar al proyecto correspondiente
    ></div>
  ))}
</div>
          <div className="">
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
    );
  }

export default Proyects